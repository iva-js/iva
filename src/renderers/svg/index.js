import d3 from "d3";

import Renderer from "../renderer";
import {PADDING, AXIS} from "./constants";

import {isUndefined, isEmpty, debug} from "../../utils";
import {generateExplode, visibility} from "./svgUtils";

export default class SvgRenderer extends Renderer {

    constructor(chart){
        super();
        this.option = chart.option;

        this.initEasel();
        this.initScene();

        this.initLines();
        this.initAreas();
        this.initBars();

        this.initPies();

        this.initAxes();
        this.initPoints();
        this.initLegend();

        this.color = d3.scale.ordinal().range(["#98abc5", "#a05d56", "#7b6888", "#6b486b", "#8a89a6", "#d0743c", "#ff8c00"]);
    }

    redraw(renderObject){
        this.render = renderObject;
        this.data = this.render.data;
        this.option = this.render.option;

        this.setSizes();
        this.setDomainsToScales();

        this.redrawBars();
        this.redrawLines();
        this.redrawAreas();
        this.redrawPies();

        this.redrawAxes();
        this.redrawLegend();

        this.endRender();
    }

    /*
     * Easel is where all the things are drawn
     */
    initEasel(){
        this.easel = d3.selectAll(this.option.easel()).attr("class", "iva-chart");
        this.clear();
    }

    /*
     * Scene is where all the data is drawn
     */
    initScene(){
        this.scene = this.easel.append("g").attr("class", "scene");
    }

    initLines(){
        this.scene.append("g").attr("class", "lines");
    }

    initAreas(){
        this.scene.append("g").attr("class", "areas");
    }

    initBars(){
        this.scene.append("g").attr("class", "bars");
    }

    initPies(){
        this.scene.append("g").attr("class", "pies");
    }

    initAxes(){
        let easel = this.easel;

        let xAxis = this.xAxis = d3.svg.axis().orient("bottom");
        let yAxis = this.yAxis = d3.svg.axis().orient("left");
    
        easel.append("g")
            .attr("class", "axis xAxis");

        easel.append("g")
            .attr("class", "axis yAxis");
    }

    initLegend(){
        this.legend = this.easel.append("g").attr("class", "legend");
    }

    initPoints(){
        this.scene.append("g").attr("class", "points");
    }

    setSizes(){
        let easel = this.easel, option = this.option, size = option.size;

        let innerSize = this.innerSize = {
            width: size.width - PADDING.LEFT - PADDING.RIGHT,
            height: size.height - PADDING.TOP - PADDING.BOTTOM
        };

        this.easel.attr("width", size.width).attr("height", size.height);

        let legend = option.legend;
        let legendPadding = legend.visible ? legend.width : 0;

        this.scene.attr("transform", `translate(${PADDING.LEFT + AXIS.WIDTH}, ${PADDING.TOP})`)
        this.scene.attr("width", innerSize.width - AXIS.WIDTH - legendPadding).attr("height", innerSize.height - AXIS.WIDTH)

        this.legend.attr("width", legend.width)
            .attr("height", legend.height)
            .attr("visibility", visibility(legend.visible))
            .attr("transform", `translate(${innerSize.width + PADDING.LEFT - legend.width + 20}, ${size.height/2 - legend.height / 2})`);

        this.legendScale = d3.scale.ordinal().rangePoints([0, legend.height]);    

        let xScale = this.xScale = d3.scale.ordinal().rangePoints([0, this.scene.attr("width")]);

        let yScale = this.yScale = d3.scale.linear().range([this.scene.attr("height"), 0]);

    }

    setDomainsToScales(){
        let {xMin, xMax, yMin, yMax, xStrings} = this.data.ranges;
        let xScale = this.xScale, yScale = this.yScale, color = this.color;

        if(!isEmpty(xStrings)){
            xScale.domain(xStrings);
        } else {
            xScale.domain(d3.range(xMin, xMax+1));
        }
        yScale.domain([yMin, yMax]);

        color.domain(this.data.ids);
    }

