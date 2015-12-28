
import {expect} from "chai";

import BasicHandler from "../../src/dataHandlers/basic";

import FakeParent from "../fake/parent";

describe("Handler", () => {

    let handler, data;

    beforeEach(()=>{
        handler = new BasicHandler();
    });

    describe("computeMinMax", ()=>{
        it("should find minimum and maximum of numbers", ()=>{
            let data = {
                values: [
                    {
                        values:  [{ x: 5, y: 30 }, { x: 6, y: -10 } ],
                    }, {
                        values: [ { x: -10, y: 10 }, { x: 0, y: 50 } ]
                    }
                ]
            };

            let ranges = handler.computeMinMax(data);

            expect(ranges.xMin).to.equal(-10);
            expect(ranges.xMax).to.equal(6);
            expect(ranges.yMin).to.equal(-10);
            expect(ranges.yMax).to.equal(50);
        });
    });
});
