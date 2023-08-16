function* iterate(array){
    for(let value of array){
        yield value
    }
}

const it = iterate([`elam`, `Josue`, `Matias`,`Tyrone`])
console.log(it.next().value);console.log(it.next().value);console.log(it.next().value)