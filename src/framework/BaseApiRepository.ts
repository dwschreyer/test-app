import IRepository from "./IRepository";

export default class BaseApiRepository implements IRepository {

    init() {

    }
    
    async getData<T>(path: string): Promise<T> {
        const raw = await fetch(path);
        let data = await raw.json();
        return data;
    }

}