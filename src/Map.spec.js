const map = require('./Map');

describe('Map', () => {
    var arr1=[]
    var arr2=[1,2,3]
    it('Cube is [1,8,27]', () => {
        expect(map(arr2,'cube')).toEqual([1,8,27]);
    });
    it('Cube is []', () => {
        expect(map(arr1,'cube')).toEqual([]);
    });
    it('Identity is [1,2,3]', () => {
        expect(map(arr2,'identity')).toEqual([1,2,3]);
    });
    it('Identity is []', () => {
        expect(map(arr1,'identity')).toEqual([]);
    });

})