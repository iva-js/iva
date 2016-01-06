describe("Basic use case", function(){

    var chart;

    beforeEach(function(){
        chart = Iva.generateBasicChart();
    });

    it("should draw chart", function(){
        chart.redraw();

        var svg = d3.select("#chart");
        var def = chart.option.size.getDefault();

        expect(+svg.attr("width")).to.equal(def.width);
        expect(+svg.attr("height")).to.equal(def.height);
    });

    it("should draw lines", function(){
    
        chart.setHandler("line");
        chart.data.column("data1", [1, 2, 3]);
        chart.data.column("data2", [3, 2, 1]);

        chart.redraw();

        expect(d3.selectAll(".line").size()).to.equal(2);
    });

    it("should draw areas", function(){
    
        chart.setHandler("area");
        chart.data.column("data1", [1, 2, 3]);
        chart.data.column("data2", [3, 2, 1]);

        chart.redraw();

        expect(d3.selectAll(".area").size()).to.equal(2);
    });

});
