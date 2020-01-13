const annoyer = {
    phrases: ["ok, boomer", "totally", "literally", "OMG", "LOL", "STFU"],
    pickPhrase() {
        const { phrases } = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx];
    },
    start() {
        this.timerId = setInterval(() => {
            console.log(this.pickPhrase());
        }, 3000)
    },
    stop() {
        clearInterval(this.timerId);
        console.log("DONE");
    }
}