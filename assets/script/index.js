const categorias = document.getElementById('categorias')
const uniqueCategories = {};


//function imprimirCheckboxes (catergories){
  
 // for (let i = 0; i < data.events.length; i+2) {
  
   // const checkbox = `<div>
   // <input type="checkbox" id="category${i}">
    //<label for="category${i}">${data.events.category}</label>
    //</div>`;
    //catergories.innerHTML += checkbox
  //}
//}

 
    //console.log(data.events[0].category)

    
    /*for (let i = 0; i < data.events.length; i++) {
      if (data.events[i].category === data.events[i++].category) {
        !(catergories.innerHTML += checkbox);
    }
  } */
    
  


//imprimirCheckboxes(categorias);


/*<div>
<input type="checkbox" id="category1">
<label for="category1">Category</label>
</div>*/

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
  for (const evento of eventos) {
    const cartaHTML = crearCartas(evento);
    contenedorCartas.innerHTML += cartaHTML
  }
}

imprimirCartas(data.events, contenedorCartas);
