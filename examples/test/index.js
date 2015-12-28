/*
 * Copyright (C) 2015
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

var buffer = new Iva.Buffer.Default()

var dataObject = new Iva.DataObject({
    columns: [{
        id: "data1",
        values: [10, 30, 40, 0]
    }, {
        id: "data2",
        values: [5, -10, 50, 30]
    }, {
        id: "data3",
        values: [1, 20, -5]
    }]
}, buffer);

var optionObject = new Iva.OptionObject({
    handler: "area",
    axes:{
        both:{
            visible: true
        }
    }
}, buffer);

var chart = new Iva.Chart(dataObject, optionObject);
chart.redraw();
