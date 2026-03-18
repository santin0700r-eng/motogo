
numReal = 56
numLista = []
v = true
while(v){
    let num = parseInt (prompt("Digite numero a adivinar: "))
    numLista.push(num);
    if(num > numReal)
        console.log("El numero a adivinar es menor")
    else if(num < numReal)
        console.log("El numero a adivinar es mayor")
    else{
        console.log("Numero correcto intentos realizados: ", (numLista.length-1))
        v = false;
        console.log("Numeros digitados: ", numLista);
    }
}

/*Ingrese numero si es mayor o menor y despues se mostrara la lista de numeros colocados y cuantos intentos se hizo*/