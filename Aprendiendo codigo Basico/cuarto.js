/*suma = 0
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
    print("Perdio") */

//let son sentencias por seccion, variable seccion donde tiene vida ahi
suma = 0;
cont = 0;

while(cont < 5){
    let nota = parseFloat(prompt("Digite la nota "+cont));

    if (nota < 0 || nota > 5.0){
        console.log("Nota invalida");
    }else{
        suma = nota + suma;
        cont++;
    }

}
promedio = suma / cont;

if(promedio <= 0 || promedio >= 5.0){
    console.log("Nota fuera de rango");
}else if(promedio >= 3.0){
    console.log("Aprobo con un promedio de: ",promedio);
}else{
    console.log("Perdio");
}