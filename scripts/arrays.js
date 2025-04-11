//ARRAYS

//const array =['HTML','CSS','JS', true, 357, [3,4,8],{nombre: 'Cesar', edad: 34}]

// const array = new Array(5)

// array[0] = 'HTML'
// array[1] = 'CSS'
// array[2] = 'JS'


// console.log(array)

// const arrayNumeros =[3,5,8,2,7,9]

// console.log(arrayNumeros.length)
// arrayNumeros[arrayNumeros.length] = 100
// console.log(arrayNumeros)

// arrayNumeros[arrayNumeros.length +3] = 105
// console.log(arrayNumeros)


let frutas = ['Manzana', 'Pera', 'Banana', 'Naranja', 'Pera', 'Banana', 'Manzana', 'Pomelo']

//FILTER

let filter = frutas.filter((param) => {
    return param == 'Manzana'
})

// console.log(filter)

// let filter2 = frutas.filter(param => param =='Banana')

// console.log(filter2)

const temas = [
    { tema: 'HTML', materia: 'Mobile' },
    { tema: 'CSS', materia: 'Mobile' },
    { tema: 'IONIC', materia: 'Mobile' },
    { tema: 'ANGULAR', materia: 'Mobile' },
    { tema: 'DOCKER', materia: 'TIC' },
    { tema: 'LINUX', materia: 'TIC' },
]
//console.log(temas)

let temasFiltrados = temas.filter(param => param.materia == "TIC")

//console.log(temasFiltrados)


//MAP

let arrayManzanas = ['Manzana', 'Manzana', 'Manzana', 'Manzana', 'Manzana', 'Manzana', 'Manzana']

let arrayNaranjas = arrayManzanas.map(param => {
    if (param == 'Manzana') {
        return 'Naranja'
    }
}
)

// console.log(arrayManzanas)
// console.log(arrayNaranjas)

//FILL

let resultadoFill = arrayManzanas.fill('Naranja', 2, 5)

//console.log(resultadoFill)

//FIND

let resultadoFind = frutas.find(param => param == 'Pera')
//console.log(resultadoFind)
let resultadoFind2 = frutas.find(param => param == 'Frutilla')
//console.log(resultadoFind2)

//FINDINDEX

let resutladoFindIndex = frutas.findIndex(param => param == 'Naranja')
//console.log(resutladoFindIndex)

let resutladoFindIndex2 = frutas.findIndex(param => param == 'Frutilla')
//console.log('ResultadoFindIndex', resutladoFindIndex2)

//SOME
let resutladoSome = frutas.some(param => param == 'Ciruela')
//console.log(resutladoSome)

//EVERY

let resultadoEvery = arrayNaranjas.every(param=>param=='Naranja')
// console.log(arrayManzanas)
// console.log(resultadoEvery)

//POP

// console.log(frutas)
// frutas.pop()
// console.log(frutas)

//SHIFT

console.log(frutas)
let resultadoShift = frutas.shift()
console.log(frutas)