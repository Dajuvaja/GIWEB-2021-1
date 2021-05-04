
let arreglo = [1, 2, 4, 7, 19, 22, 36, 44, 55, 524]
const elevarCuadrado = (array) => {
    array.forEach((numero, index) => {
        array[index]=numero**2   
    })
 
}

const filtrarPares = (array) => {
    return array.filter((numero)=>{
        return numero%2 === 0 
    })
}

const dividirEntreDos = (array) =>{
    array.forEach((numero, index) => {
        array[index]=numero/2  
    })
}

const filtrarMultiploTres = (array) => {
    return array.filter((numero)=>{
        return numero%3 === 0 
    })
}

const respuesta = (array) =>{
    elevarCuadrado(array)
    array = filtrarPares(array)
    dividirEntreDos(array)
    array = filtrarMultiploTres(array)
    return array.some((numero)=>{
        return numero
    })
}

console.log(respuesta(arreglo))

