
/*
 * The render object is passed to renderers whenever chart.redraw is called.
 * Is has no "private" fields because it is basicly just the representation of the rendered chart in code and no private info is needed.
 */
export default class RenderObject {
    /*
     * Init main fields that are required.
     */
    constructor(){
        this.clear();
    }

    clear(){
        this.clearData();
        this.clearOption();
    }

    clearData(){
        this.data = this.getDefaultData();
    }

    clearOption(){
        this.option = this.getDefaultOption();
    }

    getDefaultData(){
        return {
            rectangular: {},
            circular: {}
        };
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

}
