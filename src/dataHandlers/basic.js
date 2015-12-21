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

    processSize(size){
        let d = this.d();

        if(!size.dirty()){
            return;
        }

        d.option.size.width = size.width();
        d.option.size.height = size.height();

        d.option.size.dirty = true;
        
    }
}
