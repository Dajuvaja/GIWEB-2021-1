const personas = {
	1: {
		nombre: 'Fulanita',
		edad: 21,
		habilidades: ['Programación', 'Videojuegos', 'Deportes'],
		familia: [4, 6, 88],
		},
	2: {
		nombre: 'Pepito',
		edad: 25,
		habilidades: ['Juegos de mesa', 'Deportes'],
		familia: [4, 5],
	},
	88: {
		nombre: 'Juana',
		edad: 15,
		habilidades: ['Dibujo', 'Juegos de mesa', 'Lectura'],
		familia: [1],
	},
	4: {
		nombre: 'David',
		edad: 44,
		habilidades: ['Lectura'],
		familia: [1, 2],
	},
	5: {
		nombre: 'Hurtado',
		edad: 40,
		habilidades: ['Programación', 'Videojuegos'],
		familia: [2, 6],
	},
	6: {
		nombre: 'Lauren',
		edad: 32,
		habilidades: ['Diseño', 'Deportes'],
		familia: [1, 5],
	},
	
};


//SOLUCIÓN - PRIMER PUNTO

function mayorEdad(object){
	let edadMax = 0;
	let arr = []
	let arrNombres = []	
	let mayor = ''
	for (let i in object) {
		// Busca la mayor edad haciendo comparaciones
		if(object[i].edad > edadMax){
			edadMax = object[i].edad;			
		}	
		//Cuando tenga al mayor, lo busca dentro del objeto de objetos y busca los familiares (no los nombres, sino el index), además del nombre de la persona con mayor edad
		if(object[i].edad == edadMax){
			mayor=object[i].nombre
			arr=object[i].familia
		}	
	}
	//Almacena en un arreglo los nombres de los indices previamente encontrados
	for (let j = 0; j < arr.length; j++) {
		arrNombres[j] = object[arr[j]].nombre
	}
//Imprime esos nombres.	
console.log('1. Punto')	
console.log(`Los nombres de los familiares de la persona con mayor edad, que es ${mayor}, con ${edadMax} años, son: ${arrNombres.join(', ')} `)

}

mayorEdad(personas);



//SOLUCIÓN - SEGUNDO PUNTO
function mayorCantidadFamiliares(object){
	let mayorCantidad = 0
	let nombre = ''
	let habilidades = []
	for (let i in object) {
		//Busca la mayor cantidad de familiares
		if(object[i].familia.length> mayorCantidad){
			mayorCantidad = object[i].familia.length
		}
		//Cuando tenga la mayor cantidad de familiares, busca el nombre de la persona que tiene esa mayor cantidad, y además de eso sus habilidades, que almacena en un arreglo.
		if(object[i].familia.length == mayorCantidad){
			nombre = object[i].nombre
			habilidades= object[i].habilidades
		}		
	}
	//Imprime los datos almacenados
	console.log('\n2. Punto')	
	console.log(`La persona con mayor cantidad de familiares es ${nombre} con ${mayorCantidad} familiares y sus habilidades son ${habilidades.join(', ')}`)
}

mayorCantidadFamiliares(personas)


//SOLUCIÓN - TERCER PUNTO 
class Persona{	
	//Constructor de la clase
	constructor(nombre, edad, habilidades, familia){
		this.nombre = nombre
		this.edad = edad
		this.habilidades = habilidades
		this.familia = familia
	}	
	toString(){
		return `El nombre es: ${this.nombre}, la edad es: ${this.edad}, sus habilidades son: ${this.habilidades.join(', ')} y sus familiares son: ${this.familia.join(', ')}`
	}

}
console.log('\n3. Punto')
//Creación de los objetos
const persona1 = new Persona("Daniel", 19, ['Dormir', 'Comer'], [2,8])
const persona2 = new Persona("Johana", 22, ['Correr', 'Dibujar'], [4,9])

//Impresión de datos usando el método toString()
console.log(persona1.toString())
console.log(persona2.toString())


