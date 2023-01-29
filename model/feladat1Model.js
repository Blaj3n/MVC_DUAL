class Feladat1Model {
    #modeladat;
    constructor() {
        this.#modeladat = 22;
    }

    //mivel védett adattag kell hozzá getter
    getModelAdat() {
        //mindenféle bonyi műveletek az adaton
        this.#modeladat *= 2;
        return this.#modeladat;
    }
}

export default Feladat1Model;