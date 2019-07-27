import { GenericState } from "./GenericComponent";

export default class GenericRepository {

    public static async getData<T>(path: string): Promise<GenericState<T>> {

        const raw = await fetch(path);
        let data = await raw.json();
        return data;
    }

}