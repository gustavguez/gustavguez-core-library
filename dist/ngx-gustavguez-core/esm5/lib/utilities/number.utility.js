var NumberUtility = /** @class */ (function () {
    function NumberUtility() {
    }
    NumberUtility.format = function (val) {
        var valStr = val.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        return valStr.substring(0, valStr.length - 3);
    };
    return NumberUtility;
}());
export { NumberUtility };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLnV0aWxpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxpdGllcy9udW1iZXIudXRpbGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUFBO0lBT0EsQ0FBQztJQUxVLG9CQUFNLEdBQWIsVUFBYyxHQUFXO1FBQzNCLElBQU0sTUFBTSxHQUFXLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzFFLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUYsb0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOdW1iZXJVdGlsaXR5IHtcblxuICAgIHN0YXRpYyBmb3JtYXQodmFsOiBudW1iZXIpOiBzdHJpbmd7XG5cdFx0Y29uc3QgdmFsU3RyOiBzdHJpbmcgPSB2YWwudG9GaXhlZCgyKS5yZXBsYWNlKC9cXGQoPz0oXFxkezN9KStcXC4pL2csICckJiwnKTtcblx0XHRyZXR1cm4gdmFsU3RyLnN1YnN0cmluZygwLCB2YWxTdHIubGVuZ3RoIC0gMyk7XG5cdH1cblxufSJdfQ==