function contar()
{
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var resultado = window.document.getElementById('resultado')
    var inicioN = Number(inicio.value)
    var fimN = Number(fim.value)
    var passoN = Number(passo.value)

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
    {
        window.alert("Atenção! Faltam dados a seres digitados. Por favor, verifique e tente novamente!")
    }else if(passo.value == 0){
        window.alert("O campo [Passo] deve ter valor positivo e diferente de zero. Tente novamente com outro valor! ")
    }else{
        if(inicioN < fimN)
        {
            while(inicioN <= fimN){
            resultado.innerHTML += `${inicioN}👉`
            inicioN += passoN
            }
        }else{
            while(inicioN >= fimN){
            resultado.innerHTML += `${inicioN}👉`
            inicioN -= passoN
            }
        }

    }

    resultado.innerHTML += `🏁`

}

function limpar()
{
    resultado.innerHTML = 'Contando:'
}
