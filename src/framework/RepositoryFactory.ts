import IRepository from "./IRepository";
import AppContext from "../AppContext";
import BaseApiRepository from "./BaseApiRepository";

export default abstract class RepositoryFactory {

    public static async create(): Promise<IRepository> {
        if(AppContext.isTest) {
            const baseFileRepositoryImport = await import("./BaseFileRepository");
            let repository: IRepository = Object.create(baseFileRepositoryImport.default.prototype);
            return repository;
        } else {
            return new BaseApiRepository();
        }
    }
}