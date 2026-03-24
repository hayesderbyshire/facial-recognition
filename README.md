# Facial Recognition Web App

A lightweight facial recognition web app built with **Vanilla JavaScript** and **face-api.js**. This application uses your webcam to detect faces in real-time directly in the browser.

---

## 🚀 Features

- Real-time face detection  
- Start/stop webcam controls  
- Facial landmark detection  
- Expression recognition (optional)  
- No frameworks — built with pure JavaScript  

---

## 🧱 Tech Stack

- Vanilla JavaScript (ES6+)  
- face-api.js  
- HTML5 + CSS3  
- WebRTC (getUserMedia)  

---

## 📁 Project Structure
project-root/
│
├── face-api.min.js # Face API library
├── facial_recognition.js # Main app logic
├── index.html # Entry point
├── style.css # Styling
├── package.json # Project metadata
│
└── models/ # Pre-trained ML models
├── face_expression_model-shard1
├── face_expression_model-weights_manifest.json
├── face_landmark_68_model-shard1
├── face_landmark_68_model-weights_manifest.json
├── face_recognition_model-shard1
├── face_recognition_model-shard2
├── face_recognition_model-weights_manifest.json
├── tiny_face_detector_model-shard1
└── tiny_face_detector_model-weights_manifest.json


---

## 🧠 How It Works

This app runs entirely in the browser using face-api.js, which leverages pre-trained deep learning models.

Workflow:
1. Load models from `/models`  
2. Access webcam using `navigator.mediaDevices.getUserMedia`  
3. Detect faces in real-time  
4. Render detection boxes and landmarks on the screen  

---

## 🛠️ Setup & Run

### Using VS Code Live Server (Recommended)

1. Install the **Live Server** extension in VS Code  
2. Open the project folder  
3. Right-click `index.html`  
4. Click **"Open with Live Server"**  

---

## ⚠️ Important Notes

- Do **not** open `index.html` directly (`file://`)  
- A local server (like Live Server) is required for model loading  
- You must allow camera permissions in your browser  

---

## ▶️ Usage

1. Open the app in your browser  
2. Click **Start Cam**  
3. Allow camera access  
4. Face detection begins automatically  
5. Click **Stop Cam** to stop detection  

---

## 🔧 Future Improvements

- Face recognition for known users  
- Snapshot capture  
- UI enhancements  
- Performance optimizations  
- Backend integration  

---

## 📄 License

MIT
