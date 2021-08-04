/* 
  Ideally , init.js would contain all the fluffy stuff like google analytics etc.. 
  which just runs in the browser and interacts with the tirdparty or browser api.

  In this case I will be using it to initialize the timer which decides a new activity for the FOX.
*/
import gameState from "./gameState";

const TICK_RATE = 5000;

async function init() {

    let nexttimeToTick = Date.now();

    function nextAnimationFrame() {

        const now = Date.now();
        if (nexttimeToTick <= now) {
            gameState.tick();
            nexttimeToTick = now + TICK_RATE;
        }

        requestAnimationFrame(nextAnimationFrame);
    }

    nextAnimationFrame();

}

init();
