import IRepository from "./IRepository";
//import headerJson from '../../public/data/header.json'
import Urls from "./Urls";

export default class BaseDevTestRepository implements IRepository {

    init() {
        
    }

    async getData<T>(path: string): Promise<T> {

        let json = {};
        switch(path) {
            case Urls.headerPath:
                //json = headerJson;
                break;

        }

        console.log("BaseDevTestRepository", json);

        return json as unknown as T;
    }
}