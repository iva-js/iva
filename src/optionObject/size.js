
import Obj from "../object";

export default class Size extends Obj {
    constructor(d, parent){
        super(d, parent);

        this.sizes(d);
    }

    __init(d, parent){
        this.__ = {
            parent: parent
        }
    }

    sizes(d){
        let __ = this.__;

        if(d === undefined){
            return __;
        }

        if(d.def === true){
            this.setDefault();
        } else {
            this.width(d.width);
            this.height(d.height);
        }
    }

    width(width){
        let __ = this.__;
        if(width === undefined){
            return __.width;
        }

        __.width = width;
        this.dirty(true);
    }

    height(height){
        let __ = this.__;
        if(height === undefined){
            return __.height;
        }

        __.height = height;
        this.dirty(true);
    }

    setDefault(){
        this.sizes(this.getDefault());
    }

    getDefault(){
        return {
            width: 800,
            height: 600
        }
    }


}
