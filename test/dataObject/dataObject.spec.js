
import {expect} from "chai";

import DataObject from "../../src/dataObject/dataObject";

import FakeParent from "../fake/parent";

describe("Data object", ()=>{
    let data, anotherData;

    describe("/columns", ()=>{
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
            }, new FakeParent());
        });

        function checkColumn(column, values){
            for(let i = 0; i < values.length; i++){
                expect(column.get(i)).to.deep.equal(values[i]);
            }
        }

        describe("columns", ()=>{

            it("should get columns", ()=>{
                let columns = data.columns();

                checkColumn(columns.get("data1"), [{ y: 10 }, { y: 20 }, { y: 30 }]);
                checkColumn(columns.get("data2"), [{ y: 30 }, { y: 40 }, { y: 50 }]);

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

                checkColumn(columns.get("data3"), [{ y: 1 }, { y: 2 }, { y: 3 }]);
                checkColumn(columns.get("data4"), [{ y: 3 }, { y: 2 }, { y: 1 }]);
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

                checkColumn(columns.get("data3"), [{ y: 1 }, { y: 2 }, { y: 3 }]);
                checkColumn(columns.get("data4"), [{ y: 3 }, { y: 2 }, { y: 1 }]);
            });
        });

        describe("addColumn", ()=>{
            it("should add column", ()=>{
                data.addColumn("data3", [1, 2, 3]);

                let columns = data.columns();

                checkColumn(columns.get("data3"), [{ y: 1 }, { y: 2 }, { y: 3 }]);
            });

            it("should throw if column with id already exists", ()=>{
                expect(()=>{
                    data.addColumn({ id: "data1" });
                }).to.throw(Error);
            });
        });

        describe("setValuesToColumn", ()=>{
            it("should add values", ()=>{
                data.setValuesToColumn("data1", [{
                    x: 3,
                    y:100
                }, {
                    x:4,
                    y: 90
                }, { 
                    x: 5,
                    y: 80
                }]);

                let columns = data.columns();

                checkColumn(columns.get("data1"), [{ y: 10 }, { y: 20 }, { y: 30 }, { x: 3, y: 100 }, { x: 4, y: 90 }, { x: 5, y: 80 }]);
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

                checkColumn(columns.get("data1"), [{ x: 0, y: 30 }, { y: 20 }, { x: 2, y: 10 }]);
            });
        });

        describe("columnValue", ()=>{
            it("should add value", ()=>{
                data.columnValue("data1", 3, 10);
                checkColumn(data.columns().get("data1"), [{ y: 10 }, { y: 20 }, { y: 30}, { y: 10 }]);
            });

            it("should set value", ()=>{
                data.columnValue("data1", 1, 40);
                checkColumn(data.columns().get("data1"), [{ y: 10 }, { y: 40} , { y: 30 }]);
            });
        });
    });

    describe("/rows", ()=>{
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
            }, new FakeParent());
        });

        function checkRow(row, values){
            for(let value of values){
                expect(row.get(value[0])).to.deep.equal(value[1]);
            }
        }

        describe("rows", ()=>{

            it("should get rows", ()=>{
                let rows = data.rows();

                checkRow(rows.get(0), [["data1", { y: 10 }], ["data2", { y: 30 }]]);
                checkRow(rows.get(1), [["data1", { y: 20 }], ["data2", { y: 40 }]]);
                checkRow(rows.get(2), [["data1", { y: 30 }], ["data2", { y: 50 }]]);
            });

            it("should set rows", ()=>{
                data.rows([{
                    x: 0,
                    values: [{
                        id: "data1",
                        y: 1
                    }, {
                        id: "data2",
                        y: 3
                    }]
                }, {
                    x: 1,
                    values: [{
                        id: "data1",
                        y: 3
                    }, {
                        id: "data2",
                        y: 2
                    }]
                }]);

                let rows = data.rows();

                checkRow(rows.get(0), [["data1", { y: 1 }], ["data2", { y: 3 }]]);
                checkRow(rows.get(1), [["data1", { y: 3 }], ["data2", { y: 2 }]]);
            });

        });

        describe("row", ()=>{
            it("should update row", ()=>{
                data.row(0,  [{
                    id: "data1",
                    y: 1
                }, {
                    id: "data2",
                    y: 2
                }
                ]);

                let rows = data.rows();

                checkRow(rows.get(0), [["data1", {y: 1}], ["data2", { y: 2 }]]);
            });

            it("should create new columns if needed", ()=>{
                data.row(0, [{ id: "data3", y: 15}]);

                let rows = data.rows();

                checkRow(rows.get(0), [["data3", { y: 15 }]]);
            });
        });

        describe("addValuesToRow", ()=>{
            it("should add new values", ()=>{
                data.addValuesToRow(0, [{ id: "data3", y: 15 }]);
                let rows = data.rows();

                checkRow(rows.get(0), [["data1", { y: 10 }], ["data2", { y: 30 }], ["data3", { y: 15 }]]);
            });
        });
    });
});
