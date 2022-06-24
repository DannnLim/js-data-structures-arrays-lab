// Write your solution here!
let append = ["Milo", "Otis", "Garfield"]
function members(append) {
    append.push('Odie')
    console.log(append)
}

console.log(members(append))

let prepend = ["Milo", "Otis", "Garfield"]
function member(prepend) {
    prepend.unshift('Odie')
    console.log(prepend)
}
console.log(member(prepend))

let removeLast = ["Milo", "Otis", "Garfield"]
function memberRl(removeLast) {
    removeLast = removeLast.pop()
    console.log(removeLast.pop());

}
console.log(removeLast.pop())
console.log(removeLast)

let removeFirst = ["Milo", "Otis", "Garfield"]
function memberRf(removeFirst) {
    console.log(removeFirst.splice(0, 1))
}
console.log(removeFirst.splice(0, 1))
console.log(removeFirst)