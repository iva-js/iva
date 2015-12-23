
import Obj from "../object";
import {option, merge, isUndefined} from "../utils";

export default class Axes extends Obj {

    constructor(d, parent){
        d = option(d, {});
        
        super(d, parent);

        let x = option(d.x, {});
        let y = option(d.y, {});
        let both = option(d.both, {});

        this.x = new XAxis(merge(both, x), this);
        this.y = new YAxis(merge(both, y), this);
        this.both = new Both(this);
    }

}

class Axis extends Obj {
    constructor(d, parent){
        d = option(d, {});

        super(d, parent);

        this.setDefault();
        this.options(d);
    }

    options(d){
        this.visible(d.visible);
    }

    visible(visible){
        let __ = this.__;

        if(isUndefined(visible)){
            return __.visible;
        }

        __.visible = visible;
        this.dirty(true);
    }

    show(){
        this.visible(true);
    }

    hide(){
        this.visible(false);
    }

    setDefault(){
        this.options(this.getDefault());
    }

    getDefault(){
        return {
            visible: false
        };
    }

}

/*
 * This is kinda weird object that just calls both X and Y axis APIs (but first checks, if it is possible, so you can't
 * call both.position("right") and hope it will work, since horizontal axis can't be right or left.
 */

class Both {
    constructor(proxy){
        this.__ = {
            proxy: proxy
        };
    }

    show(){
        let proxy = this.__.proxy;
        proxy.x.show();
        proxy.y.show();
    }

    hide(){
        let proxy = this.__.proxy;
        proxy.x.hide();
        proxy.y.hide();
    }
}

class XAxis extends Axis {

}

class YAxis extends Axis {

}
