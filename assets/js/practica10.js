// Ciclo for

let btnPrueba = document.getElementById('btnPrueba');

const spamLink = () => {
	for (let i = 0; i < 5; i++) {
		window.open('https://es.wikipedia.org/wiki/Wikipedia:Portada');
	}
};


//Evento Click

btnPrueba.addEventListener('click', ()=> {
    spamLink()
});