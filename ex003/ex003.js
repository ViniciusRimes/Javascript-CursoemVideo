function contar()
{
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var resultado = window.document.getElementById('resultado')
    var inicioN = Number(inicio.value)
    var fimN = Number(fim.value)
    var passoN = Number(passo.value)

    if(inicioN <= fimN){
        for(inicioN; inicioN <=  fimN; inicioN += passoN)
        {
            resultado.innerHTML += `${inicioN}👉`
        }
    }
    
    if(fimN > inicioN){
        for(fimN; fimN >= inicioN; fimN -= passoN)
        { 
            resultado.innerHTML += `${fimN}👉`
        }
    }
}
