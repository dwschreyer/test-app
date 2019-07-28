import Urls from "./framework/Urls";
import { Environment } from "./models/enums";

export class AppContext {

    public init(environment: Environment) {
        this.Environment = environment;
        this.Urls = new Urls(environment);
    }

    public Environment: Environment = Environment.devStart;
    public Urls: Urls = {} as Urls;
}

const appContext: AppContext = new AppContext();
export default appContext;