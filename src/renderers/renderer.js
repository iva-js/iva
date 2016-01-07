
import RenderObject from "../renderObject/renderObject";

import {isUndefined} from "../utils";

export default class Renderer {
    constructor(bindTo){
        this.render = new RenderObject();
        this.bindTo(bindTo);
    }

    bindTo(bindTo){
        if(isUndefined(bindTo)){
            return this.__bindTo;
        }

        this.__bindTo = bindTo;
    }
}
