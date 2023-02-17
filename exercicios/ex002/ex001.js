function verificar()
{
    var anoAtual = new Date().getFullYear()
    var fAnoNasc = window.document.getElementById('inascimento')
    var res = window.document.querySelector('div#res')

    if(fAnoNasc.value.length == 0 || fAnoNasc.value > anoAtual)
    {
        window.alert("Digite um ano de nascimento válido e tente novamente!")
    }else{
        var fsex = window.document.getElementsByName('radsexo')
        var idade = anoAtual - Number(fAnoNasc.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'homem'
        }
        else{
            genero = 'mulher'
        }
        res.innerHTML = `Você é ${genero} e tem ${idade} anos de idade.`
    }
}