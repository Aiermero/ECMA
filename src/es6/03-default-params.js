function newUser(name,age,country){
    var name = name || `Elam`
    var age = age || 34
    var country = country || `Ec`
    console.log(name,age,country)
}
newUser()
newUser(`Pepe`, 20, `Co`)

//ECMAscript6
function newAdmin(name = `Agustin`, age = 43, country = `Pa`){
    console.log(name,age,country)
}

newAdmin()
newAdmin(`Pepe`, 54, `Cl`)