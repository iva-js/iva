
import RenderObject from "../renderObject/renderObject";
import {isUndefined, isDefined, isString} from "../utils";

import {debug} from "../utils";

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
        d.option.easel = option.easel();
        d.option.legend = option.legend.options();
        d.option.mode = option.mode();
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
                if(isDefined(value.y0) && value.y0 < yMin){
                    yMin = value.y0;
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

    /*
     * Stacks all data, so every sequence is stacked above the previous one.
     * Changes input instead of copying for time saving.
     */
    stack(data){

        let stacked = new Map();

        for(let i = 0; i < data.values.length; i++){
            for(let j = 0; j < data.values[i].values.length; j++){
                let value = data.values[i].values[j];

                if(!stacked.has(value.x)){
                    stacked.set(value.x, 0);
                }

                let padding = stacked.get(value.x);

                value.y0 = padding;
                value.y += padding;

                stacked.set(value.x, value.y);

            }
        }

        return data;
    }

    /*
     * Normalizes all data, so every row sums up to 1.
     * Handles all zeros in one row by equally splitting row between all sequences.
     * Changes input instead of copying for time saving.
     */
    normalize(data){
        let sums = new Map();
        let numberOf = new Map();
        
        for (let column of data.values) {
            for (let value of column.values) {

                if(value.y < 0){
                    throw new Error("Y can't be below zero in the normalized chart");
                }

                if(sums.has(value.x)){
                    sums.set(value.x, sums.get(value.x) + value.y);
                    numberOf.set(value.x, numberOf.get(value.x) + 1);
                } else {
                    sums.set(value.x, value.y);
                    numberOf.set(value.x, 1);
                }
            }
        }

        for (let column of data.values) {
            for (let value of column.values) {
                let sum = sums.get(value.x);
                if(sum === 0){
                    value.y = 1 / numberOf.get(value.x);
                } else {
                    value.y /= sums.get(value.x);
                }
            }
        }

        return this.stack(data);

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

    ids(sequences){
        let ret = [];

        for(let sequence of sequences.values){
            ret.push(sequence.id);
        }

        return ret;
    }

    turnToRows(sequences){
        let ret = {
            values: []
        };

        function findByX(x){
            for(let v of ret.values){
                if(v.x === x){
                    return v;
                }
            }
        }

        for(let sequence of sequences.values){
            for(let value of sequence.values){
                let obj = findByX(value.x);
                if(isUndefined(obj)){
                    ret.values.push({
                        x: value.x,
                        values: []
                    });

                    obj = ret.values[ret.values.length-1];
                }

                obj.values.push({
                    id: sequence.id,
                    y: value.y,
                    y0: value.y0
                });
            }
        }

        return ret;
    }

}
