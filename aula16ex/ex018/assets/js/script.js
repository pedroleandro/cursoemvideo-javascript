let numero = window.document.getElementById(`numerotxt`)
let lista = window.document.querySelector(`select#lista`)
let res = window.document.getElementById(`res`)

let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
}

function adicionar(){
    if(isNumero(numero.value) && !inLista(numero.value, valores)){
        valores.push(Number.parseInt(numero.value))
        let item = window.document.createElement(`option`)
        item.text = `Valor ${numero.value} adicionado!`
        lista.appendChild(item)
        res.innerHTML = ``
        console.log(valores)
    }else{
        window.alert(`Valor inválido ou já adicionado na lista!`)
    }

    numero.value = ``
    numero.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert(`Adicione valores antes de finalizar!`)
    }else{
        valores.sort(function(a, b) {
            return a - b;
        })

        let total = valores.length

        let menor = valores[0]
        let maior = valores[valores.length-1]

        let soma = 0
        let media = 0

        for(let pos in valores){
            soma+=valores[pos]
        }

        media = soma/total

        res.innerHTML = ``
        res.innerHTML = `<p>No Total, temos ${total} números cadastrados!</p>`
        res.innerHTML += `<p>O Menor número é ${menor}!</p>`
        res.innerHTML += `<p>O Maior número é ${maior}!</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}!</p>`
        res.innerHTML += `<p>A média de todos os valores é ${media}!</p>`

    }
}