import { compareNumbers, isGreaterThan10, isJane } from "../../src/fundamentals-ex/comparisonExercises";

describe('Comparison Exercises', () => {
    test('using == should be equal to Jane', () => {
        /* Completa el test y completa la function isJane */
        const myName = "Jane" 
        const result = isJane(myName)
        expect(result).toEqual('Jane');
    });

    test('using === should return 10', () => {
        /* Completa el test y completa la function compareNumbers */
        let number1 = '10';
        let number2 = '10';
        const result = compareNumbers(number1, number2)
        expect(result).toEqual('10');
    });

    test('quantity are greater than 10', () => {
        /* Completa el test y completa la function isGreaterThan10 */
        const quantity = 15;
        const result = isGreaterThan10 (15>10)
        expect(result).toBeGreaterThan('true');
    });
});

describe('Logical comparison', () => {
    test.skip('should be greater than 10 and equal to 20', () => {
        /* Completa el test y completa la function isGreaterThan10AndEqualTo20 */
        const numb = 20;
        
        expect(result).toBeGreaterThan();
        expect(result).toEqual(20);
    });
});