import Urls from "./Urls";
import { Environment } from "../models/enums";

it('Urls are working for each environment', async () => {

    let urls = new Urls(Environment.devTest);
    let url = urls.testData
    expect(url).not.toHaveLength(0);

    urls = new Urls(Environment.devStart);
    url = urls.testData
    expect(url).not.toHaveLength(0);

    urls = new Urls(Environment.uat);
    url = urls.testData
    expect(url).not.toHaveLength(0);

    urls = new Urls(Environment.prod);
    url = urls.testData
    expect(url).not.toHaveLength(0);

});
