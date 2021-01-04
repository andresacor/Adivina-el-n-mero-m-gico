

let numero = 0;
let intentos = 1;
let numeroMagico = 7;

let boton = document.querySelector('button')
boton.addEventListener('click', validar)

function validar(e) {
    e.preventDefault();

    while (numero != numeroMagico) {
        let mensaje = document.getElementById("mensaje");
        mensaje.innerHTML = `Intento ${intentos} de 3`;
        numero = document.getElementById('numero').value;


        //Si el campo número esta vacio o el dato no es número sale advertencia
        if (!numero || !Number(numero)) {
            mensaje.innerHTML = 'El campo número está vacio o no es un número'
            break
        }

        //Verificamos que el numero mágico sea 7
        else if (numero == numeroMagico) {
            mensaje.innerHTML = "Felicidades. Has adivinado el número mágico";
            mensaje.classList.add("congratulation-message")
            break;
        }

        //Si hay más de 3 intentos sale mensaje.  
        intentos++
        if (intentos == 4) {
            mensaje = document.getElementById("mensaje");
            mensaje.innerHTML = "Ya no tienes más intentos";
            mensaje.classList.add('sad-message');
            boton.removeEventListener('click', validar)

        }
        break;
    }
}
