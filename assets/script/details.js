let contenedorDetails = document.getElementById('contenedorDetails')
console.log(data.events)

console.log([window])
const parametros = location.search;
console.log(parametros)

const objetoUrl = new URLSearchParams(parametros);
console.log(objetoUrl)

const idEventos = objetoUrl.get('_id');
console.log(idEventos) 

const objetoEventos = data.events.find(objetoEventos => objetoEventos._id === idEventos)
console.log(objetoEventos)

function crearCards (eventos) {
 return `<img class="tarjeta" src="${eventos.image}" alt="...">
    <div class="elements">
        <h6>${eventos.name}</h6>
        <p>Date: ${eventos.date}</p>
        <p>${eventos.description}</p>
        <p>Category: ${eventos.category}</p>
        <p>Place: ${eventos.place}</p>
        <p>Capacity: ${eventos.capacity}</p>
        <p>Price: $${eventos.price}</p>
    </div>`
        
}
 let estructuraString = crearCards(objetoEventos)
 console.log(estructuraString)

 function renderizarTarjeta (elementoHTML, estructuraString){
    elementoHTML.innerHTML = estructuraString
 }

 renderizarTarjeta(contenedorDetails, estructuraString)