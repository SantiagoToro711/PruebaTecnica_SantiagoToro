// Ejercicio 1 Prueba Técnica - Kevin Santiago Toro Toro

/* Dado una cadena de texto, genere una función para encontrar el número de veces */
/* que se repite cada palabra */

const WordCounter = (String) =>{
    
    // Convertimos la cadena a minúsculas 
    String = String.toLowerCase();

    let Characters = ",.()!¡?¿;";

    // Limpiamos los símbolos de la cadena
    for(let len = 0; len <= String.length; len++){
        for(char of Characters){
            String = String.replace(char, "");
        }
    }

    // creamos un array con las palabras y ordenamos
    let WordList = String.split(' '); 
    WordList.sort();

    let Words = [];
    let Repetitions = [];
    let Count = 1;

    // Hacemos el conteo de cada palabra consecutivamente
    for (let index = 0; index < WordList.length; index++){
        if(WordList[index] == WordList[index + 1]){
            Count++;
        } else {
            Words.push(WordList[index]);
            Repetitions.push(Count);
            Count = 1;
        }
    }

    for(let i = 0; i < Words.length; i++){
        console.log(`${Words[i]} - ${Repetitions[i]} ${Repetitions[i] == 1 ? 'Vez' : 'Veces'}`);
    }
}

let Text = "hEllo? HELLO!, ¿Big; world... hello Onyx Soft onYX SOft one One? onE";

WordCounter(Text);








