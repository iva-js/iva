import _ from "underscore";

export function option(value, _default){
    if(value === undefined){
        return _default;
    }
    return value;
}

export function copy(el){
    if(Array.isArray(el)){
        return copyArray(el);
    } else if(typeof el === "object"){
        return copyObject(el);
    } else if(typeof el === "string"){
        return copyString(el);
    } else {
        return el;
    }
}

export function copyObject(obj){
    let copyObj = {};

    for(let key in obj){
        let el = obj[key];
        
        copyObj[key] = copy(el);
    }

    return copyObj;
}

export function copyArray(arr){
    let copyArr = [];

    for(let i = 0; i < arr.length; i++){
        let el = arr[i];

        copyArr.push(copy(el));
    }

    return copyArr;
}

export function copyString(string){
    return string.slice(0);
}

// Taken from jQuery code
export function isNumeric(obj){
    return !Array.isArray(obj) && (obj - parseFloat( obj ) + 1) >= 0;
}
