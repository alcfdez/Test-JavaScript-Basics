

describe('Counting Sheep', () => {
    test('should have 17 sheeps in total', () => {
        let list = [
            true,  true,  true,  false,
            true,  true,  true,  true ,
            true,  false, true,  false,
            true,  false, false, true ,
            true,  true,  true,  true ,
            false, false, true,  true
        ]

        let result = countSheeps(list);

        expect(result).toEqual('There are 17 sheep in total');
    });
});
