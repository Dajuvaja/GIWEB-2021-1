var n = 10
var num1 = 0
var num2 = 1
var num3 = 0
console.log(`La sucesión de Fibonacci para los ${n} primeros términos es: `)
for (var i = 0; i < n; i++) {
    console.log(num1)
    num3=num1+num2
    num1=num2
    num2=num3
}

