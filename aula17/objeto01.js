let amigo = {
    nome: `Airton`,
    sexo: `M`,
    peso: 85.4,
    engordar(p){
        console.log(`Engordou!`)
        this.peso += p
    }
}

console.log(`O meu amigo ${amigo.nome} pesa ${amigo.peso}`)
amigo.engordar(2)
console.log(`O meu amigo ${amigo.nome} engordou ${amigo.peso}`)