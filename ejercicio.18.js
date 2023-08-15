/*
    Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
    pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/


const counterVowelsConsonants = (text="") => {
    if (!text) return console.warn("Debe ingresar un texto");
    if (typeof text !== 'string') return console.error("Error ,el valor debe ser una cadena de texto");

    let vowels = 0;
    let consonants = 0;

    textLower = text.toLocaleLowerCase();

    for (let letter of textLower){
        if (/[aeiouáéíúó]/.test(letter)){
            vowels+=1;
        }

        if (/[bcdfghjklmnñpqrstvwz]/.test(letter)){
            consonants+=1;
        }
    }
    return console.info(`Texto: ${text} Vocales: ${vowels}, Consonantes: ${consonants}`);
    // return console.info({
    //     text,
    //     vowels,
    //     consonants

    // })
}


console.info("EJERCICIO 18");
counterVowelsConsonants();
counterVowelsConsonants(100);
counterVowelsConsonants("Hola Mundo");