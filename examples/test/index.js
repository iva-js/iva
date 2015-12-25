/*
 * Copyright (C) 2015
 * Created by missingdays
 * Distributed under terms of the MIT license.
 */

var buffer = new Iva.Buffer.Default()

var dataObject = new Iva.DataObject({
    columns: [
        {
            id: "data1",
            values: [5, 3, 1, 4, 10]
        }, {
            id: "data2",
            values: [5, 3, 6, 4, 0]
        }, {
            id: "data3", 
            values: [
            {
                x: 1,
                y: 0
            },{
                x: 2,
                y: 5
            }, {
                x: 3,
                y: 6
            }, {
                x: 4,
                y: 2
            }]
        }
    ]
        
       
}, buffer);

var optionObject = new Iva.OptionObject({
    handler: "area",
    axes: {
        both: {
            visible: true
        }
    }
}, buffer);

var chart = new Iva.Chart(dataObject, optionObject);
chart.redraw();

