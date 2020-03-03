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
export default StringUtility;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLnV0aWxpdHkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZ3VzdGF2Z3Vlei1jb3JlLyIsInNvdXJjZXMiOlsibGliL3V0aWxpdGllcy9zdHJpbmcudXRpbGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUFBO0lBU0EsQ0FBQztJQVBPLDBCQUFZLEdBQW5CO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUVNLHFCQUFPLEdBQWQsVUFBZSxHQUFXLEVBQUUsTUFBYztRQUN6QyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRixvQkFBQztBQUFELENBQUMsQUFURCxJQVNDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaW5nVXRpbGl0eSB7XG5cdFxuXHRzdGF0aWMgcmFuZG9tU3RyaW5nKCk6IHN0cmluZ3tcblx0XHRyZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDEyKVxuXHR9XG5cblx0c3RhdGljIHBhZExlZnQodmFsOiBudW1iZXIsIGRpZ2l0czogbnVtYmVyKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdmFsLnRvU3RyaW5nKCkucGFkU3RhcnQoZGlnaXRzLCBcIjBcIik7XG5cdH1cbn0iXX0=