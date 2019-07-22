import IRepository from "./IRepository";

export default class BaseApiRepository implements IRepository {

    async getData<T>(path: string): Promise<T> {
        throw new Error("Method not implemented.");
    }

}