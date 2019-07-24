export enum Environment {
    devTest,
    devStart,
    Test,
    Uat,
    Prod
}

export default abstract class AppContext {

    static environment: Environment = Environment.devTest;

    static setupEnv() {
        if(process.env.REACT_APP_ENVIRONMENT) {
            AppContext.environment = (Environment as any)[process.env.REACT_APP_ENVIRONMENT];
        }

    }
}
