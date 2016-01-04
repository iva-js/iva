/*
 * Copyright (C) 2015
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

var buffer = new iva.Buffer.Instant()

var dataObject = new iva.DataObject({
    columns: [{
        id: "data1",
        values: [20, 20, 100, 50, 60, 50, 50, 50, 50, 60, 70,]
    }, {
        id: "data2",
        values: [30, 40, 30, 50, 70, 10, 10, 20, 30, 40, 50]
    }, {
        id: "data3", 
        values: [50, 60, 50, 10, 90, 80, 70, 10, 20, 30, 40]
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
