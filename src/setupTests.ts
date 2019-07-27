import GenericRepository from "./framework/GenericRepository";
import appContext from "./AppContext";

// Import all the json files for testing here.
import testData from "../public/data/testData.json";

// Mock the getData method here
GenericRepository.getData = jest.fn().mockImplementation(path => {
    switch(path)
    {
        case appContext.Urls.testData:
            return testData;

        default:
            return null;
    }
});

export const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
};

(global as any).localStorage = localStorageMock;

function a() {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    
}

a();