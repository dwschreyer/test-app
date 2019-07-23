import IRepository from "./IRepository";
import headerJson from '../data/header.json'
import Urls from "./urls";

export default class BaseFileRepository implements IRepository {

    async getData<T>(path: string): Promise<T> {

        let json = {};
        switch(path) {
            case Urls.headerPath:
                json = headerJson;
                break;

        }

        console.log("JSON", json);

        return <T><unknown>json;
    }
}