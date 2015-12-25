import d3 from "d3";

import Renderer from "../renderer";
import {PADDING, AXIS} from "./constants";

import {svgVisibility, isUndefined} from "../../utils";

export default class SvgRenderer extends Renderer {

    constructor(chart){
        super();
        this.option = chart.option;
        let bindTo = this.option.bindTo;

        this.easel = d3.selectAll("#chart").attr("class", "iva-chart");;
        this.easel.append("g").attr("transform", "translate(0, 0)");

        this.initLines();
        this.initAreas();

        this.color = d3.scale.ordinal().range(["#98abc5", "#a05d56", "#7b6888", "#6b486b", "#8a89a6", "#d0743c", "#ff8c00"]);

        this.initAxes();
    }

    redraw(renderObject){
        this.render = renderObject;
        this.data = this.render.data;
        this.option = this.render.option;

        this.setSizes();

        //this.redrawColumns();
        this.redrawLines();
        this.redrawAreas();

        this.redrawAxis();
    }

    initLines(){
        this.easel.append("g").attr("class", "lines");
    }

    initAreas(){
        this.easel.append("g").attr("class", "areas");
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

    setSizes(){
        let easel = this.easel, size = this.option.size;

        let innerSize = this.innerSize = {
            width: size.width - PADDING.LEFT - PADDING.RIGHT,
            height: size.height - PADDING.TOP - PADDING.BOTTOM
        };

        this.easel.attr("width", size.width).attr("height", size.height);

        let xScale = this.xScale = d3.scale.linear().range([0, innerSize.width - AXIS.WIDTH]);

        let yScale = this.yScale = d3.scale.linear().range([innerSize.height - AXIS.WIDTH, 0]);

    }

    redrawAxis(){
        let easel = this.easel, size = this.option.size, axes = this.option.axes, xAxis = this.xAxis, yAxis = this.yAxis;

        xAxis.scale(this.xScale);
        yAxis.scale(this.yScale);

        easel.select(".xAxis")
            .attr("transform", `translate(${AXIS.WIDTH + PADDING.LEFT}, ${size.height - AXIS.WIDTH})`)
            .style("visibility", d => svgVisibility(axes.x.visible))
            .call(xAxis);

        easel.select(".yAxis")
            .attr("transform", `translate(${AXIS.WIDTH}, ${PADDING.TOP})`)
            .style("visibility", d => svgVisibility(axes.y.visible))
            .call(yAxis);

    }

    redrawColumns(){
        let easel = this.easel, x0 = this.x0, x1 = this.x1, y = this.y, color = this.color;

        if(!this.data.columns && !this.data.rows){
            return;
        }

        let columns = this.data.columns.values;
        let rows = this.data.rows.values;

        x0.domain(rows.map(row => row.x));
        x1.domain(d3.range(d3.max(columns, column => column.values.length)));
        y.domain([0, d3.max(columns, column => d3.max(column.values, value => value.y))]);

        let rowsSvg = easel.selectAll(".row")
            .data(rows)
          .enter().append("g")
            .attr("class", "row")
            .attr("transform", d => `translate(${x0(d.x)},0)`);  

        rowsSvg.selectAll("rect")
            .data(d => d.values)
          .enter().append("rect")
            .attr("width", x1.rangeBand())
            .attr("x", d => x1(d.x))
            .attr("y", d => y(d.y))
            .attr("height", d => this.option.size.height - y(d.y))
            .style("fill", d => color(d.x));

    }

    redrawLines(){
        let easel = this.easel, color = this.color, xScale = this.xScale, yScale = this.yScale;

        if(isUndefined(this.data.rectangular.lines)){
            return;
        }

        let lines = this.data.rectangular.lines.values;

        let xMin = d3.min(lines, line => d3.min(line.values, value => value.x));
        let xMax = d3.max(lines, line => d3.max(line.values, value => value.x));

        let yMin = d3.min(lines, line => d3.min(line.values, value => value.y));
        let yMax = d3.max(lines, line => d3.max(line.values, value => value.y));

        xScale.domain([xMin, xMax]);
        yScale.domain([yMin, yMax]);

        color.domain(lines.map(line => line.id));

        let line = d3.svg.line()
            .x(d => xScale(d.x))
            .y(d => yScale(d.y))
            .interpolate("basis");

        let linesSvg = easel.select(".lines");

        let lineSvg = linesSvg.selectAll("path").data(lines);

        lineSvg.enter().append("path")
            .attr("transform", `translate(${PADDING.LEFT + AXIS.WIDTH}, 0)`)
            .attr("stroke", d => color(d.id))
            .attr("stroke-width", 2)
            .attr("fill", "none");

        lineSvg.attr("d", d => line(d.values))

        lineSvg.exit().remove();    
    }

    redrawAreas(){
        let easel = this.easel, color = this.color, xScale = this.xScale, yScale = this.yScale;

        if(isUndefined(this.data.rectangular.areas)){
            return;
        }

        let areas = this.data.rectangular.areas.values;

        let xMin = d3.min(areas, area => d3.min(area.values, value => value.x));
        let xMax = d3.max(areas, area => d3.max(area.values, value => value.x));

        let yMin = d3.min(areas, area => d3.min(area.values, value => value.y));
        let yMax = d3.max(areas, area => d3.max(area.values, value => value.y));

        xScale.domain([xMin, xMax]);
        yScale.domain([yMin, yMax]);

        color.domain(areas.map(area => area.id));

        let area = d3.svg.area()
            .x(d => xScale(d.x))
            .y0(this.innerSize.height - AXIS.WIDTH)
            .y1(d => yScale(d.y))
            .interpolate("basis");

        let areasSvg = easel.select(".areas");

        let areaSvg = areasSvg.selectAll("path").data(areas);

        areaSvg.enter().append("path")
            .attr("transform", `translate(${PADDING.LEFT + AXIS.WIDTH}, ${PADDING.TOP})`)
            .attr("class", "area")
            .attr("stroke", d => color(d.id))
            .attr("fill", d => color(d.id));

        areaSvg.attr("d", d => area(d.values));

        areaSvg.exit().remove();

    }
}
