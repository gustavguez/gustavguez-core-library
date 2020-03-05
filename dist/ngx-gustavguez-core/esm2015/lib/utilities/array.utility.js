export class ArrayUtility {
    //Suggest current timezone hours
    static find(items, id, callback, compareKey) {
        //Check id key
        const key = compareKey ? compareKey : 'id';
        //Check items
        if (items instanceof Array) {
            let found = false;
            //Found it
            items.every((item, index) => {
                found = item[key] == id;
                if (found) {
                    callback(item, index);
                }
                return !found;
            });
        }
    }
    static each(items, callback) {
        //Array
        if (items instanceof Array) {
            items.forEach((item, index) => {
                callback(item, index);
            });
        }
        else if (items && (typeof items === 'object')) {
            //Object
            for (let index in items) {
                callback(items[index], index);
            }
        }
    }
    static every(items, callback) {
        if (items instanceof Array) {
            items.every((item, index) => {
                return callback(item, index);
            });
        }
    }
    static getDisplayKeys(items, idKey, displayKey) {
        let displayKeys = {};
        //Default keys
        idKey = idKey ? idKey : 'id';
        displayKey = displayKey ? displayKey : 'name';
        //Each
        ArrayUtility.each(items, (obj) => {
            displayKeys[obj[idKey]] = obj[displayKey];
        });
        return displayKeys;
    }
    static getSelectedKeys(items) {
        let selected = [];
        //Iterate
        ArrayUtility.each(items, (val, key) => {
            if (val)
                selected.push(key);
        });
        return selected;
    }
    static filter(items, callback) {
        if (items instanceof Array) {
            let result = items.filter((item, index) => {
                return callback(item, index);
            });
            return result;
        }
    }
    static map(items, callback) {
        let result = [];
        if (items instanceof Array) {
            result = items.map((item, index) => {
                return callback(item, index);
            });
        }
        return result;
    }
    static sort(items, compareKey) {
        let result = items.sort((a, b) => {
            if (a[compareKey] < b[compareKey])
                return -1;
            if (a[compareKey] > b[compareKey])
                return 1;
            return 0;
        });
        return result;
    }
    static hasValue(items) {
        return (items instanceof Array && items.length > 0);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkudXRpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ndXN0YXZndWV6LWNvcmUvIiwic291cmNlcyI6WyJsaWIvdXRpbGl0aWVzL2FycmF5LnV0aWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLFlBQVk7SUFFeEIsZ0NBQWdDO0lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBWSxFQUFFLEVBQU8sRUFBRSxRQUFrQixFQUFFLFVBQW1CO1FBQ3pFLGNBQWM7UUFDZCxNQUFNLEdBQUcsR0FBVyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRW5ELGFBQWE7UUFDYixJQUFHLEtBQUssWUFBWSxLQUFLLEVBQUM7WUFDekIsSUFBSSxLQUFLLEdBQVksS0FBSyxDQUFDO1lBRTNCLFVBQVU7WUFDVixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBUyxFQUFFLEtBQWEsRUFBRSxFQUFFO2dCQUN4QyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFFeEIsSUFBRyxLQUFLLEVBQUM7b0JBQ1IsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDO1NBQ0g7SUFDRixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFVLEVBQUUsUUFBa0I7UUFDekMsT0FBTztRQUNQLElBQUcsS0FBSyxZQUFZLEtBQUssRUFBQztZQUN6QixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBUyxFQUFFLEtBQWEsRUFBRSxFQUFFO2dCQUMxQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFBO1NBQ0Y7YUFBSyxJQUFJLEtBQUssSUFBSSxDQUFDLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FB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QU8sQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxDQUFDLENBQUM7UUFDRyxPQUFPLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFZO1FBQzNCLE9BQU8sQ0FBQyxLQUFLLFlBQVksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7SUFFcEQsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFycmF5VXRpbGl0eSB7XG5cdFxuXHQvL1N1Z2dlc3QgY3VycmVudCB0aW1lem9uZSBob3Vyc1xuXHRzdGF0aWMgZmluZChpdGVtczogYW55W10sIGlkOiBhbnksIGNhbGxiYWNrOiBGdW5jdGlvbiwgY29tcGFyZUtleT86IHN0cmluZyk6IHZvaWR7XG5cdFx0Ly9DaGVjayBpZCBrZXlcblx0XHRjb25zdCBrZXk6IHN0cmluZyA9IGNvbXBhcmVLZXkgPyBjb21wYXJlS2V5IDogJ2lkJztcblxuXHRcdC8vQ2hlY2sgaXRlbXNcblx0XHRpZihpdGVtcyBpbnN0YW5jZW9mIEFycmF5KXtcblx0XHRcdGxldCBmb3VuZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdFx0XHQvL0ZvdW5kIGl0XG5cdFx0XHRpdGVtcy5ldmVyeSgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdGZvdW5kID0gaXRlbVtrZXldID09IGlkO1xuXG5cdFx0XHRcdGlmKGZvdW5kKXtcblx0XHRcdFx0XHRjYWxsYmFjayhpdGVtLCBpbmRleCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuICFmb3VuZDtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBlYWNoKGl0ZW1zOiBhbnksIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWR7XG5cdFx0Ly9BcnJheVxuXHRcdGlmKGl0ZW1zIGluc3RhbmNlb2YgQXJyYXkpe1xuXHRcdFx0aXRlbXMuZm9yRWFjaCgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdGNhbGxiYWNrKGl0ZW0sIGluZGV4KTtcblx0XHRcdH0pXG5cdFx0fWVsc2UgaWYgKGl0ZW1zICYmICh0eXBlb2YgaXRlbXMgPT09ICdvYmplY3QnKSl7XG5cdFx0XHQvL09iamVjdFxuXHRcdFx0Zm9yKGxldCBpbmRleCBpbiBpdGVtcyl7XG5cdFx0XHRcdGNhbGxiYWNrKGl0ZW1zW2luZGV4XSwgaW5kZXgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBldmVyeShpdGVtczogYW55W10sIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWR7XG5cdFx0aWYoaXRlbXMgaW5zdGFuY2VvZiBBcnJheSl7XG5cdFx0XHRpdGVtcy5ldmVyeSgoaXRlbTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHJldHVybiBjYWxsYmFjayhpdGVtLCBpbmRleCk7XG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBnZXREaXNwbGF5S2V5cyhpdGVtczogYW55W10sIGlkS2V5Pzogc3RyaW5nLCBkaXNwbGF5S2V5Pzogc3RyaW5nKTogYW55IHtcblx0XHRsZXQgZGlzcGxheUtleXM6IGFueSA9IHt9O1xuXG5cdFx0Ly9EZWZhdWx0IGtleXNcblx0XHRpZEtleSA9IGlkS2V5ID8gaWRLZXkgOiAnaWQnO1xuXHRcdGRpc3BsYXlLZXkgPSBkaXNwbGF5S2V5ID8gZGlzcGxheUtleSA6ICduYW1lJztcblxuXHRcdC8vRWFjaFxuXHRcdEFycmF5VXRpbGl0eS5lYWNoKGl0ZW1zLCAob2JqOiBhbnkpID0+IHtcblx0XHRcdGRpc3BsYXlLZXlzW29ialtpZEtleV1dID0gb2JqW2Rpc3BsYXlLZXldO1xuXHRcdH0pO1xuXHRcdHJldHVybiBkaXNwbGF5S2V5cztcblx0fVxuXG5cdHN0YXRpYyBnZXRTZWxlY3RlZEtleXMoaXRlbXM6IFtdKTogYW55W10ge1xuXHRcdGxldCBzZWxlY3RlZDogYW55W10gPSBbXTtcblxuXHRcdC8vSXRlcmF0ZVxuXHRcdEFycmF5VXRpbGl0eS5lYWNoKGl0ZW1zLCAodmFsOiBib29sZWFuLCBrZXk6IGFueSkgPT4ge1xuXHRcdFx0aWYodmFsKSBzZWxlY3RlZC5wdXNoKGtleSk7XG5cdFx0fSlcblxuXHRcdHJldHVybiBzZWxlY3RlZDtcblx0fVxuXG5cdHN0YXRpYyBmaWx0ZXIoaXRlbXM6IGFueVtdLCBjYWxsYmFjazogRnVuY3Rpb24pOiBhbnlbXXtcblx0XHRpZihpdGVtcyBpbnN0YW5jZW9mIEFycmF5KXtcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IGFueVtdID0gaXRlbXMuZmlsdGVyKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcblx0XHRcdFx0cmV0dXJuIGNhbGxiYWNrKGl0ZW0sIGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgbWFwKGl0ZW1zOiBhbnlbXSwgY2FsbGJhY2s6IEZ1bmN0aW9uKTogYW55W117XG4gICAgICAgIGxldCByZXN1bHQ6IGFueVtdID0gW107XG5cdFx0aWYoaXRlbXMgaW5zdGFuY2VvZiBBcnJheSl7XG5cdFx0XHRyZXN1bHQgPSBpdGVtcy5tYXAoKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRyZXR1cm4gY2FsbGJhY2soaXRlbSwgaW5kZXgpO1xuXHRcdFx0fSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0c3RhdGljIHNvcnQoaXRlbXM6IGFueVtdLCBjb21wYXJlS2V5OiBzdHJpbmcpOiBhbnlbXXtcblx0XHRsZXQgcmVzdWx0OiBhbnlbXSA9IGl0ZW1zLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG5cdFx0XHRpZiAoYVtjb21wYXJlS2V5XSA8IGJbY29tcGFyZUtleV0pXG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdGlmIChhW2NvbXBhcmVLZXldID4gYltjb21wYXJlS2V5XSlcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdHN0YXRpYyBoYXNWYWx1ZShpdGVtczogYW55W10pOiBib29sZWFue1xuXHRcdHJldHVybiAoaXRlbXMgaW5zdGFuY2VvZiBBcnJheSAmJiBpdGVtcy5sZW5ndGggPiAwKVxuXG5cdH1cbn0iXX0=