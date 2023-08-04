const contenedorCartas = document.getElementById('cartas')

function crearCartas(carta){
return `<div class="card first">
<img src="${carta.image}" class="card-img-top" alt="...">
<section class="card-body">
  <h5 class="card-title">${carta.name}</h5>
  <p class="card-text">${carta.description}</p>
  <div class="d-flex justify-content-evenly">
    <p>Price: $${carta.price}</p>
    <a href="./assets/pages/details.html" class="btn btn-primary">Details</a>
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
