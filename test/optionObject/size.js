import {expect} from "chai";

import OptionObject from "../../src/optionObject/optionObject";
import Size from "../../src/optionObject/size";

describe("Size", ()=>{
    let size;
    let d = {
        width: 1000,
        height: 1000
    };

    let optionObject = new OptionObject();
    
    beforeEach(()=>{
        size = new Size(d, optionObject);
    });

    describe("constructor", ()=>{
        it("should set default when provided", ()=>{
            size = new Size({ def: true }, optionObject);
            let def = size.getDefault();

            expect(size.width()).to.equal(def.width);
            expect(size.height()).to.equal(def.height);
        });

        it("should set values when provided", ()=>{
            size = new Size({ width: 200, height: 100 }, optionObject);

            expect(size.width()).to.equal(200);
            expect(size.height()).to.equal(100);
        });
    });

    describe("sizes", ()=>{
        it("should get sizes", ()=>{
            let sizes = size.sizes();
            expect(sizes.width).to.equal(d.width);
            expect(sizes.height).to.equal(d.height);
        });

        it("should set sizes", ()=>{
            size.sizes({ width: 500 });

            expect(size.width()).to.equal(500);
            expect(size.height()).to.equal(1000);

            size.sizes({ height: 500 });
            
            expect(size.height()).to.equal(500);

            size.sizes({ width: 750, height: 250 });

            expect(size.width()).to.equal(750);
            expect(size.height()).to.equal(250);
        });
    });

    describe("width", ()=>{
        it("should get width", ()=>{
            expect(size.width()).to.equal(d.width);
        });

        it("should set width", ()=>{
            size.width(750);
            expect(size.width()).to.equal(750);
        });
    });

    describe("height", ()=>{
        it("should get height", ()=>{
            expect(size.height()).to.equal(d.height);
        });

        it("should set height", ()=>{
            size.height(750);
            expect(size.height()).to.equal(750);
        });
    });

    describe("default", ()=>{
        it("should set default values", ()=>{
            size.setDefault();
            let def = size.getDefault();

            expect(size.width()).to.equal(def.width);
            expect(size.height()).to.equal(def.height);
        });
    });
});
