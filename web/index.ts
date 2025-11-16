let fpsElement = document.getElementById("fps") as HTMLElement;
let lastFrameTime = performance.now();
let frames = 0;
let fps = 0;

function updateFPS() {
  const now = performance.now();
  frames++;

  if (now - lastFrameTime >= 1000) {
    fps = frames;
    frames = 0;
    lastFrameTime = now;
    fpsElement.textContent = `FPS: ${fps}`;
  }

  requestAnimationFrame(updateFPS);
}

updateFPS();
