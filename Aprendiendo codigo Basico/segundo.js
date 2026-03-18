/*suma = 0
cont = 0
for i in range (0, 10):
    edad = int(input("Digite la edad: "))
    suma = edad + suma
    cont += 1

promedio = suma / cont

print("El promedio de edad es: ", promedio)*/


suma = 0;

for(i=0; i<10; i++){
    let entradaEdad = parseFloat(prompt("Digite edad "+(i+1)));
    let edad = (entradaEdad);
    suma = edad + suma;
}
promedio = suma / i;

console.log(promedio);