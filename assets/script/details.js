let contenedorDetails = document.getElementById('contenedorDetails')
console.log(contenedorDetails)
console.log([window])
const parametros = location.search;



fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(arregloEventosFetch=>arregloEventosFetch.json())
.then(arregloEventosFetch=>{
    let arrayEventos = arregloEventosFetch.events
    const objetoUrl = new URLSearchParams(parametros);
    const idEventos = objetoUrl.get('_id');
    const objetoEventos = arrayEventos.find(objetoEventos => objetoEventos._id == idEventos)
    console.log(objetoEventos)
    let crearTarjetas = crearCards(objetoEventos)
    renderizarTarjeta(contenedorDetails, crearTarjetas)
    
})


function crearCards (eventos) {
 return `<img class="tarjeta" src="${eventos.image}" alt="...">
    <div class="elements">
        <h6>${eventos.name}</h6>
        <p>Date: ${eventos.date}</p>
        <p>${eventos.description}</p>
        <p>Category: ${eventos.category}</p>
        <p>Place: ${eventos.place}</p>
        <p>Capacity: ${eventos.capacity}</p>
        <p><p>${eventos.assistance?(`Assistance: ${eventos.assistance}`):(`Estimate: ${eventos.estimate}`)}</p></p>
        <p>Price: $${eventos.price}</p>
    </div>`
        
}

 function renderizarTarjeta (elementoHTML, estructuraString){
    elementoHTML.innerHTML = estructuraString
 }
