//@ts-check

/** @type {HTMLCanvasElement} */
//@ts-ignore canvas is an HTMLCanvasElement
export const canvas = document.getElementById("game-canvas");

/** @type {CanvasRenderingContext2D} */
//@ts-ignore ctx is a CanvasRenderingContext2D object
export const ctx = canvas.getContext("2d");
