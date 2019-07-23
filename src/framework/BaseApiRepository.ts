import IRepository from "./IRepository";

export default class BaseApiRepository implements IRepository {

    async getData<T>(path: string): Promise<T> {
        const raw = await fetch(path);
        throw new Error("Method not implemented.");
    }

}