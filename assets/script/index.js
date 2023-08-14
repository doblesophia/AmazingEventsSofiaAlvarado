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
<img src="${carta.image}" class="card-img-top" alt="...">
<section class="card-body">
  <h5 class="card-title">${carta.name}</h5>
  <p class="card-text">${carta.description}</p>
  <div class="d-flex justify-content-evenly">
    <p>Price: $${carta.price}</p>
    <a href= "./assets/pages/details.html?_id=${carta._id}" class="btn btn-primary">Details</a>
  </div>
</section>
</div>`

}

function imprimirCartas (eventos, contenedorCartas){
  contenedorCartas.innerHTML=""
 for (const evento of eventos) {
  const cartaHTML = crearCartas(evento);
    contenedorCartas.innerHTML += cartaHTML;
    
  }
}

imprimirCartas(data.events, contenedorCartas);


function crearCheckbox(categories){
 return `<div>
 <input type="checkbox" value="${categories}">
 <label>${categories}</label>
 </div>`
}

let categoriesRepetidas = data.events.map((eventos)=>eventos.category)

const setCategoriesNoRepetidas = new Set(categoriesRepetidas)

const arrayCategoriesNoRepetidas = Array.from(setCategoriesNoRepetidas)


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

function filtrarPorNombre (){
  const filtrado = data.events.filter((evento)=>evento.name.toLowerCase().includes(busqueda.value.toLowerCase()))
  return filtrado
}

function imprimirMensajeH2(string) {  
   
  return contenedorCartas.innerHTML=string 
} 

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

categorias.addEventListener('change', ()=>{
  const filtradoPorNombre = filtrarPorNombre(data.events, busqueda.value)
  const filtradoPorCategoria = filtrarCheckbox(filtradoPorNombre)
  condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria)
})

busqueda.addEventListener('input', ()=>{
  const filtradoPorNombre = filtrarPorNombre(data.events, busqueda.value)
  const filtradoPorCategoria = filtrarCheckbox(filtradoPorNombre)
  condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria)
  
  
})






