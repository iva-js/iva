
import {isDefined, debug} from "../utils";

/**
 * Class used for managing redraws.
 * Basic buffer doesn't do anything except marking itself as dirty
 */
export default class DefaultBuffer {
    constructor(chart){
        this.__init();
        this.registerChart(chart);
    }

    __init(){
        this.__ = {
            dirty: false,
            freeze: false,
            charts: []
        }
    }

    dirty(dirty){
        let __ = this.__;
        if(dirty === undefined){
            return __.dirty;
        }
        __.dirty = dirty;

        if(!this.freeze()){
            this.actOnDirty(dirty);
        }
    }

    registerChart(chart){
        if(isDefined(chart)){
            let charts = this.__.charts;

            if(charts.indexOf(chart) === -1){
                charts.push(chart);
            }
        }
    }

    unregisterChart(chart){
        let charts = this.__.charts;
        for(let i = 0; i < charts.length; i++){
            if(chart === charts[i]){
                charts.splice(i, 1);
            }
        }
    }

    sendRedraw(){
        this.__.charts.forEach(chart => {
            chart.redraw()
        });
    }

    /**
     * If frozen, buffer won't activate actOnDirty.
     * This is needed for chart initialization when 'dirty' happens all the time
     * but we don't need to redraw when initializing.
     */
    freeze(freeze){
        let __ = this.__;

        if(freeze === undefined){
            return __.freeze;
        }

        __.freeze = freeze;
    }

    // Don't do anything
    actOnDirty(dirty){}
}
