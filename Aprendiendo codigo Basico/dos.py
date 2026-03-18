
suma = 0
cont = 0
for i in range (0, 10):
    edad = int(input("Digite la edad: "))
    suma = edad + suma
    cont += 1

promedio = suma / cont

print("El promedio de edad es: ", promedio)
