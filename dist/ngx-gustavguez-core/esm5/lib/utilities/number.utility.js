var NumberUtility = /** @class */ (function () {
    function NumberUtility() {
    }
    NumberUtility.format = function (val) {
        var valStr = val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        return valStr.substring(0, valStr.length - 3);
    };
    NumberUtility.valid = function (val) {
        return !isNaN(Number(val));
    };
    return NumberUtility;
}());
export { NumberUtility };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLnV0aWxpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxpdGllcy9udW1iZXIudXRpbGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUFBO0lBVUEsQ0FBQztJQVJPLG9CQUFNLEdBQWIsVUFBYyxHQUFXO1FBQ3hCLElBQU0sTUFBTSxHQUFXLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFFLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sbUJBQUssR0FBWixVQUFhLEdBQVc7UUFDdkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOdW1iZXJVdGlsaXR5IHtcblxuXHRzdGF0aWMgZm9ybWF0KHZhbDogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRjb25zdCB2YWxTdHI6IHN0cmluZyA9IHZhbC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcZCg/PShcXGR7M30pK1xcLikvZywgJyQmLCcpO1xuXHRcdHJldHVybiB2YWxTdHIuc3Vic3RyaW5nKDAsIHZhbFN0ci5sZW5ndGggLSAzKTtcblx0fVxuXG5cdHN0YXRpYyB2YWxpZCh2YWw6IG51bWJlcik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhaXNOYU4oTnVtYmVyKHZhbCkpO1xuXHR9XG59XG4iXX0=