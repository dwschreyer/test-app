import IRepository from "./IRepository";
import Urls from "./Urls";

export default class BaseDevStartRepository implements IRepository {

    mappings: Map<string, string> = new Map<string, string>();

    init() {
        this.mappings = new Map<string, string>();
        this.mappings.set(Urls.headerPath, "data/header.json");
    }

    async getData<T>(path: string): Promise<T> {

        let devStartPath = window.location.href;
        devStartPath += this.mappings.get(path);

        const raw = await fetch(devStartPath);
        const result = await raw.json();
        return result as T;
    }
}