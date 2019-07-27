import Urls from "./framework/Urls";

class AppContext {

    public constructor(useApi: boolean = true) {
        this.UseApi = useApi;
        this.Urls = new Urls(useApi);
    }

    public readonly UseApi: boolean;
    public readonly Urls: Urls;

    
}

const appContext: AppContext = new AppContext(false);
export default appContext;