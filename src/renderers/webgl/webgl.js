
import Renderer from "../renderer";
import THREE from "three.js";

/*
 * Yes, we will need full d3 here since functions like d3.range are not separated in a different module.
 * As soon as this is fixed, d3 dep will be removed.
 */

import d3 from "d3";
import {scaleOrdinal, scaleLinear} from "d3-scale";

import {isEmpty, debug} from "../../utils";

export default class WebglRenderer extends Renderer {
    constructor(bindTo){
        super(bindTo);

        this.initScene();
        this.initRenderer();
        this.initScales();
        this.initAxes();

        this.color = scaleOrdinal().range(["#98abc5", "#a05d56", "#7b6888", "#6b486b", "#8a89a6", "#d0743c", "#ff8c00"]);
    }

    redraw(d){
        this.data = d.data;
        this.option = d.option;

        this.setCamera();
        this.setRenderer();
        this.setDomainsToScales();

        this.redrawAxes();
        this.redrawLines();

        this.endRedraw();
    }

    initScene(){
        this.scene = new THREE.Scene();
    }

    initRenderer(){
        let canvas = document.getElementById(this.bindTo());

        this.renderer = new THREE.WebGLRenderer({
            canvas: canvas
        });

        this.renderer.setClearColor(0xffffff, 1);
    }

    initScales(){
        this.xScale = d3.scale.ordinal().rangePoints([-10, 10]);

        this.yScale = d3.scale.linear().range([-10, 10]);

    }

    initAxes(){
        let axes = this.axes = new THREE.Object3D();

        let length = 200;

        axes.add(this.buildAxis(new THREE.Vector3(-length, 0, 0), new THREE.Vector3(length, 0, 0)));
        axes.add(this.buildAxis(new THREE.Vector3(0, -length, 0), new THREE.Vector3(0, length, 0)));
        axes.add(this.buildAxis(new THREE.Vector3(0, 0, -length), new THREE.Vector3(0, 0, length)));

        this.scene.add(axes);
    }

    buildAxis(from, to){
        let geometry = new THREE.Geometry();
        let material = new THREE.LineBasicMaterial();

        geometry.vertices.push(from.clone());
        geometry.vertices.push(to.clone());


        return new THREE.Line(geometry, material)
    }

    setCamera(){
        let size = this.option.size;
        this.camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000);

        this.camera.position.z = 15;
    }

    setRenderer(){
        let {width, height} = this.option.size;

        this.renderer.setSize(width, height);
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

    redrawLines(){
        let color = this.color, yScale = this.yScale, xScale = this.xScale;
        let lines = this.data.rectangular.lines.values;

        if(isEmpty(lines)){
            return;
        }

        lines.forEach(line => {
            let material = new THREE.LineBasicMaterial({ color: color(line.id), linewidth: 3 });
            let geometry = new THREE.Geometry();

            line.values.forEach(value => {
                geometry.vertices.push(new THREE.Vector3(xScale(value.x), yScale(value.y), 0))
            })

            this.scene.add(new THREE.Line(geometry, material));
        });
    }

    endRedraw(){
        this.renderer.render(this.scene, this.camera);
    }
}
