import _ from "underscore";

export function option(value, _default){
    if(value === undefined){
        return _default;
    }
    return value;
}

/*
 * Function for copying
 */

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

/*
 * Functions for checking if value is some type
 */

// Taken from jQuery code
export function isNumeric(obj){
    return !Array.isArray(obj) && (obj - parseFloat( obj ) + 1) >= 0;
}

export function isObject(obj){
    return typeof obj === "object";
}

export function isArray(obj){
    return Array.isArray(obj);
}

export function isString(obj){
    return typeof obj === "string";
}

export function isFunction(obj){
    return typeof obj === "function";
}

export function isUndefined(obj){
    return obj === undefined;
}

export function isDefined(obj){
    return obj !== undefined;
}

/*
 * Transformers
 */

export function toString(obj){
    if(typeof obj === "object"){
        return objToString(obj);
    } else {
        throw new Error(`Can't convert ${typeof obj} to string`);
    }
}

export function toInt(obj){
    return parseInt(obj);
}

export function objToString(obj){
    return JSON.stringify(obj, null, 8);
}

/*
 * Throw if x is not y type
 */

export function throwIfUndefined(v, msg){
    msg = option(msg, v);
    if(isUndefined(v)){
        throw new TypeError(`${msg} shouldn't be undefined`);
    }
}

export function throwIfNotNumeric(v, msg){
    msg = option(msg, v);
    if(!isNumeric(v)){
        throw new TypeError(`${msg} should be number and not ${typeof v}`);
    }
}

export function throwIfNotArray(v, msg){
    msg = option(msg, v);
    if(!isArray(v)){
        throw new TypeError(`${msg} should be array and not ${typeof v}`);
    }
}

export function throwIfNotObject(v, msg){
    msg = option(msg, v);
    if(!isObject(v)){
        throw new TypeError(`${msg} should be object and not ${typeof v}`);
    }
}

export function throwIfNotString(v, msg){
    msg = option(msg, v);
    if(!isString(v)){
        throw new TypeError(`${msg} shoud be string and not ${typeof v}`);
    }
}

export function throwIfNotFunction(v, msg){
    msg = option(msg, v);
    if(!isFunction(v)){
        throw new TypeError(`${msg} should be function and not ${typeof v}`);
    }
}

/*
 * Object manipulation 
 */

/*
 * Returns new object that has values of second object merged into values of first.
 * {                       {                {
 *     a: 10,        <---      a: 15,   =       a: 15,
 *     b: undefined, <---      b: 5     =       b: 5,
 *     c: 20         <---               =       c: 20
 * }                       }                }
 */
export function merge(o1, o2){
    let o = {};

    for(let key in o1){
        o[key] = o1[key];
    }

    for(let key in o2){
        o[key] = o2[key];
    }
    return o;
}
