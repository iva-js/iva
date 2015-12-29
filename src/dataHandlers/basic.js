
import RenderObject from "../renderObject/renderObject";

import {isUndefined, isString} from "../utils";

export default class Handler {
    constructor(){
        this.__ = {
            d: new RenderObject()
        };

        this.init();
    }

    init(){}

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

    computeRanges(table){
        let xMin, xMax, yMin, yMax;
        let xStrings = [];

        table.values.forEach(column => {
            column.values.forEach(value => {
                if(isUndefined(xMin) || value.x < xMin){
                    xMin = value.x;
                }
                if(isUndefined(xMax) || value.x > xMax){
                    xMax = value.x;
                }               
                if(isUndefined(yMin) || value.y < yMin){
                    yMin = value.y;
                }
                if(isUndefined(yMax) || value.y > yMax){
                    yMax = value.y;
                } 
            });

        });

        if(this.hasStringXIn(table)){
            for (let column of table.values) {
                for (let value of column.values) {
                    // Convert all x to strings
                    xStrings.push("" + value.x);
                }
            }
        }

        return {
            xMin,
            xMax,
            yMin,
            yMax,
            xStrings
        };
    }

    hasStringXIn(table){
        for(let column of table.values){
            for(let value of column.values){
                if(isString(value.x)){
                    return true;
                }
            }
        }

        return false;
    }

}
