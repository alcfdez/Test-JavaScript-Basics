export function isJane(myName)
{
    /* La function debe devolver Jane, obligatorio el uso del comparador == */
    const name = 'Jane';
    if (name == myName){
    return "Jane"
    }

}

export function compareNumbers()
{
    /* La function debe devolver 10, obligatorio el uso del comparador === */

    let number1 = '10';
    let number2 = '10';
    if (number1 === number2){
    return '10'
    }
    
}

export function isGreaterThan10(number)
{
   if (number > 10){
    return number;
   }

}

export function isGreaterThan10AndEqualTo20(numb)
{  
    if (numb <10 && numb == 20){
        return numb;
    }
    return false;
}