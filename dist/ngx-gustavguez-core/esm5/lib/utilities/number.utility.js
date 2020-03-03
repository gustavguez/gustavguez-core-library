var NumberUtility = /** @class */ (function () {
    function NumberUtility() {
    }
    NumberUtility.format = function (val) {
        var valStr = val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        return valStr.substring(0, valStr.length - 3);
    };
    return NumberUtility;
}());
export default NumberUtility;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLnV0aWxpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxpdGllcy9udW1iZXIudXRpbGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUFBO0lBT0EsQ0FBQztJQUxVLG9CQUFNLEdBQWIsVUFBYyxHQUFXO1FBQzNCLElBQU0sTUFBTSxHQUFXLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFFLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUYsb0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlclV0aWxpdHkge1xuXG4gICAgc3RhdGljIGZvcm1hdCh2YWw6IG51bWJlcik6IHN0cmluZ3tcblx0XHRjb25zdCB2YWxTdHI6IHN0cmluZyA9IHZhbC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcZCg/PShcXGR7M30pK1xcLikvZywgJyQmLCcpO1xuXHRcdHJldHVybiB2YWxTdHIuc3Vic3RyaW5nKDAsIHZhbFN0ci5sZW5ndGggLSAzKTtcblx0fVxuXG59Il19