// Ejercicio 2 Prueba Técnica - Kevin Santiago Toro Toro

/* Dada una cadena de longitud N, compuesta únicamente de signos de agrupación y
texto intermedio ( "()", "{}", "[]" ), genere una función o algoritmo que determine si
dicha cadena está estructurada correctamente, es decir, que cada carácter de
apertura tenga su carácter de cerrado correspondiente. */

// (a)

const CheckParentheses = (String) => {

    let Stack = [];

    for(let i = 0; i < String.length; i++){
        if(String[i] === '[' || String[i] === '{' || String[i] === '('){
            Stack.push(String[i]);
        } else if(Stack.length > 0 && String[i] !== ']' && String[i] !== '}' && String[i] !== ')') {
            continue;     
        } else if(String.length <= 0){ 
            return false;
        } else {
            LastPar = Stack[Stack.length - 1];

            if(String[i] === ']' && LastPar === '[') {
                Stack.pop();
            } else if(String[i] === '}' && LastPar === '{') {
                Stack.pop();
            } else if(String[i] === ')' && LastPar === '(') {
                Stack.pop();
            }
        }
    }

    if(Stack.length > 0){
        return false;
    } else {
        return true
    }
}

let Test = '[()()(){[hola][onyx]}{([juan]{})}]';
console.log(CheckParentheses(Test));

let Test2 = '[(santiago)onyx{(soft){software}}]';
console.log(CheckParentheses(Test2))