class Facade {
    constructor () {
        this.log("Facade class created");
    }

    log (text) {
        console.log(text);
    }

    erase () {
        console.log('usuwam');
    }
}

var facade = new Facade();
facade.log("aaa");
facade.erase();