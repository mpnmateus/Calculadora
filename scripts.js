

function insert(num){
    var numero = window.document.getElementById('resultado').innerHTML;
    window.document.getElementById('resultado').innerHTML = numero + num
}

function clean(){
    window.document.getElementById('resultado').innerHTML = "";
}
    
function apagar(){
    var resultado = window.document.getElementById('resultado').innerHTML;
    window.document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);

}

function calcular(){
    var resultado = window.document.getElementById('resultado').innerHTML;
    if(resultado) {
        window.document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        window.document.getElementById('resultado').innerHTML = "";
    }
}
