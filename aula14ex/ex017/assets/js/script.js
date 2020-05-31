function criarTabuada(){
    let numero = window.document.getElementById(`txtnumero`)
    let tabuada = window.document.getElementById(`tabuada`)

    if(numero.value == ''){
        window.alert("[ERROR 404!] Verifique os dados e tente novamente!")
    }else{
        let n = Number(numero.value)
        let c = 1
        tabuada.innerHTML = ``
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `item${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}