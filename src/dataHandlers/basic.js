export default class Handler {
    constructor(){
        this.__ = {
            d: {
                option: { 
                    bindTo: "#chart",
                    size: {
                    }
                },
                data: {

                }
            }
        };

        this.init();
    }

    d(){
        return this.__.d;
    }

    computeRenderObject(data, option){
        let d = this.d();

        d.option.size = this.processSize(option.size);
    }

    processSize(size){
       
        return {
            dirty: true,
            width: size.width(),
            height: size.height()
        }
    }
}
