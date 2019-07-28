import { Environment } from "../models/enums";

export default class Urls {

    constructor(private environment: Environment) {

        this.testData = this.setUrl("testData");

    }

    public readonly testData: string;

    private setUrl(resourceName: string): string {

        var response: string = "";
        switch (this.environment) {
            case Environment.devTest:
                response = "../public/data/{{0}}.json".replace("{{0}}", resourceName);
                break;

            case Environment.devStart:
                response = "/data/{{0}}.json".replace("{{0}}", resourceName);
                break;

            case Environment.uat:
                response = "/api/{{0}}".replace("{{0}}", resourceName);
                break;

            case Environment.prod:
                response = "/api/{{0}}".replace("{{0}}", resourceName);
                break;
        }

        return response;
    }
}