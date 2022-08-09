function entrada(n){
    var res = document.getElementById('res')
    res.innerHTML += `${n}`
}

function limpar(){
    res.innerHTML = ''
}

function calcular(){
    var resultado = document.getElementById('res').innerHTML
    if (resultado){
        document.getElementById('res').innerHTML = eval(resultado)
    }
}