webpackHotUpdate("static\\development\\pages\\detail.js",{

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/a-function.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/a-function.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/a-possible-prototype.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/a-possible-prototype.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/_core-js@3.6.4@core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/add-to-unscopables.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/add-to-unscopables.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/_core-js@3.6.4@core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/_core-js@3.6.4@core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/advance-string-index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/advance-string-index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/_core-js@3.6.4@core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/an-object.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/an-object.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/_core-js@3.6.4@core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/array-for-each.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/array-for-each.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/_core-js@3.6.4@core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/_core-js@3.6.4@core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/_core-js@3.6.4@core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/array-from.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/array-from.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/_core-js@3.6.4@core-js/internals/function-bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/_core-js@3.6.4@core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "./node_modules/_core-js@3.6.4@core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "./node_modules/_core-js@3.6.4@core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/_core-js@3.6.4@core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/_core-js@3.6.4@core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "./node_modules/_core-js@3.6.4@core-js/internals/get-iterator-method.js");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/array-includes.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/array-includes.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/_core-js@3.6.4@core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/_core-js@3.6.4@core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/_core-js@3.6.4@core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/array-iteration.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/array-iteration.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/_core-js@3.6.4@core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/_core-js@3.6.4@core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/_core-js@3.6.4@core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/_core-js@3.6.4@core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/_core-js@3.6.4@core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/array-method-has-species-support.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/array-method-has-species-support.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.4@core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/_core-js@3.6.4@core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/array-method-is-strict.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/array-method-is-strict.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.4@core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/array-method-uses-to-length.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/array-method-uses-to-length.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/_core-js@3.6.4@core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.4@core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/_core-js@3.6.4@core-js/internals/has.js");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/array-species-create.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/array-species-create.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/_core-js@3.6.4@core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/_core-js@3.6.4@core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/call-with-safe-iteration-closing.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/call-with-safe-iteration-closing.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/_core-js@3.6.4@core-js/internals/an-object.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/check-correctness-of-iteration.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/check-correctness-of-iteration.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/classof-raw.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/classof-raw.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/classof.js":
/*!******************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/classof.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/_core-js@3.6.4@core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/_core-js@3.6.4@core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/copy-constructor-properties.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/copy-constructor-properties.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/_core-js@3.6.4@core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/_core-js@3.6.4@core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/_core-js@3.6.4@core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/_core-js@3.6.4@core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/correct-prototype-getter.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/correct-prototype-getter.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.4@core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/create-iterator-constructor.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/create-iterator-constructor.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/_core-js@3.6.4@core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/_core-js@3.6.4@core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/_core-js@3.6.4@core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/_core-js@3.6.4@core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/_core-js@3.6.4@core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/create-non-enumerable-property.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/create-non-enumerable-property.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/_core-js@3.6.4@core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/_core-js@3.6.4@core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/_core-js@3.6.4@core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/create-property-descriptor.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/create-property-descriptor.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/create-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/create-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/_core-js@3.6.4@core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/_core-js@3.6.4@core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/_core-js@3.6.4@core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/define-iterator.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/define-iterator.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/_core-js@3.6.4@core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/_core-js@3.6.4@core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/_core-js@3.6.4@core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/_core-js@3.6.4@core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/_core-js@3.6.4@core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/_core-js@3.6.4@core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/_core-js@3.6.4@core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/_core-js@3.6.4@core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/_core-js@3.6.4@core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/define-well-known-symbol.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/define-well-known-symbol.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/_core-js@3.6.4@core-js/internals/path.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/_core-js@3.6.4@core-js/internals/has.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol-wrapped.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/_core-js@3.6.4@core-js/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/descriptors.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/descriptors.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.4@core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/document-create-element.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/document-create-element.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.4@core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/_core-js@3.6.4@core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/dom-iterables.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/dom-iterables.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/engine-user-agent.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/engine-user-agent.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/_core-js@3.6.4@core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/engine-v8-version.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/engine-v8-version.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.4@core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/_core-js@3.6.4@core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/enum-bug-keys.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/enum-bug-keys.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/export.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/export.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.4@core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/_core-js@3.6.4@core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/_core-js@3.6.4@core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/_core-js@3.6.4@core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/_core-js@3.6.4@core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/_core-js@3.6.4@core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/_core-js@3.6.4@core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/fails.js":
/*!****************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/fails.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/_core-js@3.6.4@core-js/modules/es.regexp.exec.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/_core-js@3.6.4@core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.4@core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/_core-js@3.6.4@core-js/internals/regexp-exec.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/_core-js@3.6.4@core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/function-bind-context.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/function-bind-context.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/_core-js@3.6.4@core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/get-built-in.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/get-built-in.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/_core-js@3.6.4@core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.4@core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/get-iterator-method.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/get-iterator-method.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/_core-js@3.6.4@core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/_core-js@3.6.4@core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/global.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/global.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../_webpack@4.41.2@webpack/buildin/global.js */ "./node_modules/_webpack@4.41.2@webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/has.js":
/*!**************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/has.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/hidden-keys.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/hidden-keys.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/html.js":
/*!***************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/html.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/_core-js@3.6.4@core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/ie8-dom-define.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/ie8-dom-define.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/_core-js@3.6.4@core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.4@core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/_core-js@3.6.4@core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/indexed-object.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/indexed-object.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.4@core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/_core-js@3.6.4@core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/inspect-source.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/inspect-source.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/_core-js@3.6.4@core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/internal-state.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/internal-state.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/_core-js@3.6.4@core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.4@core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/_core-js@3.6.4@core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/_core-js@3.6.4@core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/_core-js@3.6.4@core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/_core-js@3.6.4@core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/_core-js@3.6.4@core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/is-array-iterator-method.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/is-array-iterator-method.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/_core-js@3.6.4@core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/is-array.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/is-array.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/_core-js@3.6.4@core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/is-forced.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/is-forced.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.4@core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/is-object.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/is-object.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/is-pure.js":
/*!******************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/is-pure.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/iterators-core.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/iterators-core.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/_core-js@3.6.4@core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/_core-js@3.6.4@core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/_core-js@3.6.4@core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/_core-js@3.6.4@core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/iterators.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/iterators.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/native-symbol.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/native-symbol.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.4@core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/native-weak-map.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/native-weak-map.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.4@core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/_core-js@3.6.4@core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/number-parse-int.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/number-parse-int.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.4@core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/_core-js@3.6.4@core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/_core-js@3.6.4@core-js/internals/whitespaces.js");

var $parseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/object-create.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/object-create.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/_core-js@3.6.4@core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/_core-js@3.6.4@core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/_core-js@3.6.4@core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/_core-js@3.6.4@core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/_core-js@3.6.4@core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/_core-js@3.6.4@core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/_core-js@3.6.4@core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/object-define-properties.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/object-define-properties.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/_core-js@3.6.4@core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/_core-js@3.6.4@core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/_core-js@3.6.4@core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/_core-js@3.6.4@core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/object-define-property.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/object-define-property.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/_core-js@3.6.4@core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/_core-js@3.6.4@core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/_core-js@3.6.4@core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/_core-js@3.6.4@core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/object-get-own-property-descriptor.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/object-get-own-property-descriptor.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/_core-js@3.6.4@core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/_core-js@3.6.4@core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/_core-js@3.6.4@core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/_core-js@3.6.4@core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/_core-js@3.6.4@core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/_core-js@3.6.4@core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/_core-js@3.6.4@core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/object-get-own-property-names-external.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/object-get-own-property-names-external.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/_core-js@3.6.4@core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/_core-js@3.6.4@core-js/internals/object-get-own-property-names.js").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/object-get-own-property-names.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/object-get-own-property-names.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/_core-js@3.6.4@core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/_core-js@3.6.4@core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/object-get-own-property-symbols.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/object-get-own-property-symbols.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/object-get-prototype-of.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/object-get-prototype-of.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/_core-js@3.6.4@core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/_core-js@3.6.4@core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/_core-js@3.6.4@core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/_core-js@3.6.4@core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/object-keys-internal.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/object-keys-internal.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/_core-js@3.6.4@core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/_core-js@3.6.4@core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/_core-js@3.6.4@core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/_core-js@3.6.4@core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/object-keys.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/object-keys.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/_core-js@3.6.4@core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/_core-js@3.6.4@core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/object-property-is-enumerable.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/object-property-is-enumerable.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/object-set-prototype-of.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/object-set-prototype-of.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/_core-js@3.6.4@core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/_core-js@3.6.4@core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/object-to-string.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/object-to-string.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/_core-js@3.6.4@core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/_core-js@3.6.4@core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/own-keys.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/own-keys.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/_core-js@3.6.4@core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/_core-js@3.6.4@core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/_core-js@3.6.4@core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/_core-js@3.6.4@core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/path.js":
/*!***************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/path.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.4@core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/redefine.js":
/*!*******************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/redefine.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.4@core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/_core-js@3.6.4@core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/_core-js@3.6.4@core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/_core-js@3.6.4@core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/_core-js@3.6.4@core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/_core-js@3.6.4@core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/regexp-exec-abstract.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/regexp-exec-abstract.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/_core-js@3.6.4@core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/_core-js@3.6.4@core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/regexp-exec.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/regexp-exec.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/_core-js@3.6.4@core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ "./node_modules/_core-js@3.6.4@core-js/internals/regexp-sticky-helpers.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/regexp-flags.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/regexp-flags.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/_core-js@3.6.4@core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/regexp-sticky-helpers.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/regexp-sticky-helpers.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./fails */ "./node_modules/_core-js@3.6.4@core-js/internals/fails.js");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/require-object-coercible.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/require-object-coercible.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/same-value.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/same-value.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `SameValue` abstract operation
// https://tc39.github.io/ecma262/#sec-samevalue
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/set-global.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/set-global.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.4@core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/_core-js@3.6.4@core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/set-to-string-tag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/set-to-string-tag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/_core-js@3.6.4@core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/_core-js@3.6.4@core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/shared-key.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/shared-key.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/_core-js@3.6.4@core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/_core-js@3.6.4@core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/shared-store.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/shared-store.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.4@core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/_core-js@3.6.4@core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/shared.js":
/*!*****************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/shared.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/_core-js@3.6.4@core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/_core-js@3.6.4@core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.4',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/string-multibyte.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/string-multibyte.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/_core-js@3.6.4@core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/_core-js@3.6.4@core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/string-trim-forced.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/string-trim-forced.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.4@core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/_core-js@3.6.4@core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/string-trim.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/string-trim.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/_core-js@3.6.4@core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/_core-js@3.6.4@core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/to-absolute-index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/to-absolute-index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/_core-js@3.6.4@core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/to-indexed-object.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/to-indexed-object.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/_core-js@3.6.4@core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/_core-js@3.6.4@core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/to-integer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/to-integer.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/to-length.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/to-length.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/_core-js@3.6.4@core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/to-object.js":
/*!********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/to-object.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/_core-js@3.6.4@core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/to-primitive.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/to-primitive.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/_core-js@3.6.4@core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/to-string-tag-support.js":
/*!********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/to-string-tag-support.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/uid.js":
/*!**************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/uid.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/use-symbol-as-uid.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/use-symbol-as-uid.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol-wrapped.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol-wrapped.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol.js");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.4@core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/_core-js@3.6.4@core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/_core-js@3.6.4@core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/_core-js@3.6.4@core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/_core-js@3.6.4@core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/whitespaces.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/whitespaces.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.concat.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.array.concat.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.4@core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/_core-js@3.6.4@core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/_core-js@3.6.4@core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/_core-js@3.6.4@core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/_core-js@3.6.4@core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/_core-js@3.6.4@core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/_core-js@3.6.4@core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/_core-js@3.6.4@core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/_core-js@3.6.4@core-js/internals/engine-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.filter.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.array.filter.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/_core-js@3.6.4@core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/_core-js@3.6.4@core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/_core-js@3.6.4@core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.find.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.array.find.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/_core-js@3.6.4@core-js/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/_core-js@3.6.4@core-js/internals/add-to-unscopables.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/_core-js@3.6.4@core-js/internals/array-method-uses-to-length.js");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.for-each.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.array.for-each.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/_core-js@3.6.4@core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.from.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.array.from.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/_core-js@3.6.4@core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/_core-js@3.6.4@core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.index-of.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.array.index-of.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/_core-js@3.6.4@core-js/internals/array-includes.js").indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/_core-js@3.6.4@core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/_core-js@3.6.4@core-js/internals/array-method-uses-to-length.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.iterator.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.array.iterator.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/_core-js@3.6.4@core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/_core-js@3.6.4@core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/_core-js@3.6.4@core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/_core-js@3.6.4@core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/_core-js@3.6.4@core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.map.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.array.map.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/_core-js@3.6.4@core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/_core-js@3.6.4@core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/_core-js@3.6.4@core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.slice.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.array.slice.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/_core-js@3.6.4@core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/_core-js@3.6.4@core-js/internals/is-array.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/_core-js@3.6.4@core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/_core-js@3.6.4@core-js/internals/to-length.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/_core-js@3.6.4@core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/_core-js@3.6.4@core-js/internals/create-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/_core-js@3.6.4@core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/_core-js@3.6.4@core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.date.to-string.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.date.to-string.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/_core-js@3.6.4@core-js/internals/redefine.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.object.define-properties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.object.define-properties.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/_core-js@3.6.4@core-js/internals/descriptors.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/_core-js@3.6.4@core-js/internals/object-define-properties.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.object.define-property.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.object.define-property.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/_core-js@3.6.4@core-js/internals/descriptors.js");
var objectDefinePropertyModile = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/_core-js@3.6.4@core-js/internals/object-define-property.js");

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.object.get-own-property-descriptor.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.object.get-own-property-descriptor.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.4@core-js/internals/fails.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/_core-js@3.6.4@core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/_core-js@3.6.4@core-js/internals/object-get-own-property-descriptor.js").f;
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/_core-js@3.6.4@core-js/internals/descriptors.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.object.get-own-property-descriptors.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.object.get-own-property-descriptors.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/_core-js@3.6.4@core-js/internals/descriptors.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/_core-js@3.6.4@core-js/internals/own-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/_core-js@3.6.4@core-js/internals/to-indexed-object.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/_core-js@3.6.4@core-js/internals/object-get-own-property-descriptor.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/_core-js@3.6.4@core-js/internals/create-property.js");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.object.get-prototype-of.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.object.get-prototype-of.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.4@core-js/internals/fails.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/_core-js@3.6.4@core-js/internals/to-object.js");
var nativeGetPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/_core-js@3.6.4@core-js/internals/object-get-prototype-of.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/_core-js@3.6.4@core-js/internals/correct-prototype-getter.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetPrototypeOf(1); });

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !CORRECT_PROTOTYPE_GETTER }, {
  getPrototypeOf: function getPrototypeOf(it) {
    return nativeGetPrototypeOf(toObject(it));
  }
});



/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.object.keys.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.object.keys.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/_core-js@3.6.4@core-js/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/_core-js@3.6.4@core-js/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.4@core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.object.set-prototype-of.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.object.set-prototype-of.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/_core-js@3.6.4@core-js/internals/object-set-prototype-of.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
$({ target: 'Object', stat: true }, {
  setPrototypeOf: setPrototypeOf
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.object.to-string.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.object.to-string.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/_core-js@3.6.4@core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/_core-js@3.6.4@core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/_core-js@3.6.4@core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.parse-int.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.parse-int.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/number-parse-int */ "./node_modules/_core-js@3.6.4@core-js/internals/number-parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.regexp.exec.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.regexp.exec.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/_core-js@3.6.4@core-js/internals/regexp-exec.js");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.regexp.to-string.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.regexp.to-string.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/_core-js@3.6.4@core-js/internals/redefine.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/_core-js@3.6.4@core-js/internals/an-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.4@core-js/internals/fails.js");
var flags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/_core-js@3.6.4@core-js/internals/regexp-flags.js");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.string.iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.string.iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/_core-js@3.6.4@core-js/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/_core-js@3.6.4@core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/_core-js@3.6.4@core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.string.match.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.string.match.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/_core-js@3.6.4@core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/_core-js@3.6.4@core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/_core-js@3.6.4@core-js/internals/to-length.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/_core-js@3.6.4@core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/_core-js@3.6.4@core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/_core-js@3.6.4@core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.string.replace.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.string.replace.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/_core-js@3.6.4@core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/_core-js@3.6.4@core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/_core-js@3.6.4@core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/_core-js@3.6.4@core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/_core-js@3.6.4@core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/_core-js@3.6.4@core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/_core-js@3.6.4@core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/_core-js@3.6.4@core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.string.search.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.string.search.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/_core-js@3.6.4@core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/_core-js@3.6.4@core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/_core-js@3.6.4@core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/_core-js@3.6.4@core-js/internals/same-value.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/_core-js@3.6.4@core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative(nativeSearch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.string.trim.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.string.trim.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var $trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/_core-js@3.6.4@core-js/internals/string-trim.js").trim;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/string-trim-forced */ "./node_modules/_core-js@3.6.4@core-js/internals/string-trim-forced.js");

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.symbol.description.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.symbol.description.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/_core-js@3.6.4@core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.4@core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/_core-js@3.6.4@core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/_core-js@3.6.4@core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/_core-js@3.6.4@core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/_core-js@3.6.4@core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.symbol.iterator.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.symbol.iterator.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/define-well-known-symbol.js");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.symbol.js":
/*!******************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.symbol.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/_core-js@3.6.4@core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.4@core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/_core-js@3.6.4@core-js/internals/get-built-in.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/_core-js@3.6.4@core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/_core-js@3.6.4@core-js/internals/descriptors.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/_core-js@3.6.4@core-js/internals/use-symbol-as-uid.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/_core-js@3.6.4@core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/_core-js@3.6.4@core-js/internals/has.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/_core-js@3.6.4@core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/_core-js@3.6.4@core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/_core-js@3.6.4@core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/_core-js@3.6.4@core-js/internals/to-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/_core-js@3.6.4@core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/_core-js@3.6.4@core-js/internals/to-primitive.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/_core-js@3.6.4@core-js/internals/create-property-descriptor.js");
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "./node_modules/_core-js@3.6.4@core-js/internals/object-create.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/_core-js@3.6.4@core-js/internals/object-keys.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/_core-js@3.6.4@core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/_core-js@3.6.4@core-js/internals/object-get-own-property-names-external.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/_core-js@3.6.4@core-js/internals/object-get-own-property-symbols.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/_core-js@3.6.4@core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/_core-js@3.6.4@core-js/internals/object-define-property.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/_core-js@3.6.4@core-js/internals/object-property-is-enumerable.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/_core-js@3.6.4@core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/_core-js@3.6.4@core-js/internals/redefine.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/_core-js@3.6.4@core-js/internals/shared.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/_core-js@3.6.4@core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/_core-js@3.6.4@core-js/internals/hidden-keys.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/_core-js@3.6.4@core-js/internals/uid.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/well-known-symbol-wrapped */ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol-wrapped.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/define-well-known-symbol.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/_core-js@3.6.4@core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/_core-js@3.6.4@core-js/internals/internal-state.js");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/_core-js@3.6.4@core-js/internals/array-iteration.js").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/web.dom-collections.for-each.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/web.dom-collections.for-each.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.4@core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/_core-js@3.6.4@core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/_core-js@3.6.4@core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/_core-js@3.6.4@core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/web.dom-collections.iterator.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/web.dom-collections.iterator.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/_core-js@3.6.4@core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/_core-js@3.6.4@core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/_core-js@3.6.4@core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/_core-js@3.6.4@core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/_markdown-navbar@1.4.0@markdown-navbar/dist/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_markdown-navbar@1.4.0@markdown-navbar/dist/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/_core-js@3.6.4@core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/_core-js@3.6.4@core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/_core-js@3.6.4@core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.map.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/_core-js@3.6.4@core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/_core-js@3.6.4@core-js/modules/es.object.define-properties.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/_core-js@3.6.4@core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/_core-js@3.6.4@core-js/modules/es.object.get-own-property-descriptor.js");

__webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/_core-js@3.6.4@core-js/modules/es.object.get-own-property-descriptors.js");

__webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/_core-js@3.6.4@core-js/modules/es.object.get-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/_core-js@3.6.4@core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/_core-js@3.6.4@core-js/modules/es.object.set-prototype-of.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/_core-js@3.6.4@core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/_core-js@3.6.4@core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/_core-js@3.6.4@core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/_core-js@3.6.4@core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/_core-js@3.6.4@core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/_core-js@3.6.4@core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/_core-js@3.6.4@core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/_core-js@3.6.4@core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/_core-js@3.6.4@core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/_core-js@3.6.4@core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/_core-js@3.6.4@core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MarkdownNavbar = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/_prop-types@15.7.2@prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MarkdownNavbar =
/*#__PURE__*/
function (_Component) {
  _inherits(MarkdownNavbar, _Component);

  function MarkdownNavbar(props) {
    var _this;

    _classCallCheck(this, MarkdownNavbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MarkdownNavbar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getCurrentHashValue", function () {
      return decodeURIComponent(window.location.hash.replace(/^#/, ''));
    });

    _defineProperty(_assertThisInitialized(_this), "winScroll", function () {
      if (_this.scrollEventLock) return;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      var newHeadingList = _this.getHeadingList().map(function (h) {
        return _objectSpread({}, h, {
          distanceToTop: Math.abs(scrollTop + _this.props.headingTopOffset - h.offsetTop)
        });
      });

      var distanceList = newHeadingList.map(function (h) {
        return h.distanceToTop;
      });
      var minDistance = Math.min.apply(Math, _toConsumableArray(distanceList));
      var curHeading = newHeadingList.find(function (h) {
        return h.distanceToTop === minDistance;
      });

      if (_this.props.updateHashAuto) {
        // Hash changing callback
        if (curHeading.dataId !== _this.getCurrentHashValue()) {
          _this.props.onHashChange(curHeading.dataId, _this.getCurrentHashValue());
        }

        _this.updateHash(curHeading.dataId);
      }

      _this.setState({
        currentListNo: curHeading.listNo
      });
    });

    _defineProperty(_assertThisInitialized(_this), "winHashChange", function () {
      _this.scrollToTarget(_this.getCurrentHashValue());
    });

    _this.state = {
      currentListNo: ''
    };
    return _this;
  }

  _createClass(MarkdownNavbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.addTargetTimeout) {
        clearTimeout(this.addTargetTimeout);
      }

      this.addTargetTimeout = setTimeout(function () {
        _this2.initHeadingsId();

        document.addEventListener('scroll', _this2.winScroll, false);
        window.addEventListener('hashchange', _this2.winHashChange, false);
      }, 500);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this3 = this;

      if (nextProps.source !== this.props.source) {
        if (this.scrollEventLockTimer) {
          clearTimeout(this.scrollEventLockTimer);
        }

        this.scrollEventLock = true;
        window.scrollTo(0, 0);
        this.setState({
          currentListNo: ''
        });
        var headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        Array.prototype.slice.apply(headings).forEach(function (h) {
          return h.dataset.id = '';
        });
        this.scrollEventLockTimer = setTimeout(function () {
          _this3.initHeadingsId();

          _this3.scrollEventLock = false;
        }, 500);
      }

      return true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.addTargetTimeout) {
        clearTimeout(this.addTargetTimeout);
      }

      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }

      document.removeEventListener('scroll', this.winScroll, false);
      window.removeEventListener('hashchange', this.winHashChange, false);
    }
  }, {
    key: "getNavStructure",
    value: function getNavStructure() {
      var contentWithoutCode = this.props.source.replace(/^[^#]+\n/g, '').replace(/^#\s[^#\n]*\n+/, '').replace(/```[^`\n]*\n+[^```]+```\n+/g, '').replace(/`([^`\n]+)`/g, '$1').replace(/\*\*?([^*\n]+)\*\*?/g, '$1').replace(/__?([^_\n]+)__?/g, '$1').trim();
      var pattOfTitle = /#+\s([^#\n]+)\n*/g;
      var matchResult = contentWithoutCode.match(pattOfTitle);

      if (!matchResult) {
        return [];
      }

      var navData = matchResult.map(function (r, i) {
        return {
          index: i,
          level: r.match(/^#+/g)[0].length,
          text: r.replace(pattOfTitle, '$1')
        };
      });

      var levelCount = function levelCount(level) {
        return navData.filter(function (r) {
          return r.level === level;
        }).length;
      };

      var startLevel = 1;
      var startLevelCount = levelCount(startLevel);

      while (!startLevelCount) {
        startLevel += 1;
        startLevelCount = levelCount(startLevel);
      }

      var listNo = 1;
      navData.forEach(function (t) {
        if (t.level === startLevel) {
          t.listNo = listNo.toString();
          listNo += 1;
        }
      });
      navData.forEach(function (t, i) {
        if (!t.listNo) {
          if (navData[i - 1] && t.level === navData[i - 1].level + 1) {
            t.listNo = "".concat(navData[i - 1].listNo, ".1");
          } else if (navData[i - 1] && t.level === navData[i - 1].level) {
            t.listNo = navData[i - 1].listNo.replace(/^(.+\.)(\d+)$/g, function (w, $1, $2) {
              return "".concat($1).concat(parseInt($2, 10) + 1);
            });
          } else {
            t.listNo = '';
          }
        }
      });
      var result = navData.map(function (nav) {
        return _objectSpread({}, nav, {
          listNo: nav.listNo.indexOf('.') < 0 ? "".concat(nav.listNo, ".") : nav.listNo,
          text: nav.text
        });
      });
      return result;
    }
  }, {
    key: "scrollToTarget",
    value: function scrollToTarget(dataId) {
      var _this4 = this;

      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }

      this.scrollTimeout = setTimeout(function () {
        var target = document.querySelector("[data-id=\"".concat(dataId, "\"]"));

        if (target && typeof target.offsetTop === 'number') {
          window.scrollTo(0, target.offsetTop - _this4.props.headingTopOffset);
        }
      }, 0);
    }
  }, {
    key: "initHeadingsId",
    value: function initHeadingsId() {
      var _this5 = this;

      var headingId = decodeURIComponent(this.props.declarative ? window.location.hash.replace(/^#/, '').trim() : (window.location.hash.match(/heading-\d+/g) || [])[0]);
      this.getNavStructure().forEach(function (t) {
        var headings = document.querySelectorAll("h".concat(t.level));
        var curHeading = Array.prototype.slice.apply(headings).find(function (h) {
          return h.innerText === t.text && (!h.dataset || !h.dataset.id);
        });

        if (curHeading) {
          curHeading.dataset.id = _this5.props.declarative ? t.text : "heading-".concat(t.index);

          if (headingId && headingId === curHeading.dataset.id) {
            _this5.scrollToTarget(headingId);

            _this5.setState({
              currentListNo: t.listNo
            });
          }
        }
      });
    }
  }, {
    key: "getHeadingList",
    value: function getHeadingList() {
      var _this6 = this;

      var headingList = [];
      this.getNavStructure().forEach(function (t) {
        var headings = document.querySelectorAll("h".concat(t.level));
        var curHeading = Array.prototype.slice.apply(headings).find(function (h) {
          return h.innerText === t.text && !headingList.find(function (x) {
            return x.offsetTop === h.offsetTop;
          });
        });

        if (curHeading) {
          headingList.push({
            dataId: _this6.props.declarative ? t.text : "heading-".concat(t.index),
            listNo: t.listNo,
            offsetTop: curHeading.offsetTop
          });
        }
      });
      return headingList;
    }
  }, {
    key: "updateHash",
    value: function updateHash(value) {
      window.history.replaceState({}, '', "".concat(window.location.pathname).concat(window.location.search, "#").concat(value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var tBlocks = this.getNavStructure().map(function (t) {
        var cls = "title-anchor title-level".concat(t.level, " ").concat(_this7.state.currentListNo === t.listNo ? 'active' : '');
        return _react.default.createElement("div", {
          className: cls,
          onClick: function onClick(evt) {
            var currentHash = _this7.props.declarative ? t.text : "heading-".concat(t.index); // Avoid execution the callback `onHashChange` when clicking current nav item

            if (t.listNo !== _this7.state.currentListNo) {
              // Hash changing callback
              _this7.props.onHashChange(currentHash, _this7.getCurrentHashValue());
            } // Nav item clicking callback


            _this7.props.onNavItemClick(evt, evt.target, currentHash);

            _this7.updateHash(currentHash);

            _this7.scrollToTarget(currentHash);

            _this7.setState({
              currentListNo: t.listNo
            });
          },
          key: "title_anchor_".concat(Math.random().toString(36).substring(2))
        }, _this7.props.ordered ? _react.default.createElement("small", null, t.listNo) : null, t.text);
      });
      return _react.default.createElement("div", {
        className: "markdown-navigation ".concat(this.props.className)
      }, tBlocks);
    }
  }]);

  return MarkdownNavbar;
}(_react.Component);

exports.MarkdownNavbar = MarkdownNavbar;

_defineProperty(MarkdownNavbar, "propTypes", {
  source: _propTypes.default.string.isRequired,
  ordered: _propTypes.default.bool,
  headingTopOffset: _propTypes.default.number,
  updateHashAuto: _propTypes.default.bool,
  declarative: _propTypes.default.bool,
  className: _propTypes.default.string,
  onNavItemClick: _propTypes.default.func,
  onHashChange: _propTypes.default.func
});

_defineProperty(MarkdownNavbar, "defaultProps", {
  source: '',
  ordered: true,
  headingTopOffset: 0,
  updateHashAuto: true,
  declarative: false,
  className: '',
  onNavItemClick: function onNavItemClick() {},
  onHashChange: function onHashChange() {}
});

var _default = MarkdownNavbar;
exports.default = _default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/_antd@3.26.7@antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/_antd@3.26.7@antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/icon */ "./node_modules/_antd@3.26.7@antd/lib/icon/index.js");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/breadcrumb */ "./node_modules/_antd@3.26.7@antd/lib/breadcrumb/index.js");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/_react@16.12.0@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../components/Header */ "./components/Header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/_next@9.1.7@next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Author__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../components/Author */ "./components/Author.js");
/* harmony import */ var _components_Ad__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../components/Ad */ "./components/Ad.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../components/Footer */ "./components/Footer.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-markdown */ "./node_modules/_react-markdown@4.3.1@react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var markdown_navbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! markdown-navbar */ "./node_modules/_markdown-navbar@1.4.0@markdown-navbar/dist/index.js");
/* harmony import */ var markdown_navbar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(markdown_navbar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! markdown-navbar/dist/navbar.css */ "./node_modules/_markdown-navbar@1.4.0@markdown-navbar/dist/navbar.css");
/* harmony import */ var markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(markdown_navbar_dist_navbar_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _static_style_pages_detail_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../static/style/pages/detail.css */ "./static/style/pages/detail.css");
/* harmony import */ var _static_style_pages_detail_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_style_pages_detail_css__WEBPACK_IMPORTED_MODULE_13__);




