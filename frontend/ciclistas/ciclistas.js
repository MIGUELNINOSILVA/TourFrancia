import { getAllCiclistas } from '../API/API.js';

document.addEventListener('DOMContentLoaded', showData);

const ContentMainCiclistas = document.querySelector('#ContentMainCiclistas');

async function showData() {
    try {
        const ciclistas = await getAllCiclistas();
        ciclistas.forEach(ciclista => {
            const { nombre, edad, equipo, nacionalidad } = ciclista;
            console.log(nombre);
            console.log(edad);
            console.log(equipo);
            console.log(nacionalidad);
            ContentMainCiclistas.innerHTML += `
            <div class="admin d-flex align-items-center rounded-2 p-3 mb-4">
          <div class="img">
            <img
              class="img-fluid rounded-pill"
              width="80"
              height="80"
              src="../img/ciclismo.png"
              alt="admin"
            />
          </div>
          <div class="ms-3">
            <h3 class="fs-5 mb-1">${nombre}</h3>
            <p class="mb-0">Lorem ipsum dolor sit amet consectetur elit.</p>
            
          </div>
        </div>`
        });
    } catch (error) {
        console.log(error);
    }
}