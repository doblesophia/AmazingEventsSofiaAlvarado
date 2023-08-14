const contenedorCartas = document.getElementById('cartas')
const categorias = document.getElementById('categorias')
const busqueda = document.getElementById('busqueda')
const imprimirMensaje = `

<div class="d-flex flex-column align-items-center">
<img class="img404" src="https://static.vecteezy.com/system/resources/previews/004/639/366/non_2x/error-404-not-found-text-design-vector.jpg">
<h2>Oooops! you're wrong. Try with another words!</h2>
</div>



`



function crearCartas(carta){
    
    return `<div class="card first">
    <img src=${carta.image} class="card-img-top">
    <section class="card-body">
      <h5 class="card-title">${carta.name}</h5>
      <p class="card-text">${carta.description}</p>
      <div class="d-flex justify-content-evenly">
        <p>Price: $${carta.price}</p>
        <a href="../pages/details.html?_id=${carta._id}" class="btn btn-primary">Details</a>
      </div>
    </div>
</section>`
}

function filtrarEventos (eventos){
  const eventosFiltrados = [];
  for (const evento of eventos){
    if(evento.date < data.currentDate){
      eventosFiltrados.push(evento)
    }
  }
  return eventosFiltrados
}
const pastEvents = filtrarEventos(data.events);



function imprimirCartas ( eventos, cartas) {
      cartas.innerHTML=""
    for (const evento of eventos) {
        const cartaHTML = crearCartas(evento);
        cartas.innerHTML += cartaHTML
    }

}

imprimirCartas(pastEvents, contenedorCartas);


function crearCheckbox(categories){
 return `<div>
 <input type="checkbox" value="${categories}">
 <label>${categories}</label>
 </div>`
}

pastEvents.map((eventos)=>eventos.category)
let categoriesRepetidas = pastEvents.map((eventos)=>eventos.category)

const setCategoriesNoRepetidas = new Set(categoriesRepetidas)
console.log(setCategoriesNoRepetidas)

const arrayCategoriesNoRepetidas = Array.from(setCategoriesNoRepetidas)
console.log(arrayCategoriesNoRepetidas)

function imprimirCheckbox (contenedor, eventos) {
  
  for (const evento of eventos) {
    const checkCreado = crearCheckbox(evento)
    contenedor.innerHTML += checkCreado
    }  
  }
imprimirCheckbox(categorias, arrayCategoriesNoRepetidas);

function filtrarCheckbox(arrayEvents){
  const checkboxSeleccionados = document.querySelectorAll('input[type=checkbox]:checked')
  const valoresCheckbox = Array.from(checkboxSeleccionados).map((input)=>input.value)
  const filtrado = arrayEvents.filter((evento)=>valoresCheckbox.includes(evento.category))

  return filtrado
}

function imprimirMensajeH2(string) {  
   
  return contenedorCartas.innerHTML=string 
} 

categorias.addEventListener('change', ()=>{
  const filtradoPorNombre = filtrarPorNombre(pastEvents, busqueda.value)
  const filtradoPorCategoria = filtrarCheckbox(filtradoPorNombre)
  condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria)
  
})


function filtrarPorNombre (){
  const filtrado = pastEvents.filter((evento)=>evento.name.toLowerCase().includes(busqueda.value.toLowerCase()))
  return filtrado
}

busqueda.addEventListener('input', ()=>{
  const filtradoPorNombre = filtrarPorNombre(pastEvents, busqueda.value)
  const filtradoPorCategoria = filtrarCheckbox(filtradoPorNombre)
  condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria)
})

function condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria) {
  if (filtradoPorNombre.length === data.events.length && filtradoPorCategoria.length === 0){
      imprimirCartas(data.events, contenedorCartas)
  } else if (filtradoPorNombre.length !== data.events.length && filtradoPorCategoria.length === 0){
    if (filtradoPorNombre.length === 0 ) {
      imprimirMensajeH2(imprimirMensaje)
      return
    }
    imprimirCartas(filtradoPorNombre, contenedorCartas)

  } else if (filtradoPorCategoria.length !== 0 && filtradoPorNombre.length === data.events.length){
      imprimirCartas(filtradoPorCategoria, contenedorCartas)
     
  }else if (filtradoPorNombre.length !== data.events.length && filtradoPorCategoria.length !== 0){
      imprimirCartas(filtradoPorCategoria, contenedorCartas)
  } 
}









