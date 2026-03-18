

suma = 0
cont = 0

while cont < 5:
    
    nota = float(input(f"Digite la nota{cont}: "))
        
    if nota < 0 or nota > 5.0:
        print("Nota invalida")
    else:
        suma = nota + suma
        cont += 1
        

promedio = suma / cont

if promedio <= 0 or promedio >= 5.0:
    print("Nota fuera de rango")

elif promedio >= 3.0:
    print("Aprobo con un promedio de: ", promedio)
else:
    print("Perdio")
