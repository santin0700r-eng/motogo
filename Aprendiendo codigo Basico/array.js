nf = 4
nc = 4
let num = [];
for(f = 0; f<nf; f++){
    num.push([])
    for(c = 0; c<nc; c++){
        num[f].push (Math.floor(Math.random()*11))
    }
}
console.log(num)