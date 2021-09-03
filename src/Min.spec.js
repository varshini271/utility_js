const min = require('./Min');

describe('Min', () => {
    var arr=[1,2,3,4]
    it('Minimum element is 1', () => {
        expect(min(arr)).toEqual(1);
    });
    var arr1=[]
    it('Maximum element is 22', () => {
        expect(min(arr1)).toEqual(null);
    });

})