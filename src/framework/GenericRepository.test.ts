import GenericRepository from "./GenericRepository";
import IResponse from "./IResponse";
import testData from "../../public/data/testData.json";
import Urls from "./Urls";

it('Generic Repository Test', async () => {

    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

    let data = await GenericRepository.getData<IResponse>(Urls.testData);

    console.log(data);

});
