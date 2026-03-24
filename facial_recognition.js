const video = document.getElementById("video");
let camOn = false;

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
    faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
    faceapi.nets.faceExpressionNet.loadFromUri("/models"),
]).then(startCam);

function startCam() {
    if (navigator.mediaDevices?.getUserMedia) {
        navigator.mediaDevices
            .getUserMedia({ video: true })
            .then((stream) => {
                video.srcObject = stream;
            })
            .catch((error) => {
                console.error("Something went wrong!", error);
            });
    } else {
        console.log("getUserMedia not supported on your browser!");
    }
}

function stopCam() {
    const stream = video.srcObject;
    if (!stream) return;

    // stop camera
    stream.getTracks().forEach((track) => track.stop());
    video.srcObject = null;
    camOn = false;

    // stop detection loop
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }

    // remove canvas (cleanest solution)
    if (canvas) {
        canvas.remove();
        canvas = null;
    }
}

document.querySelector(".btn-start").addEventListener("click", startCam);
document.querySelector(".btn-stop").addEventListener("click", stopCam);

let intervalId = null;
let canvas = null;

video.addEventListener("play", () => {
    camOn = true;

    if (canvas) canvas.remove();

    canvas = faceapi.createCanvasFromMedia(video);
    document.querySelector(".video-window").append(canvas);

    const displaySize = {
        width: video.offsetWidth,
        height: video.offsetHeight,
    };

    faceapi.matchDimensions(canvas, displaySize);

    intervalId = setInterval(async () => {
        if (!camOn) return;

        const detections = await faceapi
            .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceExpressions();

        const resized = faceapi.resizeResults(detections, displaySize);

        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        faceapi.draw.drawDetections(canvas, resized);
        faceapi.draw.drawFaceLandmarks(canvas, resized);
        faceapi.draw.drawFaceExpressions(canvas, resized);
    }, 0);
});
