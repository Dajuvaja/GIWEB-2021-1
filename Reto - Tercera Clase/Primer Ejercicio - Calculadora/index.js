let a;
let b;
let resultTemplate = document.getElementById('resultado')


const recogerValores= () =>{
    a = parseInt(document.getElementById('inputA').value)
    b = parseInt(document.getElementById('inputB').value) 
}
const escribirResultado= (resultado) => {
    resultTemplate.value = resultado
}

const sumar= () =>{
    recogerValores();
    escribirResultado(a+b)
}

const multiplicar = ()=> {
    recogerValores();
    escribirResultado(a*b)
}

const restar = ()=>{
    recogerValores()
    escribirResultado(a-b)
}

const dividir = ()=> {
    recogerValores()
    escribirResultado(a/b)
}

const elevar = () =>{
    recogerValores()
    escribirResultado(Math.pow(a,b))
}


