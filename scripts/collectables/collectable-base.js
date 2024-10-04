//@ts-check
import { ctx } from "../common/canvas.js";
export class CollectableItem {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;

        this.width = 10;
        this.height = this.width;

        this.color = "hsla(200, 100%, 50%, 100%)";

        this.isCollectable =  true;
        this.isCollected = false;
        this.value = 0;
    }

    update(elapsedTime) {}

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

}