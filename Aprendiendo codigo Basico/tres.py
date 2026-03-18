suma = 0
cont = 0
for i in range (0,3):
    num = int(input("Digite numero: "))
    suma = num + suma
    cont += 1

promedio = suma / cont

print("La media es: ", promedio)
