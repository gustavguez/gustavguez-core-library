export class ApiResponseModel {
	constructor(
		public data?: any) { }

	public hasData(): boolean {
		return this.data && Object.keys(this.data).length > 0;
	}
}
