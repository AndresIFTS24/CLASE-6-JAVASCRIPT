//DECLARACION DE VARIABLES
//VAR

var miPrimerVar;

var miVar = 'Texto de miVar'
console.log(miVar)

console.log(typeof miVar)
console.log(typeof miVar)

var miVar = 'Mi nuevo miVar'
console.log(miVar)

var miVar = 832
console.log(miVar) //muestra por pantalla
console.log(typeof miVar) //tipo de variable


var miVar = 'Mi otro nuevo miVar'
console.log(miVar)



//function imprimirVar(){
  //  var miVar = 1
  //  console.log('Imprimiendo miVar desde fuera de la funcion el valor de miVar es: ' miVar)
     //var miVar2=2
 
     //console.log('Imprimiendo miVar desde fuera de la funcion el valor de miVar es: ' miVar2)
     
 //}
 
 //imprimirVar()
 //console.log('Imprimiendo miVar desde fuera de la funcion el valor de miVar es: ' miVar)
 
 
 //console.log(1+1);
 //console.log('1'+'1');
 //console.log('1'+ 1);
 
 
 //let milet = 1
 
 //function imprimirlet(){
   // console.log('Imprimiendo miVar desde fuera de la funcion el valor de miVar es: ', milet)
    //let milet2 = 2

    //console.log('Imprimiendo miVar desde fuera de la funcion el valor de miVar es: ', milet2)

//}

//imprimirlet()

const miconst = 1

console.log('Imprimiendo miConst es igual a: ', miconst)

function imprimirconst(){
    console.log('Imprimiendo miConst es igual a: ', miconst)
}

imprimirconst()

let milet = 5

console.log('Imprimiendo milet es igual a: ', milet)

function imprimirlet(){
    console.log('Imprimiendo milet es igual a: ', milet)
}

imprimirlet()


 //OBJETOS CON LET

let vendedor = {

    Nombre: 'Romualdo',
    Apellido: 'Gonzalez',
    Empresa: 'Romulus SA',
    Habilidadesblandas: ['comunicacion', 'trabajo en equipo', 'Resolucion de conflictos '],
    vender: function (){
        return 'Romualdo vendio'
    },
    obtenerNombreCompleto: function (){
        return `El Nombre completo de este vendedor es ${this.Nombre}  ${this.Apellido}`
    }
}

console.log(vendedor)


console.log('El tipo de dato de vendedor es : ', typeof vendedor)

console.log('El nombre del vendedor es : ', vendedor.Nombre)

console.log('Las habilidades del vendedor son : ', vendedor.Habilidadesblandas)

console.log(vendedor.vender)

console.log(vendedor.vender())

console.log(vendedor.obtenerNombreCompleto())


let venta = vendedor.vender()
console.log(venta)
console.log(typeof venta)


vendedor.Apellido = 'Bertolin'
console.log(vendedor)

vendedor.edad = 34

console.log(vendedor)


//OBJETOS CON CONST

const vendedor2 = {

    Nombre: 'Andres',
    Apellido: 'Dario',
    Empresa: 'Romulus SA',
    Habilidadesblandas: ['comunicacion', 'trabajo en equipo', 'Resolucion de conflictos '],
    vender: function (){
        return 'Romualdo vendio'
    },
    obtenerNombreCompleto: function (){
        return `El Nombre completo de este vendedor es ${this.Nombre}  ${this.Apellido}`
    }
}

console.log(vendedor2)


vendedor2.edad = 35

console.log(vendedor2)
