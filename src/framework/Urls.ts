export default class Urls {
    
    constructor(private useApi: boolean) {

        this.testData = this.setUrl("/api/testData", "/data/testData.json");

    }

    public readonly testData: string;

    private setUrl(apiUrl: string, startUrl: string): string {
        return this.useApi ? apiUrl : startUrl;
    }
}