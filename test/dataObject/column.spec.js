
import {expect} from "chai";

import Column from "../../src/dataObject/column";
import DataObject from "../../src/dataObject/dataObject";

import FakeParent from "../fake/parent";

describe("Column", ()=>{
    let data = {
        id: "data",
        values: [{
            y: 10
        }, {
            y: 20
        }, {
            y: 30
        }]
    };

    let column = {};
    let dataObject = new DataObject({}, new FakeParent());

    beforeEach(()=>{
        column = new Column(data, dataObject);
    });

    describe("constructor", ()=>{
        it("should be correctly initialized", ()=>{
            expect(column.id()).to.equal(data.id);
            expect(column.values()).to.deep.equal(data.values);
        });

        it("should throw when id is not provided", ()=>{
            expect(()=>{
                let column = new Column({
                    values: data.values
                });
            }).to.throw(Error);
        });
    });

    describe("id", ()=>{
        it("should get id", ()=>{
            expect(column.id()).to.equal(data.id);
        });

        it("should set id", ()=>{
            column.id("another");
            expect(column.id()).to.equal("another");
        });
    });

    describe("values", ()=>{
        it("should get values", ()=>{
            expect(column.values()).to.deep.equal(data.values);
        });

        it("should set values", ()=>{
            let newValues = [{ y: 30 }, { y: 40}];
            column.values(newValues);

            expect(column.values()).to.deep.equal(newValues);
        });

        it("should set when values are just numbers", ()=>{
            column.values([40, 50, 60]);
            expect(column.values()).to.deep.equal(
                [
                    { 
                        y: 40
                    },
                    {
                        y: 50
                    },
                    {
                        y: 60
                    }
                ]
            );
        });

        it("should throw when values are not array", ()=>{
            expect(()=>{
                column.values({});
            }).to.throw(Error);

            expect(()=>{
                column.values(10);
            }).to.throw(Error);
        });
    });
});
