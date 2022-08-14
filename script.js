function entrada(n){
    var res = document.getElementById('res')
    if(res.innerHTML.length <= 21){
        res.innerHTML += `${n}`
    }
    var resprev = document.getElementById('res').innerHTML
    if (resprev.length >= 3){
        document.getElementById('prev').innerHTML = eval(resprev)
    }
}

function limpar(){
    res.innerHTML = ''
    document.getElementById('prev').innerHTML = ''
}

function calcular(){
    var resultado = document.getElementById('res').innerHTML
    document.getElementById('prev').innerHTML = '   '
    if (resultado){
        document.getElementById('res').innerHTML = eval(resultado)
    }else{
        document.getElementById('res').innerHTML = 'Error'
    }
}

function color(cor){
    var backg = document.getElementById('principal')
    backg.style.backgroundImage = `${cor}`
}
