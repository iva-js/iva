
import RenderObject from "../renderObject/renderObject";

export default class Handler {
    constructor(){
        this.__ = {
            d: new RenderObject()
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
