import HeaderRepository from "./HeaderRepository";
import AppContext from "../../AppContext";

describe("All the Header Tests", () => {

    beforeAll(() => {
        AppContext.isTest = true;
        expect(AppContext.isTest).toBe(true);
    });


    it("Header test 1", async () => {

        console.log(it.name);
        
        var headerRepository = new HeaderRepository();
        var header = await headerRepository.GetHeader();

        expect(header.id).toBe(10);
    });
});