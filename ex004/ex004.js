function tabuada()
{
    var i
    var multiplicador = '10'
    let n = window.document.getElementById('inum')
    let tabuada = window.document.getElementById('itabuada')

    if(n.value.length == 0)
    {
        window.alert("Por favor, digite um número!")
    }else{
        let num = Number(n.value)
        tabuada.innerHTML = ''
        for(i = 0; i <= 10; i++)
        {
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${num * i}`
            item.value = `tab${i}`
            tabuada.appendChild(item)
        }
    }

}

