import HeaderRepository from "./HeaderRepository";
import AppContext, { Environment } from "../../AppContext";

describe("All the Header Tests", () => {

    beforeAll(() => {
        AppContext.environment = Environment.devTest;
    });


    it("Header test 1", async () => {

        console.log(it.name);
        
        var headerRepository = new HeaderRepository();
        var header = await headerRepository.GetHeader();

        expect(header.id).toBe(10);
    });
});