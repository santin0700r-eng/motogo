/*suma = 0
cont = 0
for i in range (0,3):
    num = int(input("Digite numero: "))
    suma = num + suma
    cont += 1

promedio = suma / cont

print("La media es: ", promedio)*/


suma = 0;

for(i = 0; i<3; i++){
    let num = parseInt(prompt("Digite numero "+(i+1)));
    suma = num + suma;

}
promedio = suma / i;

console.log("La media es: ",promedio);


