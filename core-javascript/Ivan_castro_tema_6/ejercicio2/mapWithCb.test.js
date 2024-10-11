/*
TEST PARA MOCKUPS
*/


const mapWithCb = require('./mapWithCb.js'); 

describe('2. mapWithCb', () => {
    it('throws an error if first argument is not an array', () => {
        const callback = jest.fn();
        expect(() => mapWithCb("notAnArray", callback)).toThrow(Error);  
    });
    
    it('throws an error if second argument is not a function', () => {
        const callback = jest.fn();
        expect(() => mapWithCb([1,2,3], "string")).toThrow(Error);  
    });
    
    it('calls the given function at least once', () => {
        const callback = jest.fn();
        const array = [1,2,3];
        mapWithCb(array, callback);
        console.log(callback.mock.calls);  
        expect(callback).toHaveBeenCalled();
    });
  
    it('calls the given function a number of times equal to the length of the given array', () => {
        const callback = jest.fn();
        const array = [1,2,3];
        mapWithCb(array, callback);
        console.log(callback.mock.calls);  
        expect(callback).toHaveBeenCalledTimes(array.length);
    });
  
    it('calls the given function with any one item from the given array', () => {
        const callback = jest.fn();
        const array = [1,2,3];
        mapWithCb(array, callback);
        console.log(callback.mock.calls); 
        expect(callback).toHaveBeenCalledWith(array[0]);
    });
  
    it('calls the given function a second time with the second item in the given array', () => {
        const callback = jest.fn();
        const array = [1,2,3];
        mapWithCb(array, callback);
        console.log(callback.mock.calls);  
        expect(callback).toHaveBeenCalledWith(array[1]);
    });
  
    it('calls the given function a final time with the final item in the given array', () => {
        const callback = jest.fn();
        const array = [1,2,3];
        mapWithCb(array, callback);
        console.log(callback.mock.calls);  
        expect(callback).toHaveBeenCalledWith(array[array.length - 1]);
    });
});