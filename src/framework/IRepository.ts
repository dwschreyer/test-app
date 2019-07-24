export default interface IRepository {
    
    init(): void;
    getData<T>(path: string): Promise<T>;

}