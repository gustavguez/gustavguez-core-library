import * as momentImported from 'moment';
const moment = momentImported;
export default class DateUtility {
    static todayLocaleString() {
        const today = moment();
        return DateUtility.localeString(today);
    }
    static todayDateString() {
        const today = moment();
        return today.format("YYYY-MM-DD");
    }
    static localeString(date) {
        return date.format("YYYY-MM-DD") + "T" + date.format("HH:mm");
    }
    static todayAsPrettyString() {
        const today = moment();
        return today.format("DD/MM/YYYY");
    }
    static prettyDate(date, displayHour) {
        const d = moment(date);
        let str = d.format("DD/MM/YYYY");
        if (displayHour) {
            str += " " + DateUtility.prettyHour(date);
        }
        return str;
    }
    static prettyHour(date) {
        const d = moment(date);
        return d.format("HH:mm");
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS51dGlsaXR5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWd1c3Rhdmd1ZXotY29yZS8iLCJzb3VyY2VzIjpbImxpYi91dGlsaXRpZXMvZGF0ZS51dGlsaXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxjQUFjLE1BQU0sUUFBUSxDQUFDO0FBRXpDLE1BQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQztBQUU5QixNQUFNLENBQUMsT0FBTyxPQUFPLFdBQVc7SUFFNUIsTUFBTSxDQUFDLGlCQUFpQjtRQUNwQixNQUFNLEtBQUssR0FBUSxNQUFNLEVBQUUsQ0FBQztRQUM1QixPQUFPLFdBQVcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxlQUFlO1FBQ2xCLE1BQU0sS0FBSyxHQUFRLE1BQU0sRUFBRSxDQUFDO1FBQzVCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFTO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsTUFBTSxDQUFDLG1CQUFtQjtRQUN0QixNQUFNLEtBQUssR0FBUSxNQUFNLEVBQUUsQ0FBQztRQUM1QixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBWSxFQUFFLFdBQXFCO1FBQ2pELE1BQU0sQ0FBQyxHQUFRLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixJQUFJLEdBQUcsR0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBRXhDLElBQUcsV0FBVyxFQUFDO1lBQ1gsR0FBRyxJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFZO1FBQzFCLE1BQU0sQ0FBQyxHQUFRLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDNUIsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9tZW50SW1wb3J0ZWQgZnJvbSAnbW9tZW50JzsgXG5cbmNvbnN0IG1vbWVudCA9IG1vbWVudEltcG9ydGVkO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlVXRpbGl0eSB7XG5cbiAgICBzdGF0aWMgdG9kYXlMb2NhbGVTdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgdG9kYXk6IGFueSA9IG1vbWVudCgpO1xuICAgICAgICByZXR1cm4gRGF0ZVV0aWxpdHkubG9jYWxlU3RyaW5nKHRvZGF5KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgdG9kYXlEYXRlU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IHRvZGF5OiBhbnkgPSBtb21lbnQoKTtcbiAgICAgICAgcmV0dXJuIHRvZGF5LmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvY2FsZVN0cmluZyhkYXRlOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZGF0ZS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpICsgXCJUXCIgKyBkYXRlLmZvcm1hdChcIkhIOm1tXCIpO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgdG9kYXlBc1ByZXR0eVN0cmluZygpe1xuICAgICAgICBjb25zdCB0b2RheTogYW55ID0gbW9tZW50KCk7XG4gICAgICAgIHJldHVybiB0b2RheS5mb3JtYXQoXCJERC9NTS9ZWVlZXCIpXG4gICAgfVxuXG4gICAgc3RhdGljIHByZXR0eURhdGUoZGF0ZTogc3RyaW5nLCBkaXNwbGF5SG91cj86IGJvb2xlYW4pOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBkOiBhbnkgPSBtb21lbnQoZGF0ZSk7XG4gICAgICAgIGxldCBzdHI6IHN0cmluZyA9IGQuZm9ybWF0KFwiREQvTU0vWVlZWVwiKVxuXG4gICAgICAgIGlmKGRpc3BsYXlIb3VyKXtcbiAgICAgICAgICAgIHN0ciArPSBcIiBcIiArIERhdGVVdGlsaXR5LnByZXR0eUhvdXIoZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICBzdGF0aWMgcHJldHR5SG91cihkYXRlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBkOiBhbnkgPSBtb21lbnQoZGF0ZSk7XG4gICAgICAgIHJldHVybiBkLmZvcm1hdChcIkhIOm1tXCIpXG4gICAgfVxuXG59Il19