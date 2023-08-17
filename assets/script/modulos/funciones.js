

export function categoriasFiltradas(arrayEventos){
    const arrayMapeado = arrayEventos.map(evento=>evento.category)
    const setCategories = new Set (arrayMapeado)
    const categoriasFiltradas = Array.from(setCategories)
    return categoriasFiltradas
  }

  
 export function imprimirCartas (eventos, contenedorCartas){
    contenedorCartas.innerHTML="";
   for (const evento of eventos) {
    const cartaHTML = crearCartas(evento);
      contenedorCartas.innerHTML += cartaHTML;
      
    }
  }
  export function imprimirCartasPastYUp (eventos, contenedorCartas){
    contenedorCartas.innerHTML="";
   for (const evento of eventos) {
    const cartaHTML = crearCartasPastYUp(evento);
      contenedorCartas.innerHTML += cartaHTML;
      
    }
  }

  export function crearCartas(carta){
  
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

    export function crearCartasPastYUp(carta){
  
      return `<div class="card first">
      <img src="${carta.image}" class="card-img-top" alt="...">
      <section class="card-body">
        <h5 class="card-title">${carta.name}</h5>
        <p class="card-text">${carta.description}</p>
        <div class="d-flex justify-content-evenly">
          <p>Price: $${carta.price}</p>
          <a href= "./details.html?_id=${carta._id}" class="btn btn-primary">Details</a>
        </div>
      </section>
      </div>`
      }
  
export function crearCheckbox(categories){
   return `<div>
   <input type="checkbox" value="${categories}">
   <label>${categories}</label>
   </div>`
  }
  
  
export  function imprimirCheckbox (contenedor, categorias) {
    
    for (const categoria of categorias) {
      const checkCreado = crearCheckbox(categoria)
      contenedor.innerHTML += checkCreado
      }  
    }
  
  
export  function filtrarCheckbox(arrayEvents){
    const checkboxSeleccionados = document.querySelectorAll('input[type=checkbox]:checked')
    const valoresCheckbox = Array.from(checkboxSeleccionados).map((input)=>input.value)
    const filtrado = arrayEvents.filter((evento)=>valoresCheckbox.includes(evento.category))
  
    return filtrado
  }
  
export  function filtrarPorNombre (arrayEvento){
    const filtrado = arrayEvento.filter((evento)=>evento.name.toLowerCase().includes(busqueda.value.toLowerCase()))
    return filtrado
  }
  
function imprimirMensajeH2(string, contenedorCartas) {  
     
    return contenedorCartas.innerHTML=string 
  } 
  
export  function condicionalesCruzadas(filtradoPorNombre, filtradoPorCategoria, arrayEvento, imprimirMensaje, contenedorCartas) {
    if (filtradoPorNombre.length === arrayEvento.length && filtradoPorCategoria.length === 0){
        imprimirCartas(arrayEvento, contenedorCartas)
    } else if (filtradoPorNombre.length !== arrayEvento.length && filtradoPorCategoria.length === 0){
        if (filtradoPorNombre.length === 0 ) {
          imprimirMensajeH2(imprimirMensaje, contenedorCartas)
          return
        }
        imprimirCartas(filtradoPorNombre, contenedorCartas)  
    } else if (filtradoPorCategoria.length !== 0 && filtradoPorNombre.length === arrayEvento.length){
        imprimirCartas(filtradoPorCategoria, contenedorCartas)
    }else if (filtradoPorNombre.length !== arrayEvento.length && filtradoPorCategoria.length !== 0){
        imprimirCartas(filtradoPorCategoria, contenedorCartas)   
    }
  }
  