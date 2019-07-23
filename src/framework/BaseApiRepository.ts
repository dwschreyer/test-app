import IRepository from "./IRepository";

export default class BaseApiRepository implements IRepository {

    async getData<T>(path: string): Promise<T> {
        const raw = await fetch(path);
        let data = await raw.json();
        return data;
    }

}