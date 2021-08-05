const gameState = {

    current: "INIT",
    clock: 1,
    wakeTime: -1,
    tick() {
        this.clock++;
        if (this.clock === this.wakeTime) {
            this.wake();
        }
        console.log(this.clock);
        return this.clock;
    },
    startGame() {
        console.log("hatching");
        this.current = "HATCHING";
        this.wakeTime = this.clock + 3;
    },
    wake() {
        console.log("awoken");
        this.current = "IDLING";
        this.wakeTime = -1;
    },
    handleUserAction(icon) {
        if (["SLEEP", "FEEDING", "HATCHING", "CELEBRATING"].includes(this.current)) {
            return;
        }

        if (this.current === "INIT" || this.current === "DEAD") {
            this.startGame();
            return;
        }

        switch (icon) {
            case "weather":
                this.changeWeather();
                break;
            case "poop":
                this.cleanupPoop();
                break;
            case "feed":
                this.feed();
                break;
        }
    },
    changeWeather() {
        console.log("change weather");
    },
    cleanupPoop() {
        console.log("CLEAN UP POOP");
    },
    feed() {
        console.log("FEEDING");
    }
}

export const handleUserAction = gameState.handleUserAction.bind(gameState);
export default gameState;
