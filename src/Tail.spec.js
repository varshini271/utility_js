const tail = require('./Tail');

describe('Tail', () => {
    var arr1=[]
    var arr2=[1,2,3]
    it('Tail is [2,3]', () => {
        expect(tail(arr2)).toEqual([2,3]);
    });

    it('Tail is []', () => {
        expect(tail(arr1)).toEqual([]);
    });
})