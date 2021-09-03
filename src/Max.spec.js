const max = require('./Max');

describe('Max', () => {
    var arr=[1,2,3,4]
    it('Maximum element is 4', () => {
        expect(max(arr)).toEqual(4);
    });
    var arr1=[]
    it('Maximum element is 78', () => {
        expect(max(arr1)).toEqual(null);
    });

})