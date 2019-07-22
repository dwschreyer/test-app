export default interface IRepository {
    
    getData<T>(path: string): Promise<T>;

}