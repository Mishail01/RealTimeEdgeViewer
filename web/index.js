var fpsElement = document.getElementById("fps");
var lastFrameTime = performance.now();
var frames = 0;
var fps = 0;
function updateFPS() {
    var now = performance.now();
    frames++;
    if (now - lastFrameTime >= 1000) {
        fps = frames;
        frames = 0;
        lastFrameTime = now;
        fpsElement.textContent = "FPS: ".concat(fps);
    }
    requestAnimationFrame(updateFPS);
}
updateFPS();
