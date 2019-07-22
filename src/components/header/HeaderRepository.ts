import IRepository from "../../framework/IRepository";
import IHeader from "./IHeader";
import Urls from "../../framework/Urls";
import {injectable, inject} from "tsyringe";


@injectable()
export default class HeaderRepository {

    constructor(@inject("IRepository") private repository: IRepository) {

    }

    public async GetHeader(): Promise<IHeader> {
        console.log("GetHeader");
         let result = await this.repository.getData<IHeader>(Urls.headerPath);
         return result;
    }

}