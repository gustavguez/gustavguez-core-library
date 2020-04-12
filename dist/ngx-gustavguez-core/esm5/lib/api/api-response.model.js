import { ArrayUtility } from '../utilities/array.utility';
var ApiResponseModel = /** @class */ (function () {
    function ApiResponseModel(data) {
        this.data = data;
    }
    ApiResponseModel.prototype.hasSingreResult = function () {
        return this.data && this.data.id;
    };
    ApiResponseModel.prototype.hasCollectionResult = function () {
        return ArrayUtility.hasValue(this.data);
    };
    return ApiResponseModel;
}());
export { ApiResponseModel };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXJlc3BvbnNlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi9hcGkvYXBpLXJlc3BvbnNlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUxRDtJQUVDLDBCQUNRLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUksQ0FBQztJQUVoQiwwQ0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRU0sOENBQW1CLEdBQTFCO1FBQ0MsT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0YsdUJBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFycmF5VXRpbGl0eSB9IGZyb20gJy4uL3V0aWxpdGllcy9hcnJheS51dGlsaXR5JztcblxuZXhwb3J0IGNsYXNzIEFwaVJlc3BvbnNlTW9kZWwge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyBkYXRhPzogYW55KSB7IH1cblxuXHRwdWJsaWMgaGFzU2luZ3JlUmVzdWx0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmRhdGEgJiYgdGhpcy5kYXRhLmlkO1xuXHR9XG5cblx0cHVibGljIGhhc0NvbGxlY3Rpb25SZXN1bHQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIEFycmF5VXRpbGl0eS5oYXNWYWx1ZSh0aGlzLmRhdGEpO1xuXHR9XG59XG4iXX0=