
function isHidden(el) {
    var style = window.getComputedStyle(el);
    return style.display === "none" || style.vibility === "hidden" || style.opacity === "0";
}

function selectVisible(select){
    var c = [];
    var selection = d3.selectAll(select)[0];

    for(var i = 0; i < selection.length; i++){
        if(!isHidden(selection[i])){
            c.push(selection[i]);
        }
    }

    return c;
}

function initDOM(){
    var svg = document.createElement("svg");
    svg.id = "chart";

    var oldSvg = document.getElementById("chart");

    if(oldSvg !== null){
        oldSvg.parentNode.removeChild(oldSvg);
    }

    document.body.appendChild(svg);
}

initDOM();
