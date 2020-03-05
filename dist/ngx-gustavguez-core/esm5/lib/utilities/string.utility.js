var StringUtility = /** @class */ (function () {
    function StringUtility() {
    }
    StringUtility.randomString = function () {
        return Math.random().toString(36).substring(2, 12);
    };
    StringUtility.padLeft = function (val, digits) {
        return val.toString().padStart(digits, "0");
    };
    return StringUtility;
}());
export { StringUtility };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLnV0aWxpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxpdGllcy9zdHJpbmcudXRpbGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUFBO0lBU0EsQ0FBQztJQVBPLDBCQUFZLEdBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUVNLHFCQUFPLEdBQWQsVUFBZSxHQUFXLEVBQUUsTUFBYztRQUN6QyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRixvQkFBQztBQUFELENBQUMsQUFURCxJQVNDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN0cmluZ1V0aWxpdHkge1xuXHRcblx0c3RhdGljIHJhbmRvbVN0cmluZygpOiBzdHJpbmd7XG5cdFx0cmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxMilcblx0fVxuXG5cdHN0YXRpYyBwYWRMZWZ0KHZhbDogbnVtYmVyLCBkaWdpdHM6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHZhbC50b1N0cmluZygpLnBhZFN0YXJ0KGRpZ2l0cywgXCIwXCIpO1xuXHR9XG59Il19