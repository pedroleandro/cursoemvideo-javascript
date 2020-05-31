let num = [5, 8, 2, 9, 3]

num.push(7) //Adiciona um novo elemento no array no final da lista

/**
 * for (let pos = 0; pos < num.length; pos++) {
    const element = num[pos];
    console.log(element)
}
 */

/**
 * for(let pos in num){
    const element = num[pos];
    console.log(element)
}
 */

console.log(num.indexOf(7)) //Procura a chave por valor no vetor
console.log(num.indexOf(4)) //Quando não encontra, retorna -1