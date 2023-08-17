import { categoriasFiltradas, imprimirCartasPastYUp, imprimirCheckbox, filtrarCheckbox, filtrarPorNombre, condicionalesCruzadas  } from "./modulos/funciones.js";
const contenedorCartas = document.getElementById('cartas')
const categorias = document.getElementById('categorias')
const busqueda = document.getElementById('busqueda')
const imprimirMensaje = `

<div class="d-flex flex-column align-items-center">
<img class="img404" src="https://static.vecteezy.com/system/resources/previews/004/639/366/non_2x/error-404-not-found-text-design-vector.jpg">
<h2>Oooops! you're wrong. Try with another words!</h2>
</div>



`
fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(arregloEventosFetch=>arregloEventosFetch.json())
.then(arregloEventosFetch=>{
const arrayEventos = arregloEventosFetch.events
const currentDate = arregloEventosFetch.currentDate

const eventosPasados= filtrarEventos(arrayEventos, currentDate)
const categoriaFiltrada = categoriasFiltradas(arrayEventos)
imprimirCheckbox(categorias, categoriaFiltrada)
imprimirCartasPastYUp(eventosPasados, contenedorCartas)

filtrarCheckbox(eventosPasados)
filtrarPorNombre(eventosPasados) 

categorias.addEventListener('change', ()=>{
  const filtradoPorNombre = filtrarPorNombre(eventosPasados, busqueda.value)
  const filtradoPorCategoria = filtrarCheckbox(filtradoPorNombre)
  condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria, eventosPasados, imprimirMensaje, contenedorCartas)
  
})

busqueda.addEventListener('input', ()=>{
  const filtradoPorNombre = filtrarPorNombre(eventosPasados, busqueda.value)
  const filtradoPorCategoria = filtrarCheckbox(filtradoPorNombre)
  condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria, eventosPasados, imprimirMensaje, contenedorCartas)
})
})




function filtrarEventos (eventos, currentDate){
  const eventosFiltrados = [];
  for (const evento of eventos){
    if(evento.date > currentDate){
      eventosFiltrados.push(evento)
    }
  }
  return eventosFiltrados
}




