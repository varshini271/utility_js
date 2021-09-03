const filter = require('./Filter');

describe('Filter', () => {
    var arr1=[]
    var arr2=[1,2,3]
    it('filter([], x => true) is []', () => {
        expect(filter(arr1,x=>true)).toEqual([]);
    });
    it('filter([1,2,3], x => true) is [1,2,3]', () => {
        expect(filter(arr2,x=>true)).toEqual([1,2,3]);
    });
    it('filter([1,2,3], x => false) is []', () => {
        expect(filter(arr2,x=>false)).toEqual([]);
    });
    it('filter([1,2,3], x => x>1) is [2,3]', () => {
        expect(filter(arr2,x=>x>1)).toEqual([2,3]);
    });
    it('filter([a,B,c,D], filterUpperCase) is [B,D] ', () => {
        expect(filter(['a','B','c','D'],x=>x==x.toUpperCase())).toEqual(['B','D']);
    });
})