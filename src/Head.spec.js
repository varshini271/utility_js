const head = require('./Head');

describe('Head', () => {
    var arr1=[]
    var arr2=[1,2,3]
    it('Head is null', () => {
        expect(head(arr1)).toEqual(null);
    });

    it('Head is 1', () => {
        expect(head(arr2)).toEqual(1);
    });

})