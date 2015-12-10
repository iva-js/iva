import {option} from "./utils";

import DefaultHandler from "./dataHandlers/default";

import SvgRenderer from "./renderers/svg/index.js";

export default class Chart {
    constructor(dataObject, optionObject){

        this.initDataObject(dataObject);
        this.initOptionObject(optionObject);

        this.initHandler();
        this.initRenderer();
    }

    redraw(){
        this.renderer.redraw();
    }

    initDataObject(dataObject){
        this.data = option(dataObject, {});
    }

    initOptionObject(optionObject){
        this.option = option(optionObject, {});
    }

    initHandler(){
        let handler = option(this.option.handler, "column");

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
            this.handler = new DefaultHandler(this);
        } else {
            throw new Error("Uknown type of handler: " + hanlder);
        }
    }

    initRenderer(){
        let renderer = option(this.option.renderer, "default");

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
}
