/*
 * Copyright (C) 2015
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

var buffer = new iva.Buffer.Instant()

var dataObject = new iva.DataObject({
    columns: [{
        id: "data1",
        values: [2, 2, 10, 5, 6]
    }, {
        id: "data2",
        values: [3, 4, 3, 5, 7]
    }, {
        id: "data3", 
        values: [5, 6, 5, 1, 9]
    }] 
}, buffer);

var optionObject = new iva.OptionObject({
    handler: "bar",
    axes:{
        both:{
            visible: true
        }
    },
    line: {
        points: true
    },
    legend: {
        visible: true
    }
}, buffer);

var chart = new iva.Chart(dataObject, optionObject, buffer);
chart.redraw();
