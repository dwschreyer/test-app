import IRepository from "./IRepository";
import AppContext, { Environment } from "../AppContext";
import BaseApiRepository from "./BaseApiRepository";

export default abstract class RepositoryFactory {

    public static async create(): Promise<IRepository> {

        console.log("ENVIRONMENT", AppContext.environment);

        let dynImport: any = {};
        let repository: IRepository = {} as IRepository;
        switch (AppContext.environment) {
            case Environment.devTest:
                dynImport = await import("./BaseDevTestRepository");
                repository = Object.create(dynImport.default.prototype);
                break;
            case Environment.devStart:
                dynImport = await import("./BaseDevStartRepository");
                repository = Object.create(dynImport.default.prototype);
                break;
            default:
                repository = new BaseApiRepository();
                break;
        }

        return repository;
    }
}