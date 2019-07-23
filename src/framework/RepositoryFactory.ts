import IRepository from "./IRepository";
import BaseFileRepository from "./BaseFileRepository";
import AppContext from "../AppContext";
import BaseApiRepository from "./BaseApiRepository";
import Urls from "./urls";

export default abstract class RepositoryFactory {

    public static async create(): Promise<IRepository> {
        if(AppContext.isTest) {
            const baseFileRepository = await import("./BaseFileRepository");
            let a: IRepository = Object.create(baseFileRepository.default.prototype);
            return a;
        } else {
            return new BaseApiRepository();
        }
    }
}