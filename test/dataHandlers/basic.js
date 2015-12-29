
import {expect} from "chai";

import BasicHandler from "../../src/dataHandlers/basic";

import FakeParent from "../fake/parent";

import {generateValues} from "../utils/generate";

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

    describe("stack", ()=>{
        // Yeah, this code kinda suck, but I couldn't figure out a better and simpler way to do this.
        // Hope this spaghetti is just write and forget forever.
        it("should stack data", ()=>{
            let data = generateValues([[
                1, 2, 3
            ], [
                3, 2, 1
            ], [
                2, 4, 5
            ]]);

            data = handler.stack(data);

            expect(data.values[0].values[0].y).to.equal(1);
            expect(data.values[0].values[1].y).to.equal(2);
            expect(data.values[0].values[2].y).to.equal(3);

            expect(data.values[1].values[0].y).to.equal(4);
            expect(data.values[1].values[1].y).to.equal(4);
            expect(data.values[1].values[2].y).to.equal(4);

            expect(data.values[2].values[0].y).to.equal(6);
            expect(data.values[2].values[1].y).to.equal(8);
            expect(data.values[2].values[2].y).to.equal(9);

            expect(data.values[0].values[0].y0).to.equal(0);
            expect(data.values[0].values[1].y0).to.equal(0);
            expect(data.values[0].values[2].y0).to.equal(0);

            expect(data.values[1].values[0].y0).to.equal(1);
            expect(data.values[1].values[1].y0).to.equal(2);
            expect(data.values[1].values[2].y0).to.equal(3);

            expect(data.values[2].values[0].y0).to.equal(4);
            expect(data.values[2].values[1].y0).to.equal(4);
            expect(data.values[2].values[2].y0).to.equal(4);
        });

        it("should stack data of different sizes", ()=>{
            let data = generateValues([
                1, 2, 3
            ], [
                4, 5
            ], [
                6, 7, 8, 9
            ]);

            data = handler.stack(data);

            expect(data.values[0].values[0].y).to.equal(1);
            expect(data.values[0].values[1].y).to.equal(2);
            expect(data.values[0].values[2].y).to.equal(3);

            expect(data.values[1].values[0].y).to.equal(5);
            expect(data.values[1].values[1].y).to.equal(7);

            expect(data.values[2].values[0].y).to.equal(11);
            expect(data.values[2].values[1].y).to.equal(15);
            expect(data.values[2].values[2].y).to.equal(11);
            expect(data.values[2].values[3].y).to.equal(9);

            expect(data.values[0].values[0].y0).to.equal(0);
            expect(data.values[0].values[1].y0).to.equal(0);
            expect(data.values[0].values[2].y0).to.equal(0);

            expect(data.values[1].values[0].y0).to.equal(1);
            expect(data.values[1].values[1].y0).to.equal(2);

            expect(data.values[2].values[0].y0).to.equal(5);
            expect(data.values[2].values[1].y0).to.equal(7);
            expect(data.values[2].values[2].y0).to.equal(3);
            expect(data.values[2].values[3].y0).to.equal(0);
        });

        it("should stack data of different sizes with xStrings", ()=>{
            let data = {
                values: [{
                    values: [{ x: "one", y: 1 }, { x: "two", y: 2 }, { x: "three", y: 3 }]
                }, {
                    values: [{ x: "two", y: 4 }, { x: "four", y: 10 }]
                }, {
                    values: [{ x: "one", y: 5 }, { x: "three", y: 5 }, { x: "five", y: 5 }]
                }]
            };

            data = handler.stack(data);

            expect(data.values[0].values[0].y).to.equal(1);
            expect(data.values[0].values[1].y).to.equal(2);
            expect(data.values[0].values[2].y).to.equal(3);

            expect(data.values[1].values[0].y).to.equal(6);
            expect(data.values[1].values[1].y).to.equal(10);

            expect(data.values[2].values[0].y).to.equal(6);
            expect(data.values[2].values[1].y).to.equal(8);
            expect(data.values[2].values[2].y).to.equal(5);

            expect(data.values[0].values[0].y0).to.equal(0);
            expect(data.values[0].values[1].y0).to.equal(0);
            expect(data.values[0].values[2].y0).to.equal(0);

            expect(data.values[1].values[0].y0).to.equal(2);
            expect(data.values[1].values[1].y0).to.equal(0);

            expect(data.values[2].values[0].y0).to.equal(1);
            expect(data.values[2].values[1].y0).to.equal(3);
            expect(data.values[2].values[2].y0).to.equal(0);
        });
    });

    describe("normalize", ()=>{
        it("should normalize", ()=>{
            let data = generateValues([[
                1, 2, 3
            ], [
                3, 2, 1
            ], [
                4, 5, 1
            ]]);

            data = handler.normalize(data);

            expect(data.values[0].values[0].y).to.be.closeTo(1/8, .01);
            expect(data.values[0].values[1].y).to.be.closeTo(2/9, .01);
            expect(data.values[0].values[2].y).to.be.closeTo(3/5, .01);

            expect(data.values[1].values[0].y).to.be.closeTo(4/8, .01);
            expect(data.values[1].values[1].y).to.be.closeTo(4/9, .01);
            expect(data.values[1].values[2].y).to.be.closeTo(4/5, .01);

            expect(data.values[2].values[0].y).to.be.closeTo(1, .01);
            expect(data.values[2].values[1].y).to.be.closeTo(1, .01);
            expect(data.values[2].values[2].y).to.be.closeTo(1, .01);

            expect(data.values[0].values[0].y0).to.be.closeTo(0, .01);
            expect(data.values[0].values[1].y0).to.be.closeTo(0, .01);
            expect(data.values[0].values[2].y0).to.be.closeTo(0, .01);

            expect(data.values[1].values[0].y0).to.be.closeTo(1/8, .01);
            expect(data.values[1].values[1].y0).to.be.closeTo(2/9, .01);
            expect(data.values[1].values[2].y0).to.be.closeTo(3/5, .01);

            expect(data.values[2].values[0].y0).to.be.closeTo(4/8, .01);
            expect(data.values[2].values[1].y0).to.be.closeTo(4/9, .01);
            expect(data.values[2].values[2].y0).to.be.closeTo(4/5, .01);

        });

        it("should normalize when some rows are all 0", ()=>{
            let data = generateValues([[
                0, 2, 0
            ], [
                0, 3, 0
            ], [
                0, 5, 1
            ]]); 

            data = handler.normalize(data);

            expect(data.values[0].values[0].y).to.be.closeTo(1/3, .01);
            expect(data.values[0].values[1].y).to.be.closeTo(2/10, .01);
            expect(data.values[0].values[2].y).to.be.closeTo(0, .01);

            expect(data.values[1].values[0].y).to.be.closeTo(2/3, .01);
            expect(data.values[1].values[1].y).to.be.closeTo(5/10, .01);
            expect(data.values[1].values[2].y).to.be.closeTo(0, .01);

            expect(data.values[2].values[0].y).to.be.closeTo(1, .01);
            expect(data.values[2].values[1].y).to.be.closeTo(1, .01);
            expect(data.values[2].values[2].y).to.be.closeTo(1, .01);

            expect(data.values[0].values[0].y0).to.be.closeTo(0, .01);
            expect(data.values[0].values[1].y0).to.be.closeTo(0, .01);
            expect(data.values[0].values[2].y0).to.be.closeTo(0, .01);

            expect(data.values[1].values[0].y0).to.be.closeTo(1/3, .01);
            expect(data.values[1].values[1].y0).to.be.closeTo(2/10, .01);
            expect(data.values[1].values[2].y0).to.be.closeTo(0, .01);

            expect(data.values[2].values[0].y0).to.be.closeTo(2/3, .01);
            expect(data.values[2].values[1].y0).to.be.closeTo(5/10, .01);
            expect(data.values[2].values[2].y0).to.be.closeTo(0, .01);
        });

        it("should normalize data of different sizes", ()=>{
            let data = generateValues([
                1, 2, 3
            ], [
                4, 5
            ], [
                6, 7, 8, 9
            ]);

            data = handler.normalize(data);

            expect(data.values[0].values[0].y).to.equal(1/11, .01);
            expect(data.values[0].values[1].y).to.equal(2/15, .01);
            expect(data.values[0].values[2].y).to.equal(3/11, .01);

            expect(data.values[1].values[0].y).to.equal(5/11);
            expect(data.values[1].values[1].y).to.equal(7/15);

            expect(data.values[2].values[0].y).to.equal(1, 0.01);
            expect(data.values[2].values[1].y).to.equal(1, 0.01);
            expect(data.values[2].values[2].y).to.equal(1, 0.01);
            expect(data.values[2].values[3].y).to.equal(1, 0.01);

            expect(data.values[0].values[0].y0).to.equal(0);
            expect(data.values[0].values[1].y0).to.equal(0);
            expect(data.values[0].values[2].y0).to.equal(0);

            expect(data.values[1].values[0].y0).to.equal(1/11);
            expect(data.values[1].values[1].y0).to.equal(2/15);

            expect(data.values[2].values[0].y0).to.equal(5/11);
            expect(data.values[2].values[1].y0).to.equal(7/11);
            expect(data.values[2].values[2].y0).to.equal(3/11);
            expect(data.values[2].values[3].y0).to.equal(0);
        });

    });
});
