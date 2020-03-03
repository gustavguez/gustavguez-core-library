var ArrayUtility = /** @class */ (function () {
    function ArrayUtility() {
    }
    //Suggest current timezone hours
    ArrayUtility.find = function (items, id, callback, compareKey) {
        //Check id key
        var key = compareKey ? compareKey : 'id';
        //Check items
        if (items instanceof Array) {
            var found_1 = false;
            //Found it
            items.every(function (item, index) {
                found_1 = item[key] == id;
                if (found_1) {
                    callback(item, index);
                }
                return !found_1;
            });
        }
    };
    ArrayUtility.each = function (items, callback) {
        //Array
        if (items instanceof Array) {
            items.forEach(function (item, index) {
                callback(item, index);
            });
        }
        else if (items && (typeof items === 'object')) {
            //Object
            for (var index in items) {
                callback(items[index], index);
            }
        }
    };
    ArrayUtility.every = function (items, callback) {
        if (items instanceof Array) {
            items.every(function (item, index) {
                return callback(item, index);
            });
        }
    };
    ArrayUtility.getDisplayKeys = function (items, idKey, displayKey) {
        var displayKeys = {};
        //Default keys
        idKey = idKey ? idKey : 'id';
        displayKey = displayKey ? displayKey : 'name';
        //Each
        ArrayUtility.each(items, function (obj) {
            displayKeys[obj[idKey]] = obj[displayKey];
        });
        return displayKeys;
    };
    ArrayUtility.getSelectedKeys = function (items) {
        var selected = [];
        //Iterate
        ArrayUtility.each(items, function (val, key) {
            if (val)
                selected.push(key);
        });
        return selected;
    };
    ArrayUtility.filter = function (items, callback) {
        if (items instanceof Array) {
            var result = items.filter(function (item, index) {
                return callback(item, index);
            });
            return result;
        }
    };
    ArrayUtility.map = function (items, callback) {
        var result = [];
        if (items instanceof Array) {
            result = items.map(function (item, index) {
                return callback(item, index);
            });
        }
        return result;
    };
    ArrayUtility.sort = function (items, compareKey) {
        var result = items.sort(function (a, b) {
            if (a[compareKey] < b[compareKey])
                return -1;
            if (a[compareKey] > b[compareKey])
                return 1;
            return 0;
        });
        return result;
    };
    ArrayUtility.hasValue = function (items) {
        return (items instanceof Array && items.length > 0);
    };
    return ArrayUtility;
}());
export default ArrayUtility;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkudXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbGl0aWVzL2FycmF5LnV0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFBQTtJQXdHQSxDQUFDO0lBdEdBLGdDQUFnQztJQUN6QixpQkFBSSxHQUFYLFVBQVksS0FBWSxFQUFFLEVBQU8sRUFBRSxRQUFrQixFQUFFLFVBQW1CO1FBQ3pFLGNBQWM7UUFDZCxJQUFNLEdBQUcsR0FBVyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRW5ELGFBQWE7UUFDYixJQUFHLEtBQUssWUFBWSxLQUFLLEVBQUM7WUFDekIsSUFBSSxPQUFLLEdBQVksS0FBSyxDQUFDO1lBRTNCLFVBQVU7WUFDVixLQUFLLENBQUMsS0FBSyxDQUFDLFVBQUMsSUFBUyxFQUFFLEtBQWE7Z0JBQ3BDLE9BQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUV4QixJQUFHLE9BQUssRUFBQztvQkFDUixRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUN0QjtnQkFDRCxPQUFPLENBQUMsT0FBSyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7SUFFTSxpQkFBSSxHQUFYLFVBQVksS0FBVSxFQUFFLFFBQWtCO1FBQ3pDLE9BQU87UUFDUCxJQUFHLEtBQUssWUFBWSxLQUFLLEVBQUM7WUFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVMsRUFBRSxLQUFhO2dCQUN0QyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFBO1NBQ0Y7YUFBSyxJQUFJLEtBQUssSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxFQUFDO1lBQzlDLFFBQVE7WUFDUixLQUFJ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S0FBSyxZQUFZLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBRXBELENBQUM7SUFDRixtQkFBQztBQUFELENBQUMsQUF4R0QsSUF3R0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJheVV0aWxpdHkge1xuXHRcblx0Ly9TdWdnZXN0IGN1cnJlbnQgdGltZXpvbmUgaG91cnNcblx0c3RhdGljIGZpbmQoaXRlbXM6IGFueVtdLCBpZDogYW55LCBjYWxsYmFjazogRnVuY3Rpb24sIGNvbXBhcmVLZXk/OiBzdHJpbmcpOiB2b2lke1xuXHRcdC8vQ2hlY2sgaWQga2V5XG5cdFx0Y29uc3Qga2V5OiBzdHJpbmcgPSBjb21wYXJlS2V5ID8gY29tcGFyZUtleSA6ICdpZCc7XG5cblx0XHQvL0NoZWNrIGl0ZW1zXG5cdFx0aWYoaXRlbXMgaW5zdGFuY2VvZiBBcnJheSl7XG5cdFx0XHRsZXQgZm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRcdFx0Ly9Gb3VuZCBpdFxuXHRcdFx0aXRlbXMuZXZlcnkoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRmb3VuZCA9IGl0ZW1ba2V5XSA9PSBpZDtcblxuXHRcdFx0XHRpZihmb3VuZCl7XG5cdFx0XHRcdFx0Y2FsbGJhY2soaXRlbSwgaW5kZXgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAhZm91bmQ7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgZWFjaChpdGVtczogYW55LCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lke1xuXHRcdC8vQXJyYXlcblx0XHRpZihpdGVtcyBpbnN0YW5jZW9mIEFycmF5KXtcblx0XHRcdGl0ZW1zLmZvckVhY2goKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRjYWxsYmFjayhpdGVtLCBpbmRleCk7XG5cdFx0XHR9KVxuXHRcdH1lbHNlIGlmIChpdGVtcyAmJiAodHlwZW9mIGl0ZW1zID09PSAnb2JqZWN0Jykpe1xuXHRcdFx0Ly9PYmplY3Rcblx0XHRcdGZvcihsZXQgaW5kZXggaW4gaXRlbXMpe1xuXHRcdFx0XHRjYWxsYmFjayhpdGVtc1tpbmRleF0sIGluZGV4KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgZXZlcnkoaXRlbXM6IGFueVtdLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lke1xuXHRcdGlmKGl0ZW1zIGluc3RhbmNlb2YgQXJyYXkpe1xuXHRcdFx0aXRlbXMuZXZlcnkoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soaXRlbSwgaW5kZXgpO1xuXHRcdFx0fSlcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgZ2V0RGlzcGxheUtleXMoaXRlbXM6IGFueVtdLCBpZEtleT86IHN0cmluZywgZGlzcGxheUtleT86IHN0cmluZyk6IGFueSB7XG5cdFx0bGV0IGRpc3BsYXlLZXlzOiBhbnkgPSB7fTtcblxuXHRcdC8vRGVmYXVsdCBrZXlzXG5cdFx0aWRLZXkgPSBpZEtleSA/IGlkS2V5IDogJ2lkJztcblx0XHRkaXNwbGF5S2V5ID0gZGlzcGxheUtleSA/IGRpc3BsYXlLZXkgOiAnbmFtZSc7XG5cblx0XHQvL0VhY2hcblx0XHRBcnJheVV0aWxpdHkuZWFjaChpdGVtcywgKG9iajogYW55KSA9PiB7XG5cdFx0XHRkaXNwbGF5S2V5c1tvYmpbaWRLZXldXSA9IG9ialtkaXNwbGF5S2V5XTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZGlzcGxheUtleXM7XG5cdH1cblxuXHRzdGF0aWMgZ2V0U2VsZWN0ZWRLZXlzKGl0ZW1zOiBbXSk6IGFueVtdIHtcblx0XHRsZXQgc2VsZWN0ZWQ6IGFueVtdID0gW107XG5cblx0XHQvL0l0ZXJhdGVcblx0XHRBcnJheVV0aWxpdHkuZWFjaChpdGVtcywgKHZhbDogYm9vbGVhbiwga2V5OiBhbnkpID0+IHtcblx0XHRcdGlmKHZhbCkgc2VsZWN0ZWQucHVzaChrZXkpO1xuXHRcdH0pXG5cblx0XHRyZXR1cm4gc2VsZWN0ZWQ7XG5cdH1cblxuXHRzdGF0aWMgZmlsdGVyKGl0ZW1zOiBhbnlbXSwgY2FsbGJhY2s6IEZ1bmN0aW9uKTogYW55W117XG5cdFx0aWYoaXRlbXMgaW5zdGFuY2VvZiBBcnJheSl7XG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBhbnlbXSA9IGl0ZW1zLmZpbHRlcigoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHJldHVybiBjYWxsYmFjayhpdGVtLCBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIG1hcChpdGVtczogYW55W10sIGNhbGxiYWNrOiBGdW5jdGlvbik6IGFueVtde1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnlbXSA9IFtdO1xuXHRcdGlmKGl0ZW1zIGluc3RhbmNlb2YgQXJyYXkpe1xuXHRcdFx0cmVzdWx0ID0gaXRlbXMubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGl0ZW0sIGluZGV4KTtcblx0XHRcdH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHN0YXRpYyBzb3J0KGl0ZW1zOiBhbnlbXSwgY29tcGFyZUtleTogc3RyaW5nKTogYW55W117XG5cdFx0bGV0IHJlc3VsdDogYW55W10gPSBpdGVtcy5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuXHRcdFx0aWYgKGFbY29tcGFyZUtleV0gPCBiW2NvbXBhcmVLZXldKVxuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHRpZiAoYVtjb21wYXJlS2V5XSA+IGJbY29tcGFyZUtleV0pXG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRzdGF0aWMgaGFzVmFsdWUoaXRlbXM6IGFueVtdKTogYm9vbGVhbntcblx0XHRyZXR1cm4gKGl0ZW1zIGluc3RhbmNlb2YgQXJyYXkgJiYgaXRlbXMubGVuZ3RoID4gMClcblxuXHR9XG59Il19