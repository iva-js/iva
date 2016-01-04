
import Handler from "./basic";

import {isDefined, isUndefined} from "../utils";

/*
 * Rectangular chart is the father of column, line, area and other charts, that are painted on rectangular canvas.
 * It has right-angled axes and grids.
 */
export default class RectangularHandler extends Handler {

    computeRenderObject(data, option){
        super.computeRenderObject(data, option);

        let d = this.d();

        d.option.axes = this.processAxis(option.axes);
    }

    processAxis(axes){
        let d = {
            x: {
                dirty: true,
            },
            y: {
                dirty: true,
            },
            dirty: true
        };

        d.x.visible = axes.x.visible();
        d.y.visible = axes.y.visible();

        return d;

    }

    processValue(value, x){
        let v = {};

        if(isDefined(x)){
            v.x = x;
        }
        if(isDefined(value.y)){
            v.y = value.y;
        }
        if(isDefined(value.color)){
            v.color = value.color;
        }
        if(isDefined(value.label)){
            v.label = value.label;
        }

        return v;
    }

    setY0(sequences, yMin){
        for (let sequence of sequences.values) {
            for (let value of sequence.values) {
                if(isUndefined(value.y0)){
                    value.y0 = yMin;
                }
            }

        }

        return sequences;
    }

}
