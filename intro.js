let miNombre = "Micaela Victoria"
let miApellido = "Casas Usai"
let miEdad = 27
let miMascota = "Lola"
let edadMascota = 2

console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)

var nombreCompleto = (miNombre + miApellido)
console.log(nombreCompleto)

const textoPresentacion = ("Mis nombres son " + miNombre + " y mis apellidos, " + miApellido + ". Tengo " + miEdad + " años y tengo una perra que se llama " + miMascota + ", ella tiene " + edadMascota + " años.")

console.log(textoPresentacion)



const sumaEdades = miEdad + edadMascota
const restaEdades = miEdad - edadMascota
const productoEdades = miEdad * edadMascota
const divisionEdades = miEdad / edadMascota

console.log("Resultado suma:", sumaEdades)
console.log("Resultado resta:", restaEdades)
console.log("Resultado multiplicacion:", productoEdades)
console.log("Resultado de la division:", divisionEdades)


const textoPresentacion2 = ("Mi nombre es " + miNombre + " y mis apellidos, " + miApellido + ". Tengo " + miEdad + " años mi perra se llama " + miMascota + ". Ya tiene " + edadMascota +  " años! Si sumamos su edad y la mia, nos da " + sumaEdades + ", en cambio si la restamos, nos da: " + restaEdades + ". El producto entre ambos números nos da " + productoEdades + " y la división, " + divisionEdades)

console.log(textoPresentacion2)