    redrawAxes(){
        let easel = this.easel, size = this.option.size, axes = this.option.axes, xAxis = this.xAxis, yAxis = this.yAxis;

        xAxis.scale(this.xScale);
        yAxis.scale(this.yScale);

        easel.select(".xAxis")
            .attr("transform", `translate(${AXIS.WIDTH + PADDING.LEFT}, ${size.height - AXIS.WIDTH})`)
            .style("opacity", d => (axes.x.visible) ? 100 : 0)
            .call(xAxis);

        easel.select(".yAxis")
            .attr("transform", `translate(${AXIS.WIDTH}, ${PADDING.TOP})`)
            .style("opacity", d => (axes.y.visible) ? 100 : 0)
            .call(yAxis);

    }

    redrawBars(){
        let scene = this.scene, color = this.color,  yScale = this.yScale, xScale = this.xScale;

        if(isEmpty(this.data.rectangular.bars.values)){
            this.clear(".bars");
            return;
        }

        let bars = this.data.rectangular.bars.values;

        let xScale1 = d3.scale.ordinal();
        let {xMin, xMax, yMin, yMax, xStrings} = this.data.ranges;
        let height = this.scene.attr("height");

        if(!isEmpty(xStrings)){
            xScale.domain(xStrings);
        } else {
            xScale.domain(d3.range(xMin, xMax+1)).rangeRoundBands([0, this.scene.attr("width")], 0.1);
        }

        yScale.domain([yMin-1, yMax]);

        xScale1.domain(this.data.ids).rangeRoundBands([0, xScale.rangeBand()], 0.1);

        let barsSvg = scene.select(".bars");
        let barSvg = barsSvg.selectAll(".bar").data(bars);

        barSvg.enter().append("g").attr("class", "bar");
        barSvg.attr("transform", d => `translate(${xScale(d.x)}, 0)`);

        let rectSvg = barSvg.selectAll("rect").data(d => d.values)
        rectSvg.enter().append("rect");
        
        rectSvg.attr("x", d => xScale1(d.id))
            .attr("y", d => yScale(d.y))
            .attr("height", d => { return height - yScale(d.y - d.y0) })
            .attr("width", xScale1.rangeBand())
            .style("fill", d => color(d.id));

        rectSvg.exit().remove();
        barSvg.exit().remove();    
    }

    redrawLines(){
        let scene = this.scene, color = this.color, xScale = this.xScale, yScale = this.yScale;

        if(isEmpty(this.data.rectangular.lines.values)){
            this.clear(".lines");
            return;
        }

        let lines = this.data.rectangular.lines.values;

        let line = d3.svg.line()
            .x(d => xScale(d.x))
            .y(d => yScale(d.y))
            .interpolate(this.option.line.interpolate);

        let linesSvg = scene.select(".lines");

        let lineSvg = linesSvg.selectAll("path").data(lines);

        lineSvg.enter().append("path")
            .attr("class", "line")
            .attr("stroke", d => color(d.id))
            .attr("stroke-width", 2)
            .attr("fill", "none");

        lineSvg.attr("d", d => line(d.values))

        lineSvg.exit().remove();    

        if(this.option.line.points){
            this.redrawPoints(lines);
        }

    }

    redrawAreas(){
        let scene = this.scene, color = this.color, xScale = this.xScale, yScale = this.yScale;

        if(isEmpty(this.data.rectangular.areas.values)){
            this.clear(".areas");
            return;
        }

        let areas = this.data.rectangular.areas.values;

        let area = d3.svg.area()
            .x(d => xScale(d.x))
            .y0(d => yScale(d.y0) + PADDING.TOP - 10)
            .y1(d => yScale(d.y))
            .interpolate(this.option.area.interpolate);

        let areasSvg = scene.select(".areas");

        let areaSvg = areasSvg.selectAll("path").data(areas);

        areaSvg.enter().append("path")
            .attr("class", "area")
            .attr("class", "area")
            .attr("stroke", d => color(d.id))
            .attr("fill", d => color(d.id));

        areaSvg.attr("d", d => area(d.values));

        areaSvg.exit().remove();

        if(this.option.area.points){
            this.redrawPoints(areas);
        }

    }

