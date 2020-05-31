function contar(){
    let txtinicio = window.document.getElementById(`txtinicio`)
    let txtfim = window.document.getElementById(`txtfim`)
    let txtpasso = window.document.getElementById(`txtpasso`)
    let res = window.document.getElementById(`res`)

    

    if(txtinicio.value == '' || txtfim.value == '' || txtpasso.value == ''){
        //window.alert("[ERROR 404!] Verifique os dados e tente novamente!")
        res.innerHTML = `Impossível contar...`
    }else{
        res.innerHTML = `Contando: <br>`
        let i = Number(txtinicio.value)
        let f = Number(txtfim.value)
        let p = Number(txtpasso.value)

        if(p <= 0){
            window.alert("[ERROR 404!] Passo inválido! Considerando passo igual a 1")
            p = 1
        }

        if(i < f){
            //Contagem crescente
            for (let c = i; c < f; c+=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{
            //Contagem decrescente
            for (let c = i; c >= f; c-=p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }

        res.innerHTML += ` \u{1F3C1}`

    }
}