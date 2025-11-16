# Real-Time Edge Detection Viewer 🔥

**Real-Time Edge Detection Viewer** is a lightweight Android application that captures camera frames in real time, processes them in native C++ (NDK) using OpenCV, and displays processed frames immediately. This repository focuses on performance, readability, and a modular architecture.

---

## Table of contents
- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Project structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting started (quick)](#getting-started-quick)
- [Development Notes](#development-notes)
- [Contributions](#contributions)
- [License](#license)
- [Author](#author)

---

## Overview
This app demonstrates a performant mobile computer vision pipeline:
- CameraX for camera I/O.
- Kotlin for UI and lifecycle management.
- JNI bridge to native C++ code.
- C++ (OpenCV) for real-time edge detection (Canny / Sobel / Laplacian).
- CMake + NDK for native build.

The code is written to be easy to extend: swap algorithms, add GPU acceleration later, or integrate model-based vision features.

---

## Features
- Live camera preview with real-time edge overlay
- Native C++ image pipeline (fast, low-latency)
- Switchable edge filters (Canny, Sobel, Laplacian)
- Modular codebase: UI / camera / JNI / native processing
- Minimal permissions and small APK footprint

---

## Architecture
1. **Kotlin (MainActivity)**  
   - Initializes CameraX, previews frames, and sends frames to native code.
2. **JNI (NativeLib.kt + jni bridge)**  
   - Converts Android frame buffers to formats accepted by native code and calls native functions.
3. **C++ (native-lib.cpp)**  
   - Uses OpenCV to process frames and returns a processed buffer.
4. **Rendering**  
   - Processed frames are rendered to a `TextureView` / `SurfaceView` or `ImageView`.

---

## Project structure

```
RT_Edge_Viewer/
├── app/
│ ├── src/main/
│ │ ├── java/com/yourorg/rt_edge_viewer/
│ │ │ ├── MainActivity.kt
│ │ │ ├── NativeLib.kt
│ │ ├── cpp/
│ │ │ ├── CMakeLists.txt
│ │ │ ├── native-lib.cpp
│ │ │ ├── native-lib.h
│ │ ├── res/
│ │ │ ├── layout/activity_main.xml
│ │ ├── AndroidManifest.xml
├── README.md
└── LICENSE
```


---

## Prerequisites
- Android Studio (latest stable)
- Android SDK (API 24+ recommended)
- Android NDK (r23+ recommended)
- CMake (bundled with Android Studio or via SDK manager)
- OpenCV Android SDK (4.x)
- A physical Android device or emulator with camera support
- Git

---

## Getting started (quick)
1. Clone:
   ```bash
   git clone https://github.com/your-username/RT_Edge_Viewer.git
   cd RT_Edge_Viewer
   ```
2. Open project in Android Studio.
3. Install required SDK / NDK packages via SDK Manager.
4. Place OpenCV-android-sdk into app/libs/ or configure CMake to point to it.
5. Connect device, enable USB debugging.
6. Run the app module.

---

## ⚙️ Development Notes

This project is not yet feature-complete. Several modules are planned for future releases, including advanced processing modes and UI improvements.

## 🔧 Contributions

Pull requests, optimizations, and refactoring contributions are welcome.  
Please ensure your code follows clean structure and includes relevant comments.

---

## License
- This project is released under the MIT License

---

## Author

Shailja Mishra

Focusing on building practical computer vision projects and deploying them to mobile.
