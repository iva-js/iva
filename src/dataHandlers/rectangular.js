
import Handler from "./basic";

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

}
