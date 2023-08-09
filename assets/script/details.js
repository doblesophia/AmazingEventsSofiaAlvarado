let contenedorDetails = document.getElementById('contenedorDetails')
console.log(data.events)

console.log([window])
const parametros = location.search;
console.log(parametros)
const objetoUrl = new URLSearchParams('parametros');
console.log(objetoUrl.get('id'))

const idEventos = objetoUrl.get('id');
console.log(idEventos) 
/*<img class="tarjeta" src="../images/cinema.jpg" alt="cinema">
        <div class="elements">
            <h6>Costume Party</h6>
            <p>Date: 2024-02-12</p>
            <p>Come in your scariest costume character to win amazing prizes.</p>
            <p>Category: Costume party</p>
            <p>Place: Room C</p>
            <p>Capacity: 12.000</p>
            <p>Estimate: 9.000</p>
            <p>Price: 12</p>
        </div> */