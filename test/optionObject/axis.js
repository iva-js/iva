
import {expect} from "chai";

import Axis from "../../src/optionObject/axis";

import FakeParent from "../fake/parent";

describe("axis", ()=>{
    let axis;
    beforeEach(()=>{
        axis = new Axis({}, new FakeParent());
    });

    describe("both", ()=>{
        it("should show both", ()=>{
            axis.both.show();

            expect(axis.x.visible()).to.equal(true);
            expect(axis.y.visible()).to.equal(true);
        });

        it("should hide both", ()=>{
            axis.both.hide();

            expect(axis.x.visible()).to.equal(false);
            expect(axis.y.visible()).to.equal(false);
        });

    });
});
