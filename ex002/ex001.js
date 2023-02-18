function verificar()
{
    var anoAtual = new Date().getFullYear()
    var fAnoNasc = window.document.getElementById('inascimento')
    var res = window.document.querySelector('div#res')
    var foto = window.document.getElementById("imagem")
    var fsex = window.document.getElementsByName('radsexo')
    var idade = anoAtual - Number(fAnoNasc.value)
    var genero = ''

    if(fAnoNasc.value.length == 0 || fAnoNasc.value > anoAtual)
    {
        window.alert("Digite um ano de nascimento válido e tente novamente!")
    }else{
        if(fsex[0].checked){
            genero = 'homem'
            if(idade < 6)
            {
                foto.src = "bebe-m.jpg"
            }
            if(idade >= 6 && idade < 14)
            {
                foto.src = "crianca-m.jpg"
            }
            if(idade >= 14 && idade < 19)
            {
                foto.src = "jovem-m.jpg"
            }
            if(idade >= 19 && idade < 60)
            {
                foto.src = "adulto-m.jpg"
            }
            if(idade >=60)
            {
                foto.src = "idoso-m.jpg"
            }
        }
        else{
            genero = 'mulher'
            if(idade < 6)
            {
                foto.src = "bebe-f.jpg"
            }
            if(idade >= 6 && idade < 14)
            {
                foto.src = "crianca-f.jpg"
            }
            if(idade >= 14 && idade < 19)
            {
                foto.src = "jovem-f.jpg"
            }
            if(idade >= 19 && idade < 60)
            {
                foto.src = "adulta-f.jpg"
            }
            if(idade >=60)
            {
                foto.src = "idosa-f.jpg"
            }
        }
    }
        res.innerHTML = `Você é ${genero} e tem ${idade} anos de idade.`
}