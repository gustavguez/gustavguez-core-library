var NumberUtility = /** @class */ (function () {
    function NumberUtility() {
    }
    NumberUtility.format = function (val) {
        var valStr = val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        return valStr.substring(0, valStr.length - 3);
    };
    NumberUtility.valid = function (val) {
        return isNaN(Number(val));
    };
    return NumberUtility;
}());
export { NumberUtility };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLnV0aWxpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxpdGllcy9udW1iZXIudXRpbGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUFBO0lBVUEsQ0FBQztJQVJPLG9CQUFNLEdBQWIsVUFBYyxHQUFXO1FBQ3hCLElBQU0sTUFBTSxHQUFXLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFFLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRU0sbUJBQUssR0FBWixVQUFhLEdBQVc7UUFDdkIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNGLG9CQUFDO0FBQUQsQ0FBQyxBQVZELElBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTnVtYmVyVXRpbGl0eSB7XG5cblx0c3RhdGljIGZvcm1hdCh2YWw6IG51bWJlcik6IHN0cmluZyB7XG5cdFx0Y29uc3QgdmFsU3RyOiBzdHJpbmcgPSB2YWwudG9GaXhlZCgyKS5yZXBsYWNlKC9cXGQoPz0oXFxkezN9KStcXC4pL2csICckJiwnKTtcblx0XHRyZXR1cm4gdmFsU3RyLnN1YnN0cmluZygwLCB2YWxTdHIubGVuZ3RoIC0gMyk7XG5cdH1cblxuXHRzdGF0aWMgdmFsaWQodmFsOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gaXNOYU4oTnVtYmVyKHZhbCkpO1xuXHR9XG59XG4iXX0=