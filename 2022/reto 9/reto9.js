const leds = [0, 1, 1, 0, 1];
countTime(leds);
function countTime(leds) {
    let led = leds.join("").split("1");
    led[0] += led.pop();
    return Math.max(...led.map((light) => light.length)) * 7;
}

// Primero juntamos el array y le quitamos los 1 y luego contamos el numero mas alto