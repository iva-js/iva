
declare module Iva {

    module Buffer {
        class Default {
            constructor(chart: Iva.Chart);
            dirty(dirty: Boolean);
            frozen(frozen: Boolean);
        }

        class Instant extends Iva.Buffer.Default {
        }
    }

    module Inner {
        interface RenderObject {
            data: {
                areas?: Iva.Store;
                columns?: Iva.Store;
                lines?: Iva.Store;
                pies?: Iva.Store;
            }
        }
    }

    class Chart {
        constructor(dataObject: Iva.DataObject, optionObject: Iva.OptionObject);
        redraw();
    }

    interface Color {

    }

    class DataObject extends Iva.Obj {
        constructor(d: Iva.DataObjectOption);
    }

    interface DataObjectOption {

    }

    interface Field {
        query: String,
        value: any
    }

    interface Store {
        dirty: Boolean;
        values: Array<Iva.StoreValues>;
    }

    interface StoreValues {
        dirty: Boolean;
        values: Array<Iva.Value>;
    }

    class Obj implements Parent {
        constructor(d: Iva.ObjOption, parent: Iva.Parent);
        dirty(dorty: Boolean);
        field(query: string, value?: any): any;
    }

    interface ObjOption {
        fields: Array<Iva.Field>;
    }

    class OptionObject extends Iva.Obj {
        constructor(d: Iva.OptionObjectOption);
    }

    interface OptionObjectOption {

    }

    interface Parent {
        dirty(dirty: Boolean);
    }

    interface Value {
        y: Number;
        x?: Number;
        color?: Iva.Color;
        label?: String
    }

    /*
     * CONSTANTS
     */
    class INTERPOLATE {
        static LINEAR: string;
        static CARDINAL: string;
        static MONOTONE: string;
    }
}

