import IRepository from "../../framework/IRepository";
import IHeader from "./IHeader";
import RepositoryFactory from "../../framework/RepositoryFactory";
import Urls from "../../framework/urls";

export default class HeaderRepository {

    public async GetHeader(): Promise<IHeader> {
        let repository: IRepository = await RepositoryFactory.create();
        let result = await repository.getData<IHeader>(Urls.headerPath);
        return result;
    }

}