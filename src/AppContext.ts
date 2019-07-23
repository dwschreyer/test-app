
export enum Environment {
    devTest,
    devStart,
    Test,
    Uat,
    Prod
}

export default abstract class AppContext {
    static environment: Environment = Environment.devTest;
}
