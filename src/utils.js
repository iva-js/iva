
export function option(value, _default){
    if(value === undefined){
        return _default;
    }
    return value;
}
