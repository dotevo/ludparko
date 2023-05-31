import {map as $hgUW1$map, tileLayer as $hgUW1$tileLayer, polygon as $hgUW1$polygon, marker as $hgUW1$marker, DivIcon as $hgUW1$DivIcon, FeatureGroup as $hgUW1$FeatureGroup, LatLngBounds as $hgUW1$LatLngBounds} from "leaflet";



var $a67a387a6c2824b6$var$doc = document;
var $a67a387a6c2824b6$var$win = window;
var $a67a387a6c2824b6$var$docEle = $a67a387a6c2824b6$var$doc.documentElement;
var $a67a387a6c2824b6$var$createElement = $a67a387a6c2824b6$var$doc.createElement.bind($a67a387a6c2824b6$var$doc);
var $a67a387a6c2824b6$var$div = $a67a387a6c2824b6$var$createElement("div");
var $a67a387a6c2824b6$var$table = $a67a387a6c2824b6$var$createElement("table");
var $a67a387a6c2824b6$var$tbody = $a67a387a6c2824b6$var$createElement("tbody");
var $a67a387a6c2824b6$var$tr = $a67a387a6c2824b6$var$createElement("tr");
var $a67a387a6c2824b6$var$isArray = Array.isArray, $a67a387a6c2824b6$var$ArrayPrototype = Array.prototype;
var $a67a387a6c2824b6$var$concat = $a67a387a6c2824b6$var$ArrayPrototype.concat, $a67a387a6c2824b6$var$filter = $a67a387a6c2824b6$var$ArrayPrototype.filter, $a67a387a6c2824b6$var$indexOf = $a67a387a6c2824b6$var$ArrayPrototype.indexOf, $a67a387a6c2824b6$var$map = $a67a387a6c2824b6$var$ArrayPrototype.map, $a67a387a6c2824b6$var$push = $a67a387a6c2824b6$var$ArrayPrototype.push, $a67a387a6c2824b6$var$slice = $a67a387a6c2824b6$var$ArrayPrototype.slice, $a67a387a6c2824b6$var$some = $a67a387a6c2824b6$var$ArrayPrototype.some, $a67a387a6c2824b6$var$splice = $a67a387a6c2824b6$var$ArrayPrototype.splice;
var $a67a387a6c2824b6$var$idRe = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/;
var $a67a387a6c2824b6$var$classRe = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/;
var $a67a387a6c2824b6$var$htmlRe = /<.+>/;
var $a67a387a6c2824b6$var$tagRe = /^\w+$/;
// @require ./variables.ts
function $a67a387a6c2824b6$var$find(selector, context) {
    var isFragment = $a67a387a6c2824b6$var$isDocumentFragment(context);
    return !selector || !isFragment && !$a67a387a6c2824b6$var$isDocument(context) && !$a67a387a6c2824b6$var$isElement(context) ? [] : !isFragment && $a67a387a6c2824b6$var$classRe.test(selector) ? context.getElementsByClassName(selector.slice(1).replace(/\\/g, "")) : !isFragment && $a67a387a6c2824b6$var$tagRe.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector);
}
// @require ./find.ts
// @require ./variables.ts
var $a67a387a6c2824b6$export$66b83811e15e705 = /** @class */ function() {
    function Cash(selector, context) {
        if (!selector) return;
        if ($a67a387a6c2824b6$var$isCash(selector)) return selector;
        var eles = selector;
        if ($a67a387a6c2824b6$var$isString(selector)) {
            var ctx = context || $a67a387a6c2824b6$var$doc;
            eles = $a67a387a6c2824b6$var$idRe.test(selector) && $a67a387a6c2824b6$var$isDocument(ctx) ? ctx.getElementById(selector.slice(1).replace(/\\/g, "")) : $a67a387a6c2824b6$var$htmlRe.test(selector) ? $a67a387a6c2824b6$var$parseHTML(selector) : $a67a387a6c2824b6$var$isCash(ctx) ? ctx.find(selector) : $a67a387a6c2824b6$var$isString(ctx) ? $a67a387a6c2824b6$var$cash(ctx).find(selector) : $a67a387a6c2824b6$var$find(selector, ctx);
            if (!eles) return;
        } else if ($a67a387a6c2824b6$var$isFunction(selector)) return this.ready(selector); //FIXME: `fn.ready` is not included in `core`, but it's actually a core functionality
        if (eles.nodeType || eles === $a67a387a6c2824b6$var$win) eles = [
            eles
        ];
        this.length = eles.length;
        for(var i = 0, l = this.length; i < l; i++)this[i] = eles[i];
    }
    Cash.prototype.init = function(selector, context) {
        return new Cash(selector, context);
    };
    return Cash;
}();
var $a67a387a6c2824b6$var$fn = $a67a387a6c2824b6$export$66b83811e15e705.prototype;
var $a67a387a6c2824b6$var$cash = $a67a387a6c2824b6$var$fn.init;
$a67a387a6c2824b6$var$cash.fn = $a67a387a6c2824b6$var$cash.prototype = $a67a387a6c2824b6$var$fn; // Ensuring that `cash () instanceof cash`
$a67a387a6c2824b6$var$fn.length = 0;
$a67a387a6c2824b6$var$fn.splice = $a67a387a6c2824b6$var$splice; // Ensuring a cash collection gets printed as array-like in Chrome's devtools
if (typeof Symbol === "function") $a67a387a6c2824b6$var$fn[Symbol["iterator"]] = $a67a387a6c2824b6$var$ArrayPrototype[Symbol["iterator"]];
function $a67a387a6c2824b6$var$isCash(value) {
    return value instanceof $a67a387a6c2824b6$export$66b83811e15e705;
}
function $a67a387a6c2824b6$var$isWindow(value) {
    return !!value && value === value.window;
}
function $a67a387a6c2824b6$var$isDocument(value) {
    return !!value && value.nodeType === 9;
}
function $a67a387a6c2824b6$var$isDocumentFragment(value) {
    return !!value && value.nodeType === 11;
}
function $a67a387a6c2824b6$var$isElement(value) {
    return !!value && value.nodeType === 1;
}
function $a67a387a6c2824b6$var$isText(value) {
    return !!value && value.nodeType === 3;
}
function $a67a387a6c2824b6$var$isBoolean(value) {
    return typeof value === "boolean";
}
function $a67a387a6c2824b6$var$isFunction(value) {
    return typeof value === "function";
}
function $a67a387a6c2824b6$var$isString(value) {
    return typeof value === "string";
}
function $a67a387a6c2824b6$var$isUndefined(value) {
    return value === undefined;
}
function $a67a387a6c2824b6$var$isNull(value) {
    return value === null;
}
function $a67a387a6c2824b6$var$isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
function $a67a387a6c2824b6$var$isPlainObject(value) {
    if (typeof value !== "object" || value === null) return false;
    var proto = Object.getPrototypeOf(value);
    return proto === null || proto === Object.prototype;
}
$a67a387a6c2824b6$var$cash.isWindow = $a67a387a6c2824b6$var$isWindow;
$a67a387a6c2824b6$var$cash.isFunction = $a67a387a6c2824b6$var$isFunction;
$a67a387a6c2824b6$var$cash.isArray = $a67a387a6c2824b6$var$isArray;
$a67a387a6c2824b6$var$cash.isNumeric = $a67a387a6c2824b6$var$isNumeric;
$a67a387a6c2824b6$var$cash.isPlainObject = $a67a387a6c2824b6$var$isPlainObject;
function $a67a387a6c2824b6$var$each(arr, callback, _reverse) {
    if (_reverse) {
        var i = arr.length;
        while(i--){
            if (callback.call(arr[i], i, arr[i]) === false) return arr;
        }
    } else if ($a67a387a6c2824b6$var$isPlainObject(arr)) {
        var keys = Object.keys(arr);
        for(var i = 0, l = keys.length; i < l; i++){
            var key = keys[i];
            if (callback.call(arr[key], key, arr[key]) === false) return arr;
        }
    } else for(var i = 0, l = arr.length; i < l; i++){
        if (callback.call(arr[i], i, arr[i]) === false) return arr;
    }
    return arr;
}
$a67a387a6c2824b6$var$cash.each = $a67a387a6c2824b6$var$each;
$a67a387a6c2824b6$var$fn.each = function(callback) {
    return $a67a387a6c2824b6$var$each(this, callback);
};
$a67a387a6c2824b6$var$fn.empty = function() {
    return this.each(function(i, ele) {
        while(ele.firstChild)ele.removeChild(ele.firstChild);
    });
};
function $a67a387a6c2824b6$var$extend() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    var deep = $a67a387a6c2824b6$var$isBoolean(sources[0]) ? sources.shift() : false;
    var target = sources.shift();
    var length = sources.length;
    if (!target) return {};
    if (!length) return $a67a387a6c2824b6$var$extend(deep, $a67a387a6c2824b6$var$cash, target);
    for(var i = 0; i < length; i++){
        var source = sources[i];
        for(var key in source)if (deep && ($a67a387a6c2824b6$var$isArray(source[key]) || $a67a387a6c2824b6$var$isPlainObject(source[key]))) {
            if (!target[key] || target[key].constructor !== source[key].constructor) target[key] = new source[key].constructor();
            $a67a387a6c2824b6$var$extend(deep, target[key], source[key]);
        } else target[key] = source[key];
    }
    return target;
}
$a67a387a6c2824b6$var$cash.extend = $a67a387a6c2824b6$var$extend;
$a67a387a6c2824b6$var$fn.extend = function(plugins) {
    return $a67a387a6c2824b6$var$extend($a67a387a6c2824b6$var$fn, plugins);
};
// @require ./type_checking.ts
var $a67a387a6c2824b6$var$splitValuesRe = /\S+/g;
function $a67a387a6c2824b6$var$getSplitValues(str) {
    return $a67a387a6c2824b6$var$isString(str) ? str.match($a67a387a6c2824b6$var$splitValuesRe) || [] : [];
}
$a67a387a6c2824b6$var$fn.toggleClass = function(cls, force) {
    var classes = $a67a387a6c2824b6$var$getSplitValues(cls);
    var isForce = !$a67a387a6c2824b6$var$isUndefined(force);
    return this.each(function(i, ele) {
        if (!$a67a387a6c2824b6$var$isElement(ele)) return;
        $a67a387a6c2824b6$var$each(classes, function(i, c) {
            if (isForce) force ? ele.classList.add(c) : ele.classList.remove(c);
            else ele.classList.toggle(c);
        });
    });
};
$a67a387a6c2824b6$var$fn.addClass = function(cls) {
    return this.toggleClass(cls, true);
};
$a67a387a6c2824b6$var$fn.removeAttr = function(attr) {
    var attrs = $a67a387a6c2824b6$var$getSplitValues(attr);
    return this.each(function(i, ele) {
        if (!$a67a387a6c2824b6$var$isElement(ele)) return;
        $a67a387a6c2824b6$var$each(attrs, function(i, a) {
            ele.removeAttribute(a);
        });
    });
};
function $a67a387a6c2824b6$var$attr(attr, value) {
    if (!attr) return;
    if ($a67a387a6c2824b6$var$isString(attr)) {
        if (arguments.length < 2) {
            if (!this[0] || !$a67a387a6c2824b6$var$isElement(this[0])) return;
            var value_1 = this[0].getAttribute(attr);
            return $a67a387a6c2824b6$var$isNull(value_1) ? undefined : value_1;
        }
        if ($a67a387a6c2824b6$var$isUndefined(value)) return this;
        if ($a67a387a6c2824b6$var$isNull(value)) return this.removeAttr(attr);
        return this.each(function(i, ele) {
            if (!$a67a387a6c2824b6$var$isElement(ele)) return;
            ele.setAttribute(attr, value);
        });
    }
    for(var key in attr)this.attr(key, attr[key]);
    return this;
}
$a67a387a6c2824b6$var$fn.attr = $a67a387a6c2824b6$var$attr;
$a67a387a6c2824b6$var$fn.removeClass = function(cls) {
    if (arguments.length) return this.toggleClass(cls, false);
    return this.attr("class", "");
};
$a67a387a6c2824b6$var$fn.hasClass = function(cls) {
    return !!cls && $a67a387a6c2824b6$var$some.call(this, function(ele) {
        return $a67a387a6c2824b6$var$isElement(ele) && ele.classList.contains(cls);
    });
};
$a67a387a6c2824b6$var$fn.get = function(index) {
    if ($a67a387a6c2824b6$var$isUndefined(index)) return $a67a387a6c2824b6$var$slice.call(this);
    index = Number(index);
    return this[index < 0 ? index + this.length : index];
};
$a67a387a6c2824b6$var$fn.eq = function(index) {
    return $a67a387a6c2824b6$var$cash(this.get(index));
};
$a67a387a6c2824b6$var$fn.first = function() {
    return this.eq(0);
};
$a67a387a6c2824b6$var$fn.last = function() {
    return this.eq(-1);
};
function $a67a387a6c2824b6$var$text(text) {
    if ($a67a387a6c2824b6$var$isUndefined(text)) return this.get().map(function(ele) {
        return $a67a387a6c2824b6$var$isElement(ele) || $a67a387a6c2824b6$var$isText(ele) ? ele.textContent : "";
    }).join("");
    return this.each(function(i, ele) {
        if (!$a67a387a6c2824b6$var$isElement(ele)) return;
        ele.textContent = text;
    });
}
$a67a387a6c2824b6$var$fn.text = $a67a387a6c2824b6$var$text;
// @require core/type_checking.ts
// @require core/variables.ts
function $a67a387a6c2824b6$var$computeStyle(ele, prop, isVariable) {
    if (!$a67a387a6c2824b6$var$isElement(ele)) return;
    var style = $a67a387a6c2824b6$var$win.getComputedStyle(ele, null);
    return isVariable ? style.getPropertyValue(prop) || undefined : style[prop] || ele.style[prop];
}
// @require ./compute_style.ts
function $a67a387a6c2824b6$var$computeStyleInt(ele, prop) {
    return parseInt($a67a387a6c2824b6$var$computeStyle(ele, prop), 10) || 0;
}
// @require css/helpers/compute_style_int.ts
function $a67a387a6c2824b6$var$getExtraSpace(ele, xAxis) {
    return $a67a387a6c2824b6$var$computeStyleInt(ele, "border".concat(xAxis ? "Left" : "Top", "Width")) + $a67a387a6c2824b6$var$computeStyleInt(ele, "padding".concat(xAxis ? "Left" : "Top")) + $a67a387a6c2824b6$var$computeStyleInt(ele, "padding".concat(xAxis ? "Right" : "Bottom")) + $a67a387a6c2824b6$var$computeStyleInt(ele, "border".concat(xAxis ? "Right" : "Bottom", "Width"));
}
// @require css/helpers/compute_style.ts
var $a67a387a6c2824b6$var$defaultDisplay = {};
function $a67a387a6c2824b6$var$getDefaultDisplay(tagName) {
    if ($a67a387a6c2824b6$var$defaultDisplay[tagName]) return $a67a387a6c2824b6$var$defaultDisplay[tagName];
    var ele = $a67a387a6c2824b6$var$createElement(tagName);
    $a67a387a6c2824b6$var$doc.body.insertBefore(ele, null);
    var display = $a67a387a6c2824b6$var$computeStyle(ele, "display");
    $a67a387a6c2824b6$var$doc.body.removeChild(ele);
    return $a67a387a6c2824b6$var$defaultDisplay[tagName] = display !== "none" ? display : "block";
}
// @require css/helpers/compute_style.ts
function $a67a387a6c2824b6$var$isHidden(ele) {
    return $a67a387a6c2824b6$var$computeStyle(ele, "display") === "none";
}
// @require ./cash.ts
function $a67a387a6c2824b6$var$matches(ele, selector) {
    var matches = ele && (ele["matches"] || ele["webkitMatchesSelector"] || ele["msMatchesSelector"]);
    return !!matches && !!selector && matches.call(ele, selector);
}
// @require ./matches.ts
// @require ./type_checking.ts
function $a67a387a6c2824b6$var$getCompareFunction(comparator) {
    return $a67a387a6c2824b6$var$isString(comparator) ? function(i, ele) {
        return $a67a387a6c2824b6$var$matches(ele, comparator);
    } : $a67a387a6c2824b6$var$isFunction(comparator) ? comparator : $a67a387a6c2824b6$var$isCash(comparator) ? function(i, ele) {
        return comparator.is(ele);
    } : !comparator ? function() {
        return false;
    } : function(i, ele) {
        return ele === comparator;
    };
}
$a67a387a6c2824b6$var$fn.filter = function(comparator) {
    var compare = $a67a387a6c2824b6$var$getCompareFunction(comparator);
    return $a67a387a6c2824b6$var$cash($a67a387a6c2824b6$var$filter.call(this, function(ele, i) {
        return compare.call(ele, i, ele);
    }));
};
// @require collection/filter.ts
function $a67a387a6c2824b6$var$filtered(collection, comparator) {
    return !comparator ? collection : collection.filter(comparator);
}
$a67a387a6c2824b6$var$fn.detach = function(comparator) {
    $a67a387a6c2824b6$var$filtered(this, comparator).each(function(i, ele) {
        if (ele.parentNode) ele.parentNode.removeChild(ele);
    });
    return this;
};
var $a67a387a6c2824b6$var$fragmentRe = /^\s*<(\w+)[^>]*>/;
var $a67a387a6c2824b6$var$singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
var $a67a387a6c2824b6$var$containers = {
    "*": $a67a387a6c2824b6$var$div,
    tr: $a67a387a6c2824b6$var$tbody,
    td: $a67a387a6c2824b6$var$tr,
    th: $a67a387a6c2824b6$var$tr,
    thead: $a67a387a6c2824b6$var$table,
    tbody: $a67a387a6c2824b6$var$table,
    tfoot: $a67a387a6c2824b6$var$table
};
//TODO: Create elements inside a document fragment, in order to prevent inline event handlers from firing
//TODO: Ensure the created elements have the fragment as their parent instead of null, this also ensures we can deal with detatched nodes more reliably
function $a67a387a6c2824b6$var$parseHTML(html) {
    if (!$a67a387a6c2824b6$var$isString(html)) return [];
    if ($a67a387a6c2824b6$var$singleTagRe.test(html)) return [
        $a67a387a6c2824b6$var$createElement(RegExp.$1)
    ];
    var fragment = $a67a387a6c2824b6$var$fragmentRe.test(html) && RegExp.$1;
    var container = $a67a387a6c2824b6$var$containers[fragment] || $a67a387a6c2824b6$var$containers["*"];
    container.innerHTML = html;
    return $a67a387a6c2824b6$var$cash(container.childNodes).detach().get();
}
$a67a387a6c2824b6$var$cash.parseHTML = $a67a387a6c2824b6$var$parseHTML;
$a67a387a6c2824b6$var$fn.has = function(selector) {
    var comparator = $a67a387a6c2824b6$var$isString(selector) ? function(i, ele) {
        return $a67a387a6c2824b6$var$find(selector, ele).length;
    } : function(i, ele) {
        return ele.contains(selector);
    };
    return this.filter(comparator);
};
$a67a387a6c2824b6$var$fn.not = function(comparator) {
    var compare = $a67a387a6c2824b6$var$getCompareFunction(comparator);
    return this.filter(function(i, ele) {
        return (!$a67a387a6c2824b6$var$isString(comparator) || $a67a387a6c2824b6$var$isElement(ele)) && !compare.call(ele, i, ele);
    });
};
function $a67a387a6c2824b6$var$pluck(arr, prop, deep, until) {
    var plucked = [];
    var isCallback = $a67a387a6c2824b6$var$isFunction(prop);
    var compare = until && $a67a387a6c2824b6$var$getCompareFunction(until);
    for(var i = 0, l = arr.length; i < l; i++)if (isCallback) {
        var val_1 = prop(arr[i]);
        if (val_1.length) $a67a387a6c2824b6$var$push.apply(plucked, val_1);
    } else {
        var val_2 = arr[i][prop];
        while(val_2 != null){
            if (until && compare(-1, val_2)) break;
            plucked.push(val_2);
            val_2 = deep ? val_2[prop] : null;
        }
    }
    return plucked;
}
// @require core/pluck.ts
// @require core/variables.ts
function $a67a387a6c2824b6$var$getValue(ele) {
    if (ele.multiple && ele.options) return $a67a387a6c2824b6$var$pluck($a67a387a6c2824b6$var$filter.call(ele.options, function(option) {
        return option.selected && !option.disabled && !option.parentNode.disabled;
    }), "value");
    return ele.value || "";
}
function $a67a387a6c2824b6$var$val(value) {
    if (!arguments.length) return this[0] && $a67a387a6c2824b6$var$getValue(this[0]);
    return this.each(function(i, ele) {
        var isSelect = ele.multiple && ele.options;
        if (isSelect || $a67a387a6c2824b6$var$checkableRe.test(ele.type)) {
            var eleValue_1 = $a67a387a6c2824b6$var$isArray(value) ? $a67a387a6c2824b6$var$map.call(value, String) : $a67a387a6c2824b6$var$isNull(value) ? [] : [
                String(value)
            ];
            if (isSelect) $a67a387a6c2824b6$var$each(ele.options, function(i, option) {
                option.selected = eleValue_1.indexOf(option.value) >= 0;
            }, true);
            else ele.checked = eleValue_1.indexOf(ele.value) >= 0;
        } else ele.value = $a67a387a6c2824b6$var$isUndefined(value) || $a67a387a6c2824b6$var$isNull(value) ? "" : value;
    });
}
$a67a387a6c2824b6$var$fn.val = $a67a387a6c2824b6$var$val;
$a67a387a6c2824b6$var$fn.is = function(comparator) {
    var compare = $a67a387a6c2824b6$var$getCompareFunction(comparator);
    return $a67a387a6c2824b6$var$some.call(this, function(ele, i) {
        return compare.call(ele, i, ele);
    });
};
$a67a387a6c2824b6$var$cash.guid = 1;
function $a67a387a6c2824b6$var$unique(arr) {
    return arr.length > 1 ? $a67a387a6c2824b6$var$filter.call(arr, function(item, index, self) {
        return $a67a387a6c2824b6$var$indexOf.call(self, item) === index;
    }) : arr;
}
$a67a387a6c2824b6$var$cash.unique = $a67a387a6c2824b6$var$unique;
$a67a387a6c2824b6$var$fn.add = function(selector, context) {
    return $a67a387a6c2824b6$var$cash($a67a387a6c2824b6$var$unique(this.get().concat($a67a387a6c2824b6$var$cash(selector, context).get())));
};
$a67a387a6c2824b6$var$fn.children = function(comparator) {
    return $a67a387a6c2824b6$var$filtered($a67a387a6c2824b6$var$cash($a67a387a6c2824b6$var$unique($a67a387a6c2824b6$var$pluck(this, function(ele) {
        return ele.children;
    }))), comparator);
};
$a67a387a6c2824b6$var$fn.parent = function(comparator) {
    return $a67a387a6c2824b6$var$filtered($a67a387a6c2824b6$var$cash($a67a387a6c2824b6$var$unique($a67a387a6c2824b6$var$pluck(this, "parentNode"))), comparator);
};
$a67a387a6c2824b6$var$fn.index = function(selector) {
    var child = selector ? $a67a387a6c2824b6$var$cash(selector)[0] : this[0];
    var collection = selector ? this : $a67a387a6c2824b6$var$cash(child).parent().children();
    return $a67a387a6c2824b6$var$indexOf.call(collection, child);
};
$a67a387a6c2824b6$var$fn.closest = function(comparator) {
    var filtered = this.filter(comparator);
    if (filtered.length) return filtered;
    var $parent = this.parent();
    if (!$parent.length) return filtered;
    return $parent.closest(comparator);
};
$a67a387a6c2824b6$var$fn.siblings = function(comparator) {
    return $a67a387a6c2824b6$var$filtered($a67a387a6c2824b6$var$cash($a67a387a6c2824b6$var$unique($a67a387a6c2824b6$var$pluck(this, function(ele) {
        return $a67a387a6c2824b6$var$cash(ele).parent().children().not(ele);
    }))), comparator);
};
$a67a387a6c2824b6$var$fn.find = function(selector) {
    return $a67a387a6c2824b6$var$cash($a67a387a6c2824b6$var$unique($a67a387a6c2824b6$var$pluck(this, function(ele) {
        return $a67a387a6c2824b6$var$find(selector, ele);
    })));
};
// @require core/variables.ts
// @require collection/filter.ts
// @require traversal/find.ts
var $a67a387a6c2824b6$var$HTMLCDATARe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
var $a67a387a6c2824b6$var$scriptTypeRe = /^$|^module$|\/(java|ecma)script/i;
var $a67a387a6c2824b6$var$scriptAttributes = [
    "type",
    "src",
    "nonce",
    "noModule"
];
function $a67a387a6c2824b6$var$evalScripts(node, doc) {
    var collection = $a67a387a6c2824b6$var$cash(node);
    collection.filter("script").add(collection.find("script")).each(function(i, ele) {
        if ($a67a387a6c2824b6$var$scriptTypeRe.test(ele.type) && $a67a387a6c2824b6$var$docEle.contains(ele)) {
            var script_1 = $a67a387a6c2824b6$var$createElement("script");
            script_1.text = ele.textContent.replace($a67a387a6c2824b6$var$HTMLCDATARe, "");
            $a67a387a6c2824b6$var$each($a67a387a6c2824b6$var$scriptAttributes, function(i, attr) {
                if (ele[attr]) script_1[attr] = ele[attr];
            });
            doc.head.insertBefore(script_1, null);
            doc.head.removeChild(script_1);
        }
    });
}
// @require ./eval_scripts.ts
function $a67a387a6c2824b6$var$insertElement(anchor, target, left, inside, evaluate) {
    if (inside) anchor.insertBefore(target, left ? anchor.firstChild : null);
    else if (anchor.nodeName === "HTML") anchor.parentNode.replaceChild(target, anchor);
    else anchor.parentNode.insertBefore(target, left ? anchor : anchor.nextSibling);
    if (evaluate) $a67a387a6c2824b6$var$evalScripts(target, anchor.ownerDocument);
}
// @require ./insert_element.ts
function $a67a387a6c2824b6$var$insertSelectors(selectors, anchors, inverse, left, inside, reverseLoop1, reverseLoop2, reverseLoop3) {
    $a67a387a6c2824b6$var$each(selectors, function(si, selector) {
        $a67a387a6c2824b6$var$each($a67a387a6c2824b6$var$cash(selector), function(ti, target) {
            $a67a387a6c2824b6$var$each($a67a387a6c2824b6$var$cash(anchors), function(ai, anchor) {
                var anchorFinal = inverse ? target : anchor;
                var targetFinal = inverse ? anchor : target;
                var indexFinal = inverse ? ti : ai;
                $a67a387a6c2824b6$var$insertElement(anchorFinal, !indexFinal ? targetFinal : targetFinal.cloneNode(true), left, inside, !indexFinal);
            }, reverseLoop3);
        }, reverseLoop2);
    }, reverseLoop1);
    return anchors;
}
$a67a387a6c2824b6$var$fn.after = function() {
    return $a67a387a6c2824b6$var$insertSelectors(arguments, this, false, false, false, true, true);
};
$a67a387a6c2824b6$var$fn.append = function() {
    return $a67a387a6c2824b6$var$insertSelectors(arguments, this, false, false, true);
};
function $a67a387a6c2824b6$var$html(html) {
    if (!arguments.length) return this[0] && this[0].innerHTML;
    if ($a67a387a6c2824b6$var$isUndefined(html)) return this;
    var hasScript = /<script[\s>]/.test(html);
    return this.each(function(i, ele) {
        if (!$a67a387a6c2824b6$var$isElement(ele)) return;
        if (hasScript) $a67a387a6c2824b6$var$cash(ele).empty().append(html);
        else ele.innerHTML = html;
    });
}
$a67a387a6c2824b6$var$fn.html = $a67a387a6c2824b6$var$html;
$a67a387a6c2824b6$var$fn.appendTo = function(selector) {
    return $a67a387a6c2824b6$var$insertSelectors(arguments, this, true, false, true);
};
$a67a387a6c2824b6$var$fn.wrapInner = function(selector) {
    return this.each(function(i, ele) {
        var $ele = $a67a387a6c2824b6$var$cash(ele);
        var contents = $ele.contents();
        contents.length ? contents.wrapAll(selector) : $ele.append(selector);
    });
};
$a67a387a6c2824b6$var$fn.before = function() {
    return $a67a387a6c2824b6$var$insertSelectors(arguments, this, false, true);
};
$a67a387a6c2824b6$var$fn.wrapAll = function(selector) {
    var structure = $a67a387a6c2824b6$var$cash(selector);
    var wrapper = structure[0];
    while(wrapper.children.length)wrapper = wrapper.firstElementChild;
    this.first().before(structure);
    return this.appendTo(wrapper);
};
$a67a387a6c2824b6$var$fn.wrap = function(selector) {
    return this.each(function(i, ele) {
        var wrapper = $a67a387a6c2824b6$var$cash(selector)[0];
        $a67a387a6c2824b6$var$cash(ele).wrapAll(!i ? wrapper : wrapper.cloneNode(true));
    });
};
$a67a387a6c2824b6$var$fn.insertAfter = function(selector) {
    return $a67a387a6c2824b6$var$insertSelectors(arguments, this, true, false, false, false, false, true);
};
$a67a387a6c2824b6$var$fn.insertBefore = function(selector) {
    return $a67a387a6c2824b6$var$insertSelectors(arguments, this, true, true);
};
$a67a387a6c2824b6$var$fn.prepend = function() {
    return $a67a387a6c2824b6$var$insertSelectors(arguments, this, false, true, true, true, true);
};
$a67a387a6c2824b6$var$fn.prependTo = function(selector) {
    return $a67a387a6c2824b6$var$insertSelectors(arguments, this, true, true, true, false, false, true);
};
$a67a387a6c2824b6$var$fn.contents = function() {
    return $a67a387a6c2824b6$var$cash($a67a387a6c2824b6$var$unique($a67a387a6c2824b6$var$pluck(this, function(ele) {
        return ele.tagName === "IFRAME" ? [
            ele.contentDocument
        ] : ele.tagName === "TEMPLATE" ? ele.content.childNodes : ele.childNodes;
    })));
};
$a67a387a6c2824b6$var$fn.next = function(comparator, _all, _until) {
    return $a67a387a6c2824b6$var$filtered($a67a387a6c2824b6$var$cash($a67a387a6c2824b6$var$unique($a67a387a6c2824b6$var$pluck(this, "nextElementSibling", _all, _until))), comparator);
};
$a67a387a6c2824b6$var$fn.nextAll = function(comparator) {
    return this.next(comparator, true);
};
$a67a387a6c2824b6$var$fn.nextUntil = function(until, comparator) {
    return this.next(comparator, true, until);
};
$a67a387a6c2824b6$var$fn.parents = function(comparator, _until) {
    return $a67a387a6c2824b6$var$filtered($a67a387a6c2824b6$var$cash($a67a387a6c2824b6$var$unique($a67a387a6c2824b6$var$pluck(this, "parentElement", true, _until))), comparator);
};
$a67a387a6c2824b6$var$fn.parentsUntil = function(until, comparator) {
    return this.parents(comparator, until);
};
$a67a387a6c2824b6$var$fn.prev = function(comparator, _all, _until) {
    return $a67a387a6c2824b6$var$filtered($a67a387a6c2824b6$var$cash($a67a387a6c2824b6$var$unique($a67a387a6c2824b6$var$pluck(this, "previousElementSibling", _all, _until))), comparator);
};
$a67a387a6c2824b6$var$fn.prevAll = function(comparator) {
    return this.prev(comparator, true);
};
$a67a387a6c2824b6$var$fn.prevUntil = function(until, comparator) {
    return this.prev(comparator, true, until);
};
$a67a387a6c2824b6$var$fn.map = function(callback) {
    return $a67a387a6c2824b6$var$cash($a67a387a6c2824b6$var$concat.apply([], $a67a387a6c2824b6$var$map.call(this, function(ele, i) {
        return callback.call(ele, i, ele);
    })));
};
$a67a387a6c2824b6$var$fn.clone = function() {
    return this.map(function(i, ele) {
        return ele.cloneNode(true);
    });
};
$a67a387a6c2824b6$var$fn.offsetParent = function() {
    return this.map(function(i, ele) {
        var offsetParent = ele.offsetParent;
        while(offsetParent && $a67a387a6c2824b6$var$computeStyle(offsetParent, "position") === "static")offsetParent = offsetParent.offsetParent;
        return offsetParent || $a67a387a6c2824b6$var$docEle;
    });
};
$a67a387a6c2824b6$var$fn.slice = function(start, end) {
    return $a67a387a6c2824b6$var$cash($a67a387a6c2824b6$var$slice.call(this, start, end));
};
// @require ./cash.ts
var $a67a387a6c2824b6$var$dashAlphaRe = /-([a-z])/g;
function $a67a387a6c2824b6$var$camelCase(str) {
    return str.replace($a67a387a6c2824b6$var$dashAlphaRe, function(match, letter) {
        return letter.toUpperCase();
    });
}
$a67a387a6c2824b6$var$fn.ready = function(callback) {
    var cb = function() {
        return setTimeout(callback, 0, $a67a387a6c2824b6$var$cash);
    };
    if ($a67a387a6c2824b6$var$doc.readyState !== "loading") cb();
    else $a67a387a6c2824b6$var$doc.addEventListener("DOMContentLoaded", cb);
    return this;
};
$a67a387a6c2824b6$var$fn.unwrap = function() {
    this.parent().each(function(i, ele) {
        if (ele.tagName === "BODY") return;
        var $ele = $a67a387a6c2824b6$var$cash(ele);
        $ele.replaceWith($ele.children());
    });
    return this;
};
$a67a387a6c2824b6$var$fn.offset = function() {
    var ele = this[0];
    if (!ele) return;
    var rect = ele.getBoundingClientRect();
    return {
        top: rect.top + $a67a387a6c2824b6$var$win.pageYOffset,
        left: rect.left + $a67a387a6c2824b6$var$win.pageXOffset
    };
};
$a67a387a6c2824b6$var$fn.position = function() {
    var ele = this[0];
    if (!ele) return;
    var isFixed = $a67a387a6c2824b6$var$computeStyle(ele, "position") === "fixed";
    var offset = isFixed ? ele.getBoundingClientRect() : this.offset();
    if (!isFixed) {
        var doc_1 = ele.ownerDocument;
        var offsetParent = ele.offsetParent || doc_1.documentElement;
        while((offsetParent === doc_1.body || offsetParent === doc_1.documentElement) && $a67a387a6c2824b6$var$computeStyle(offsetParent, "position") === "static")offsetParent = offsetParent.parentNode;
        if (offsetParent !== ele && $a67a387a6c2824b6$var$isElement(offsetParent)) {
            var parentOffset = $a67a387a6c2824b6$var$cash(offsetParent).offset();
            offset.top -= parentOffset.top + $a67a387a6c2824b6$var$computeStyleInt(offsetParent, "borderTopWidth");
            offset.left -= parentOffset.left + $a67a387a6c2824b6$var$computeStyleInt(offsetParent, "borderLeftWidth");
        }
    }
    return {
        top: offset.top - $a67a387a6c2824b6$var$computeStyleInt(ele, "marginTop"),
        left: offset.left - $a67a387a6c2824b6$var$computeStyleInt(ele, "marginLeft")
    };
};
var $a67a387a6c2824b6$var$propMap = {
    /* GENERAL */ class: "className",
    contenteditable: "contentEditable",
    /* LABEL */ for: "htmlFor",
    /* INPUT */ readonly: "readOnly",
    maxlength: "maxLength",
    tabindex: "tabIndex",
    /* TABLE */ colspan: "colSpan",
    rowspan: "rowSpan",
    /* IMAGE */ usemap: "useMap"
};
$a67a387a6c2824b6$var$fn.prop = function(prop, value) {
    if (!prop) return;
    if ($a67a387a6c2824b6$var$isString(prop)) {
        prop = $a67a387a6c2824b6$var$propMap[prop] || prop;
        if (arguments.length < 2) return this[0] && this[0][prop];
        return this.each(function(i, ele) {
            ele[prop] = value;
        });
    }
    for(var key in prop)this.prop(key, prop[key]);
    return this;
};
$a67a387a6c2824b6$var$fn.removeProp = function(prop) {
    return this.each(function(i, ele) {
        delete ele[$a67a387a6c2824b6$var$propMap[prop] || prop];
    });
};
var $a67a387a6c2824b6$var$cssVariableRe = /^--/;
// @require ./variables.ts
function $a67a387a6c2824b6$var$isCSSVariable(prop) {
    return $a67a387a6c2824b6$var$cssVariableRe.test(prop);
}
// @require core/camel_case.ts
// @require core/cash.ts
// @require core/each.ts
// @require core/variables.ts
// @require ./is_css_variable.ts
var $a67a387a6c2824b6$var$prefixedProps = {};
var $a67a387a6c2824b6$var$style = $a67a387a6c2824b6$var$div.style;
var $a67a387a6c2824b6$var$vendorsPrefixes = [
    "webkit",
    "moz",
    "ms"
];
function $a67a387a6c2824b6$var$getPrefixedProp(prop, isVariable) {
    if (isVariable === void 0) isVariable = $a67a387a6c2824b6$var$isCSSVariable(prop);
    if (isVariable) return prop;
    if (!$a67a387a6c2824b6$var$prefixedProps[prop]) {
        var propCC = $a67a387a6c2824b6$var$camelCase(prop);
        var propUC = "".concat(propCC[0].toUpperCase()).concat(propCC.slice(1));
        var props = "".concat(propCC, " ").concat($a67a387a6c2824b6$var$vendorsPrefixes.join("".concat(propUC, " "))).concat(propUC).split(" ");
        $a67a387a6c2824b6$var$each(props, function(i, p) {
            if (p in $a67a387a6c2824b6$var$style) {
                $a67a387a6c2824b6$var$prefixedProps[prop] = p;
                return false;
            }
        });
    }
    return $a67a387a6c2824b6$var$prefixedProps[prop];
}
// @require core/type_checking.ts
// @require ./is_css_variable.ts
var $a67a387a6c2824b6$var$numericProps = {
    animationIterationCount: true,
    columnCount: true,
    flexGrow: true,
    flexShrink: true,
    fontWeight: true,
    gridArea: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnStart: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowStart: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    widows: true,
    zIndex: true
};
function $a67a387a6c2824b6$var$getSuffixedValue(prop, value, isVariable) {
    if (isVariable === void 0) isVariable = $a67a387a6c2824b6$var$isCSSVariable(prop);
    return !isVariable && !$a67a387a6c2824b6$var$numericProps[prop] && $a67a387a6c2824b6$var$isNumeric(value) ? "".concat(value, "px") : value;
}
function $a67a387a6c2824b6$var$css(prop, value) {
    if ($a67a387a6c2824b6$var$isString(prop)) {
        var isVariable_1 = $a67a387a6c2824b6$var$isCSSVariable(prop);
        prop = $a67a387a6c2824b6$var$getPrefixedProp(prop, isVariable_1);
        if (arguments.length < 2) return this[0] && $a67a387a6c2824b6$var$computeStyle(this[0], prop, isVariable_1);
        if (!prop) return this;
        value = $a67a387a6c2824b6$var$getSuffixedValue(prop, value, isVariable_1);
        return this.each(function(i, ele) {
            if (!$a67a387a6c2824b6$var$isElement(ele)) return;
            if (isVariable_1) ele.style.setProperty(prop, value);
            else ele.style[prop] = value;
        });
    }
    for(var key in prop)this.css(key, prop[key]);
    return this;
}
$a67a387a6c2824b6$var$fn.css = $a67a387a6c2824b6$var$css;
function $a67a387a6c2824b6$var$attempt(fn, arg) {
    try {
        return fn(arg);
    } catch (_a) {
        return arg;
    }
}
// @require core/attempt.ts
// @require core/camel_case.ts
var $a67a387a6c2824b6$var$JSONStringRe = /^\s+|\s+$/;
function $a67a387a6c2824b6$var$getData(ele, key) {
    var value = ele.dataset[key] || ele.dataset[$a67a387a6c2824b6$var$camelCase(key)];
    if ($a67a387a6c2824b6$var$JSONStringRe.test(value)) return value;
    return $a67a387a6c2824b6$var$attempt(JSON.parse, value);
}
// @require core/attempt.ts
// @require core/camel_case.ts
function $a67a387a6c2824b6$var$setData(ele, key, value) {
    value = $a67a387a6c2824b6$var$attempt(JSON.stringify, value);
    ele.dataset[$a67a387a6c2824b6$var$camelCase(key)] = value;
}
function $a67a387a6c2824b6$var$data(name, value) {
    if (!name) {
        if (!this[0]) return;
        var datas = {};
        for(var key in this[0].dataset)datas[key] = $a67a387a6c2824b6$var$getData(this[0], key);
        return datas;
    }
    if ($a67a387a6c2824b6$var$isString(name)) {
        if (arguments.length < 2) return this[0] && $a67a387a6c2824b6$var$getData(this[0], name);
        if ($a67a387a6c2824b6$var$isUndefined(value)) return this;
        return this.each(function(i, ele) {
            $a67a387a6c2824b6$var$setData(ele, name, value);
        });
    }
    for(var key in name)this.data(key, name[key]);
    return this;
}
$a67a387a6c2824b6$var$fn.data = $a67a387a6c2824b6$var$data;
function $a67a387a6c2824b6$var$getDocumentDimension(doc, dimension) {
    var docEle = doc.documentElement;
    return Math.max(doc.body["scroll".concat(dimension)], docEle["scroll".concat(dimension)], doc.body["offset".concat(dimension)], docEle["offset".concat(dimension)], docEle["client".concat(dimension)]);
}
$a67a387a6c2824b6$var$each([
    true,
    false
], function(i, outer) {
    $a67a387a6c2824b6$var$each([
        "Width",
        "Height"
    ], function(i, prop) {
        var name = "".concat(outer ? "outer" : "inner").concat(prop);
        $a67a387a6c2824b6$var$fn[name] = function(includeMargins) {
            if (!this[0]) return;
            if ($a67a387a6c2824b6$var$isWindow(this[0])) return outer ? this[0]["inner".concat(prop)] : this[0].document.documentElement["client".concat(prop)];
            if ($a67a387a6c2824b6$var$isDocument(this[0])) return $a67a387a6c2824b6$var$getDocumentDimension(this[0], prop);
            return this[0]["".concat(outer ? "offset" : "client").concat(prop)] + (includeMargins && outer ? $a67a387a6c2824b6$var$computeStyleInt(this[0], "margin".concat(i ? "Top" : "Left")) + $a67a387a6c2824b6$var$computeStyleInt(this[0], "margin".concat(i ? "Bottom" : "Right")) : 0);
        };
    });
});
$a67a387a6c2824b6$var$each([
    "Width",
    "Height"
], function(index, prop) {
    var propLC = prop.toLowerCase();
    $a67a387a6c2824b6$var$fn[propLC] = function(value) {
        if (!this[0]) return $a67a387a6c2824b6$var$isUndefined(value) ? undefined : this;
        if (!arguments.length) {
            if ($a67a387a6c2824b6$var$isWindow(this[0])) return this[0].document.documentElement["client".concat(prop)];
            if ($a67a387a6c2824b6$var$isDocument(this[0])) return $a67a387a6c2824b6$var$getDocumentDimension(this[0], prop);
            return this[0].getBoundingClientRect()[propLC] - $a67a387a6c2824b6$var$getExtraSpace(this[0], !index);
        }
        var valueNumber = parseInt(value, 10);
        return this.each(function(i, ele) {
            if (!$a67a387a6c2824b6$var$isElement(ele)) return;
            var boxSizing = $a67a387a6c2824b6$var$computeStyle(ele, "boxSizing");
            ele.style[propLC] = $a67a387a6c2824b6$var$getSuffixedValue(propLC, valueNumber + (boxSizing === "border-box" ? $a67a387a6c2824b6$var$getExtraSpace(ele, !index) : 0));
        });
    };
});
var $a67a387a6c2824b6$var$displayProperty = "___cd";
$a67a387a6c2824b6$var$fn.toggle = function(force) {
    return this.each(function(i, ele) {
        if (!$a67a387a6c2824b6$var$isElement(ele)) return;
        var hidden = $a67a387a6c2824b6$var$isHidden(ele);
        var show = $a67a387a6c2824b6$var$isUndefined(force) ? hidden : force;
        if (show) {
            ele.style.display = ele[$a67a387a6c2824b6$var$displayProperty] || "";
            if ($a67a387a6c2824b6$var$isHidden(ele)) ele.style.display = $a67a387a6c2824b6$var$getDefaultDisplay(ele.tagName);
        } else if (!hidden) {
            ele[$a67a387a6c2824b6$var$displayProperty] = $a67a387a6c2824b6$var$computeStyle(ele, "display");
            ele.style.display = "none";
        }
    });
};
$a67a387a6c2824b6$var$fn.hide = function() {
    return this.toggle(false);
};
$a67a387a6c2824b6$var$fn.show = function() {
    return this.toggle(true);
};
var $a67a387a6c2824b6$var$eventsNamespace = "___ce";
var $a67a387a6c2824b6$var$eventsNamespacesSeparator = ".";
var $a67a387a6c2824b6$var$eventsFocus = {
    focus: "focusin",
    blur: "focusout"
};
var $a67a387a6c2824b6$var$eventsHover = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
};
var $a67a387a6c2824b6$var$eventsMouseRe = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
// @require ./variables.ts
function $a67a387a6c2824b6$var$getEventNameBubbling(name) {
    return $a67a387a6c2824b6$var$eventsHover[name] || $a67a387a6c2824b6$var$eventsFocus[name] || name;
}
// @require ./variables.ts
function $a67a387a6c2824b6$var$parseEventName(eventName) {
    var parts = eventName.split($a67a387a6c2824b6$var$eventsNamespacesSeparator);
    return [
        parts[0],
        parts.slice(1).sort()
    ]; // [name, namespace[]]
}
$a67a387a6c2824b6$var$fn.trigger = function(event, data) {
    if ($a67a387a6c2824b6$var$isString(event)) {
        var _a = $a67a387a6c2824b6$var$parseEventName(event), nameOriginal = _a[0], namespaces = _a[1];
        var name = $a67a387a6c2824b6$var$getEventNameBubbling(nameOriginal);
        if (!name) return this;
        var type = $a67a387a6c2824b6$var$eventsMouseRe.test(name) ? "MouseEvents" : "HTMLEvents";
        event = $a67a387a6c2824b6$var$doc.createEvent(type);
        event.initEvent(name, true, true);
        event.namespace = namespaces.join($a67a387a6c2824b6$var$eventsNamespacesSeparator);
        event.___ot = nameOriginal;
    }
    event.___td = data;
    var isEventFocus = event.___ot in $a67a387a6c2824b6$var$eventsFocus;
    return this.each(function(i, ele) {
        if (isEventFocus && $a67a387a6c2824b6$var$isFunction(ele[event.___ot])) {
            ele["___i".concat(event.type)] = true; // Ensuring the native event is ignored
            ele[event.___ot]();
            ele["___i".concat(event.type)] = false; // Ensuring the custom event is not ignored
        }
        ele.dispatchEvent(event);
    });
};
// @require ./variables.ts
function $a67a387a6c2824b6$var$getEventsCache(ele) {
    return ele[$a67a387a6c2824b6$var$eventsNamespace] = ele[$a67a387a6c2824b6$var$eventsNamespace] || {};
}
// @require core/guid.ts
// @require events/helpers/get_events_cache.ts
function $a67a387a6c2824b6$var$addEvent(ele, name, namespaces, selector, callback) {
    var eventCache = $a67a387a6c2824b6$var$getEventsCache(ele);
    eventCache[name] = eventCache[name] || [];
    eventCache[name].push([
        namespaces,
        selector,
        callback
    ]);
    ele.addEventListener(name, callback);
}
function $a67a387a6c2824b6$var$hasNamespaces(ns1, ns2) {
    return !ns2 || !$a67a387a6c2824b6$var$some.call(ns2, function(ns) {
        return ns1.indexOf(ns) < 0;
    });
}
// @require ./get_events_cache.ts
// @require ./has_namespaces.ts
// @require ./parse_event_name.ts
function $a67a387a6c2824b6$var$removeEvent(ele, name, namespaces, selector, callback) {
    var cache = $a67a387a6c2824b6$var$getEventsCache(ele);
    if (!name) for(name in cache)$a67a387a6c2824b6$var$removeEvent(ele, name, namespaces, selector, callback);
    else if (cache[name]) cache[name] = cache[name].filter(function(_a) {
        var ns = _a[0], sel = _a[1], cb = _a[2];
        if (callback && cb.guid !== callback.guid || !$a67a387a6c2824b6$var$hasNamespaces(ns, namespaces) || selector && selector !== sel) return true;
        ele.removeEventListener(name, cb);
    });
}
$a67a387a6c2824b6$var$fn.off = function(eventFullName, selector, callback) {
    var _this = this;
    if ($a67a387a6c2824b6$var$isUndefined(eventFullName)) this.each(function(i, ele) {
        if (!$a67a387a6c2824b6$var$isElement(ele) && !$a67a387a6c2824b6$var$isDocument(ele) && !$a67a387a6c2824b6$var$isWindow(ele)) return;
        $a67a387a6c2824b6$var$removeEvent(ele);
    });
    else if (!$a67a387a6c2824b6$var$isString(eventFullName)) for(var key in eventFullName)this.off(key, eventFullName[key]);
    else {
        if ($a67a387a6c2824b6$var$isFunction(selector)) {
            callback = selector;
            selector = "";
        }
        $a67a387a6c2824b6$var$each($a67a387a6c2824b6$var$getSplitValues(eventFullName), function(i, eventFullName) {
            var _a = $a67a387a6c2824b6$var$parseEventName(eventFullName), nameOriginal = _a[0], namespaces = _a[1];
            var name = $a67a387a6c2824b6$var$getEventNameBubbling(nameOriginal);
            _this.each(function(i, ele) {
                if (!$a67a387a6c2824b6$var$isElement(ele) && !$a67a387a6c2824b6$var$isDocument(ele) && !$a67a387a6c2824b6$var$isWindow(ele)) return;
                $a67a387a6c2824b6$var$removeEvent(ele, name, namespaces, selector, callback);
            });
        });
    }
    return this;
};
$a67a387a6c2824b6$var$fn.remove = function(comparator) {
    $a67a387a6c2824b6$var$filtered(this, comparator).detach().off();
    return this;
};
$a67a387a6c2824b6$var$fn.replaceWith = function(selector) {
    return this.before(selector).remove();
};
$a67a387a6c2824b6$var$fn.replaceAll = function(selector) {
    $a67a387a6c2824b6$var$cash(selector).replaceWith(this);
    return this;
};
function $a67a387a6c2824b6$var$on(eventFullName, selector, data, callback, _one) {
    var _this = this;
    if (!$a67a387a6c2824b6$var$isString(eventFullName)) {
        for(var key in eventFullName)this.on(key, selector, data, eventFullName[key], _one);
        return this;
    }
    if (!$a67a387a6c2824b6$var$isString(selector)) {
        if ($a67a387a6c2824b6$var$isUndefined(selector) || $a67a387a6c2824b6$var$isNull(selector)) selector = "";
        else if ($a67a387a6c2824b6$var$isUndefined(data)) {
            data = selector;
            selector = "";
        } else {
            callback = data;
            data = selector;
            selector = "";
        }
    }
    if (!$a67a387a6c2824b6$var$isFunction(callback)) {
        callback = data;
        data = undefined;
    }
    if (!callback) return this;
    $a67a387a6c2824b6$var$each($a67a387a6c2824b6$var$getSplitValues(eventFullName), function(i, eventFullName) {
        var _a = $a67a387a6c2824b6$var$parseEventName(eventFullName), nameOriginal = _a[0], namespaces = _a[1];
        var name = $a67a387a6c2824b6$var$getEventNameBubbling(nameOriginal);
        var isEventHover = nameOriginal in $a67a387a6c2824b6$var$eventsHover;
        var isEventFocus = nameOriginal in $a67a387a6c2824b6$var$eventsFocus;
        if (!name) return;
        _this.each(function(i, ele) {
            if (!$a67a387a6c2824b6$var$isElement(ele) && !$a67a387a6c2824b6$var$isDocument(ele) && !$a67a387a6c2824b6$var$isWindow(ele)) return;
            var finalCallback = function(event) {
                if (event.target["___i".concat(event.type)]) return event.stopImmediatePropagation(); // Ignoring native event in favor of the upcoming custom one
                if (event.namespace && !$a67a387a6c2824b6$var$hasNamespaces(namespaces, event.namespace.split($a67a387a6c2824b6$var$eventsNamespacesSeparator))) return;
                if (!selector && (isEventFocus && (event.target !== ele || event.___ot === name) || isEventHover && event.relatedTarget && ele.contains(event.relatedTarget))) return;
                var thisArg = ele;
                if (selector) {
                    var target = event.target;
                    while(!$a67a387a6c2824b6$var$matches(target, selector)){
                        if (target === ele) return;
                        target = target.parentNode;
                        if (!target) return;
                    }
                    thisArg = target;
                }
                Object.defineProperty(event, "currentTarget", {
                    configurable: true,
                    get: function() {
                        return thisArg;
                    }
                });
                Object.defineProperty(event, "delegateTarget", {
                    configurable: true,
                    get: function() {
                        return ele;
                    }
                });
                Object.defineProperty(event, "data", {
                    configurable: true,
                    get: function() {
                        return data;
                    }
                });
                var returnValue = callback.call(thisArg, event, event.___td);
                if (_one) $a67a387a6c2824b6$var$removeEvent(ele, name, namespaces, selector, finalCallback);
                if (returnValue === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            };
            finalCallback.guid = callback.guid = callback.guid || $a67a387a6c2824b6$var$cash.guid++;
            $a67a387a6c2824b6$var$addEvent(ele, name, namespaces, selector, finalCallback);
        });
    });
    return this;
}
$a67a387a6c2824b6$var$fn.on = $a67a387a6c2824b6$var$on;
function $a67a387a6c2824b6$var$one(eventFullName, selector, data, callback) {
    return this.on(eventFullName, selector, data, callback, true);
}
$a67a387a6c2824b6$var$fn.one = $a67a387a6c2824b6$var$one;
var $a67a387a6c2824b6$var$queryEncodeCRLFRe = /\r?\n/g;
function $a67a387a6c2824b6$var$queryEncode(prop, value) {
    return "&".concat(encodeURIComponent(prop), "=").concat(encodeURIComponent(value.replace($a67a387a6c2824b6$var$queryEncodeCRLFRe, "\r\n")));
}
var $a67a387a6c2824b6$var$skippableRe = /file|reset|submit|button|image/i;
var $a67a387a6c2824b6$var$checkableRe = /radio|checkbox/i;
$a67a387a6c2824b6$var$fn.serialize = function() {
    var query = "";
    this.each(function(i, ele) {
        $a67a387a6c2824b6$var$each(ele.elements || [
            ele
        ], function(i, ele) {
            if (ele.disabled || !ele.name || ele.tagName === "FIELDSET" || $a67a387a6c2824b6$var$skippableRe.test(ele.type) || $a67a387a6c2824b6$var$checkableRe.test(ele.type) && !ele.checked) return;
            var value = $a67a387a6c2824b6$var$getValue(ele);
            if (!$a67a387a6c2824b6$var$isUndefined(value)) {
                var values = $a67a387a6c2824b6$var$isArray(value) ? value : [
                    value
                ];
                $a67a387a6c2824b6$var$each(values, function(i, value) {
                    query += $a67a387a6c2824b6$var$queryEncode(ele.name, value);
                });
            }
        });
    });
    return query.slice(1);
};
var // @require core/types.ts
// @require core/cash.ts
// @require core/type_checking.ts
// @require core/variables.ts
// @require core/each.ts
// @require core/extend.ts
// @require core/find.ts
// @require core/get_compare_function.ts
// @require core/get_split_values.ts
// @require core/guid.ts
// @require core/parse_html.ts
// @require core/unique.ts
// @require attributes/add_class.ts
// @require attributes/attr.ts
// @require attributes/has_class.ts
// @require attributes/prop.ts
// @require attributes/remove_attr.ts
// @require attributes/remove_class.ts
// @require attributes/remove_prop.ts
// @require attributes/toggle_class.ts
// @require collection/add.ts
// @require collection/each.ts
// @require collection/eq.ts
// @require collection/filter.ts
// @require collection/first.ts
// @require collection/get.ts
// @require collection/index.ts
// @require collection/last.ts
// @require collection/map.ts
// @require collection/slice.ts
// @require css/css.ts
// @require data/data.ts
// @require dimensions/inner_outer.ts
// @require dimensions/normal.ts
// @require effects/hide.ts
// @require effects/show.ts
// @require effects/toggle.ts
// @require events/off.ts
// @require events/on.ts
// @require events/one.ts
// @require events/ready.ts
// @require events/trigger.ts
// @require forms/serialize.ts
// @require forms/val.ts
// @require manipulation/after.ts
// @require manipulation/append.ts
// @require manipulation/append_to.ts
// @require manipulation/before.ts
// @require manipulation/clone.ts
// @require manipulation/detach.ts
// @require manipulation/empty.ts
// @require manipulation/html.ts
// @require manipulation/insert_after.ts
// @require manipulation/insert_before.ts
// @require manipulation/prepend.ts
// @require manipulation/prepend_to.ts
// @require manipulation/remove.ts
// @require manipulation/replace_all.ts
// @require manipulation/replace_with.ts
// @require manipulation/text.ts
// @require manipulation/unwrap.ts
// @require manipulation/wrap.ts
// @require manipulation/wrap_all.ts
// @require manipulation/wrap_inner.ts
// @require offset/offset.ts
// @require offset/offset_parent.ts
// @require offset/position.ts
// @require traversal/children.ts
// @require traversal/closest.ts
// @require traversal/contents.ts
// @require traversal/find.ts
// @require traversal/has.ts
// @require traversal/is.ts
// @require traversal/next.ts
// @require traversal/next_all.ts
// @require traversal/next_until.ts
// @require traversal/not.ts
// @require traversal/parent.ts
// @require traversal/parents.ts
// @require traversal/parents_until.ts
// @require traversal/prev.ts
// @require traversal/prev_all.ts
// @require traversal/prev_until.ts
// @require traversal/siblings.ts
// @no-require extras/get_script.ts
// @no-require extras/shorthands.ts
// @require methods.ts
$a67a387a6c2824b6$export$2e2bcd8739ae039 = $a67a387a6c2824b6$var$cash;


class $dc9c717f895d82e9$export$f252a25ce26db7ee extends $hgUW1$FeatureGroup {
    constructor(fetcher){
        super();
        this.fetcher = fetcher;
        this.icons = [];
        this.ids = new Map();
        fetcher.setOverpassLayer(this);
    }
    onScreenChanged(map) {
        if (map.getZoom() > 15) this.fetcher.fetchData(map.getBounds());
    }
    addData(data) {
        const ways = {};
        const nodes = {};
        data.elements.forEach((element)=>{
            if (element.type === "way") ways[element.id] = Object.assign(Object.assign({}, ways[element.id]), element);
            if (element.type === "node") nodes[element.id] = Object.assign(Object.assign({}, nodes[element.id]), element);
        });
        Object.keys(ways).forEach((key)=>{
            const element = ways[key];
            // Skip if already added to the map
            if (this.ids["w" + element.id] !== undefined) return;
            this.ids["w" + element.id] = element;
            if (element.geometry) {
                const coordinates = element.geometry.map((geometry)=>({
                        lat: geometry.lat,
                        lng: geometry.lon
                    }));
                if (element.tags.leisure === "playground") {
                    const polygon = $hgUW1$polygon(coordinates, {
                        color: "blue",
                        fillOpacity: 0.4
                    });
                    this.addLayer(polygon);
                } else {
                    const polygon = $hgUW1$polygon(coordinates, {
                        color: "yellow",
                        fillOpacity: 0.4
                    });
                    this.addLayer(polygon);
                }
            }
        });
        Object.keys(nodes).forEach((key)=>{
            const element = nodes[key];
            // Skip if already added to the map
            if (this.ids["n" + element.id] !== undefined) return;
            this.ids["n" + element.id] = element;
            if (element.lat && element.lon && element.tags) {
                const marker = $hgUW1$marker([
                    element.lat,
                    element.lon
                ], {
                    icon: new $hgUW1$DivIcon({
                        html: "<div class='playgroundIcon " + this.getClassName(element.tags) + "'></div>"
                    })
                });
                if (element) marker.bindPopup(JSON.stringify(element.tags));
                this.icons.push(marker);
                this.addLayer(marker);
            }
        });
    }
    getClassName(tags) {
        if (tags["amenity"] !== undefined) return "icon-amenity-" + tags["amenity"] + " icon-amenity-default";
        if (tags["playground"] !== undefined) return "icon-playground-" + tags["playground"] + " icon-playground-default";
        return "";
    }
    onAdd(map) {
        // FIXME: clean in onRemove
        console.log("added");
        const self = this;
        map.on("zoomend", ()=>{
            self.onScreenChanged(map);
            const zoom = map.getZoom();
            const size = Math.pow(2, Math.max(zoom - 14, 1));
            this.icons.forEach((marker)=>{
                const icon = marker.getIcon();
                icon.options.iconAnchor = [
                    size / 2,
                    size / 2
                ];
                icon.options.iconSize = [
                    size,
                    size
                ];
                marker.setIcon(marker.getIcon());
            });
            (0, $a67a387a6c2824b6$export$2e2bcd8739ae039)(".playgroundIcon").css("width", size + "px");
            (0, $a67a387a6c2824b6$export$2e2bcd8739ae039)(".playgroundIcon").css("height", size + "px");
        });
        map.on("dragend", ()=>{
            self.onScreenChanged(map);
        });
        return this;
    }
    onRemove(map) {
        console.log("on remove");
        return this;
    }
}



class $9dc8edd0d7d9908c$export$f4b1224743dc2bd8 {
    constructor(){
        this.queue = [];
        this.isDownloading = false;
    }
    enqueue(req) {
        this.queue.push(req);
        this.processQueue();
    }
    processQueue() {
        if (!this.isDownloading && this.queue.length > 0) {
            const req = this.queue.shift();
            if (req) this.downloadFile(req);
        }
    }
    downloadFile(req) {
        this.isDownloading = true;
        fetch(req.input, req.init).then((response)=>response.json()).then((json)=>{
            this.isDownloading = false;
            req.callback(json);
            this.processQueue();
        }).catch((error)=>{
            console.error("Error: ", req.input, error);
            this.isDownloading = false;
            this.processQueue();
        });
    }
}


function $ca45ca5adfbad504$var$toOverpassString(bbox) {
    const a = bbox.getSouthWest();
    const b = bbox.getNorthEast();
    return [
        Math.round(a.lat * 1000) / 1000 + 0.0001,
        Math.round(a.lng * 1000) / 1000 + 0.0001,
        Math.round(b.lat * 1000) / 1000 - 0.0001,
        Math.round(b.lng * 1000) / 1000 - 0.0001
    ].join(",");
}
class $ca45ca5adfbad504$export$b923228a7674ef15 {
    constructor(query, delta){
        this.query = query;
        this.delta = delta;
        this.hashMap = new Map();
        this.downloadQueue = new (0, $9dc8edd0d7d9908c$export$f4b1224743dc2bd8)();
    }
    // FIXME: It is not "any" array (create an type)
    getTiles(bounds) {
        const tn = Math.ceil((bounds.getNorth() + 90) / this.delta);
        const ts = Math.floor((bounds.getSouth() + 90) / this.delta);
        const te = Math.ceil((bounds.getEast() + 180) / this.delta);
        const tw = Math.floor((bounds.getWest() + 180) / this.delta);
        const retArr = [];
        for(let i = ts; i < tn; i++)for(let j = tw; j < te; j++)retArr.push([
            i,
            j
        ]);
        return retArr;
    }
    downloadTile(x, y, callback) {
        const key = x + ":" + y;
        if (this.hashMap[key] === true) {
            console.log("Already downloaded (" + x + ":" + y + ")");
            return;
        }
        // Check local storage
        const currentDate = new Date();
        const tileDate = localStorage.getItem(key + "date");
        console.log(tileDate);
        // FIXME: hardcoded cache time
        const maxCacheTime = new Date();
        maxCacheTime.setDate(currentDate.getDate() - 5);
        // Use cache
        if (tileDate !== undefined && maxCacheTime.getTime() < new Date(tileDate).getTime()) {
            const tileData = localStorage.getItem(key);
            if (tileData !== undefined) {
                console.log("Found in local storage (" + x + ":" + y + ")");
                this.hashMap[x + ":" + y] = true;
                console.log(tileData);
                callback(JSON.parse(tileData));
                return;
            }
        }
        const bs = x * this.delta - 90;
        const bw = y * this.delta - 180;
        const bbox = new $hgUW1$LatLngBounds([
            bs + this.delta,
            bw + this.delta
        ], [
            bs,
            bw
        ]);
        const query = "[out:json][timeout:25];" + this.query.replace(/%BBOX%/g, $ca45ca5adfbad504$var$toOverpassString(bbox)).replace(/(\r\n|\n|\r|\\n)/gm, "");
        // Download
        this.downloadQueue.enqueue({
            input: "http://overpass-api.de/api/interpreter?data=",
            init: {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `data=${encodeURIComponent(query)}`
            },
            callback: (data)=>{
                console.log("Downloaded");
                // Save to local storage
                localStorage.setItem(key, JSON.stringify(data));
                localStorage.setItem(key + "date", new Date().toString());
                callback(data);
            }
        });
        this.hashMap[x + ":" + y] = true;
    }
    // FIXME: interface or event instead
    setOverpassLayer(layer) {
        this.layer = layer;
    }
    onDownloaded(data) {
        console.log(data);
        if (this.layer !== undefined) this.layer.addData(data);
    }
    fetchData(area) {
        const tiles = this.getTiles(area);
        tiles.forEach((element)=>{
            const [x, y] = element;
            this.downloadTile(x, y, this.onDownloaded.bind(this));
        });
    }
}


const $2df9d79b6788b58e$var$map = $hgUW1$map("map").setView([
    43.659752,
    -79.378161
], 10);
$hgUW1$tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 21
}).addTo($2df9d79b6788b58e$var$map);
const $2df9d79b6788b58e$var$query = `way[leisure=playground](%BBOX%);
map_to_area;

foreach->.d(
   node(area.d)
     (if: is_tag("amenity") || is_tag("playground") ) -> .a;
   .a out skel;
   .a convert node
    ::=::, 
    ::id=id(),
    playground_id=d.min(id());
   out;
  
   way(area.d)[playground] -> .b;
   .b out geom;
   .b convert way
    ::=::, 
    ::id=id(),
    playground_id=d.min(id()),
    size=length();
  out;
  (.a;.b;) -> .c;  
  
  .d out geom;
  .d convert way
    ::=::,
    ::id=id(),
    playground_in=c.set(t["playground"]),
    amenity_in=c.set(t["amenity"]);
  out; 
);`;
$2df9d79b6788b58e$var$map.addLayer(new (0, $dc9c717f895d82e9$export$f252a25ce26db7ee)(new (0, $ca45ca5adfbad504$export$b923228a7674ef15)($2df9d79b6788b58e$var$query, 0.04)));
function $2df9d79b6788b58e$var$updateHash() {
    const center = $2df9d79b6788b58e$var$map.getCenter();
    const zoom = $2df9d79b6788b58e$var$map.getZoom();
    window.location.hash = `#${center.lat.toFixed(4)},${center.lng.toFixed(4)},${zoom}`;
}
function $2df9d79b6788b58e$var$setMapFromHash() {
    const hash = window.location.hash.substr(1);
    if (hash) {
        const [lat, lng, zoom] = hash.split(",");
        $2df9d79b6788b58e$var$map.setView([
            parseFloat(lat),
            parseFloat(lng)
        ], parseInt(zoom));
    }
}
$2df9d79b6788b58e$var$map.on("moveend", $2df9d79b6788b58e$var$updateHash);
$2df9d79b6788b58e$var$map.on("zoomend", $2df9d79b6788b58e$var$updateHash);
$2df9d79b6788b58e$var$setMapFromHash();


//# sourceMappingURL=index.js.map
