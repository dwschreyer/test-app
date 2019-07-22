//https://github.com/microsoft/tsyringe

import '@abraham/reflection';
import { container } from "tsyringe";
import HeaderRepository from "./HeaderRepository";
import BaseFileRepository from "../../framework/BaseFileRepository";
import IRepository from '../../framework/IRepository';

describe("All the Header Component Tests", () => {

    // beforeAll(() => {

    //     console.log("Before All!");
    //     //TODO: Setup the IoC container.
    //     container.register("IRepository", {
    //         useClass: BaseFileRepository
    //       });

    // });

    // beforeEach(() => {
    //     console.log("Before Each!");
    // });

    container.register("IRepository", {
        useClass: BaseFileRepository
    });
    
    it("Header:: HeaderRepository", async () => {
        
        //console.log(it.name);
        
        
        
        console.log("isRegistered", container.isRegistered("IRepository"));


        let headerRepository = container.resolve(HeaderRepository);
        console.log(headerRepository);
        // let header = await headerRepository.GetHeader();
        
        // console.log(it.name, header);
        // expect(header.id).toBe(10);
    });


});