    redrawPies(){
        let scene = this.scene, color = this.color, option = this.option;

        if(isEmpty(this.data.circular.pies.values)){
            return;
        }

        let pies = this.data.circular.pies.values;

        let pie = pies[0].values;

        let arcSvg = d3.svg.arc()
            .outerRadius(option.pie.outerRadius)
            .innerRadius(option.pie.innerRadius)
            .startAngle(d => d.startAngle + option.pie.turnAngle)
            .endAngle(d => d.endAngle + option.pie.turnAngle)
            .padAngle(option.pie.padAngle);

        let pieLayout = d3.layout.pie()
            .sort(null)
            .value(d => d.y);

        scene.selectAll(".pies").attr("transform", `translate(${this.option.size.width/2}, ${this.option.size.height/2})`);
        let p = scene.selectAll(".pies").selectAll(".arc").data(pieLayout(pie));

        p.enter().append("path")
            .attr("class", "arc")
            .style("fill", d => color(d.data.id));
        
        p.attr("d", arcSvg);
        p.attr("transform", generateExplode(option.pie.explodeRadius))

        p.exit().remove();    

    }

    redrawLegend(){
        let ids = this.data.ids;

        if(isEmpty(ids)){
            this.clear(".legend");
            return;
        }

        if(!this.option.legend.visible){
            return;
        }

        let legend = this.legend, legendScale = this.legendScale, color = this.color;

        legendScale.domain(ids);

        let legendItem = legend.selectAll(".legendItem").data(ids);

        legendItem.enter().append("text")
            .attr("class", "legendItem");

        legendItem.attr("transform", d => `translate(20, ${legendScale(d)})`);
        legendItem.text(d => d);
        
        let legendPicture = legend.selectAll(".legendPicture").data(ids);  

        if(this.option.legend.pointType === "line"){
            legendPicture.enter().append("line")
                .attr("class", "legendPicture")
                .attr("x1", 0)
                .attr("y1", 5)
                .attr("x2", 10)
                .attr("y2", 5)
                .attr("stroke", d => color(d))
                .style("stroke-width", 2);
        } else {
            legendPicture.enter().append("rect")
                .attr("class", "legendPicture")
                .attr("width", 10)
                .attr("height", 10)
                .attr("fill", d => color(d));
        }
            
        legendPicture.attr("transform", d => `translate(0, ${legendScale(d) - 10})`);

        legendItem.exit().remove();
        legendPicture.exit().remove();
    }

    redrawPoints(sequences){
        if(isEmpty(sequences)){
            this.clear(".points");
            return;
        }

        let scene = this.scene, option = this.option, xScale = this.xScale, yScale = this.yScale;

        let points = [];
        
        sequences.forEach(sequence => {
            sequence.values.forEach(value => {
                points.push({
                    x: value.x,
                    y: value.y,
                    id: sequence.id
                });
            });
        });


        let pointSvg = scene.selectAll(".points").selectAll(".point").data(points);

        pointSvg.enter().append("circle")
            .attr("class", "point")
            .attr("fill", d => this.color(d.id))
            .attr("r", 3);

        pointSvg.attr("cx", d => xScale(d.x))
        pointSvg.attr("cy", d => yScale(d.y))

        pointSvg.exit().remove();
    }

    clear(select){
        let obj;

        if(isUndefined(select)){
            obj = this.easel;
        } else {
            obj = this.easel.selectAll(select);
        }

        obj.selectAll("*").transition().duration(500).style("opacity", 0).remove();
    }

    endRender(){
        let data = this.data;

        if(data.isEmpty){
            this.clear(".points");
        } 
    }
}
