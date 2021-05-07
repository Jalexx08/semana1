// DOM - Document Object Model
let btnPrueba = document.getElementById('btnPrueba');
let tituloPagina = document.getElementById('tituloPagina');


const mensajeAlerta = ()=> {
    console.log("prueba");
    
};

//Onclicks

btnPrueba.onclick = () => {
    mensajeAlerta();
};

tituloPagina.onclick = () => {
    mensajeAlerta();
};
