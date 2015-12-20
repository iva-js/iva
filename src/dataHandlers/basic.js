export default class Handler {
    constructor(){
        this.__ = {
            d: {
                bindTo: "#chart" 
            }
        };

        this.init();
    }

    d(){
        return this.__.d;
    }
}
