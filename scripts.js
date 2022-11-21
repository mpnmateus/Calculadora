var numero = window.document.getElementById('numero')
var num = Number(numero.value)
var operacao = window.document.getElementById('operacao')


function somar (){
    const res = num + operacao + num
    
       resultado.innerHTML = res

}