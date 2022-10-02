const valores = document.querySelectorAll('.botao')
valores.forEach((valor) => {
    valor.addEventListener('click', () => {
        if (valor.value == 'CE'){
            limpar()
        }else if(valor.value == '='){
            calcular()
        }
        else{
            entrada(valor)
        }
    }
)})


function entrada(valor){
    var res = document.getElementById('res')
    if(res.innerHTML.length <= 21){
        res.innerHTML += `${valor.value}`
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
    document.getElementById('prev').innerHTML = ''
    if (resultado){
        document.getElementById('res').innerHTML = eval(resultado)
    }else{
        document.getElementById('res').innerHTML = 'Error'
    }
}
