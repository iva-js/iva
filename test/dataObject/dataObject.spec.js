
let expect = require("chai").expect;

let DataObject = require("../../src/dataObject/dataObject");

describe("Data object", ()=>{
    let data, anotherData;
    beforeEach(()=>{
        data = new DataObject({
            columns: [{
                id: "data1",
                values: [
                    10, 20, 30
                ]
            }]
        });
        anotherData = data.copy();
    });

    describe("Copies itself", ()=>{
    });
});
