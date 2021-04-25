var a;
var b;
var resultTemplate = document.getElementById('resultado')


function recogerValores(){
    a = parseInt(document.getElementById('inputA').value)
    b = parseInt(document.getElementById('inputB').value) 
}
function escribirResultado(resultado) {
    resultTemplate.value = resultado
}

let sumar= () =>{
    recogerValores();
    escribirResultado(a+b)
}

let multiplicar = ()=> {
    recogerValores();
    escribirResultado(a*b)
}

let restar = ()=>{
    recogerValores()
    escribirResultado(a-b)
}

let dividir = ()=> {
    recogerValores()
    escribirResultado(a/b)
}

let elevar = () =>{
    recogerValores()
    escribirResultado(Math.pow(a,b))
}

function hacerAlgo(x, y){
    return x===y
}
