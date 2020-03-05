export declare class ArrayUtility {
    static find(items: any[], id: any, callback: Function, compareKey?: string): void;
    static each(items: any, callback: Function): void;
    static every(items: any[], callback: Function): void;
    static getDisplayKeys(items: any[], idKey?: string, displayKey?: string): any;
    static getSelectedKeys(items: []): any[];
    static filter(items: any[], callback: Function): any[];
    static map(items: any[], callback: Function): any[];
    static sort(items: any[], compareKey: string): any[];
    static hasValue(items: any[]): boolean;
}
