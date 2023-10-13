const func = (arg) => { //Exercitiu 1
    const i = 2
    return i
}
const func1 = (arg) => {
    const i = 0
    return i + 1
}

const func2 = (arg) => {
    const i = 0
    return i * 2
}

const func3 = (arg) => {
    const i = 0
    return i -1
}


const closureVariable = func()
const closureVariable1 = func1()
const closureVariable2 = func2()
const closureVariable3 = func3()

console.log(closureVariable)
console.log(closureVariable1)
console.log(closureVariable2)
console.log(closureVariable3)



(function (arg1){
    console.log(arg1)
}('argument'))
