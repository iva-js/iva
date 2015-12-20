/*
 * Copyright (C) 2015
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

var buffer = new Iva.buffers.DefaultBuffer()

var dataObject = new Iva.DataObject({
    columns: [
        {
            id: "data",
            values: [1, 2, 3]
        },
        {
            id: "data2",
            values: [3, 2, 1]
        }
    ]
}, buffer);

var optionObject = new Iva.OptionObject({}, buffer);

var chart = new Iva.Chart(dataObject, optionObject);
chart.redraw();

setTimeout(function(){
    console.log("add new values");
    chart.data.columns.getColumnById("data").pushValues([5]);
    chart.redraw();
}, 1000);
