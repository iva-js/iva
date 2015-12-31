/*
 * Copyright (C) 2015
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

var buffer = new Iva.Buffer.Instant()

var dataObject = new Iva.DataObject({
    columns: [{
        id: "Здрасти",
        values: [1, 2, 3, 4]
    }, {
        id: "Я данные",
        values: [4, 2, 2, 4]
    }, {
        id: "И я! :)", 
        values: [5, 1, 4, 3]
    }] 
}, buffer);

var optionObject = new Iva.OptionObject({
    handler: "area",
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

var chart = new Iva.Chart(dataObject, optionObject, buffer);
chart.redraw();
