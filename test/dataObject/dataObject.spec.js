
import {expect} from "chai";

import DataObject from "../../src/dataObject/dataObject";

describe("Data object", ()=>{
    let data, anotherData;
    beforeEach(()=>{
        data = new DataObject({
            columns: [{
                id: "data1",
                values: [
                    10, 20, 30
                ]
            }, {
                id: "data2",
                values: [
                    30, 40, 50
                ]
            }]
        });
    });

    describe("columns", ()=>{
        it("should get columns", ()=>{
            let columns = data.columns();

            expect(columns[0].id()).to.equal("data1");
            expect(columns[1].id()).to.equal("data2");

            expect(columns[0].values()).to.deep.equal([{ y: 10 }, { y: 20 }, { y: 30 }]);
            expect(columns[1].values()).to.deep.equal([{ y: 30 }, { y: 40 }, { y: 50 }]);
        });

        it("should set columns", ()=>{
            data.columns([
                {
                    id: "data3",
                    values: [100, 200, 300]
                }
            ]);

            let columns = data.columns();

            expect(columns.length).to.equal(1);
            expect(columns[0].id()).to.equal("data3");
            expect(columns[0].values()).to.deep.equal([{ y: 100 }, { y: 200 }, { y: 300 }]);
        });
    });

    describe("getColumnById", ()=>{
        
    });

});
