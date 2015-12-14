
import {expect} from "chai";
import Column from "../../src/dataObject/column";

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

    describe("constructor", ()=>{
        it("should be correctly initialized", ()=>{
            let column = new Column(data);

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
            let column = new Column(data);

            expect(column.id()).to.equal(data.id);
        });

        it("should set id", ()=>{
            let column = new Column(data);

            column.id("another");
            expect(column.id()).to.equal("another");
        });
    });

    describe("values", ()=>{
        it("should get values", ()=>{
            let column = new Column(data);

            expect(column.values()).to.deep.equal(data.values);
        });

        it("should set values", ()=>{
            let column = new Column(data);
    
            let newValues = [{ y: 30 }, { y: 40}];
            column.values(newValues);

            expect(column.values()).to.deep.equal(newValues);
        });

        it("should throw when values are not array", ()=>{
            let column = new Column(data);
            expect(()=>{
                column.values({});
            }).to.throw(Error);

            expect(()=>{
                column.values(10);
            }).to.throw(Error);
        });
    });
});
