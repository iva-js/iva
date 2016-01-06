(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("d3"));
	else if(typeof define === 'function' && define.amd)
		define("Iva", ["d3"], factory);
	else if(typeof exports === 'object')
		exports["Iva"] = factory(require("d3"));
	else
		root["Iva"] = factory(root["d3"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_25__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MODE = exports.INTERPOLATE = exports.Buffer = exports.Chart = exports.OptionObject = exports.DataObject = undefined;
	exports.generateBasicChart = generateBasicChart;
	exports.generateInstantChart = generateInstantChart;
	
	var _dataObject = __webpack_require__(1);
	
	var _dataObject2 = _interopRequireDefault(_dataObject);
	
	var _optionObject = __webpack_require__(4);
	
	var _optionObject2 = _interopRequireDefault(_optionObject);
	
	var _chart = __webpack_require__(13);
	
	var _chart2 = _interopRequireDefault(_chart);
	
	var _default = __webpack_require__(22);
	
	var _default2 = _interopRequireDefault(_default);
	
	var _instant = __webpack_require__(23);
	
	var _instant2 = _interopRequireDefault(_instant);
	
	var _constants = __webpack_require__(29);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Buffer = {
	    Default: _default2.default,
	    Instant: _instant2.default
	};
	
	function generateBasicChart() {
	    var buffer = new Buffer.Default();
	    var data = new _dataObject2.default({}, buffer);
	    var option = new _optionObject2.default({}, buffer);
	    var chart = new _chart2.default(data, option, buffer);
	
	    return chart;
	}
	
	function generateInstantChart() {
	    var buffer = new Buffer.Instant();
	    var data = new _dataObject2.default({}, buffer);
	    var option = new _optionObject2.default({}, buffer);
	    var chart = new _chart2.default(data, option, buffer);
	
	    return chart;
	}
	
	exports.DataObject = _dataObject2.default;
	exports.OptionObject = _optionObject2.default;
	exports.Chart = _chart2.default;
	exports.Buffer = Buffer;
	exports.INTERPOLATE = _constants.INTERPOLATE;
	exports.MODE = _constants.MODE;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _object = __webpack_require__(2);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * DataObject is basicly a table where columns are sequences and rows are xs.
	 * Columns are determined by their ids that must be strings.
	 * Rows are determined by the value of their xs. X can either be number or string.
	 * Columns and rows are not sorted in any way and stored in the order they were added.
	 *
	 * Note that not every set method calls dirty(true) itself but rather calls other methods that will.
	 * This is done for not calling dirty(true) extra times. E.g. calling addColumn([...]) will always call setValuesToColumn([...]),
	 * and then it will call dirty(true).
	 */
	
	var DataObject = (function (_Obj) {
	    _inherits(DataObject, _Obj);
	
	    function DataObject(d, parent) {
	        _classCallCheck(this, DataObject);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DataObject).call(this, d, parent));
	
	        var __ = _this.__;
	
	        var table = __.table = new Map();
	
	        d = (0, _utils.option)(d, {});
	
	        d.columns = (0, _utils.option)(d.columns, []);
	        d.rows = (0, _utils.option)(d.rows, []);
	
	        _this.columns(d.columns);
	        _this.addRows(d.rows);
	
	        return _this;
	    }
	
	    _createClass(DataObject, [{
	        key: "clear",
	        value: function clear() {
	            this.__.table.clear();
	            this.dirty(true);
	            return this;
	        }
	    }, {
	        key: "columns",
	        value: function columns(_columns) {
	            var __ = this.__;
	
	            if (_columns === undefined) {
	                return __.table;
	            }
	
	            this.clear();
	            this.addColumns(_columns);
	
	            return this;
	        }
	    }, {
	        key: "column",
	        value: function column(id, values) {
	            var __ = this.__;
	
	            if (values === undefined) {
	                return __.table.get(id);
	            } else {
	                this.emptyColumn(id);
	                this.setValuesToColumn(id, values);
	                return this;
	            }
	        }
	    }, {
	        key: "addColumns",
	        value: function addColumns(columns) {
	            var _this2 = this;
	
	            var __ = this.__;
	
	            if (!Array.isArray(columns)) {
	                throw new TypeError("Columns should be array and not " + (typeof columns === "undefined" ? "undefined" : _typeof(columns)));
	            }
	
	            columns.forEach(function (column) {
	                _this2.addColumn(column.id, column.values);
	            });
	
	            return this;
	        }
	    }, {
	        key: "addColumn",
	        value: function addColumn(id, values) {
	            var table = this.__.table;
	
	            (0, _utils.throwIfNotString)(id, "Column id");
	
	            (0, _utils.throwIfNotArray)(values, "Column values");
	
	            if (this.column(id) !== undefined) {
	                throw new Error("Columns can't have equals ids but " + id + " is presented twice");
	            }
	
	            var newColumn = new Map();
	
	            table.set(id, newColumn);
	
	            this.setValuesToColumn(id, values);
	
	            return this.column(id);
	        }
	    }, {
	        key: "columnValue",
	        value: function columnValue(id, x, value) {
	            if (value === undefined) {
	                return this.column(id).get(x);
	            } else {
	                var column = this.column(id);
	
	                if (column === undefined) {
	                    column = this.addEmptyColumn(id);
	                }
	
	                column.set(x, this.__value(value));
	            }
	
	            this.dirty(true);
	
	            return this;
	        }
	    }, {
	        key: "setValuesToColumn",
	        value: function setValuesToColumn(id, values) {
	            (0, _utils.throwIfNotString)(id, "Column id");
	
	            (0, _utils.throwIfNotArray)(values, "Column values");
	
	            var column = this.column(id);
	
	            (0, _utils.throwIfUndefined)(column, "Can't set values to undefined column");
	
	            for (var i = 0; i < values.length; i++) {
	                var value = values[i];
	                if ((0, _utils.isUndefined)(value.x)) {
	                    column.set(i, this.__value(value));
	                } else {
	                    column.set(value.x, this.__value(value));
	                }
	            }
	
	            this.dirty(true);
	
	            return this;
	        }
	    }, {
	        key: "addEmptyColumn",
	        value: function addEmptyColumn(id) {
	            return this.addColumn(id, []);
	        }
	    }, {
	        key: "emptyColumn",
	        value: function emptyColumn(id) {
	            (0, _utils.throwIfNotString)(id, "Column id");
	
	            var column = this.column(id);
	
	            if (column) {
	                column.clear();
	            } else {
	                this.addEmptyColumn(id);
	            }
	
	            this.dirty();
	
	            return this;
	        }
	    }, {
	        key: "removeColumn",
	        value: function removeColumn(id) {
	            this.__.table.delete(id);
	
	            this.dirty(true);
	
	            return this;
	        }
	    }, {
	        key: "rows",
	        value: function rows(_rows) {
	            if (_rows === undefined) {
	                return this.toRows();
	            }
	
	            (0, _utils.throwIfNotArray)(_rows, "Rows");
	
	            this.clear();
	            this.addRows(_rows);
	
	            return this;
	        }
	    }, {
	        key: "addRows",
	        value: function addRows(rows) {
	            var _this3 = this;
	
	            (0, _utils.throwIfNotArray)(rows, "Rows");
	            rows.forEach(function (row) {
	                _this3.row(row.x, row.values);
	            });
	
	            return this;
	        }
	    }, {
	        key: "row",
	        value: function row(x, values) {
	            (0, _utils.throwIfUndefined)(x, "Row x");
	
	            this.emptyRow(x);
	
	            this.addValuesToRow(x, values);
	
	            return this;
	        }
	    }, {
	        key: "addValuesToRow",
	        value: function addValuesToRow(x, values) {
	            var _this4 = this;
	
	            (0, _utils.throwIfUndefined)(x, "Row x");
	            (0, _utils.throwIfNotArray)(values, "Row values");
	
	            values.forEach(function (value) {
	                _this4.columnValue(value.id, x, value);
	            });
	
	            return this;
	        }
	    }, {
	        key: "emptyRow",
	        value: function emptyRow(x) {
	            var table = this.__.table;
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = table[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var _step$value = _slicedToArray(_step.value, 2);
	
	                    var i = _step$value[0];
	                    var column = _step$value[1];
	
	                    if (column.has(x)) {
	                        column.delete(x);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            this.dirty(true);
	
	            return this;
	        }
	    }, {
	        key: "toRows",
	        value: function toRows() {
	            var table = this.__.table;
	
	            var rows = new Map();
	
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = table[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var _step2$value = _slicedToArray(_step2.value, 2);
	
	                    var i = _step2$value[0];
	                    var column = _step2$value[1];
	                    var _iteratorNormalCompletion3 = true;
	                    var _didIteratorError3 = false;
	                    var _iteratorError3 = undefined;
	
	                    try {
	                        for (var _iterator3 = column[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                            var _step3$value = _slicedToArray(_step3.value, 2);
	
	                            var x = _step3$value[0];
	                            var value = _step3$value[1];
	
	                            if (rows.has(x)) {
	                                rows.get(x).set(i, value);
	                            } else {
	                                rows.set(x, new Map([[i, value]]));
	                            }
	                        }
	                    } catch (err) {
	                        _didIteratorError3 = true;
	                        _iteratorError3 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                                _iterator3.return();
	                            }
	                        } finally {
	                            if (_didIteratorError3) {
	                                throw _iteratorError3;
	                            }
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	
	            return rows;
	        }
	    }, {
	        key: "copy",
	        value: function copy() {}
	    }, {
	        key: "isEmpty",
	        value: function isEmpty() {
	            return this.__.table.size === 0;
	        }
	
	        /*
	         * Gets next available x in column with given id.
	         * Say column is [{ x: 10 }, { x: 11 }, { x: 22 }].
	         * The result will be 23 as it is the next x in this column.
	         */
	
	    }, {
	        key: "__getNextX",
	        value: function __getNextX(id) {
	            var column = this.column(id);
	            var m = -1;
	
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;
	
	            try {
	                for (var _iterator4 = column[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var _step4$value = _slicedToArray(_step4.value, 2);
	
	                    var i = _step4$value[0];
	                    var value = _step4$value[1];
	
	                    var x = (0, _utils.isUndefined)(column.x) ? i : column.x;
	                    if (x > m) {
	                        m = x;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }
	
	            return (0, _utils.toInt)(m) + 1;
	        }
	    }, {
	        key: "__value",
	        value: function __value(v) {
	            if ((0, _utils.isObject)(v)) {
	                var obj = {};
	
	                // This is done for memory efficiency so we don't have smth like
	                // {
	                //     y: 10,
	                //     x: undefined,
	                //     label: undefined,
	                //     color: undefined
	                // }
	
	                if (!(0, _utils.isUndefined)(v.y)) {
	                    obj.y = v.y;
	                }
	                if (!(0, _utils.isUndefined)(v.x)) {
	                    obj.x = v.x;
	                }
	                if (!(0, _utils.isUndefined)(v.label)) {
	                    obj.label = v.label;
	                }
	                if (!(0, _utils.isUndefined)(v.color)) {
	                    obj.color = v.color;
	                }
	                return obj;
	            }
	
	            if ((0, _utils.isNumeric)(v)) {
	                return {
	                    y: v
	                };
	            }
	        }
	    }]);
	
	    return DataObject;
	})(_object2.default);
	
	exports.default = DataObject;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(3);
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Obj = (function () {
	    function Obj(d, parent) {
	        _classCallCheck(this, Obj);
	
	        if (parent === undefined) {
	            throw new Error("Where are your parents " + (0, _utils.toString)(d) + "?!");
	        }
	
	        this.__init(d, parent);
	    }
	
	    _createClass(Obj, [{
	        key: "__init",
	        value: function __init(d, parent) {
	            var _this = this;
	
	            var __ = this.__ = {
	                dirty: true,
	                parent: parent
	            };
	
	            d = (0, _utils.option)(d, {});
	
	            if (d.fields) {
	                d.fields.forEach(function (field) {
	                    _this.setField(field.query, field.value);
	                });
	            }
	        }
	    }, {
	        key: "dirty",
	        value: function dirty(d) {
	            var __ = this.__;
	            if (d === undefined) {
	                return __.dirty;
	            }
	            __.dirty = d;
	            if (d === true) {
	                __.parent.dirty(true);
	            }
	
	            return this;
	        }
	
	        /**
	         * Fields are used for storing additional data that can be used by custom data handlers.
	         * Query is string in formart "a.b.c".
	         */
	
	    }, {
	        key: "field",
	        value: function field(query, value) {
	            if (value === undefined) {
	                return this.getField(query);
	            } else {
	                return this.setField(query, value);
	            }
	        }
	    }, {
	        key: "getField",
	        value: function getField(query, obj) {
	            var __ = this.__;
	
	            if (typeof query !== "string") {
	                throw new TypeError("Query should be string and not " + (typeof query === "undefined" ? "undefined" : _typeof(query)));
	            }
	
	            if (__.fields === undefined) {
	                return undefined;
	            }
	
	            if (obj === undefined) {
	                obj = __.fields;
	            }
	
	            var q = query.split(".");
	
	            if (q.length === 1) {
	                return obj[query];
	            }
	
	            return this.getField(q.slice(1).join("."), obj[q[0]]);
	        }
	    }, {
	        key: "setField",
	        value: function setField(query, value, obj) {
	            var __ = this.__;
	
	            if (typeof query !== "string") {
	                throw new TypeError("Query should be string and not " + (typeof query === "undefined" ? "undefined" : _typeof(query)));
	            }
	
	            if (__.fields === undefined) {
	                __.fields = {};
	            }
	
	            if (obj === undefined) {
	                obj = __.fields;
	            }
	
	            if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== "object") {
	                throw new TypeError("Can't set value to non-object field " + obj);
	            }
	
	            var q = query.split(".");
	
	            if (q.length === 1) {
	                return obj[query] = value;
	            }
	
	            if (obj[q[0]] === undefined) {
	                obj[q[0]] = {};
	            }
	
	            this.setField(q.slice(1).join("."), value, obj[q[0]]);
	        }
	
	        /*
	         * Options and getDefault should be implemented in
	         * child classes.
	         */
	
	    }, {
	        key: "setDefault",
	        value: function setDefault() {
	            this.options(this.getDefault());
	        }
	    }]);
	
	    return Obj;
	})();
	
	exports.default = Obj;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.option = option;
	exports.copy = copy;
	exports.copyObject = copyObject;
	exports.copyArray = copyArray;
	exports.copyString = copyString;
	exports.isNumeric = isNumeric;
	exports.isObject = isObject;
	exports.isArray = isArray;
	exports.isString = isString;
	exports.isFunction = isFunction;
	exports.isUndefined = isUndefined;
	exports.isDefined = isDefined;
	exports.toString = toString;
	exports.toInt = toInt;
	exports.objToString = objToString;
	exports.throwIfUndefined = throwIfUndefined;
	exports.throwIfNotNumeric = throwIfNotNumeric;
	exports.throwIfNotArray = throwIfNotArray;
	exports.throwIfNotObject = throwIfNotObject;
	exports.throwIfNotString = throwIfNotString;
	exports.throwIfNotFunction = throwIfNotFunction;
	exports.merge = merge;
	exports.isEmpty = isEmpty;
	exports.debug = debug;
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	function option(value, _default) {
	    if (value === undefined) {
	        return _default;
	    }
	    return value;
	}
	
	/*
	 * Function for copying
	 */
	
	function copy(el) {
	    if (Array.isArray(el)) {
	        return copyArray(el);
	    } else if ((typeof el === "undefined" ? "undefined" : _typeof(el)) === "object") {
	        return copyObject(el);
	    } else if (typeof el === "string") {
	        return copyString(el);
	    } else {
	        return el;
	    }
	}
	
	function copyObject(obj) {
	    var copyObj = {};
	
	    for (var key in obj) {
	        var el = obj[key];
	
	        copyObj[key] = copy(el);
	    }
	
	    return copyObj;
	}
	
	function copyArray(arr) {
	    var copyArr = [];
	
	    for (var i = 0; i < arr.length; i++) {
	        var el = arr[i];
	
	        copyArr.push(copy(el));
	    }
	
	    return copyArr;
	}
	
	function copyString(string) {
	    return string.slice(0);
	}
	
	/*
	 * Functions for checking if value is some type
	 */
	
	// Taken from jQuery code
	function isNumeric(obj) {
	    return !Array.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;
	}
	
	function isObject(obj) {
	    return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object";
	}
	
	function isArray(obj) {
	    return Array.isArray(obj);
	}
	
	function isString(obj) {
	    return typeof obj === "string";
	}
	
	function isFunction(obj) {
	    return typeof obj === "function";
	}
	
	function isUndefined(obj) {
	    return obj === undefined;
	}
	
	function isDefined(obj) {
	    return obj !== undefined;
	}
	
	/*
	 * Transformers
	 */
	
	function toString(obj) {
	    if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
	        return objToString(obj);
	    } else {
	        return obj;
	    }
	}
	
	function toInt(obj) {
	    return parseInt(obj);
	}
	
	function objToString(obj) {
	    return JSON.stringify(obj, null, 8);
	}
	
	/*
	 * Throw if x is not y type
	 */
	
	function throwIfUndefined(v, msg) {
	    msg = option(msg, v);
	    if (isUndefined(v)) {
	        throw new TypeError(msg + " shouldn't be undefined");
	    }
	}
	
	function throwIfNotNumeric(v, msg) {
	    msg = option(msg, v);
	    if (!isNumeric(v)) {
	        throw new TypeError(msg + " should be number and not " + (typeof v === "undefined" ? "undefined" : _typeof(v)));
	    }
	}
	
	function throwIfNotArray(v, msg) {
	    msg = option(msg, v);
	    if (!isArray(v)) {
	        throw new TypeError(msg + " should be array and not " + (typeof v === "undefined" ? "undefined" : _typeof(v)));
	    }
	}
	
	function throwIfNotObject(v, msg) {
	    msg = option(msg, v);
	    if (!isObject(v)) {
	        throw new TypeError(msg + " should be object and not " + (typeof v === "undefined" ? "undefined" : _typeof(v)));
	    }
	}
	
	function throwIfNotString(v, msg) {
	    msg = option(msg, v);
	    if (!isString(v)) {
	        throw new TypeError(msg + " shoud be string and not " + (typeof v === "undefined" ? "undefined" : _typeof(v)));
	    }
	}
	
	function throwIfNotFunction(v, msg) {
	    msg = option(msg, v);
	    if (!isFunction(v)) {
	        throw new TypeError(msg + " should be function and not " + (typeof v === "undefined" ? "undefined" : _typeof(v)));
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
	function merge(o1, o2) {
	    var o = {};
	
	    for (var key in o1) {
	        o[key] = o1[key];
	    }
	
	    for (var key in o2) {
	        o[key] = o2[key];
	    }
	    return o;
	}
	
	function isEmpty(obj) {
	    return isUndefined(obj) || obj.length === 0;
	}
	
	/*
	 * Debug
	 */
	
	function debug(msg) {
	    console.debug(toString(msg));
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _object = __webpack_require__(2);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _size = __webpack_require__(5);
	
	var _size2 = _interopRequireDefault(_size);
	
	var _axes = __webpack_require__(6);
	
	var _axes2 = _interopRequireDefault(_axes);
	
	var _legend = __webpack_require__(7);
	
	var _legend2 = _interopRequireDefault(_legend);
	
	var _area = __webpack_require__(8);
	
	var _area2 = _interopRequireDefault(_area);
	
	var _line = __webpack_require__(9);
	
	var _line2 = _interopRequireDefault(_line);
	
	var _bar = __webpack_require__(10);
	
	var _bar2 = _interopRequireDefault(_bar);
	
	var _pie = __webpack_require__(11);
	
	var _pie2 = _interopRequireDefault(_pie);
	
	var _utils = __webpack_require__(3);
	
	var _presets = __webpack_require__(12);
	
	var _presets2 = _interopRequireDefault(_presets);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var OptionObject = (function (_Obj) {
	    _inherits(OptionObject, _Obj);
	
	    function OptionObject(d, parent) {
	        _classCallCheck(this, OptionObject);
	
	        d = (0, _utils.option)(d, {});
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OptionObject).call(this, d, parent));
	
	        _this.size = new _size2.default(d.size, _this);
	
	        _this.handler = d.handler;
	
	        _this.axes = new _axes2.default(d.axes, _this);
	
	        _this.legend = new _legend2.default(d.legend, _this);
	
	        _this.area = new _area2.default(d.area, _this);
	        _this.line = new _line2.default(d.line, _this);
	        _this.bar = new _bar2.default(d.bar, _this);
	        _this.pie = new _pie2.default(d.pie, _this);
	
	        _this.setDefault();
	        _this.options(d);
	
	        var presets = (0, _utils.option)(d.presets, []);
	        _this.setPresets(presets);
	        _this.applyPresets();
	        return _this;
	    }
	
	    _createClass(OptionObject, [{
	        key: "__init",
	        value: function __init(d, parent) {
	            this.__ = {
	                parent: parent,
	                dirty: true,
	                mode: "normal"
	            };
	        }
	    }, {
	        key: "options",
	        value: function options(d) {
	            if ((0, _utils.isUndefined)(d)) {
	                return {
	                    mode: this.mode(),
	                    easel: this.easel()
	                };
	            }
	
	            this.mode(d.mode);
	            this.easel(d.easel);
	
	            return this;
	        }
	    }, {
	        key: "easel",
	        value: function easel(_easel) {
	            var __ = this.__;
	
	            if ((0, _utils.isUndefined)(_easel)) {
	                return __.easel;
	            }
	
	            __.easel = _easel;
	
	            this.dirty(true);
	
	            return this;
	        }
	    }, {
	        key: "mode",
	        value: function mode(_mode) {
	            var __ = this.__;
	            if ((0, _utils.isUndefined)(_mode)) {
	                return __.mode;
	            }
	
	            __.mode = _mode;
	
	            this.dirty(true);
	
	            return this;
	        }
	    }, {
	        key: "copy",
	        value: function copy() {
	            return new OptionObject(this);
	        }
	    }, {
	        key: "setPresets",
	        value: function setPresets(prs) {
	            var _this2 = this;
	
	            (0, _utils.throwIfNotArray)(prs, "Presets");
	
	            this.presets = [];
	
	            prs.forEach(function (preset) {
	                if ((0, _utils.isFunction)(preset)) {
	                    _this2.presets.push(preset);
	                } else {
	                    _this2.presets.push(_presets2.default[preset]);
	                }
	            });
	
	            return this;
	        }
	    }, {
	        key: "applyPresets",
	        value: function applyPresets() {
	            var _this3 = this;
	
	            this.presets.forEach(function (preset) {
	                preset(_this3);
	            });
	        }
	    }, {
	        key: "setDefault",
	        value: function setDefault() {
	            this.options(this.getDefault());
	        }
	    }, {
	        key: "getDefault",
	        value: function getDefault() {
	            return {
	                easel: "#chart",
	                mode: "normal"
	            };
	        }
	    }]);
	
	    return OptionObject;
	})(_object2.default);
	
	exports.default = OptionObject;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _object = __webpack_require__(2);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Size = (function (_Obj) {
	    _inherits(Size, _Obj);
	
	    function Size(d, parent) {
	        _classCallCheck(this, Size);
	
	        d = (0, _utils.option)(d, {});
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Size).call(this, d, parent));
	
	        _this.setDefault();
	        _this.sizes(d);
	        return _this;
	    }
	
	    _createClass(Size, [{
	        key: "__init",
	        value: function __init(d, parent) {
	            this.__ = {
	                parent: parent
	            };
	        }
	    }, {
	        key: "sizes",
	        value: function sizes(d) {
	            var __ = this.__;
	
	            if (d === undefined) {
	                return {
	                    width: this.width(),
	                    height: this.height()
	                };
	            }
	
	            this.width(d.width);
	            this.height(d.height);
	        }
	    }, {
	        key: "width",
	        value: function width(_width) {
	            var __ = this.__;
	            if (_width === undefined) {
	                return __.width;
	            }
	
	            __.width = _width;
	            this.dirty(true);
	        }
	    }, {
	        key: "height",
	        value: function height(_height) {
	            var __ = this.__;
	            if (_height === undefined) {
	                return __.height;
	            }
	
	            __.height = _height;
	            this.dirty(true);
	        }
	    }, {
	        key: "setDefault",
	        value: function setDefault() {
	            this.sizes(this.getDefault());
	        }
	    }, {
	        key: "getDefault",
	        value: function getDefault() {
	            return {
	                width: 800,
	                height: 600
	            };
	        }
	    }]);
	
	    return Size;
	})(_object2.default);
	
	exports.default = Size;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _object = __webpack_require__(2);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Axes = (function (_Obj) {
	    _inherits(Axes, _Obj);
	
	    function Axes(d, parent) {
	        _classCallCheck(this, Axes);
	
	        d = (0, _utils.option)(d, {});
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Axes).call(this, d, parent));
	
	        var x = (0, _utils.option)(d.x, {});
	        var y = (0, _utils.option)(d.y, {});
	        var both = (0, _utils.option)(d.both, {});
	
	        _this.x = new XAxis((0, _utils.merge)(both, x), _this);
	        _this.y = new YAxis((0, _utils.merge)(both, y), _this);
	        _this.both = new Both(_this);
	        return _this;
	    }
	
	    return Axes;
	})(_object2.default);
	
	exports.default = Axes;
	
	var Axis = (function (_Obj2) {
	    _inherits(Axis, _Obj2);
	
	    function Axis(d, parent) {
	        _classCallCheck(this, Axis);
	
	        d = (0, _utils.option)(d, {});
	
	        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Axis).call(this, d, parent));
	
	        _this2.setDefault();
	        _this2.options(d);
	        return _this2;
	    }
	
	    _createClass(Axis, [{
	        key: "options",
	        value: function options(d) {
	            this.visible(d.visible);
	        }
	    }, {
	        key: "visible",
	        value: function visible(_visible) {
	            var __ = this.__;
	
	            if ((0, _utils.isUndefined)(_visible)) {
	                return __.visible;
	            }
	
	            __.visible = _visible;
	            this.dirty(true);
	        }
	    }, {
	        key: "show",
	        value: function show() {
	            this.visible(true);
	        }
	    }, {
	        key: "hide",
	        value: function hide() {
	            this.visible(false);
	        }
	    }, {
	        key: "setDefault",
	        value: function setDefault() {
	            this.options(this.getDefault());
	        }
	    }, {
	        key: "getDefault",
	        value: function getDefault() {
	            return {
	                visible: false
	            };
	        }
	    }]);
	
	    return Axis;
	})(_object2.default);
	
	/*
	 * This is kinda weird object that just calls both X and Y axis APIs (but first checks, if it is possible, so you can't
	 * call both.position("right") and hope it will work, since horizontal axis can't be right or left.
	 */
	
	var Both = (function () {
	    function Both(proxy) {
	        _classCallCheck(this, Both);
	
	        this.__ = {
	            proxy: proxy
	        };
	    }
	
	    _createClass(Both, [{
	        key: "show",
	        value: function show() {
	            var proxy = this.__.proxy;
	            proxy.x.show();
	            proxy.y.show();
	        }
	    }, {
	        key: "hide",
	        value: function hide() {
	            var proxy = this.__.proxy;
	            proxy.x.hide();
	            proxy.y.hide();
	        }
	    }]);
	
	    return Both;
	})();
	
	var XAxis = (function (_Axis) {
	    _inherits(XAxis, _Axis);
	
	    function XAxis() {
	        _classCallCheck(this, XAxis);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(XAxis).apply(this, arguments));
	    }
	
	    return XAxis;
	})(Axis);
	
	var YAxis = (function (_Axis2) {
	    _inherits(YAxis, _Axis2);
	
	    function YAxis() {
	        _classCallCheck(this, YAxis);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(YAxis).apply(this, arguments));
	    }
	
	    return YAxis;
	})(Axis);
	
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _object = __webpack_require__(2);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Legend = (function (_Obj) {
	    _inherits(Legend, _Obj);
	
	    function Legend(d, parent) {
	        _classCallCheck(this, Legend);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Legend).call(this, d, parent));
	
	        _this.setDefault();
	        _this.options(d);
	        return _this;
	    }
	
	    _createClass(Legend, [{
	        key: "options",
	        value: function options(d) {
	            if ((0, _utils.isUndefined)(d)) {
	                return {
	                    visible: this.visible(),
	                    width: this.width(),
	                    height: this.height()
	                };
	            }
	
	            this.visible(d.visible);
	            this.width(d.width);
	            this.height(d.height);
	        }
	    }, {
	        key: "visible",
	        value: function visible(_visible) {
	            var __ = this.__;
	
	            if ((0, _utils.isUndefined)(_visible)) {
	                return __.visible;
	            }
	
	            __.visible = _visible;
	
	            this.dirty(true);
	            return this;
	        }
	    }, {
	        key: "width",
	        value: function width(_width) {
	            var __ = this.__;
	
	            if ((0, _utils.isUndefined)(_width)) {
	                return __.width;
	            }
	
	            __.width = _width;
	
	            this.dirty(true);
	            return this;
	        }
	    }, {
	        key: "height",
	        value: function height(_height) {
	            var __ = this.__;
	
	            if ((0, _utils.isUndefined)(_height)) {
	                return __.height;
	            }
	
	            __.height = _height;
	
	            this.dirty(true);
	            return this;
	        }
	    }, {
	        key: "getDefault",
	        value: function getDefault() {
	            return {
	                visible: false,
	                height: 40,
	                width: 120
	            };
	        }
	    }]);
	
	    return Legend;
	})(_object2.default);
	
	exports.default = Legend;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _object = __webpack_require__(2);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Area = (function (_Obj) {
	    _inherits(Area, _Obj);
	
	    function Area(d, parent) {
	        _classCallCheck(this, Area);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Area).call(this, d, parent));
	
	        _this.setDefault();
	        _this.options(d);
	        return _this;
	    }
	
	    _createClass(Area, [{
	        key: "options",
	        value: function options(d) {
	            if ((0, _utils.isUndefined)(d)) {
	                return {
	                    points: this.points(),
	                    interpolate: this.interpolate()
	                };
	            }
	
	            this.points(d.points);
	        }
	    }, {
	        key: "points",
	        value: function points(_points) {
	            var __ = this.__;
	
	            if ((0, _utils.isUndefined)(_points)) {
	                return __.points;
	            }
	
	            __.points = _points;
	
	            this.dirty(true);
	            return this;
	        }
	    }, {
	        key: "interpolate",
	        value: function interpolate(_interpolate) {
	            var __ = this.__;
	
	            if ((0, _utils.isUndefined)(_interpolate)) {
	                return __.interpolate;
	            }
	
	            __.interpolate = _interpolate;
	
	            this.dirty(true);
	            return this;
	        }
	    }, {
	        key: "getDefault",
	        value: function getDefault() {
	            return {
	                points: false,
	                interpolate: "linear"
	            };
	        }
	    }]);
	
	    return Area;
	})(_object2.default);
	
	exports.default = Area;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _object = __webpack_require__(2);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Line = (function (_Obj) {
	    _inherits(Line, _Obj);
	
	    function Line(d, parent) {
	        _classCallCheck(this, Line);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Line).call(this, d, parent));
	
	        _this.setDefault();
	        _this.options(d);
	        return _this;
	    }
	
	    _createClass(Line, [{
	        key: "options",
	        value: function options(d) {
	            if ((0, _utils.isUndefined)(d)) {
	                return {
	                    points: this.points(),
	                    interpolate: this.interpolate()
	                };
	            }
	
	            this.points(d.points);
	        }
	    }, {
	        key: "points",
	        value: function points(_points) {
	            var __ = this.__;
	
	            if ((0, _utils.isUndefined)(_points)) {
	                return __.points;
	            }
	
	            __.points = _points;
	
	            this.dirty(true);
	            return this;
	        }
	    }, {
	        key: "interpolate",
	        value: function interpolate(_interpolate) {
	            var __ = this.__;
	
	            if ((0, _utils.isUndefined)(_interpolate)) {
	                return __.interpolate;
	            }
	
	            __.interpolate = _interpolate;
	
	            this.dirty(true);
	            return this;
	        }
	    }, {
	        key: "getDefault",
	        value: function getDefault() {
	            return {
	                points: false,
	                interpolate: "linear"
	            };
	        }
	    }]);
	
	    return Line;
	})(_object2.default);
	
	exports.default = Line;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _object = __webpack_require__(2);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Bar = (function (_Obj) {
	    _inherits(Bar, _Obj);
	
	    function Bar(d, parent) {
	        _classCallCheck(this, Bar);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Bar).call(this, d, parent));
	
	        _this.setDefault();
	        _this.options(d);
	        return _this;
	    }
	
	    _createClass(Bar, [{
	        key: "options",
	        value: function options(d) {
	            if ((0, _utils.isUndefined)(d)) {
	                return {
	                    innerGap: this.innerGap(),
	                    outerGap: this.outerGap()
	                };
	            }
	
	            this.innerGap(d.innerGap);
	            this.outerGap(d.outerGap);
	        }
	    }, {
	        key: "innerGap",
	        value: function innerGap(_innerGap) {
	            var __ = this.__;
	
	            if ((0, _utils.isUndefined)(_innerGap)) {
	                return __.innerGap;
	            }
	
	            __.innerGap = _innerGap;
	
	            this.dirty(true);
	            return this;
	        }
	    }, {
	        key: "outerGap",
	        value: function outerGap(_outerGap) {
	            var __ = this.__;
	
	            if ((0, _utils.isUndefined)(_outerGap)) {
	                return __.outerGap;
	            }
	
	            __.outerGap = _outerGap;
	
	            this.dirty(true);
	            return this;
	        }
	    }, {
	        key: "getDefault",
	        value: function getDefault() {
	            return {
	                innerGap: 0,
	                outerGap: 0
	            };
	        }
	    }]);
	
	    return Bar;
	})(_object2.default);
	
	exports.default = Bar;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _object = __webpack_require__(2);
	
	var _object2 = _interopRequireDefault(_object);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Pie = (function (_Obj) {
	    _inherits(Pie, _Obj);
	
	    function Pie(d, parent) {
	        _classCallCheck(this, Pie);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Pie).call(this, d, parent));
	
	        _this.setDefault();
	        _this.options(d);
	        return _this;
	    }
	
	    _createClass(Pie, [{
	        key: "options",
	        value: function options(d) {
	            if ((0, _utils.isUndefined)(d)) {
	                return {
	                    innerRadius: this.innerRadius(),
	                    outerRadius: this.outerRadius(),
	                    explodeRadius: this.explodeRadius(),
	                    padAngle: this.padAngle(),
	                    turnAngle: this.turnAngle()
	                };
	            }
	            this.innerRadius(d.innerRadius);
	            this.outerRadius(d.outerRadius);
	            this.explodeRadius(d.explodeRadius);
	            this.padAngle(d.padAngle);
	            this.turnAngle(d.turnAngle);
	        }
	    }, {
	        key: "innerRadius",
	        value: function innerRadius(radius) {
	            var __ = this.__;
	
	            if ((0, _utils.isUndefined)(radius)) {
	                return __.innerRadius;
	            }
	
	            __.innerRadius = radius;
	            this.dirty(true);
	        }
	    }, {
	        key: "outerRadius",
	        value: function outerRadius(radius) {
	            var __ = this.__;
	
	            if ((0, _utils.isUndefined)(radius)) {
	                return __.outerRadius;
	            }
	
	            __.outerRadius = radius;
	            this.dirty(true);
	        }
	    }, {
	        key: "explodeRadius",
	        value: function explodeRadius(radius) {
	            var __ = this.__;
	
	            if ((0, _utils.isUndefined)(radius)) {
	                return __.explodeRadius;
	            }
	
	            __.explodeRadius = radius;
	            this.dirty(true);
	        }
	    }, {
	        key: "padAngle",
	        value: function padAngle(angle) {
	            var __ = this.__;
	
	            if ((0, _utils.isUndefined)(angle)) {
	                return __.padAngle;
	            }
	
	            __.padAngle = angle;
	            this.dirty(true);
	        }
	    }, {
	        key: "turnAngle",
	        value: function turnAngle(angle) {
	            var __ = this.__;
	
	            if ((0, _utils.isUndefined)(angle)) {
	                return __.turnAngle;
	            }
	
	            __.turnAngle = angle;
	            this.dirty(true);
	        }
	    }, {
	        key: "setDefault",
	        value: function setDefault() {
	            return this.options(this.getDefault());
	        }
	    }, {
	        key: "getDefault",
	        value: function getDefault() {
	            return {
	                innerRadius: 0,
	                outerRadius: 150,
	                explodeRadius: 0,
	                padAngle: 0,
	                turnAngle: 0
	            };
	        }
	    }]);
	
	    return Pie;
	})(_object2.default);
	
	exports.default = Pie;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var presets = {
	    "donut": function donut(option) {
	        var pie = option.pie;
	
	        pie.innerRadius(60);
	        pie.padAngle(0.03);
	    }
	};
	
	exports.default = presets;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(3);
	
	var _bar = __webpack_require__(14);
	
	var _bar2 = _interopRequireDefault(_bar);
	
	var _line = __webpack_require__(18);
	
	var _line2 = _interopRequireDefault(_line);
	
	var _area = __webpack_require__(19);
	
	var _area2 = _interopRequireDefault(_area);
	
	var _pie = __webpack_require__(20);
	
	var _pie2 = _interopRequireDefault(_pie);
	
	var _default = __webpack_require__(22);
	
	var _default2 = _interopRequireDefault(_default);
	
	var _instant = __webpack_require__(23);
	
	var _instant2 = _interopRequireDefault(_instant);
	
	var _index = __webpack_require__(24);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _optionObject = __webpack_require__(4);
	
	var _optionObject2 = _interopRequireDefault(_optionObject);
	
	var _dataObject = __webpack_require__(1);
	
	var _dataObject2 = _interopRequireDefault(_dataObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Chart = (function () {
	    function Chart(dataObject, optionObject, buffer) {
	        _classCallCheck(this, Chart);
	
	        this.setBuffer(buffer);
	
	        this.initDataObject(dataObject);
	        this.initOptionObject(optionObject);
	
	        this.setHandler(this.option.handler);
	        this.setRenderer(this.option.renderer);
	
	        this.endInit();
	    }
	
	    _createClass(Chart, [{
	        key: "redraw",
	        value: function redraw() {
	            var renderObject = this.handler.computeRenderObject(this.data, this.option);
	            this.renderer.redraw(renderObject);
	        }
	    }, {
	        key: "initDataObject",
	        value: function initDataObject(dataObject) {
	            this.data = (0, _utils.option)(dataObject, new _dataObject2.default({}, this.buffer));
	        }
	    }, {
	        key: "initOptionObject",
	        value: function initOptionObject(optionObject) {
	            this.option = (0, _utils.option)(optionObject, new _optionObject2.default({}, this.buffer));
	        }
	    }, {
	        key: "setHandler",
	        value: function setHandler(handler) {
	            handler = (0, _utils.option)(handler, "line");
	
	            if (typeof handler === "function") {
	                this.handler = new handler(this);
	            } else if ((typeof handler === "undefined" ? "undefined" : _typeof(handler)) === "object") {
	                this.handler = handler;
	            } else {
	                this.setHandlerByName(handler);
	            }
	
	            if (this.renderer) {
	                this.redraw();
	            }
	        }
	    }, {
	        key: "setHandlerByName",
	        value: function setHandlerByName(handler) {
	            if (handler === "bar") {
	                this.handler = new _bar2.default(this);
	            } else if (handler === "line") {
	                this.handler = new _line2.default(this);
	            } else if (handler === "area") {
	                this.handler = new _area2.default(this);
	            } else if (handler === "pie") {
	                this.handler = new _pie2.default(this);
	            } else {
	                throw new Error("Uknown type of handler: " + hanlder);
	            }
	        }
	    }, {
	        key: "setRenderer",
	        value: function setRenderer(renderer) {
	            renderer = (0, _utils.option)(renderer, "default");
	
	            if (typeof renderer === "function") {
	                this.renderer = new renderer(this);
	            } else if ((typeof renderer === "undefined" ? "undefined" : _typeof(renderer)) === "object") {
	                this.renderer = renderer;
	            } else {
	                this.setRendererByName(renderer);
	            }
	        }
	    }, {
	        key: "setRendererByName",
	        value: function setRendererByName(renderer) {
	            if (renderer === "default") {
	                this.renderer = new _index2.default(this);
	            } else {
	                throw new Error("Uknown type of renderer: " + renderer);
	            }
	        }
	    }, {
	        key: "setBuffer",
	        value: function setBuffer(buffer) {
	
	            if ((0, _utils.isDefined)(this.buffer)) {
	                this.buffer.unregisterChart(this);
	            }
	
	            buffer = (0, _utils.option)(buffer, "default");
	
	            if (typeof buffer === "function") {
	                this.buffer = new buffer(this);
	            } else if ((typeof buffer === "undefined" ? "undefined" : _typeof(buffer)) === "object") {
	                this.buffer = buffer;
	            } else {
	                this.setBufferByName(buffer);
	            }
	
	            this.buffer.registerChart(this);
	            this.buffer.frozen(true);
	        }
	    }, {
	        key: "setBufferByName",
	        value: function setBufferByName(buffer) {
	            if (buffer === "default") {
	                this.buffer = new _default2.default(this);
	            } else if (buffer === "instant") {
	                this.buffer = new _instant2.default(this);
	            } else {
	                throw new Error("Uknown type of buffer: " + buffer);
	            }
	        }
	    }, {
	        key: "endInit",
	        value: function endInit() {
	
	            this.buffer.frozen(false);
	            this.buffer.dirty(true);
	        }
	    }]);
	
	    return Chart;
	})();
	
	exports.default = Chart;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _rectangular = __webpack_require__(15);
	
	var _rectangular2 = _interopRequireDefault(_rectangular);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BarHandler = (function (_RectangularHandler) {
	    _inherits(BarHandler, _RectangularHandler);
	
	    function BarHandler() {
	        _classCallCheck(this, BarHandler);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(BarHandler).call(this));
	    }
	
	    _createClass(BarHandler, [{
	        key: "init",
	        value: function init() {}
	    }, {
	        key: "computeRenderObject",
	        value: function computeRenderObject(data, option) {
	            _get(Object.getPrototypeOf(BarHandler.prototype), "computeRenderObject", this).call(this, data, option);
	
	            var d = this.d();
	
	            d.clearRectangularData({
	                bars: false
	            });
	
	            d.data.rectangular.bars = this.processBars(data.columns());
	
	            if (option.mode() === "stacked") {
	                d.data.rectangular.bars = this.stack(d.data.rectangular.bars);
	            } else if (option.mode() === "normalized") {
	                d.data.rectangular.bars = this.normalize(d.data.rectangular.bars);
	            }
	
	            d.data.ids = this.ids(d.data.rectangular.bars);
	            d.data.ranges = this.computeRanges(d.data.rectangular.bars);
	            d.data.rectangular.bars = this.setY0(d.data.rectangular.bars, 0);
	
	            d.data.rectangular.bars = this.turnToRows(d.data.rectangular.bars);
	
	            d.option.bar = option.bar.options();
	
	            return d;
	        }
	    }, {
	        key: "processBars",
	        value: function processBars(bars) {
	            var ret = {
	                dirty: true,
	                values: []
	            };
	
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = bars[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var _step$value = _slicedToArray(_step.value, 2);
	
	                    var id = _step$value[0];
	                    var bar = _step$value[1];
	
	                    ret.values.push(this.processBar(bar, id));
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            return ret;
	        }
	    }, {
	        key: "processBar",
	        value: function processBar(bar, id) {
	            var ret = {
	                dirty: true,
	                values: [],
	                id: id
	            };
	
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = bar[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var _step2$value = _slicedToArray(_step2.value, 2);
	
	                    var x = _step2$value[0];
	                    var value = _step2$value[1];
	
	                    ret.values.push(this.processValue(value, x, id));
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	
	            return ret;
	        }
	    }, {
	        key: "processValue",
	        value: function processValue(value, x, id) {
	            var v = _get(Object.getPrototypeOf(BarHandler.prototype), "processValue", this).call(this, value, x);
	
	            if ((0, _utils.isDefined)(value.y0)) {
	                v.y0 = value.y0;
	            }
	            if ((0, _utils.isDefined)(id)) {
	                v.id = id;
	            }
	            return v;
	        }
	    }]);
	
	    return BarHandler;
	})(_rectangular2.default);
	
	exports.default = BarHandler;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _basic = __webpack_require__(16);
	
	var _basic2 = _interopRequireDefault(_basic);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	 * Rectangular chart is the father of column, line, area and other charts, that are painted on rectangular canvas.
	 * It has right-angled axes and grids.
	 */
	
	var RectangularHandler = (function (_Handler) {
	    _inherits(RectangularHandler, _Handler);
	
	    function RectangularHandler() {
	        _classCallCheck(this, RectangularHandler);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(RectangularHandler).apply(this, arguments));
	    }
	
	    _createClass(RectangularHandler, [{
	        key: "computeRenderObject",
	        value: function computeRenderObject(data, option) {
	            _get(Object.getPrototypeOf(RectangularHandler.prototype), "computeRenderObject", this).call(this, data, option);
	
	            var d = this.d();
	
	            d.option.axes = this.processAxis(option.axes);
	        }
	    }, {
	        key: "processAxis",
	        value: function processAxis(axes) {
	            var d = {
	                x: {
	                    dirty: true
	                },
	                y: {
	                    dirty: true
	                },
	                dirty: true
	            };
	
	            d.x.visible = axes.x.visible();
	            d.y.visible = axes.y.visible();
	
	            return d;
	        }
	    }, {
	        key: "processValue",
	        value: function processValue(value, x) {
	            var v = {};
	
	            if ((0, _utils.isDefined)(x)) {
	                v.x = x;
	            }
	            if ((0, _utils.isDefined)(value.y)) {
	                v.y = value.y;
	            }
	            if ((0, _utils.isDefined)(value.color)) {
	                v.color = value.color;
	            }
	            if ((0, _utils.isDefined)(value.label)) {
	                v.label = value.label;
	            }
	
	            return v;
	        }
	    }, {
	        key: "setY0",
	        value: function setY0(sequences, yMin) {
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = sequences.values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var sequence = _step.value;
	                    var _iteratorNormalCompletion2 = true;
	                    var _didIteratorError2 = false;
	                    var _iteratorError2 = undefined;
	
	                    try {
	                        for (var _iterator2 = sequence.values[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                            var value = _step2.value;
	
	                            if ((0, _utils.isUndefined)(value.y0)) {
	                                value.y0 = yMin;
	                            }
	                        }
	                    } catch (err) {
	                        _didIteratorError2 = true;
	                        _iteratorError2 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                _iterator2.return();
	                            }
	                        } finally {
	                            if (_didIteratorError2) {
	                                throw _iteratorError2;
	                            }
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            return sequences;
	        }
	    }]);
	
	    return RectangularHandler;
	})(_basic2.default);
	
	exports.default = RectangularHandler;
	module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _renderObject = __webpack_require__(17);
	
	var _renderObject2 = _interopRequireDefault(_renderObject);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Handler = (function () {
	    function Handler() {
	        _classCallCheck(this, Handler);
	
	        this.__ = {
	            d: new _renderObject2.default()
	        };
	
	        this.init();
	    }
	
	    _createClass(Handler, [{
	        key: "init",
	        value: function init() {}
	    }, {
	        key: "d",
	        value: function d() {
	            return this.__.d;
	        }
	    }, {
	        key: "computeRenderObject",
	        value: function computeRenderObject(data, option) {
	            var d = this.d();
	
	            d.option.size = this.processSize(option.size);
	            d.option.easel = option.easel();
	            d.option.legend = option.legend.options();
	            d.option.mode = option.mode();
	        }
	    }, {
	        key: "processSize",
	        value: function processSize(size) {
	
	            return {
	                dirty: true,
	                width: size.width(),
	                height: size.height()
	            };
	        }
	    }, {
	        key: "computeRanges",
	        value: function computeRanges(table) {
	            var xMin = undefined,
	                xMax = undefined,
	                yMin = undefined,
	                yMax = undefined;
	            var xStrings = [];
	
	            table.values.forEach(function (column) {
	                column.values.forEach(function (value) {
	                    if ((0, _utils.isUndefined)(xMin) || value.x < xMin) {
	                        xMin = value.x;
	                    }
	                    if ((0, _utils.isUndefined)(xMax) || value.x > xMax) {
	                        xMax = value.x;
	                    }
	                    if ((0, _utils.isUndefined)(yMin) || value.y < yMin) {
	                        yMin = value.y;
	                    }
	                    if ((0, _utils.isDefined)(value.y0) && value.y0 < yMin) {
	                        yMin = value.y0;
	                    }
	                    if ((0, _utils.isUndefined)(yMax) || value.y > yMax) {
	                        yMax = value.y;
	                    }
	                });
	            });
	
	            if (this.hasStringXIn(table)) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = table.values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var column = _step.value;
	                        var _iteratorNormalCompletion2 = true;
	                        var _didIteratorError2 = false;
	                        var _iteratorError2 = undefined;
	
	                        try {
	                            for (var _iterator2 = column.values[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                var value = _step2.value;
	
	                                // Convert all x to strings
	                                xStrings.push("" + value.x);
	                            }
	                        } catch (err) {
	                            _didIteratorError2 = true;
	                            _iteratorError2 = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                    _iterator2.return();
	                                }
	                            } finally {
	                                if (_didIteratorError2) {
	                                    throw _iteratorError2;
	                                }
	                            }
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }
	
	            return {
	                xMin: xMin,
	                xMax: xMax,
	                yMin: yMin,
	                yMax: yMax,
	                xStrings: xStrings
	            };
	        }
	
	        /*
	         * Stacks all data, so every sequence is stacked above the previous one.
	         * Changes input instead of copying for time saving.
	         */
	
	    }, {
	        key: "stack",
	        value: function stack(data) {
	
	            var stacked = new Map();
	
	            for (var i = 0; i < data.values.length; i++) {
	                for (var j = 0; j < data.values[i].values.length; j++) {
	                    var value = data.values[i].values[j];
	
	                    if (!stacked.has(value.x)) {
	                        stacked.set(value.x, 0);
	                    }
	
	                    var padding = stacked.get(value.x);
	
	                    value.y0 = padding;
	                    value.y += padding;
	
	                    stacked.set(value.x, value.y);
	                }
	            }
	
	            return data;
	        }
	
	        /*
	         * Normalizes all data, so every row sums up to 1.
	         * Handles all zeros in one row by equally splitting row between all sequences.
	         * Changes input instead of copying for time saving.
	         */
	
	    }, {
	        key: "normalize",
	        value: function normalize(data) {
	            var sums = new Map();
	            var numberOf = new Map();
	
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;
	
	            try {
	                for (var _iterator3 = data.values[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var column = _step3.value;
	                    var _iteratorNormalCompletion5 = true;
	                    var _didIteratorError5 = false;
	                    var _iteratorError5 = undefined;
	
	                    try {
	                        for (var _iterator5 = column.values[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                            var value = _step5.value;
	
	                            if (value.y < 0) {
	                                throw new Error("Y can't be below zero in the normalized chart");
	                            }
	
	                            if (sums.has(value.x)) {
	                                sums.set(value.x, sums.get(value.x) + value.y);
	                                numberOf.set(value.x, numberOf.get(value.x) + 1);
	                            } else {
	                                sums.set(value.x, value.y);
	                                numberOf.set(value.x, 1);
	                            }
	                        }
	                    } catch (err) {
	                        _didIteratorError5 = true;
	                        _iteratorError5 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                                _iterator5.return();
	                            }
	                        } finally {
	                            if (_didIteratorError5) {
	                                throw _iteratorError5;
	                            }
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;
	
	            try {
	                for (var _iterator4 = data.values[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var column = _step4.value;
	                    var _iteratorNormalCompletion6 = true;
	                    var _didIteratorError6 = false;
	                    var _iteratorError6 = undefined;
	
	                    try {
	                        for (var _iterator6 = column.values[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                            var value = _step6.value;
	
	                            var sum = sums.get(value.x);
	                            if (sum === 0) {
	                                value.y = 1 / numberOf.get(value.x);
	                            } else {
	                                value.y /= sums.get(value.x);
	                            }
	                        }
	                    } catch (err) {
	                        _didIteratorError6 = true;
	                        _iteratorError6 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion6 && _iterator6.return) {
	                                _iterator6.return();
	                            }
	                        } finally {
	                            if (_didIteratorError6) {
	                                throw _iteratorError6;
	                            }
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }
	
	            return this.stack(data);
	        }
	    }, {
	        key: "hasStringXIn",
	        value: function hasStringXIn(table) {
	            var _iteratorNormalCompletion7 = true;
	            var _didIteratorError7 = false;
	            var _iteratorError7 = undefined;
	
	            try {
	                for (var _iterator7 = table.values[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	                    var column = _step7.value;
	                    var _iteratorNormalCompletion8 = true;
	                    var _didIteratorError8 = false;
	                    var _iteratorError8 = undefined;
	
	                    try {
	                        for (var _iterator8 = column.values[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	                            var value = _step8.value;
	
	                            if ((0, _utils.isString)(value.x)) {
	                                return true;
	                            }
	                        }
	                    } catch (err) {
	                        _didIteratorError8 = true;
	                        _iteratorError8 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion8 && _iterator8.return) {
	                                _iterator8.return();
	                            }
	                        } finally {
	                            if (_didIteratorError8) {
	                                throw _iteratorError8;
	                            }
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError7 = true;
	                _iteratorError7 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
	                        _iterator7.return();
	                    }
	                } finally {
	                    if (_didIteratorError7) {
	                        throw _iteratorError7;
	                    }
	                }
	            }
	
	            return false;
	        }
	    }, {
	        key: "ids",
	        value: function ids(sequences) {
	            var ret = [];
	
	            var _iteratorNormalCompletion9 = true;
	            var _didIteratorError9 = false;
	            var _iteratorError9 = undefined;
	
	            try {
	                for (var _iterator9 = sequences.values[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	                    var sequence = _step9.value;
	
	                    ret.push(sequence.id);
	                }
	            } catch (err) {
	                _didIteratorError9 = true;
	                _iteratorError9 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion9 && _iterator9.return) {
	                        _iterator9.return();
	                    }
	                } finally {
	                    if (_didIteratorError9) {
	                        throw _iteratorError9;
	                    }
	                }
	            }
	
	            return ret;
	        }
	    }, {
	        key: "turnToRows",
	        value: function turnToRows(sequences) {
	            var ret = {
	                values: []
	            };
	
	            function findByX(x) {
	                var _iteratorNormalCompletion10 = true;
	                var _didIteratorError10 = false;
	                var _iteratorError10 = undefined;
	
	                try {
	                    for (var _iterator10 = ret.values[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
	                        var v = _step10.value;
	
	                        if (v.x === x) {
	                            return v;
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError10 = true;
	                    _iteratorError10 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion10 && _iterator10.return) {
	                            _iterator10.return();
	                        }
	                    } finally {
	                        if (_didIteratorError10) {
	                            throw _iteratorError10;
	                        }
	                    }
	                }
	            }
	
	            var _iteratorNormalCompletion11 = true;
	            var _didIteratorError11 = false;
	            var _iteratorError11 = undefined;
	
	            try {
	                for (var _iterator11 = sequences.values[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
	                    var sequence = _step11.value;
	                    var _iteratorNormalCompletion12 = true;
	                    var _didIteratorError12 = false;
	                    var _iteratorError12 = undefined;
	
	                    try {
	                        for (var _iterator12 = sequence.values[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
	                            var value = _step12.value;
	
	                            var obj = findByX(value.x);
	                            if ((0, _utils.isUndefined)(obj)) {
	                                ret.values.push({
	                                    x: value.x,
	                                    values: []
	                                });
	
	                                obj = ret.values[ret.values.length - 1];
	                            }
	
	                            obj.values.push({
	                                id: sequence.id,
	                                y: value.y,
	                                y0: value.y0
	                            });
	                        }
	                    } catch (err) {
	                        _didIteratorError12 = true;
	                        _iteratorError12 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion12 && _iterator12.return) {
	                                _iterator12.return();
	                            }
	                        } finally {
	                            if (_didIteratorError12) {
	                                throw _iteratorError12;
	                            }
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError11 = true;
	                _iteratorError11 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion11 && _iterator11.return) {
	                        _iterator11.return();
	                    }
	                } finally {
	                    if (_didIteratorError11) {
	                        throw _iteratorError11;
	                    }
	                }
	            }
	
	            return ret;
	        }
	    }]);
	
	    return Handler;
	})();
	
	exports.default = Handler;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/*
	 * The render object is passed to renderers whenever chart.redraw is called.
	 * Is has no "private" fields because it is basicly just the representation of the rendered chart in code and no private info is needed.
	 */
	
	var RenderObject = (function () {
	    /*
	     * Init main fields that are required.
	     */
	
	    function RenderObject() {
	        _classCallCheck(this, RenderObject);
	
	        this.data = {
	            rectangular: {},
	            circular: {}
	        };
	
	        this.option = {};
	
	        this.clear();
	    }
	
	    _createClass(RenderObject, [{
	        key: "clear",
	        value: function clear() {
	            this.clearData();
	            this.clearOption();
	
	            return this;
	        }
	    }, {
	        key: "clearData",
	        value: function clearData() {
	            this.clearRectangularData();
	            this.clearCircularData();
	
	            return this;
	        }
	    }, {
	        key: "clearOption",
	        value: function clearOption() {
	            this.option = this.getDefaultOption();
	
	            return this;
	        }
	    }, {
	        key: "clearRectangularData",
	        value: function clearRectangularData(except) {
	            var _this = this;
	
	            except = (0, _utils.option)(except, {});
	
	            var types = ["areas", "bars", "lines"];
	
	            types.forEach(function (type) {
	                if ((0, _utils.isUndefined)(except[type])) {
	                    _this.data.rectangular[type] = _this.getDefaultStore();
	                }
	            });
	
	            return this;
	        }
	    }, {
	        key: "clearCircularData",
	        value: function clearCircularData(except) {
	            var _this2 = this;
	
	            except = (0, _utils.option)(except, {});
	
	            var types = ["pies", "disks"];
	
	            types.forEach(function (type) {
	                if ((0, _utils.isUndefined)(except[type])) {
	                    _this2.data.circular[type] = _this2.getDefaultStore();
	                }
	            });
	
	            return this;
	        }
	    }, {
	        key: "getDefaultOption",
	        value: function getDefaultOption() {
	            return {
	                bindTo: "",
	                size: {},
	                axes: {
	                    x: {},
	                    y: {}
	                }
	            };
	        }
	    }, {
	        key: "getDefaultStore",
	        value: function getDefaultStore() {
	            return {
	                dirty: true,
	                values: []
	            };
	        }
	    }]);
	
	    return RenderObject;
	})();
	
	exports.default = RenderObject;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _rectangular = __webpack_require__(15);
	
	var _rectangular2 = _interopRequireDefault(_rectangular);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LineHandler = (function (_RectangularHandler) {
	    _inherits(LineHandler, _RectangularHandler);
	
	    function LineHandler() {
	        _classCallCheck(this, LineHandler);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(LineHandler).call(this));
	    }
	
	    _createClass(LineHandler, [{
	        key: "init",
	        value: function init() {
	            var d = this.d();
	        }
	    }, {
	        key: "computeRenderObject",
	        value: function computeRenderObject(data, option) {
	            var d = this.d();
	
	            _get(Object.getPrototypeOf(LineHandler.prototype), "computeRenderObject", this).call(this, data, option);
	
	            d.clearRectangularData({
	                lines: false
	            });
	
	            d.data.rectangular.lines = this.processLines(data.columns());
	
	            if (option.mode() === "stacked") {
	                d.data.rectangular.lines = this.stack(d.data.rectangular.lines);
	            } else if (option.mode() === "normalized") {
	                d.data.rectangular.lines = this.normalize(d.data.rectangular.lines);
	            }
	
	            d.data.ids = this.ids(d.data.rectangular.lines);
	            d.data.ranges = this.computeRanges(d.data.rectangular.lines);
	            d.option.line = option.line.options();
	
	            return d;
	        }
	    }, {
	        key: "processLines",
	        value: function processLines(lines) {
	            var ret = {
	                dirty: true,
	                values: []
	            };
	
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var _step$value = _slicedToArray(_step.value, 2);
	
	                    var id = _step$value[0];
	                    var line = _step$value[1];
	
	                    ret.values.push(this.processLine(line, id));
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            return ret;
	        }
	    }, {
	        key: "processLine",
	        value: function processLine(line, id) {
	            var ret = {
	                dirty: true,
	                values: [],
	                id: id
	            };
	
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = line[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var _step2$value = _slicedToArray(_step2.value, 2);
	
	                    var x = _step2$value[0];
	                    var value = _step2$value[1];
	
	                    ret.values.push(this.processValue(value, x));
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	
	            return ret;
	        }
	    }]);
	
	    return LineHandler;
	})(_rectangular2.default);
	
	exports.default = LineHandler;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(3);
	
	var _rectangular = __webpack_require__(15);
	
	var _rectangular2 = _interopRequireDefault(_rectangular);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AreaHandler = (function (_RectangularHandler) {
	    _inherits(AreaHandler, _RectangularHandler);
	
	    function AreaHandler() {
	        _classCallCheck(this, AreaHandler);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(AreaHandler).apply(this, arguments));
	    }
	
	    _createClass(AreaHandler, [{
	        key: "init",
	        value: function init() {
	            var d = this.d();
	        }
	    }, {
	        key: "computeRenderObject",
	        value: function computeRenderObject(data, option) {
	            var d = this.d();
	
	            _get(Object.getPrototypeOf(AreaHandler.prototype), "computeRenderObject", this).call(this, data, option);
	
	            d.clearRectangularData({
	                areas: false
	            });
	
	            d.data.rectangular.areas = this.processAreas(data.columns());
	
	            if (option.mode() === "stacked") {
	                d.data.rectangular.areas = this.stack(d.data.rectangular.areas);
	            } else if (option.mode() === "normalized") {
	                d.data.rectangular.areas = this.normalize(d.data.rectangular.areas);
	            }
	
	            d.data.ids = this.ids(d.data.rectangular.areas);
	            d.data.ranges = this.computeRanges(d.data.rectangular.areas);
	            d.data.rectangular.areas = this.setY0(d.data.rectangular.areas, d.data.ranges.yMin);
	
	            d.option.area = option.area.options();
	
	            return d;
	        }
	    }, {
	        key: "processAreas",
	        value: function processAreas(areas) {
	            var ret = {
	                dirty: true,
	                values: []
	            };
	
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = areas[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var _step$value = _slicedToArray(_step.value, 2);
	
	                    var id = _step$value[0];
	                    var area = _step$value[1];
	
	                    ret.values.push(this.processArea(area, id));
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            return ret;
	        }
	    }, {
	        key: "processArea",
	        value: function processArea(area, id) {
	            var ret = {
	                dirty: true,
	                values: [],
	                id: id
	            };
	
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = area[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var _step2$value = _slicedToArray(_step2.value, 2);
	
	                    var x = _step2$value[0];
	                    var value = _step2$value[1];
	
	                    ret.values.push(this.processValue(value, x));
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	
	            return ret;
	        }
	    }, {
	        key: "processValue",
	        value: function processValue(value, x) {
	            var v = _get(Object.getPrototypeOf(AreaHandler.prototype), "processValue", this).call(this, value, x);
	
	            if ((0, _utils.isDefined)(value.y0)) {
	                v.y0 = value.y0;
	            }
	
	            return v;
	        }
	    }]);
	
	    return AreaHandler;
	})(_rectangular2.default);
	
	exports.default = AreaHandler;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _circular = __webpack_require__(21);
	
	var _circular2 = _interopRequireDefault(_circular);
	
	var _utils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PieHandler = (function (_CircularHandler) {
	    _inherits(PieHandler, _CircularHandler);
	
	    function PieHandler() {
	        _classCallCheck(this, PieHandler);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(PieHandler).apply(this, arguments));
	    }
	
	    _createClass(PieHandler, [{
	        key: "computeRenderObject",
	        value: function computeRenderObject(data, option) {
	            var d = this.d();
	
	            _get(Object.getPrototypeOf(PieHandler.prototype), "computeRenderObject", this).call(this, data, option);
	
	            d.data.circular.pies = this.processPies(data.columns());
	            d.data.ids = this.ids(d.data.circular.pies);
	
	            d.option.pie = option.pie.options();
	
	            return d;
	        }
	    }, {
	        key: "processPies",
	        value: function processPies(pies) {
	            var ret = {
	                dirty: true,
	                values: []
	            };
	
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = pies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var _step$value = _slicedToArray(_step.value, 2);
	
	                    var name = _step$value[0];
	                    var pie = _step$value[1];
	
	                    ret.values.push(this.processPie(pie, name));
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            return ret;
	        }
	    }, {
	        key: "processPie",
	        value: function processPie(pie, name) {
	            var ret = {
	                dirty: true,
	                values: [],
	                name: name
	            };
	
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = pie[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var _step2$value = _slicedToArray(_step2.value, 2);
	
	                    var id = _step2$value[0];
	                    var value = _step2$value[1];
	
	                    ret.values.push(this.processValue(value, id));
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	
	            return ret;
	        }
	    }, {
	        key: "processValue",
	        value: function processValue(value, id) {
	            var v = {};
	
	            if ((0, _utils.isDefined)(id)) {
	                v.id = id;
	            }
	            if ((0, _utils.isDefined)(value.y)) {
	                v.y = value.y;
	            }
	
	            return v;
	        }
	    }]);
	
	    return PieHandler;
	})(_circular2.default);
	
	exports.default = PieHandler;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _basic = __webpack_require__(16);
	
	var _basic2 = _interopRequireDefault(_basic);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CircularHandler = (function (_Handler) {
	    _inherits(CircularHandler, _Handler);
	
	    function CircularHandler() {
	        _classCallCheck(this, CircularHandler);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(CircularHandler).apply(this, arguments));
	    }
	
	    _createClass(CircularHandler, [{
	        key: "init",
	        value: function init() {}
	    }]);
	
	    return CircularHandler;
	})(_basic2.default);
	
	exports.default = CircularHandler;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _utils = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Class used for managing redraws.
	 * Basic buffer doesn't do anything except marking itself as dirty
	 */
	
	var DefaultBuffer = (function () {
	    function DefaultBuffer(chart) {
	        _classCallCheck(this, DefaultBuffer);
	
	        this.__init();
	        this.registerChart(chart);
	    }
	
	    _createClass(DefaultBuffer, [{
	        key: "__init",
	        value: function __init() {
	            this.__ = {
	                dirty: false,
	                frozen: false,
	                charts: []
	            };
	        }
	    }, {
	        key: "dirty",
	        value: function dirty(_dirty) {
	            var __ = this.__;
	            if (_dirty === undefined) {
	                return __.dirty;
	            }
	            __.dirty = _dirty;
	
	            if (!this.frozen()) {
	                this.actOnDirty(_dirty);
	            }
	        }
	    }, {
	        key: "registerChart",
	        value: function registerChart(chart) {
	            if ((0, _utils.isDefined)(chart)) {
	                var charts = this.__.charts;
	
	                if (charts.indexOf(chart) === -1) {
	                    charts.push(chart);
	                }
	            }
	        }
	    }, {
	        key: "unregisterChart",
	        value: function unregisterChart(chart) {
	            var charts = this.__.charts;
	            for (var i = 0; i < charts.length; i++) {
	                if (chart === charts[i]) {
	                    charts.splice(i, 1);
	                }
	            }
	        }
	    }, {
	        key: "sendRedraw",
	        value: function sendRedraw() {
	            this.__.charts.forEach(function (chart) {
	                chart.redraw();
	            });
	        }
	
	        /**
	         * If frozen, buffer won't activate actOnDirty.
	         * This is needed for chart initialization when 'dirty' happens all the time
	         * but we don't need to redraw when initializing.
	         */
	
	    }, {
	        key: "frozen",
	        value: function frozen(_frozen) {
	            var __ = this.__;
	
	            if (_frozen === undefined) {
	                return __.frozen;
	            }
	
	            __.frozen = _frozen;
	        }
	
	        // Don't do anything
	
	    }, {
	        key: "actOnDirty",
	        value: function actOnDirty(dirty) {}
	    }]);
	
	    return DefaultBuffer;
	})();
	
	exports.default = DefaultBuffer;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _default = __webpack_require__(22);
	
	var _default2 = _interopRequireDefault(_default);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var InstantBuffer = (function (_DefaultBuffer) {
	    _inherits(InstantBuffer, _DefaultBuffer);
	
	    function InstantBuffer(chart) {
	        _classCallCheck(this, InstantBuffer);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(InstantBuffer).call(this, chart));
	    }
	
	    _createClass(InstantBuffer, [{
	        key: "actOnDirty",
	        value: function actOnDirty(dirty) {
	            var __ = this.__;
	
	            if (dirty) {
	                this.sendRedraw();
	            }
	        }
	    }]);
	
	    return InstantBuffer;
	})(_default2.default);
	
	exports.default = InstantBuffer;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _d = __webpack_require__(25);
	
	var _d2 = _interopRequireDefault(_d);
	
	var _renderer = __webpack_require__(26);
	
	var _renderer2 = _interopRequireDefault(_renderer);
	
	var _constants = __webpack_require__(27);
	
	var _utils = __webpack_require__(3);
	
	var _svgUtils = __webpack_require__(28);
	
	var _constants2 = __webpack_require__(29);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SvgRenderer = (function (_Renderer) {
	    _inherits(SvgRenderer, _Renderer);
	
	    function SvgRenderer(chart) {
	        _classCallCheck(this, SvgRenderer);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SvgRenderer).call(this));
	
	        _this.option = chart.option;
	
	        _this.initEasel();
	        _this.initScene();
	
	        _this.initLines();
	        _this.initAreas();
	        _this.initBars();
	
	        _this.initPies();
	
	        _this.initAxes();
	        _this.initPoints();
	        _this.initLegend();
	
	        _this.color = _d2.default.scale.ordinal().range(["#98abc5", "#a05d56", "#7b6888", "#6b486b", "#8a89a6", "#d0743c", "#ff8c00"]);
	        return _this;
	    }
	
	    _createClass(SvgRenderer, [{
	        key: "redraw",
	        value: function redraw(renderObject) {
	            this.render = renderObject;
	            this.data = this.render.data;
	            this.option = this.render.option;
	
	            this.setSizes();
	            this.setDomainsToScales();
	
	            this.redrawBars();
	            this.redrawLines();
	            this.redrawAreas();
	            this.redrawPies();
	
	            this.redrawAxes();
	            this.redrawLegend();
	
	            this.endRender();
	        }
	
	        /*
	         * Easel is where all the things are drawn
	         */
	
	    }, {
	        key: "initEasel",
	        value: function initEasel() {
	            this.easel = _d2.default.selectAll(this.option.easel()).attr("class", "iva-chart");
	            this.clear();
	        }
	
	        /*
	         * Scene is where all the data is drawn
	         */
	
	    }, {
	        key: "initScene",
	        value: function initScene() {
	            this.scene = this.easel.append("g").attr("class", "scene");
	        }
	    }, {
	        key: "initLines",
	        value: function initLines() {
	            this.scene.append("g").attr("class", "lines");
	        }
	    }, {
	        key: "initAreas",
	        value: function initAreas() {
	            this.scene.append("g").attr("class", "areas");
	        }
	    }, {
	        key: "initBars",
	        value: function initBars() {
	            this.scene.append("g").attr("class", "bars");
	        }
	    }, {
	        key: "initPies",
	        value: function initPies() {
	            this.scene.append("g").attr("class", "pies");
	        }
	    }, {
	        key: "initAxes",
	        value: function initAxes() {
	            var easel = this.easel;
	
	            var xAxis = this.xAxis = _d2.default.svg.axis().orient("bottom");
	            var yAxis = this.yAxis = _d2.default.svg.axis().orient("left");
	
	            easel.append("g").attr("class", "axis xAxis");
	
	            easel.append("g").attr("class", "axis yAxis");
	        }
	    }, {
	        key: "initLegend",
	        value: function initLegend() {
	            this.legend = this.easel.append("g").attr("class", "legend");
	        }
	    }, {
	        key: "initPoints",
	        value: function initPoints() {
	            this.scene.append("g").attr("class", "points");
	        }
	    }, {
	        key: "setSizes",
	        value: function setSizes() {
	            var easel = this.easel,
	                option = this.option,
	                size = option.size;
	
	            var innerSize = this.innerSize = {
	                width: size.width - _constants.PADDING.LEFT - _constants.PADDING.RIGHT,
	                height: size.height - _constants.PADDING.TOP - _constants.PADDING.BOTTOM
	            };
	
	            this.easel.attr("width", size.width).attr("height", size.height);
	
	            var legend = option.legend;
	            var legendPadding = legend.visible ? legend.width : 0;
	
	            this.scene.attr("transform", "translate(" + (_constants.PADDING.LEFT + _constants.AXIS.WIDTH) + ", " + _constants.PADDING.TOP + ")");
	            this.scene.attr("width", innerSize.width - _constants.AXIS.WIDTH - legendPadding).attr("height", innerSize.height - _constants.AXIS.WIDTH);
	
	            this.legend.attr("width", legend.width).attr("height", legend.height).attr("visibility", (0, _svgUtils.visibility)(legend.visible)).attr("transform", "translate(" + (innerSize.width + _constants.PADDING.LEFT - legend.width + 20) + ", " + (size.height / 2 - legend.height / 2) + ")");
	
	            this.legendScale = _d2.default.scale.ordinal().rangePoints([0, legend.height]);
	
	            var xScale = this.xScale = _d2.default.scale.ordinal().rangePoints([0, this.scene.attr("width")]);
	
	            var yScale = this.yScale = _d2.default.scale.linear().range([this.scene.attr("height"), 0]);
	        }
	    }, {
	        key: "setDomainsToScales",
	        value: function setDomainsToScales() {
	            var _data$ranges = this.data.ranges;
	            var xMin = _data$ranges.xMin;
	            var xMax = _data$ranges.xMax;
	            var yMin = _data$ranges.yMin;
	            var yMax = _data$ranges.yMax;
	            var xStrings = _data$ranges.xStrings;
	
	            var xScale = this.xScale,
	                yScale = this.yScale,
	                color = this.color;
	
	            if (!(0, _utils.isEmpty)(xStrings)) {
	                xScale.domain(xStrings);
	            } else {
	                xScale.domain(_d2.default.range(xMin, xMax + 1));
	            }
	            yScale.domain([yMin, yMax]);
	
	            color.domain(this.data.ids);
	        }
	    }, {
	        key: "redrawAxes",
	        value: function redrawAxes() {
	            var easel = this.easel,
	                size = this.option.size,
	                axes = this.option.axes,
	                xAxis = this.xAxis,
	                yAxis = this.yAxis;
	
	            xAxis.scale(this.xScale);
	            yAxis.scale(this.yScale);
	
	            easel.select(".xAxis").attr("transform", "translate(" + (_constants.AXIS.WIDTH + _constants.PADDING.LEFT) + ", " + (size.height - _constants.AXIS.WIDTH) + ")").style("opacity", function (d) {
	                return axes.x.visible ? 100 : 0;
	            }).call(xAxis);
	
	            easel.select(".yAxis").attr("transform", "translate(" + _constants.AXIS.WIDTH + ", " + _constants.PADDING.TOP + ")").style("opacity", function (d) {
	                return axes.y.visible ? 100 : 0;
	            }).call(yAxis);
	        }
	    }, {
	        key: "redrawBars",
	        value: function redrawBars() {
	            var scene = this.scene,
	                color = this.color,
	                yScale = this.yScale,
	                xScale = this.xScale,
	                option = this.option;
	
	            if ((0, _utils.isEmpty)(this.data.rectangular.bars.values)) {
	                this.clear(".bars");
	                return;
	            }
	
	            var bars = this.data.rectangular.bars.values;
	
	            var xScale1 = _d2.default.scale.ordinal();
	            var _data$ranges2 = this.data.ranges;
	            var xMin = _data$ranges2.xMin;
	            var xMax = _data$ranges2.xMax;
	            var yMin = _data$ranges2.yMin;
	            var yMax = _data$ranges2.yMax;
	            var xStrings = _data$ranges2.xStrings;
	
	            var sceneHeight = this.scene.attr("height");
	
	            if (!(0, _utils.isEmpty)(xStrings)) {
	                xScale.domain(xStrings);
	            } else {
	                xScale.domain(_d2.default.range(xMin, xMax + 1)).rangeRoundBands([0, this.scene.attr("width")], option.bar.outerGap);
	            }
	
	            yScale.domain([0, yMax]);
	
	            xScale1.domain(this.data.ids).rangeRoundBands([0, xScale.rangeBand()], option.bar.innerGap);
	
	            var barWidth = option.mode === _constants2.MODE.NORMAL ? xScale1.rangeBand() : xScale.rangeBand();
	            var barX = option.mode === _constants2.MODE.NORMAL ? function (d) {
	                return xScale1(d.id);
	            } : 0;
	
	            var barsSvg = scene.select(".bars");
	            var barSvg = barsSvg.selectAll(".bar").data(bars);
	
	            barSvg.enter().append("g").attr("class", "bar");
	            barSvg.attr("transform", function (d) {
	                return "translate(" + xScale(d.x) + ", 0)";
	            });
	
	            var rectSvg = barSvg.selectAll("rect").data(function (d) {
	                return d.values;
	            });
	            rectSvg.enter().append("rect");
	
	            rectSvg.attr("x", barX).attr("y", function (d) {
	                return yScale(d.y);
	            }).attr("height", function (d) {
	                return sceneHeight - yScale(d.y - d.y0);
	            }).attr("width", barWidth).style("fill", function (d) {
	                return color(d.id);
	            });
	
	            rectSvg.exit().remove();
	            barSvg.exit().remove();
	        }
	    }, {
	        key: "redrawLines",
	        value: function redrawLines() {
	            var scene = this.scene,
	                color = this.color,
	                xScale = this.xScale,
	                yScale = this.yScale;
	
	            if ((0, _utils.isEmpty)(this.data.rectangular.lines.values)) {
	                this.clear(".lines");
	                return;
	            }
	
	            var lines = this.data.rectangular.lines.values;
	
	            var line = _d2.default.svg.line().x(function (d) {
	                return xScale(d.x);
	            }).y(function (d) {
	                return yScale(d.y);
	            }).interpolate(this.option.line.interpolate);
	
	            var linesSvg = scene.select(".lines");
	
	            var lineSvg = linesSvg.selectAll("path").data(lines);
	
	            lineSvg.enter().append("path").attr("class", "line").attr("stroke", function (d) {
	                return color(d.id);
	            }).attr("stroke-width", 2).attr("fill", "none");
	
	            lineSvg.attr("d", function (d) {
	                return line(d.values);
	            });
	
	            lineSvg.exit().remove();
	
	            if (this.option.line.points) {
	                this.redrawPoints(lines);
	            }
	        }
	    }, {
	        key: "redrawAreas",
	        value: function redrawAreas() {
	            var scene = this.scene,
	                color = this.color,
	                xScale = this.xScale,
	                yScale = this.yScale;
	
	            if ((0, _utils.isEmpty)(this.data.rectangular.areas.values)) {
	                this.clear(".areas");
	                return;
	            }
	
	            var areas = this.data.rectangular.areas.values;
	
	            var area = _d2.default.svg.area().x(function (d) {
	                return xScale(d.x);
	            }).y0(function (d) {
	                return yScale(d.y0) + _constants.PADDING.TOP - 10;
	            }).y1(function (d) {
	                return yScale(d.y);
	            }).interpolate(this.option.area.interpolate);
	
	            var areasSvg = scene.select(".areas");
	
	            var areaSvg = areasSvg.selectAll("path").data(areas);
	
	            areaSvg.enter().append("path").attr("class", "area").attr("class", "area").attr("stroke", function (d) {
	                return color(d.id);
	            }).attr("fill", function (d) {
	                return color(d.id);
	            });
	
	            areaSvg.attr("d", function (d) {
	                return area(d.values);
	            });
	
	            areaSvg.exit().remove();
	
	            if (this.option.area.points) {
	                this.redrawPoints(areas);
	            }
	        }
	    }, {
	        key: "redrawPies",
	        value: function redrawPies() {
	            var scene = this.scene,
	                color = this.color,
	                option = this.option;
	
	            if ((0, _utils.isEmpty)(this.data.circular.pies.values)) {
	                return;
	            }
	
	            var pies = this.data.circular.pies.values;
	
	            var pie = pies[0].values;
	
	            var arcSvg = _d2.default.svg.arc().outerRadius(option.pie.outerRadius).innerRadius(option.pie.innerRadius).startAngle(function (d) {
	                return d.startAngle + option.pie.turnAngle;
	            }).endAngle(function (d) {
	                return d.endAngle + option.pie.turnAngle;
	            }).padAngle(option.pie.padAngle);
	
	            var pieLayout = _d2.default.layout.pie().sort(null).value(function (d) {
	                return d.y;
	            });
	
	            scene.selectAll(".pies").attr("transform", "translate(" + this.option.size.width / 2 + ", " + this.option.size.height / 2 + ")");
	            var p = scene.selectAll(".pies").selectAll(".arc").data(pieLayout(pie));
	
	            p.enter().append("path").attr("class", "arc").style("fill", function (d) {
	                return color(d.data.id);
	            });
	
	            p.attr("d", arcSvg);
	            p.attr("transform", (0, _svgUtils.generateExplode)(option.pie.explodeRadius));
	
	            p.exit().remove();
	        }
	    }, {
	        key: "redrawLegend",
	        value: function redrawLegend() {
	            var ids = this.data.ids;
	
	            if ((0, _utils.isEmpty)(ids)) {
	                this.clear(".legend");
	                return;
	            }
	
	            if (!this.option.legend.visible) {
	                return;
	            }
	
	            var legend = this.legend,
	                legendScale = this.legendScale,
	                color = this.color;
	
	            legendScale.domain(ids);
	
	            var legendItem = legend.selectAll(".legendItem").data(ids);
	
	            legendItem.enter().append("text").attr("class", "legendItem");
	
	            legendItem.attr("transform", function (d) {
	                return "translate(20, " + legendScale(d) + ")";
	            });
	            legendItem.text(function (d) {
	                return d;
	            });
	
	            var legendPicture = legend.selectAll(".legendPicture").data(ids);
	
	            if (this.option.legend.pointType === "line") {
	                legendPicture.enter().append("line").attr("class", "legendPicture").attr("x1", 0).attr("y1", 5).attr("x2", 10).attr("y2", 5).attr("stroke", function (d) {
	                    return color(d);
	                }).style("stroke-width", 2);
	            } else {
	                legendPicture.enter().append("rect").attr("class", "legendPicture").attr("width", 10).attr("height", 10).attr("fill", function (d) {
	                    return color(d);
	                });
	            }
	
	            legendPicture.attr("transform", function (d) {
	                return "translate(0, " + (legendScale(d) - 10) + ")";
	            });
	
	            legendItem.exit().remove();
	            legendPicture.exit().remove();
	        }
	    }, {
	        key: "redrawPoints",
	        value: function redrawPoints(sequences) {
	            var _this2 = this;
	
	            if ((0, _utils.isEmpty)(sequences)) {
	                this.clear(".points");
	                return;
	            }
	
	            var scene = this.scene,
	                option = this.option,
	                xScale = this.xScale,
	                yScale = this.yScale;
	
	            var points = [];
	
	            sequences.forEach(function (sequence) {
	                sequence.values.forEach(function (value) {
	                    points.push({
	                        x: value.x,
	                        y: value.y,
	                        id: sequence.id
	                    });
	                });
	            });
	
	            var pointSvg = scene.selectAll(".points").selectAll(".point").data(points);
	
	            pointSvg.enter().append("circle").attr("class", "point").attr("fill", function (d) {
	                return _this2.color(d.id);
	            }).attr("r", 3);
	
	            pointSvg.attr("cx", function (d) {
	                return xScale(d.x);
	            });
	            pointSvg.attr("cy", function (d) {
	                return yScale(d.y);
	            });
	
	            pointSvg.exit().remove();
	        }
	    }, {
	        key: "clear",
	        value: function clear(select) {
	            var obj = undefined;
	
	            if ((0, _utils.isUndefined)(select)) {
	                obj = this.easel;
	            } else {
	                obj = this.easel.selectAll(select);
	            }
	
	            obj.selectAll("*").transition().duration(500).style("opacity", 0).remove();
	        }
	    }, {
	        key: "endRender",
	        value: function endRender() {
	            var data = this.data;
	
	            if (data.isEmpty) {
	                this.clear(".points");
	            }
	        }
	    }]);
	
	    return SvgRenderer;
	})(_renderer2.default);
	
	exports.default = SvgRenderer;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _renderObject = __webpack_require__(17);
	
	var _renderObject2 = _interopRequireDefault(_renderObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Renderer = function Renderer() {
	    _classCallCheck(this, Renderer);
	
	    this.render = new _renderObject2.default();
	};
	
	exports.default = Renderer;
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var PADDING = exports.PADDING = {
	    LEFT: 10,
	    RIGHT: 10,
	    TOP: 10,
	    BOTTOM: 10
	};
	
	var AXIS = exports.AXIS = {
	    WIDTH: 30
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.visibility = visibility;
	exports.generateExplode = generateExplode;
	function visibility(b) {
	    if (b) {
	        return "visible";
	    } else {
	        return "hidden";
	    }
	}
	
	function generateExplode(explodeRadius) {
	    return function explode(d, index) {
	        var angle = (d.startAngle + d.endAngle) / 2;
	        var xOff = Math.sin(angle) * explodeRadius;
	        var yOff = -Math.cos(angle) * explodeRadius;
	        return 'translate(' + xOff + ',' + yOff + ')';
	    };
	}

/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var INTERPOLATE = {
	    get LINEAR() {
	        return "linear";
	    },
	    get CARDINAL() {
	        return "cardinal";
	    },
	    get MONOTONE() {
	        return "monotone";
	    }
	};
	
	var MODE = {
	    get NORMAL() {
	        return "normal";
	    },
	    get STACKED() {
	        return "stacked";
	    },
	    get NORMALIZED() {
	        return "normalized";
	    }
	};
	
	exports.INTERPOLATE = INTERPOLATE;
	exports.MODE = MODE;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=iva.js.map