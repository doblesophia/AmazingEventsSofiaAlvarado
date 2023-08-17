import { categoriasFiltradas, imprimirCartas, imprimirCheckbox, filtrarCheckbox, filtrarPorNombre, condicionalesCruzadas } from "./modulos/funciones.js";
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
imprimirCartas(arrayEventos, contenedorCartas)

const categoriaFiltrada = categoriasFiltradas(arrayEventos)
imprimirCheckbox(categorias, categoriaFiltrada)

filtrarCheckbox(arrayEventos)
filtrarPorNombre(arrayEventos)

categorias.addEventListener('change', ()=>{
  const filtradoPorNombre = filtrarPorNombre(arrayEventos, busqueda.value)
  const filtradoPorCategoria = filtrarCheckbox(filtradoPorNombre)
  condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria, arrayEventos, imprimirMensaje, contenedorCartas)

 
})

busqueda.addEventListener('input', ()=>{
  const filtradoPorNombre = filtrarPorNombre(arrayEventos, busqueda.value)
  const filtradoPorCategoria = filtrarCheckbox(filtradoPorNombre)
  condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria, arrayEventos, imprimirMensaje, contenedorCartas)
  
})
})

.catch(error=>console.log(error));












