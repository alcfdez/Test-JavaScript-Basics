import { concatenateStrings, giveAllLettersInUppercase, giveOneLetter, giveTheIndexOfWord, removeWhiteSpaces, replaceFishWords, returnAString, returnHello } from "../../src/fundamentals-ex/stringExercises";

describe('Variables can be a string', () => {
    test('should say Hello', () => {
        const word = "Hello";
        const result = "word";
        expect(returnHello()).toBe('Hello');
    });

    test('should return Hello World', () => {
        /* Modifica la function returnAString del archivo stringExercises */
        const result = returnAString();
        expect(result).toBe('Hello World');
    });

    test('should be return I Love JS', () => {
        /* Añade las líneas necesarias al test / Modifica la function concatenateStrings */
    
        const result = concatenateStrings();
        expect(result).toBe('I Love JS');
    });

    test('should return letter g', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveOneLetter para que devuelva la letra g de la variable configurada */
        const result = giveOneLetter()
        expect(result).toBe('g');
    });

    test('should return -1', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveTheIndexOfWord */
        const result = giveTheIndexOfWord()
        expect(result).toEqual('-1');
    });

    test('should return "Give a Man a Pussy Cat" ', () => {
        /* Añade las líneas necesarias al test / Modifica la function replaceFishWords */
     
        const result = replaceFishWords()
        expect(result).toBe('Give a Man a Pussy Cat');
    });

    test('should return "RIDE HIM, COWBOY!"', () => {
        /* Añade las líneas necesarias al test / Modifica la function giveAllLettersInUppercase */
        const result  = giveAllLettersInUppercase()
        expect(result).toBe('RIDE HIM, COWBOY!');
    });

    test('should return "Hands Down"', () => {
        /* Añade las líneas necesarias al test y modifica la function removeWhiteSpace */
        const result= removeWhiteSpaces ()
        expect(result).toBe('Hands Down');
    });
});