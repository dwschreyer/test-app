import GenericRepository from "./framework/GenericRepository";
import appContext from "./AppContext";
import { Environment } from "./models/enums";

// Mock the getData method here
GenericRepository.getData = jest.fn().mockImplementation(path => {

    console.log("SPY!!!", path);
    return import(path);
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
    
    appContext.init(Environment.devTest);
}

a();