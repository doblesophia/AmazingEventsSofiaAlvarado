const contenedorCartas = document.getElementById('cartas')

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


const categorias = document.getElementById('categorias')


function crearCheckbox(categories){
 return `<div>
 <input type="checkbox" value="${categories}">
 <label>${categories}</label>
 </div>`
}

data.events.map((eventos)=>eventos.category)
let categoriesRepetidas = data.events.map((eventos)=>eventos.category)

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

categorias.addEventListener('change', ()=>{
  const filtradoPorNombre = filtrarPorNombre(data.events, busqueda.value)
  const filtradoPorCategoria = filtrarCheckbox(filtradoPorNombre)
  condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria)
  
})


function filtrarPorNombre (){
  const filtrado = data.events.filter((evento)=>evento.name.toLowerCase().includes(busqueda.value.toLowerCase()))
  return filtrado
}

const busqueda = document.getElementById('busqueda')

busqueda.addEventListener('input', ()=>{
  const filtradoPorNombre = filtrarPorNombre(data.events, busqueda.value)
  const filtradoPorCategoria = filtrarCheckbox(filtradoPorNombre)
  condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria)
})



function condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria) {
  if (filtradoPorNombre.length === data.events.length && filtradoPorCategoria.length === 0){
      imprimirCartas(data.events, contenedorCartas)
  } else if (filtradoPorNombre.length !== data.events.length && filtradoPorCategoria.length === 0){
      imprimirCartas(filtradoPorNombre, contenedorCartas)
      
  } else if (filtradoPorCategoria.length !== 0 && filtradoPorNombre.length === data.events.length){
      imprimirCartas(filtradoPorCategoria, contenedorCartas)
     
  }else if (filtradoPorNombre.length !== data.events.length && filtradoPorCategoria.length !== 0){
      imprimirCartas(filtradoPorCategoria, contenedorCartas)
  } 
}






