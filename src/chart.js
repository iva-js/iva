import {option, isDefined, isUndefined} from "./utils";

import BarHandler from "./dataHandlers/bar";
import LineHandler from "./dataHandlers/line";
import AreaHandler from "./dataHandlers/area";
import PieHandler from "./dataHandlers/pie";

import DefaultBuffer from "./buffers/default";
import InstantBuffer from "./buffers/instant";

import SvgRenderer from "./renderers/svg/svg";
import WebglRenderer from "./renderers/webgl/webgl";

import OptionObject from "./optionObject/optionObject";
import DataObject from "./dataObject/dataObject";

export default class Chart {
    constructor(d){

        let dataObject = d.dataObject;
        let optionObject = d.optionObject;
        let buffer = d.buffer;

        this.bindTo(d.bindTo);

        this.setBuffer(buffer);

        this.initDataObject(dataObject);
        this.initOptionObject(optionObject);

        this.setHandler(this.option.handler);
        this.setRenderer(this.option.renderer);

        this.endInit();
    }

    redraw(){
        let renderObject = this.handler.computeRenderObject(this.data, this.option);
        this.renderer.bindTo(this.bindTo());
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

        if(this.renderer){
            this.redraw();
        }
    }

    setHandlerByName(handler){
        if(handler === "bar"){
            this.handler = new BarHandler(this);
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
            this.renderer = new renderer(this.bindTo()); 
        } else if(typeof renderer === "object") {
            this.renderer = renderer;
        } else {
            this.setRendererByName(renderer);
        }
    }

    setRendererByName(renderer){
        if(renderer === "default"){
            this.renderer = new SvgRenderer(this.bindTo());
        } else if(renderer === "webgl"){
            this.renderer = new WebglRenderer(this.bindTo());
        } else {
            throw new Error("Uknown type of renderer: " + renderer);
        }
    }

    setBuffer(buffer){

        if(isDefined(this.buffer)){
            this.buffer.unregisterChart(this);
        }

        buffer = option(buffer, "default");

        if(typeof buffer === "function"){
            this.buffer = new buffer(this);
        } else if(typeof buffer === "object"){
            this.buffer = buffer;
        } else {
            this.setBufferByName(buffer);
        }

        this.buffer.registerChart(this);
        this.buffer.frozen(true);

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

    bindTo(bindTo){
        if(isUndefined(bindTo)){
            return this.__bindTo;
        }

        this.__bindTo = bindTo;
    }

    endInit(){
        
        this.buffer.frozen(false);
        this.buffer.dirty(true);

    }

}
