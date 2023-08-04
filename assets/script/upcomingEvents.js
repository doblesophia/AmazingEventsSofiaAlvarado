const contenedorCartas = document.getElementById('cartas')

function crearCartas(carta){
    
    return `<div class="card first">
    <img src=${carta.image} class="card-img-top">
    <section class="card-body">
      <h5 class="card-title">${carta.name}</h5>
      <p class="card-text">${carta.description}</p>
      <div class="d-flex justify-content-evenly">
        <p>Price: $${carta.price}</p>
        <a href="../pages/details.html" class="btn btn-primary">Details</a>
      </div>
    </div>
</section>`
}

function filtrarEventos (eventos){
  const eventosFiltrados = [];
  for (const evento of eventos){
    if(evento.date > data.currentDate){
      eventosFiltrados.push(evento)
    }
  }
  return eventosFiltrados
}
const upcomingEvents = filtrarEventos(data.events);



function imprimirCartas ( eventos, cartas) {
    for (const evento of eventos) {
        const aux = crearCartas(evento);
        cartas.innerHTML += aux
    }

}

imprimirCartas(upcomingEvents, contenedorCartas);



