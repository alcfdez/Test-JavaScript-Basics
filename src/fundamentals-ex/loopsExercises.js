export function countdown()
{
    /* Completa */
    let count = 10;
    while (count > 0) {
        count -- ;
    }
    if (count == 0 ) {
        return "GO";   
    }

}

export function createNumberList(items)
{
    let arrNumbers = [];
    let count = 1;
    do {
        arrNumbers.push(count);
        count ++;
    } while (count <= items);
    return arrNumbers;
}

export function makePizza()
{
    /* Completa la function utilizando el bucle for*/
    let pizza = {};
    let ingredients = ['masa','tomate', 'mozzarella','cheddar','gorgonzola','parmesano'];
    for (let count = 0; count < ingredients.length; count++) {
        pizza [`ingredients${count + 1}`] = ingredientes [count];
        
    }
    return pizza;

}

export function addSpanishInternationalPrefixes()
{
    /* Añade el prefijo internacional de españa a los números de teléfonos del array (+34-). Utiliza el bucle foreach */
    let phoneNumberList1 = ['054060719','029830776','159949736','663170151','513407584'];
    let phoneNumberList2 = [];
    phoneNumberList1.forEach(phoneNumber =>{
        const count = phoneNumberList2.push(`+34-${phoneNumber}`);
    });
        return phoneNumberList1;
    }

