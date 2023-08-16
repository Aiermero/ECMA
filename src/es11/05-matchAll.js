const regex = /\b(Apple)+\b/g

const fruit = `Apple, pepo, vfvfd, asdfc, fvb`

for(const match of fruit.matchAll(regex)){
    console.log(match)
}