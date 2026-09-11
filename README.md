# Connect Four AI 🔴🟡

An interactive, high-performance web game of Connect Four powered by a deep reinforcement learning neural network running **100% client-side** in your browser.

🎮 **[Play the Live Game Here](https://pnowell.github.io/ConnectFour/)**

---

## 🌟 Overview

Challenge a neural network trained through deep reinforcement learning self-play. The AI engine evaluates board positions and computes real-time win probabilities across all seven columns using in-browser WebAssembly (WASM) neural inference with zero backend or server requirements.

---

## ✨ Features

- **🧠 Deep Reinforcement Learning AI**:
  - Powered by a residual convolutional neural network (ResNet) trained on self-play reinforcement learning.
  - In-browser neural inference powered by **ONNX Runtime Web (WASM)**.
- **🎮 Multiple Game Modes**:
  - **Player vs AI**: Test your tactical skills against the model.
  - **AI vs AI**: Spectator mode with independent difficulty settings for Red and Yellow.
  - **Pass & Play**: Local two-player mode on the same device.
- **🎯 4 Difficulty Tiers**:
  - **Master**: Plays optimal moves strictly maximizing the network's evaluated Q-values.
  - **Expert**: High-level competitive play with minimal exploration.
  - **Intermediate**: Strong play with occasional human-like tactical blunders.
  - **Novice**: Accessible play allowing casual matches.
- **📊 Real-Time AI Telemetry & Evaluations**:
  - Optional toggle to inspect live Q-values, move probabilities, and best-move highlights for every column.
- **🕹️ Tactile Board Aesthetics**:
  - Multi-layer physical board model with circular hole cutouts.
  - Dynamic hovering checker peeking into the top entry slot.
  - Full-column gravity drop animations with bounce physics for both human and AI plays.
  - Elongated glowing capsule highlight tracking winning connections across horizontal, vertical, and diagonal lines.

---

## 🚀 How to Play

1. Visit **[https://pnowell.github.io/ConnectFour/](https://pnowell.github.io/ConnectFour/)**.
2. Hover your mouse over any column to aim your checker.
3. Click to drop your piece into the column.
4. Connect four checkers of your color horizontally, vertically, or diagonally to win!
5. Click the **Gear icon** (`⚙️`) in the top navigation to customize:
   - Game mode (vs AI, AI vs AI, Pass & Play)
   - Player colors & AI difficulty levels
   - Real-time Q-value analysis display

---

## 🛠️ Technology Stack

- **Frontend**: HTML5, Vanilla CSS3 (custom dark glassmorphism design system), TypeScript
- **Inference Engine**: [ONNX Runtime Web](https://github.com/microsoft/onnxruntime) (WebAssembly SIMD)
- **Deployment**: GitHub Pages (static client-side bundle)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
