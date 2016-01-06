
describe("Axes", function(){
    var chart;

    beforeEach(function(){
        initDOM();

        chart = Iva.generateInstantChart();
        main = d3.select("#chart");
    });

    describe("init", function(){
        it("should draw when visible set to true", function(){
            chart.option.axes.both.show();

            expect(selectVisible(".axis").length).to.equal(2);
        });

        it("should draw only specified axis", function(){
            chart.option.axes.x.show();

            expect(selectVisible(".xAxis").length).to.equal(1);
            expect(selectVisible(".yAxis").length).to.equal(0);

            chart.option.axes.x.hide();
            chart.option.axes.y.show();

            expect(selectVisible(".xAxis").length).to.equal(0);
            expect(selectVisible(".yAxis").length).to.equal(1);
        });
    });
});
