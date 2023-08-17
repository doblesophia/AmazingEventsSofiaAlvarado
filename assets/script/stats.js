const bodyTabla1 = document.getElementById('body1')
const bodyTabla2= document.getElementById('body2')
const bodyTabla3 = document.getElementById('body3')


fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(arregloAssitance=>arregloAssitance.json())
.then(eventos =>{
    let arrayEventosPorEstimado = eventos.events.filter(evento=>evento.estimate)
    const arrayEventosAsistencia = eventos.events.filter(evento=>evento.assistance)
    const arrayObjetoModificado = arrayEventosAsistencia.map((evento)=>
    {return {
        name: evento.name,
        assistance: evento.assistance,
        capacity: evento.capacity,
        percentage: (evento.assistance*100)/evento.capacity,
        price : evento.price,
        totalValue : evento.price * evento.assistance,
        category : evento.category
    }
    })
    
   const arrayOrdenadosPorcentajesDeMayorAMenor = arrayObjetoModificado.sort(compararPorcentajes)
   const eventoMayorPorcentaje = arrayOrdenadosPorcentajesDeMayorAMenor.slice(0,1)
   console.log(eventoMayorPorcentaje)
   const eventoMenorPorcentaje = arrayOrdenadosPorcentajesDeMayorAMenor.slice(-1)
   console.log(eventoMenorPorcentaje)
   const eventoOrdenadoMayorAMenorCapacidad = arrayObjetoModificado.sort(compararValores)
   const eventoMayorCapacidad = eventoOrdenadoMayorAMenorCapacidad.slice(0,1)
   const estructuraHTML = crearTabla1(eventoMayorPorcentaje, eventoMenorPorcentaje, eventoMayorCapacidad)

   pintarTabla1(bodyTabla1, estructuraHTML)
   //-------------------------------------------------------------------------------------------------------
   let arrayDeCategorias = [...new Set(arrayObjetoModificado.map(evento=>evento.category))]
   console.log(arrayDeCategorias)

   let arrayDeArrays = arrayDeCategorias.map(categoria => arrayObjetoModificado.filter(evento => evento.category === categoria))
   console.log(arrayDeArrays)
   let buclevariable = reduccionDeArrayEventos(arrayDeArrays)
   console.log(buclevariable)
   let estructuraHTML2 = crearTabla2(buclevariable, bodyTabla2)
   //--------------------------------------------------------------------------------------------------------
   let arrayObjetoModificado2 = arrayEventosPorEstimado.map(evento=>{
    return {
        name : evento.name,
        estimate : evento.estimate,
        capacity : evento.capacity,
        percentage : (evento.estimate*100)/evento.capacity,
        price : evento.price,
        totalValue : evento.price * evento.estimate,
        category : evento.category
    }
})
console.log(arrayObjetoModificado2)
let arrayDeCategorias2 = [...new Set(arrayObjetoModificado2.map(evento=>evento.category))]
console.log(arrayDeCategorias2)

let arrayDeArrays2 = arrayDeCategorias2.map(categoria => arrayObjetoModificado2.filter(evento => evento.category === categoria))
console.log(arrayDeArrays2)
let buclevariable2 = reduccionDeArrayEventos(arrayDeArrays2)
console.log(buclevariable2)
let estructuraHTML3 = crearTabla2(buclevariable2, bodyTabla3)
})
.catch((error)=>console.log(error))


    
function compararValores (a,b){
    return b.capacity - a.capacity
}
function compararPorcentajes (a,b){
    return b.porcentaje - a.porcentaje
}

function crearTabla1 (evento1, evento2, evento3){
    return  `<tr>
    <td class="small-td col-3">${evento1[0].name}: %${evento1[0].percentage.toFixed(2)}</td>
    <td class="small-td col-3">${evento2[0].name}: %${evento2[0].percentage.toFixed(2)}</td>
    <td class="small-td col-3">${evento3[0].name}: ${evento3[0].capacity}</td>
    </tr>`

}

function pintarTabla1 (contenedor, string){
    return contenedor.innerHTML = string
}

function reduccionDeArrayEventos (arrayDeArrays){
    let resultadoReduce = 0
    let arrayAux = []
    for (const array of arrayDeArrays) {
        let category = ""
        let revenues = 0
        let percentage = 0
        resultadoReduce = array.reduce((acc, act) => {
                    category = act.category
                    revenues += act.totalValue
                    percentage += act.percentage
                    return {
                        categoria : act.category,
                        ganancias : revenues,
                        porcentajeAsistencia :(percentage/array.length)
                    }
        }, {})
        arrayAux.push(resultadoReduce)
    }
    return arrayAux
}

function crearTabla2 (arrayDeObjetos, contenedor){
    let lineaDeTabla = ""
    for (const objeto of arrayDeObjetos) {
        lineaDeTabla += `<tr>
        <td class="small-td col-3">${objeto.categoria}</td>
        <td class="small-td col-3">$${objeto.ganancias}</td>
        <td class="small-td col-3">${objeto.porcentajeAsistencia.toFixed(2)}%</td>
    </tr>`
    }
    contenedor.innerHTML = lineaDeTabla
}