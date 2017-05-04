let AtaqueJugador;

function iniciarjuego() {
    let Elegirmascota = document.getElementById("boton-mascota");
    Elegirmascota.addEventListener("click", SeleccionarMascota);

    let botonFuego = document.getElementById("Fuego");
    botonFuego.addEventListener("click", ataquefuego);

    let botonAgua = document.getElementById("Agua");
    botonAgua.addEventListener("click", ataqueagua);

    let botonPlanta = document.getElementById("Planta");
    botonPlanta.addEventListener("click", ataqueplanta);
}

const SeleccionarMascota = () => {
    let inputLeonel = document.getElementById("Leonel");
    let inputAbinadersh = document.getElementById("Abinadersh");
    let inputRanfick = document.getElementById("Ranfick");
    let inputAmable = document.getElementById("Amable");
    let inputHippolitod = document.getElementById("Hippolitod");
    let MascotaJugador = document.getElementById("mascotaDelJugador");

    if (inputLeonel.checked === true) {
        MascotaJugador.innerHTML = "Leonel";
    } else if (inputAbinadersh.checked === true) {
        MascotaJugador.innerHTML = "Abinadersh";
    } else if (inputRanfick.checked === true) {
        MascotaJugador.innerHTML = "Ranfick";
    } else if (inputAmable.checked === true) {
        MascotaJugador.innerHTML = "Amable";
    } else if (inputHippolitod.checked === true) {
        MascotaJugador.innerHTML = "Hippolitod";
    } else {
        alert("Selecciona la mascota");
        return;
    }

    SeleccionarMascotaEnemigo();
};

const ataquefuego = () => {
    AtaqueJugador = 'FUEGO';
    alert(AtaqueJugador);
    SeleccionarAtaqueEnemigo();
};

const ataqueagua = () => {
    AtaqueJugador = 'AGUA';
    alert(AtaqueJugador);
    SeleccionarAtaqueEnemigo();
};

const ataqueplanta = () => {
    AtaqueJugador = 'PLANTA';
    alert(AtaqueJugador);
    SeleccionarAtaqueEnemigo();
};

const SeleccionarAtaqueEnemigo = () => {
    let ataqueSeleccionadonado = Randomizer(1, 3);

    if (ataqueSeleccionadonado == 1) {
        alert("El Enemigo ataco con FUEGO");
    } else if (ataqueSeleccionadonado == 2) {
        alert("El Enemigo ataco con AGUA");
    } else {
        alert("El Enemigo ataco con PLANTA");
    }
};

const Randomizer = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


const SeleccionarMascotaEnemigo = () => {
    let AtaqueAliatorio = Randomizer(1, 5);
    let MascotaEnemigo = document.getElementById("mascotaDelEnemigo");

    if (AtaqueAliatorio == 1) {
        MascotaEnemigo.innerHTML = "Leonel";
    } else if (AtaqueAliatorio == 2) {
        MascotaEnemigo.innerHTML = "Abinadersh";
    } else if (AtaqueAliatorio == 3) {
        MascotaEnemigo.innerHTML = "Ranfick";
    } else if (AtaqueAliatorio == 4) {
        MascotaEnemigo.innerHTML = "Amable";
    } else {
        MascotaEnemigo.innerHTML = "Hippolitod";
    }
};


window.addEventListener("load", iniciarjuego);
