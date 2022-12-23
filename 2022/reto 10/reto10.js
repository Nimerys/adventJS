let heights = [1, 3, 8, 5, 2];
checkJump(heights) // true

function checkJump(heights) {
    let max = heights.indexOf(Math.max(...heights));
    const up = heights.splice(0, max);
    const down = heights;
    let isUp = up.slice(1).every((element, index) => element >= up[index]);
    let isDown = down.slice(1).every((element, index) => element <= down[index]);
    return isUp && isDown && up.length != 0 && down.length > 1
}