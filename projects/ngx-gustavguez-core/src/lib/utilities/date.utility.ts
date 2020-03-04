import * as momentImported from 'moment'; 

const moment = momentImported;

export class DateUtility {

    static todayLocaleString(): string {
        const today: any = moment();
        return DateUtility.localeString(today);
    }

    static todayDateString(): string {
        const today: any = moment();
        return today.format("YYYY-MM-DD");
    }

    static localeString(date: any): string {
        return date.format("YYYY-MM-DD") + "T" + date.format("HH:mm");
    }
    
    static todayAsPrettyString(){
        const today: any = moment();
        return today.format("DD/MM/YYYY")
    }

    static prettyDate(date: string, displayHour?: boolean): string {
        const d: any = moment(date);
        let str: string = d.format("DD/MM/YYYY")

        if(displayHour){
            str += " " + DateUtility.prettyHour(date);
        }
        return str;
    }

    static prettyHour(date: string): string {
        const d: any = moment(date);
        return d.format("HH:mm")
    }

}