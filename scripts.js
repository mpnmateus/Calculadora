const num1 = window.document.getElementById('num1');
num1.addEventListener('click', atribuir1);
const res = window.document.getElementById('res');

function atribuir1(){
    const num1 = 1;
    res.innerHTML = `${num1}`;   
}