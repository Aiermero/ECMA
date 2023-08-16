const user = {
    username: `Elam`,
    age: 43,
    country: `Ec`
}
const {username, ...value} = user
console.log(username)
console.log(value)