
let expect = require("chai").expect;

let DataObject = require("../src/dataObject");

describe("Data object", ()=>{
    let data, anotherData;
    beforeEach(()=>{
        data = new DataObject({
            columns: [{
                values: [
                    10, 20, 30
                ]
            }]
        });
        anotherData = data.copy();
    });

    describe("Copies itself", ()=>{
        it("doesn't make a copy by reference", ()=>{
            expect(anotherData).to.not.equal(data);
        });
        it("doesn't make a copy of any properties by reference", ()=>{
            expect(anotherData.columns).to.not.equal(data.columns);
            expect(anotherData.rows).to.not.equal(data.rows);
        });
        it("copies all properties", ()=>{
            expect(anotherData).to.deep.equal(data);
        });
    });
});
