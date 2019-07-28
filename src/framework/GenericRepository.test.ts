import GenericRepository from "./GenericRepository";
import IResponse from "./IResponse";
import appContext from "../AppContext";

beforeAll(() => {
    
})

it('Generic Repository Test', async () => {

    let data = await GenericRepository.getData<IResponse>(appContext.Urls.testData);
    expect(data).not.toBeNull();
    
});
