
export function visibility(b){
    if(b){
        return "visible";
    } else {
        return "hidden";
    }
}


export function generateExplode(explodeRadius){
    return function explode(d, index) {
      var angle = (d.startAngle + d.endAngle) / 2;
      var xOff = Math.sin(angle) * explodeRadius;
      var yOff = -Math.cos(angle) * explodeRadius;
      return 'translate(' + xOff + ',' + yOff +')';
    }    
}
