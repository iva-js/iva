
declare module Iva {

    module Buffer {
        class Default {
            constructor(chart: Iva.Chart);
            dirty(dirty: Boolean);
            freeze(freeze: Boolean);
        }

        class Instant extends Iva.Buffer.Default {
        }
    }

    class Chart {
        constructor(dataObject: Iva.DataObject, optionObject: Iva.OptionObject);
        redraw();
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
}
