var num1 = 25
var cantidad = 0;
var respuesta = 0;
var boolean = true;

while(boolean){
    respuesta += num1
    if(respuesta <= 100){
        boolean = true
        cantidad++
    } else{
        boolean = false
    }

}
if(cantidad == 1){
    console.log(`El número ${num1} se puede sumar a sí mismo ${cantidad} vez antes de llegar a 100`)
} else{
    console.log(`El número ${num1} se puede sumar a sí mismo ${cantidad} veces antes de llegar a 100`)
}