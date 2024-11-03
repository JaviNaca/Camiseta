let negro = document.getElementById('Negro');
let blanco = document.getElementById('Blanco');

let contenedorCamiseta = document.getElementById('contenedorCamiseta');

let img1 = document.getElementById('Reina Arquera');
let img2 = document.getElementById('Pekka');
let img3 = document.getElementById('Mago de Fuego');
let img4 = document.getElementById('Mago de Hielo');

let ejeX = document.getElementById('ejeX');
let ejeY = document.getElementById('ejeY');

function cambiarCamiseta() {
    if (negro.checked) {
        contenedorCamiseta.style.backgroundImage = "url(img/black.png)";
    } else if (blanco.checked) {
        contenedorCamiseta.style.backgroundImage = "url(img/white.png)";
    }
}

negro.addEventListener('click', cambiarCamiseta);
blanco.addEventListener('click', cambiarCamiseta);

function controlarTitulo(){ // funcion para controlar la longitud de 10 carácteres y para pintar el texto en la camiseta
    let regex = /^.{0,10}$/;
    if (regex.test(titulo.value)){
    let titulo = document.getElementById('titulo').value;
    document.getElementById('prueba').innerHTML = titulo;
    } else {
        alert('ERROR');
    }
}

titulo.addEventListener('input', controlarTitulo);

img1.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id); // Guarda el id
});

img2.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
});

img3.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
});

img4.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
});


// declaro imgcont fuera para crear la variable vacia, así con el primer if, si ya hay una imagen, se cambiará por la arrastrada
let imgcont = ""; 
let imgpeque = "";
let idDisplay = document.createElement("p"); 
contenedorCamiseta.appendChild(idDisplay); 

contenedorCamiseta.addEventListener("drop", (event) => {
    event.preventDefault();
    if (imgcont && imgpeque) {
        contenedorCamiseta.removeChild(imgcont);
        contenedorCamiseta.removeChild(imgpeque);
    }
    
    let imgId = event.dataTransfer.getData("text/plain"); // Obtengo el ID de la imagen arrastrada
    imgcont = document.createElement("img");
    imgcont.src = document.getElementById(imgId).src; // Consigo el src
    imgcont.id = imgId; // Asigno el id
    contenedorCamiseta.appendChild(imgcont);

    imgcont.style.width = '300px';
    imgcont.style.height = '300px';
    imgcont.style.justifyContent = 'center';
    imgcont.style.marginTop = '390px';
    imgcont.style.marginLeft = '260px';
    imgcont.style.position = 'absolute'; // posicion absoluta para que no choque la camiseta con el texto

    imgpeque = document.createElement("img");
    imgpeque.setAttribute('class', 'girar');
    imgpeque.src = document.getElementById(imgId).src; // Consigo el src
    imgpeque.id = imgId; // Asigno el id
    contenedorCamiseta.appendChild(imgpeque);

    imgpeque.style.width = '100px';
    imgpeque.style.height = '100px';
    imgpeque.style.marginTop = '200px';
    imgpeque.style.marginLeft = '480px';
    imgpeque.style.position = 'absolute'; 
    imgpeque.style.transform

    idDisplay.textContent = imgId;
    if(negro.checked){
        idDisplay.style.color = 'white';
    } else if (blanco.checked) {
        idDisplay.style.color = 'black';
    }

    idDisplay.style.width = '100px';
    idDisplay.style.height = '100px';
    idDisplay.style.marginTop = '700px';
    idDisplay.style.marginLeft = '400px';
    idDisplay.style.fontSize = '20px';
    idDisplay.style.position = 'absolute'; // posicion absoluta para que no choque la camiseta con el texto
    
});

contenedorCamiseta.addEventListener("dragover", (event) => {
    event.preventDefault();
});
