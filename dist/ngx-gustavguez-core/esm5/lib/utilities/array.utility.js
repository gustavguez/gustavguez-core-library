var ArrayUtility = /** @class */ (function () {
    function ArrayUtility() {
    }
    // Suggest current timezone hours
    ArrayUtility.find = function (items, id, callback, compareKey) {
        // Check id key
        var key = compareKey ? compareKey : 'id';
        // Check items
        if (items instanceof Array) {
            var found_1 = false;
            // Found it
            items.every(function (item, index) {
                found_1 = item[key] === id;
                if (found_1) {
                    callback(item, index);
                }
                return !found_1;
            });
        }
    };
    ArrayUtility.each = function (items, callback) {
        // Array
        if (items instanceof Array) {
            items.forEach(function (item, index) {
                callback(item, index);
            });
        }
        else if (items && typeof items === 'object') {
            // Object
            for (var index in items) {
                callback(items[index], index);
            }
        }
    };
    ArrayUtility.every = function (items, callback) {
        if (items instanceof Array) {
            items.every(function (item, index) { return callback(item, index); });
        }
    };
    ArrayUtility.getDisplayKeys = function (items, idKey, displayKey) {
        var displayKeys = {};
        // Default keys
        idKey = idKey ? idKey : 'id';
        displayKey = displayKey ? displayKey : 'name';
        // Each
        ArrayUtility.each(items, function (obj) {
            displayKeys[obj[idKey]] = obj[displayKey];
        });
        return displayKeys;
    };
    ArrayUtility.getSelectedKeys = function (items) {
        var selected = [];
        // Iterate
        ArrayUtility.each(items, function (val, key) {
            if (val) {
                selected.push(key);
            }
        });
        return selected;
    };
    ArrayUtility.filter = function (items, callback) {
        var result = [];
        if (items instanceof Array) {
            result = items.filter(function (item, index) { return callback(item, index); });
        }
        return result;
    };
    ArrayUtility.map = function (items, callback) {
        var result = [];
        if (items instanceof Array) {
            result = items.map(function (item, index) { return callback(item, index); });
        }
        return result;
    };
    ArrayUtility.sort = function (items, compareKey) {
        var result = items.sort(function (itemA, itemB) {
            if (itemA[compareKey] < itemB[compareKey]) {
                return -1;
            }
            if (itemA[compareKey] > itemB[compareKey]) {
                return 1;
            }
            return 0;
        });
        return result;
    };
    ArrayUtility.hasValue = function (items) {
        return items instanceof Array && items.length > 0;
    };
    return ArrayUtility;
}());
export { ArrayUtility };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkudXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbGl0aWVzL2FycmF5LnV0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFBQTtJQXFHQSxDQUFDO0lBbkdBLGlDQUFpQztJQUMxQixpQkFBSSxHQUFYLFVBQVksS0FBWSxFQUFFLEVBQU8sRUFBRSxRQUFrQixFQUFFLFVBQW1CO1FBQ3pFLGVBQWU7UUFDZixJQUFNLEdBQUcsR0FBVyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRW5ELGNBQWM7UUFDZCxJQUFJLEtBQUssWUFBWSxLQUFLLEVBQUU7WUFDM0IsSUFBSSxPQUFLLEdBQVksS0FBSyxDQUFDO1lBRTNCLFdBQVc7WUFDWCxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQUMsSUFBUyxFQUFFLEtBQWE7Z0JBQ3BDLE9BQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUV6QixJQUFJLE9BQUssRUFBRTtvQkFDVixRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUN0QjtnQkFDRCxPQUFPLENBQUMsT0FBSyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7SUFFTSxpQkFBSSxHQUFYLFVBQVksS0FBVSxFQUFFLFFBQWtCO1FBQ3pDLFFBQVE7UUFDUixJQUFJLEtBQUssWUFBWSxLQUFLLEVBQUU7WUFDM0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVMsRUFBRSxLQUFhO2dCQUN0QyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1NBQ0g7YUFBTSxJQUFJLEtBQUssSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDOUMsU0FBUztZQUNULEtBQUssSUFBTSxLQUFLLElBQUksS0FBSyxFQUFFO2dCQUMxQixRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzlCO1NBQ0Q7SUFDRixDQUFDO0lBRU0sa0JBQUssR0FBWixVQUFhLEtBQVksRUFBRSxRQUFrQjtRQUM1QyxJQUFJLEtBQUssWUFBWSxLQUFLLEVBQUU7WUFDM0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFDLElBQVMsRUFBRSxLQUFhLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7U0FDakU7SUFDRixDQUFDO0lBRU0sMkJBQWMsR0FBckIsVUFBc0IsS0FBWSxFQUFFLEtBQWMsRUFBRSxVQUFtQjtRQUN0RSxJQUFNLFdBQVcsR0FBUSxFQUFFLENBQUM7UUFFNUIsZUFBZTtRQUNmLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdCLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRTlDLE9BQU87UUFDUCxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFDLEdBQVE7WUFDakMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sV0FBVyxDQUFDO0lBQ3BCLENBQUM7SUFFTSw0QkFBZSxHQUF0QixVQUF1QixLQUFTO1FBQy9CLElBQU0sUUFBUSxHQUFVLEVBQUUsQ0FBQztRQUUzQixVQUFVO1FBQ1YsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBQyxHQUFZLEVBQUUsR0FBUTtZQUMvQyxJQUFJLEdBQUcsRUFBRTtnQkFDUixRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ25CO1FBQ0YsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLFFBQVEsQ0FBQztJQUNqQixDQUFDO0lBRU0sbUJBQU0sR0FBYixVQUFjLEtBQVksRUFBRSxRQUFrQjtRQUM3QyxJQUFJLE1BQU0sR0FBVSxFQUFFLENBQUM7UUFDdkIsSUFBSSxLQUFLLFlBQVksS0FBSyxFQUFFO1lBQzNCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBUyxFQUFFLEtBQWEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztTQUMzRTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUVNLGdCQUFHLEdBQVYsVUFBVyxLQUFZLEVBQUUsUUFBa0I7UUFDMUMsSUFBSSxNQUFNLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtZQUMzQixNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQVMsRUFBRSxLQUFhLElBQUssT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7U0FDeEU7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFFTSxpQkFBSSxHQUFYLFVBQVksS0FBWSxFQUFFLFVBQWtCO1FBQzNDLElBQU0sTUFBTSxHQUFVLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFVLEVBQUUsS0FBVTtZQUN2RCxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQzFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDVjtZQUNELElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDMUMsT0FBTyxDQUFDLENBQUM7YUFDVDtZQUNELE9BQU8sQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFFTSxxQkFBUSxHQUFmLFVBQWdCLEtBQVk7UUFDM0IsT0FBTyxLQUFLLFlBQVksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDRixtQkFBQztBQUFELENBQUMsQUFyR0QsSUFxR0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXJyYXlVdGlsaXR5IHtcblxuXHQvLyBTdWdnZXN0IGN1cnJlbnQgdGltZXpvbmUgaG91cnNcblx0c3RhdGljIGZpbmQoaXRlbXM6IGFueVtdLCBpZDogYW55LCBjYWxsYmFjazogRnVuY3Rpb24sIGNvbXBhcmVLZXk/OiBzdHJpbmcpOiB2b2lkIHtcblx0XHQvLyBDaGVjayBpZCBrZXlcblx0XHRjb25zdCBrZXk6IHN0cmluZyA9IGNvbXBhcmVLZXkgPyBjb21wYXJlS2V5IDogJ2lkJztcblxuXHRcdC8vIENoZWNrIGl0ZW1zXG5cdFx0aWYgKGl0ZW1zIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdGxldCBmb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdFx0XHQvLyBGb3VuZCBpdFxuXHRcdFx0aXRlbXMuZXZlcnkoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRmb3VuZCA9IGl0ZW1ba2V5XSA9PT0gaWQ7XG5cblx0XHRcdFx0aWYgKGZvdW5kKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soaXRlbSwgaW5kZXgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAhZm91bmQ7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgZWFjaChpdGVtczogYW55LCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcblx0XHQvLyBBcnJheVxuXHRcdGlmIChpdGVtcyBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0XHRpdGVtcy5mb3JFYWNoKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdFx0Y2FsbGJhY2soaXRlbSwgaW5kZXgpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmIChpdGVtcyAmJiB0eXBlb2YgaXRlbXMgPT09ICdvYmplY3QnKSB7XG5cdFx0XHQvLyBPYmplY3Rcblx0XHRcdGZvciAoY29uc3QgaW5kZXggaW4gaXRlbXMpIHtcblx0XHRcdFx0Y2FsbGJhY2soaXRlbXNbaW5kZXhdLCBpbmRleCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGV2ZXJ5KGl0ZW1zOiBhbnlbXSwgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7XG5cdFx0aWYgKGl0ZW1zIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdGl0ZW1zLmV2ZXJ5KChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IGNhbGxiYWNrKGl0ZW0sIGluZGV4KSk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGdldERpc3BsYXlLZXlzKGl0ZW1zOiBhbnlbXSwgaWRLZXk/OiBzdHJpbmcsIGRpc3BsYXlLZXk/OiBzdHJpbmcpOiBhbnkge1xuXHRcdGNvbnN0IGRpc3BsYXlLZXlzOiBhbnkgPSB7fTtcblxuXHRcdC8vIERlZmF1bHQga2V5c1xuXHRcdGlkS2V5ID0gaWRLZXkgPyBpZEtleSA6ICdpZCc7XG5cdFx0ZGlzcGxheUtleSA9IGRpc3BsYXlLZXkgPyBkaXNwbGF5S2V5IDogJ25hbWUnO1xuXG5cdFx0Ly8gRWFjaFxuXHRcdEFycmF5VXRpbGl0eS5lYWNoKGl0ZW1zLCAob2JqOiBhbnkpID0+IHtcblx0XHRcdGRpc3BsYXlLZXlzW29ialtpZEtleV1dID0gb2JqW2Rpc3BsYXlLZXldO1xuXHRcdH0pO1xuXHRcdHJldHVybiBkaXNwbGF5S2V5cztcblx0fVxuXG5cdHN0YXRpYyBnZXRTZWxlY3RlZEtleXMoaXRlbXM6IFtdKTogYW55W10ge1xuXHRcdGNvbnN0IHNlbGVjdGVkOiBhbnlbXSA9IFtdO1xuXG5cdFx0Ly8gSXRlcmF0ZVxuXHRcdEFycmF5VXRpbGl0eS5lYWNoKGl0ZW1zLCAodmFsOiBib29sZWFuLCBrZXk6IGFueSkgPT4ge1xuXHRcdFx0aWYgKHZhbCkge1xuXHRcdFx0XHRzZWxlY3RlZC5wdXNoKGtleSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHNlbGVjdGVkO1xuXHR9XG5cblx0c3RhdGljIGZpbHRlcihpdGVtczogYW55W10sIGNhbGxiYWNrOiBGdW5jdGlvbik6IGFueVtdIHtcblx0XHRsZXQgcmVzdWx0OiBhbnlbXSA9IFtdO1xuXHRcdGlmIChpdGVtcyBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0XHRyZXN1bHQgPSBpdGVtcy5maWx0ZXIoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4gY2FsbGJhY2soaXRlbSwgaW5kZXgpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHN0YXRpYyBtYXAoaXRlbXM6IGFueVtdLCBjYWxsYmFjazogRnVuY3Rpb24pOiBhbnlbXSB7XG5cdFx0bGV0IHJlc3VsdDogYW55W10gPSBbXTtcblx0XHRpZiAoaXRlbXMgaW5zdGFuY2VvZiBBcnJheSkge1xuXHRcdFx0cmVzdWx0ID0gaXRlbXMubWFwKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IGNhbGxiYWNrKGl0ZW0sIGluZGV4KSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRzdGF0aWMgc29ydChpdGVtczogYW55W10sIGNvbXBhcmVLZXk6IHN0cmluZyk6IGFueVtdIHtcblx0XHRjb25zdCByZXN1bHQ6IGFueVtdID0gaXRlbXMuc29ydCgoaXRlbUE6IGFueSwgaXRlbUI6IGFueSkgPT4ge1xuXHRcdFx0aWYgKGl0ZW1BW2NvbXBhcmVLZXldIDwgaXRlbUJbY29tcGFyZUtleV0pIHtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGl0ZW1BW2NvbXBhcmVLZXldID4gaXRlbUJbY29tcGFyZUtleV0pIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9KTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0c3RhdGljIGhhc1ZhbHVlKGl0ZW1zOiBhbnlbXSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBpdGVtcyBpbnN0YW5jZW9mIEFycmF5ICYmIGl0ZW1zLmxlbmd0aCA+IDA7XG5cdH1cbn1cbiJdfQ==