
export function generateValues(a){
    let r = {
        values: []
    };

    for (let values of a) {
        let tmp = {
            values: []
        };

        for (let i = 0; i < values.length; i++) {
            tmp.values.push({
                y: values[i],
                y0: 0,
                x: i
            })
        }

        r.values.push(tmp);
    }

    return r;

}
