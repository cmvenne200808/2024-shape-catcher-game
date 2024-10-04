//@ts-check
import { canvas, ctx } from "./common/canvas.js";
import { Player } from "./player.js";
import { SimpleGoodItem } from "./collectables/good.js";

let player = new Player();

let item1 = new SimpleGoodItem(canvas.width / 2, canvas.height / 2);

let lastTimestamp = 0;

function gameLoop(timestamp) {
    let elapsedTime = timestamp - lastTimestamp;
    lastTimestamp = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.update();
    player.draw();

    item1.update(elapsedTime);
    item1.draw();

    window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);