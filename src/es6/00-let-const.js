var lastName = 'David'
lastName = 'Elam'
console.log(lastName)

let fruit = 'Apple'
fruit = 'kiwi'
console.log(fruit)

const animal = 'Dog'
animal = 'Cat'
console.log(animal)

const fruits = () => {
    if(true){
        var fruit1 = 'Apple'
        let fruit2 = 'Kiwi'
        const fruit3 = 'Banana'
    }
    console.log(fruit1)
    console.log(fruit2) /*Sende error*/
    console.log(fruit3) /*Sende error*/
}
/* 'var' can make a global varible. Let and const are block scope*/