var _jsxFileName = "C:\\Users\\91583\\Desktop\\jspang-blog\\blog\\pages\\detail.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;
// 详情页










var markdown = '# P01:课程介绍和环境搭建\n' + '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' + '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' + '**这是加粗的文字**\n\n' + '*这是倾斜的文字*`\n\n' + '***这是斜体加粗的文字***\n\n' + '~~这是加删除线的文字~~ \n\n' + '\`console.log(111)\` \n\n' + '# p02:来个Hello World 初始Vue3.0\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n' + '***\n\n\n' + '# p03:Vue3.0基础知识讲解\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n\n' + '# p04:Vue3.0基础知识讲解\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n\n' + '#5 p05:Vue3.0基础知识讲解\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n\n' + '# p06:Vue3.0基础知识讲解\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n\n' + '# p07:Vue3.0基础知识讲解\n' + '> aaaaaaaaa\n' + '>> bbbbbbbbb\n' + '>>> cccccccccc\n\n' + '``` var a=11; ```';

var Detail = function Detail() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "\u64AD\u5BA2\u8BE6\u60C5\u9875")), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    type: "flex",
    justify: "center",
    className: "comm-main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    xs: 24,
    sm: 24,
    md: 10,
    lg: 15,
    xl: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    className: "bread-div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "\u9996\u9875")), __jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "\u89C6\u9891\u5217\u8868"))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    className: "detailed-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "React\u5B9E\u6218\u89C6\u9891\u6559\u7A0B-\u6280\u672F\u80D6Blog\u5F00\u53D1(\u66F4\u65B008\u96C6)"), __jsx("div", {
    className: "list-icon center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "calendar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), "2020\u5E741\u670818\u65E5"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "folder",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), "\u89C6\u9891\u6559\u7A0B"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_2___default.a, {
    type: "fire",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), "5498\u4EBA")), __jsx("div", {
    className: "detailed-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    className: "detail-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_10___default.a, {
    source: markdown,
    escapeHtml: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }))))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    xs: 0,
    sm: 0,
    md: 7,
    lg: 5,
    xl: 4,
    className: "comm-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(_components_Author__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx(_components_Ad__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Detail);

/***/ })

})
//# sourceMappingURL=detail.js.6b02e40ed498e4254c82.hot-update.js.map