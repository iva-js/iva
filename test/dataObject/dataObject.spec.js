
import {expect} from "chai";

import DataObject from "../../src/dataObject/dataObject";

import FakeParent from "../fake/parent";

describe("Data object", ()=>{
    let data, anotherData;

    let counter = {
        dirty: 0
    };

    describe("/columns", ()=>{
        beforeEach(()=>{
            counter.dirty = 0;

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
            }, new FakeParent(counter));
        });

        function checkColumn(column, values){
            for(let i = 0; i < values.length; i++){
                expect(column[i]).to.deep.equal(values[i]);
            }
        }

        describe("columns", ()=>{

            it("should get columns", ()=>{
                let columns = data.columns();

                checkColumn(columns["data1"], [{ y: 10 }, { y: 20 }, { y: 30 }]);
                checkColumn(columns["data2"], [{ y: 30 }, { y: 40 }, { y: 50 }]);

            });

            it("should set columns", ()=>{
                data.columns([{
                    id: "data3",
                    values: [1, 2, 3]
                }, {
                    id: "data4",
                    values: [3, 2, 1]
                }]);

                let columns = data.columns();

                checkColumn(columns["data3"], [{ y: 1 }, { y: 2 }, { y: 3 }]);
                checkColumn(columns["data4"], [{ y: 3 }, { y: 2 }, { y: 1 }]);
            });

        });

        describe("addColumns", ()=>{
            it("should add columns", ()=>{
                data.addColumns([{
                    id: "data3",
                    values: [1, 2, 3]
                }, {
                    id: "data4",
                    values: [3, 2, 1]
                }]);

                let columns = data.columns();

                checkColumn(columns["data3"], [{ y: 1 }, { y: 2 }, { y: 3 }]);
                checkColumn(columns["data4"], [{ y: 3 }, { y: 2 }, { y: 1 }]);
            });
        });

        describe("addColumn", ()=>{
            it("should add column", ()=>{
                data.addColumn({
                    id: "data3",
                    values: [1, 2, 3]
                });

                let columns = data.columns();

                checkColumn(columns["data3"], [{ y: 1 }, { y: 2 }, { y: 3 }]);
            });

            it("should throw if column with id already exists", ()=>{
                expect(()=>{
                    data.addColumn({ id: "data1" });
                }).to.throw(Error);
            });
        });

        describe("setValuesToColumn", ()=>{
            it("should add values", ()=>{
                data.setValuesToColumn("data1", [100, 90, 80]);

                let columns = data.columns();

                checkColumn(columns["data1"], [{ y: 10 }, { y: 20 }, { y: 30 }, { y: 100 }, { y: 90 }, { y: 80 }]);
            });

            it("should set to existing values", ()=>{
                data.setValuesToColumn("data1", [{
                    x: 0,
                    y: 30
                }, {
                    x: 2,
                    y: 10
                }]);

                let columns = data.columns();

                checkColumn(columns["data1"], [{ x: 0, y: 30 }, { y: 20 }, { x: 2, y: 10 }]);
            });
        });

        describe("setValueToColumn", ()=>{
            it("should add value", ()=>{
                data.setValueToColumn("data1", 10);
                checkColumn(data.columns()["data1"], [{ y: 10 }, { y: 20 }, { y: 30}, { y: 10 }]);
            });

            it("should set value", ()=>{
                data.setValueToColumn("data1", {
                    x: 1,
                    y: 40
                });
                checkColumn(data.columns()["data1"], [{ y: 10 }, { x: 1, y: 40} , { y: 30 }]);
            });
        });
    });
});
