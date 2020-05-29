var idade = 27

console.log(`Você tem ${idade} anos de idade, então...`)

if(idade < 16){
    console.log(`Você não pode votar!`)
}else{
    if(idade >= 16 && idade < 18 || idade > 65){
        console.log(`Você pode votar, mas é opcional!`)
    }else{
        console.log(`Você pode votar, e é obrigatório!`)
    }
}