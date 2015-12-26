import {option} from "./utils";

import ColumnHandler from "./dataHandlers/column";
import LineHandler from "./dataHandlers/line";
import AreaHandler from "./dataHandlers/area";
import PieHandler from "./dataHandlers/pie";

import DefaultBuffer from "./buffers/default";
import InstantBuffer from "./buffers/instant";

import SvgRenderer from "./renderers/svg/index";

import OptionObject from "./optionObject/optionObject";
import DataObject from "./dataObject/dataObject";

export default class Chart {
    constructor(dataObject, optionObject){

        this.setBuffer(optionObject.buffer);

        this.initDataObject(dataObject);
        this.initOptionObject(optionObject);

        this.setHandler(this.option.handler);
        this.setRenderer(this.option.renderer);
    }

    redraw(){
        let renderObject = this.handler.computeRenderObject(this.data, this.option);
        this.renderer.redraw(renderObject);
    }

    initDataObject(dataObject){
        this.data = option(dataObject, new DataObject({}, this.buffer));
    }

    initOptionObject(optionObject){
        this.option = option(optionObject, new OptionObject({}, this.buffer));
    }

    setHandler(handler){
        handler = option(handler, "line");

        if(typeof handler === "function"){
            this.handler = new handler(this);
        } else if(typeof handler === "object") {
            this.handler = handler;
        } else {
            this.setHandlerByName(handler);
        }
    }

    setHandlerByName(handler){
        if(handler === "column"){
            this.handler = new ColumnHandler(this);
        } else if(handler === "line"){
            this.handler = new LineHandler(this);
        } else if(handler === "area"){
            this.handler = new AreaHandler(this);
        } else if(handler === "pie"){
            this.handler = new PieHandler(this);
        } else {
            throw new Error("Uknown type of handler: " + hanlder);
        }
    }

    setRenderer(renderer){
        renderer = option(renderer, "default");

        if(typeof renderer === "function"){
            this.renderer = new renderer(this); 
        } else if(typeof renderer === "object") {
            this.renderer = renderer;
        } else {
            this.setRendererByName(renderer);
        }
    }

    setRendererByName(renderer){
        if(renderer === "default"){
            this.renderer = new SvgRenderer(this);
        } else {
            throw new Error("Uknown type of renderer: " + renderer);
        }
    }

    setBuffer(buffer){
        buffer = option(buffer, "default");

        if(typeof buffer === "function"){
            this.buffer = new buffer(this);
        } else if(typeof buffer === "object"){
            this.buffer = buffer;
        } else {
            this.setBufferByName(buffer);
        }
    }

    setBufferByName(buffer){
        if(buffer === "default"){
            this.buffer = new DefaultBuffer(this);
        } else if(buffer === "instant"){
            this.buffer = new InstantBuffer(this);
        }else {
            throw new Error("Uknown type of buffer: " + buffer);
        }
    }
}
