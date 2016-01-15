
var buffer = new Iva.Buffer.Instant();

var data = new Iva.DataObject({
    columns: [{
        id: "line1",
        values: [1, 2, 3]
    }, {
        id: "line2",
        values: [0, 1, 2]
    }]
}, buffer);

var option = new Iva.OptionObject({
    renderer: "webgl"
}, buffer);

var chart = new Iva.Chart({
    buffer: buffer,
    dataObject: data,
    optionObject: option,
    bindTo: "chart"
});

chart.redraw();
