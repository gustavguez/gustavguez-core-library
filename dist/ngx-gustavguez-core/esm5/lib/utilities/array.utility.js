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
export { ArrayUtility };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkudXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbGl0aWVzL2FycmF5LnV0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFBQTtJQXdHQSxDQUFDO0lBdEdBLGdDQUFnQztJQUN6QixpQkFBSSxHQUFYLFVBQVksS0FBWSxFQUFFLEVBQU8sRUFBRSxRQUFrQixFQUFFLFVBQW1CO1FBQ3pFLGNBQWM7UUFDZCxJQUFNLEdBQUcsR0FBVyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRW5ELGFBQWE7UUFDYixJQUFHLEtBQUssWUFBWSxLQUFLLEVBQUM7WUFDekIsSUFBSSxPQUFLLEdBQVksS0FBSyxDQUFDO1lBRTNCLFVBQVU7WUFDVixLQUFLLENBQUMsS0FBSyxDQUFDLFVBQUMsSUFBUyxFQUFFLEtBQWE7Z0JBQ3BDLE9BQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUV4QixJQUFHLE9BQUssRUFBQztvQkFDUixRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUN0QjtnQkFDRCxPQUFPLENBQUMsT0FBSyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7SUFFTSxpQkFBSSxHQUFYLFVBQVksS0FBVSxFQUFFLFFBQWtCO1FBQ3pDLE9BQU87UUFDUCxJQUFHLEtBQUssWUFBWSxLQUFLLEVBQUM7WUFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVMsRUFBRSxLQUFhO2dCQUN0QyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFBO1NBQ0Y7YUFBSyxJQUFJLEtBQUssSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxFQUFDO1lBQzlDLFFBQVE7WUFDUixLQUFJ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S0FBSyxZQUFZLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBRXBELENBQUM7SUFDRixtQkFBQztBQUFELENBQUMsQUF4R0QsSUF3R0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXJyYXlVdGlsaXR5IHtcblx0XG5cdC8vU3VnZ2VzdCBjdXJyZW50IHRpbWV6b25lIGhvdXJzXG5cdHN0YXRpYyBmaW5kKGl0ZW1zOiBhbnlbXSwgaWQ6IGFueSwgY2FsbGJhY2s6IEZ1bmN0aW9uLCBjb21wYXJlS2V5Pzogc3RyaW5nKTogdm9pZHtcblx0XHQvL0NoZWNrIGlkIGtleVxuXHRcdGNvbnN0IGtleTogc3RyaW5nID0gY29tcGFyZUtleSA/IGNvbXBhcmVLZXkgOiAnaWQnO1xuXG5cdFx0Ly9DaGVjayBpdGVtc1xuXHRcdGlmKGl0ZW1zIGluc3RhbmNlb2YgQXJyYXkpe1xuXHRcdFx0bGV0IGZvdW5kOiBib29sZWFuID0gZmFsc2U7XG5cblx0XHRcdC8vRm91bmQgaXRcblx0XHRcdGl0ZW1zLmV2ZXJ5KChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdFx0Zm91bmQgPSBpdGVtW2tleV0gPT0gaWQ7XG5cblx0XHRcdFx0aWYoZm91bmQpe1xuXHRcdFx0XHRcdGNhbGxiYWNrKGl0ZW0sIGluZGV4KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gIWZvdW5kO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGVhY2goaXRlbXM6IGFueSwgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZHtcblx0XHQvL0FycmF5XG5cdFx0aWYoaXRlbXMgaW5zdGFuY2VvZiBBcnJheSl7XG5cdFx0XHRpdGVtcy5mb3JFYWNoKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdFx0Y2FsbGJhY2soaXRlbSwgaW5kZXgpO1xuXHRcdFx0fSlcblx0XHR9ZWxzZSBpZiAoaXRlbXMgJiYgKHR5cGVvZiBpdGVtcyA9PT0gJ29iamVjdCcpKXtcblx0XHRcdC8vT2JqZWN0XG5cdFx0XHRmb3IobGV0IGluZGV4IGluIGl0ZW1zKXtcblx0XHRcdFx0Y2FsbGJhY2soaXRlbXNbaW5kZXhdLCBpbmRleCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGV2ZXJ5KGl0ZW1zOiBhbnlbXSwgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZHtcblx0XHRpZihpdGVtcyBpbnN0YW5jZW9mIEFycmF5KXtcblx0XHRcdGl0ZW1zLmV2ZXJ5KChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGl0ZW0sIGluZGV4KTtcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGdldERpc3BsYXlLZXlzKGl0ZW1zOiBhbnlbXSwgaWRLZXk/OiBzdHJpbmcsIGRpc3BsYXlLZXk/OiBzdHJpbmcpOiBhbnkge1xuXHRcdGxldCBkaXNwbGF5S2V5czogYW55ID0ge307XG5cblx0XHQvL0RlZmF1bHQga2V5c1xuXHRcdGlkS2V5ID0gaWRLZXkgPyBpZEtleSA6ICdpZCc7XG5cdFx0ZGlzcGxheUtleSA9IGRpc3BsYXlLZXkgPyBkaXNwbGF5S2V5IDogJ25hbWUnO1xuXG5cdFx0Ly9FYWNoXG5cdFx0QXJyYXlVdGlsaXR5LmVhY2goaXRlbXMsIChvYmo6IGFueSkgPT4ge1xuXHRcdFx0ZGlzcGxheUtleXNbb2JqW2lkS2V5XV0gPSBvYmpbZGlzcGxheUtleV07XG5cdFx0fSk7XG5cdFx0cmV0dXJuIGRpc3BsYXlLZXlzO1xuXHR9XG5cblx0c3RhdGljIGdldFNlbGVjdGVkS2V5cyhpdGVtczogW10pOiBhbnlbXSB7XG5cdFx0bGV0IHNlbGVjdGVkOiBhbnlbXSA9IFtdO1xuXG5cdFx0Ly9JdGVyYXRlXG5cdFx0QXJyYXlVdGlsaXR5LmVhY2goaXRlbXMsICh2YWw6IGJvb2xlYW4sIGtleTogYW55KSA9PiB7XG5cdFx0XHRpZih2YWwpIHNlbGVjdGVkLnB1c2goa2V5KTtcblx0XHR9KVxuXG5cdFx0cmV0dXJuIHNlbGVjdGVkO1xuXHR9XG5cblx0c3RhdGljIGZpbHRlcihpdGVtczogYW55W10sIGNhbGxiYWNrOiBGdW5jdGlvbik6IGFueVtde1xuXHRcdGlmKGl0ZW1zIGluc3RhbmNlb2YgQXJyYXkpe1xuICAgICAgICAgICAgbGV0IHJlc3VsdDogYW55W10gPSBpdGVtcy5maWx0ZXIoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soaXRlbSwgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBtYXAoaXRlbXM6IGFueVtdLCBjYWxsYmFjazogRnVuY3Rpb24pOiBhbnlbXXtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55W10gPSBbXTtcblx0XHRpZihpdGVtcyBpbnN0YW5jZW9mIEFycmF5KXtcblx0XHRcdHJlc3VsdCA9IGl0ZW1zLm1hcCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHJldHVybiBjYWxsYmFjayhpdGVtLCBpbmRleCk7XG5cdFx0XHR9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRzdGF0aWMgc29ydChpdGVtczogYW55W10sIGNvbXBhcmVLZXk6IHN0cmluZyk6IGFueVtde1xuXHRcdGxldCByZXN1bHQ6IGFueVtdID0gaXRlbXMuc29ydCgoYTogYW55LCBiOiBhbnkpID0+IHtcblx0XHRcdGlmIChhW2NvbXBhcmVLZXldIDwgYltjb21wYXJlS2V5XSlcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0aWYgKGFbY29tcGFyZUtleV0gPiBiW2NvbXBhcmVLZXldKVxuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdHJldHVybiAwO1xuXHRcdH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0c3RhdGljIGhhc1ZhbHVlKGl0ZW1zOiBhbnlbXSk6IGJvb2xlYW57XG5cdFx0cmV0dXJuIChpdGVtcyBpbnN0YW5jZW9mIEFycmF5ICYmIGl0ZW1zLmxlbmd0aCA+IDApXG5cblx0fVxufSJdfQ==