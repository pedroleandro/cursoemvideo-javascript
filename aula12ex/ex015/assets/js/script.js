function verificar(){
    var data = new Date()
    
    var ano_atual = data.getFullYear()
    var ano_nasc = window.document.getElementById('txt_ano_nasc')

    var res = window.document.getElementById('res')

    if(ano_nasc.value == '' || ano_nasc.value > ano_atual){
        window.alert("[ERROR 404!] Verifique os dados e tente novamente!")
        window.document.location.reload(true) //recarrega a página
    }else{
        //window.alert("[OK] 200!")
        sexo = window.document.getElementsByName('radsex')
        var idade = ano_atual - Number(ano_nasc.value)
        //res.innerHTML = `A idade é ${idade}`

        var genero = ''

        var photo = window.document.createElement('img')
        photo.setAttribute('id', 'photo')

        if(sexo[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 10){
                //CRIANÇA
                photo.setAttribute('src', '../public/images/foto-bebe-m.png')
            }else if(idade < 21){
                //JOVEM
                photo.setAttribute('src', '../public/images/foto-jovem-m.png')
            }else if(idade < 50){
                //ADULTO
                photo.setAttribute('src', '../public/images/foto-adulto-m.png')
            }else{
                //IDOSO
                photo.setAttribute('src', '../public/images/foto-idoso-m.png')
            }

        }else if(sexo[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 10){
                //CRIANÇA
                photo.setAttribute('src', '../public/images/foto-bebe-f.png')
            }else if(idade < 21){
                //JOVEM
                photo.setAttribute('src', '../public/images/foto-jovem-f.png')
            }else if(idade < 50){
                //ADULTO
                photo.setAttribute('src', '../public/images/foto-adulto-f.png')
            }else{
                //IDOSO
                photo.setAttribute('src', '../public/images/foto-idoso-f.png')
            }

        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos de idade!`
        res.appendChild(photo)
    }

}

