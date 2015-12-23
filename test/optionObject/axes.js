
import {expect} from "chai";

import Axes from "../../src/optionObject/axes";

import FakeParent from "../fake/parent";

describe("axes", ()=>{
    let axes;
    beforeEach(()=>{
        axes = new Axes({}, new FakeParent());
    });

    describe("both", ()=>{
        it("should show both", ()=>{
            axes.both.show();

            expect(axes.x.visible()).to.equal(true);
            expect(axes.y.visible()).to.equal(true);
        });

        it("should hide both", ()=>{
            axes.both.hide();

            expect(axes.x.visible()).to.equal(false);
            expect(axes.y.visible()).to.equal(false);
        });

    });
});
