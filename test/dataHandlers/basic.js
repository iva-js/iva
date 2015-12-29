
import {expect} from "chai";

import BasicHandler from "../../src/dataHandlers/basic";

import FakeParent from "../fake/parent";

describe("Handler", () => {

    let handler, data;

    beforeEach(()=>{
        handler = new BasicHandler();
    });

    describe("computeRanges", ()=>{
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

            let ranges = handler.computeRanges(data);

            expect(ranges.xMin).to.equal(-10);
            expect(ranges.xMax).to.equal(6);
            expect(ranges.yMin).to.equal(-10);
            expect(ranges.yMax).to.equal(50);
        });

        it("should return xStrings if there is atleast one string", ()=>{
             let data = {
                values: [
                    {
                        values:  [{ x: 5, y: 30 }, { x: 6, y: -10 } ],
                    }, {
                        values: [ { x: -10, y: 10 }, { x: "hi", y: 50 } ]
                    }
                ]
            }; 

            let ranges = handler.computeRanges(data);

            expect(ranges.xStrings).to.deep.equal(["5", "6", "-10", "hi"]);

            expect(ranges.yMin).to.equal(-10);
            expect(ranges.yMax).to.equal(50);
        });
    });

    describe("hasStringXIn", ()=>{
        it("should return true if there is string", ()=>{
            let v = handler.hasStringXIn({
                values: [{
                    values: [{ x: 1 }, { x: 2 }, { x: 3 }]
                }, {
                    values: [{ x: " hello " }, { x: 5 }, { x: 6 }]
                }]
            });

            expect(v).to.equal(true);
        });

        it("should return false if there is no string", ()=>{
            let v = handler.hasStringXIn({
                values: [{
                    values: [{ x: 1 }, { x: 2 }, { x: 3 }]
                }, {
                    values: [{ x: 4 }, { x: 5 }, { x: 6 }]
                }]
            });

            expect(v).to.equal(false);
        });
    });
});
