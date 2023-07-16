const urlCiclistas = 'http://localhost:8000/api/ciclistas';

const getAllCiclistas = async() =>{
    try {
        const ciclistas = await fetch(`${urlCiclistas}`);
        return ciclistas.json();
    } catch (error) {
        console.log(error.message);
    }
}

export{
    getAllCiclistas
}