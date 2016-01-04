import {option, isUndefined} from "../utils";

/*
 * The render object is passed to renderers whenever chart.redraw is called.
 * Is has no "private" fields because it is basicly just the representation of the rendered chart in code and no private info is needed.
 */
export default class RenderObject {
    /*
     * Init main fields that are required.
     */
    constructor(){

        this.data = {
            rectangular: {},
            circular: {}
        };

        this.option = {};

        this.clear();
    }

    clear(){
        this.clearData();
        this.clearOption();

        return this;
    }

    clearData(){
        this.clearRectangularData();
        this.clearCircularData();

        return this;
    }

    clearOption(){
        this.option = this.getDefaultOption();

        return this;
    }

    clearRectangularData(except){
        except = option(except, {});

        let types = ["areas", "bars", "lines"];

        types.forEach(type => {
            if(isUndefined(except[type])){
                this.data.rectangular[type] = this.getDefaultStore();
            }
        });

        return this;
    }

    clearCircularData(except){
        except = option(except, {});

        let types = ["pies", "disks"];

        types.forEach(type => {
            if(isUndefined(except[type])){
                this.data.circular[type] = this.getDefaultStore();
            }
        });

        return this;
    }

    getDefaultOption(){
        return {
            bindTo: "",
            size: {},
            axes: {
                x: {},
                y: {}
            }
        };
    }

    getDefaultStore(){
        return {
            dirty: true,
            values: []
        };
    }

}
