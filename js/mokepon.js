const seleccionarAtaque = document.getElementById('Seleccionar-ataque')
const Reiniciar = document.getElementById('Reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('Seleccionar-mascota') 
const inputHipodogue = document.getElementById('Hipodogue')   
const inputCapipepo = document.getElementById('Capipepo')   
const inputRatigueya = document.getElementById('Ratigueya')   
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanVidasJuagador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJuagador = document.getElementById('ataques-Del-Jugador')
const ataquesDelEnemigo = document.getElementById('ataques-Del-Enemigo')
const nuevoAtaqueDelJugador = document.createElement('p')
const nuevoAtaqueDelEnemigo = document.createElement('p')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const parrafo = document.createElement('p')

const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon{
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodogue  = new Mokepon('Hipodogue','./assets/mokepons_mokepon_hipodoge_attack.png',5)

let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',5)

let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png',5)

mokepones.push(hipodogue,capipepo,ratigueya)

hipodogue.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌍', id: 'boton-tierra'},
)

capipepo.ataques.push(
    {nombre: '🌍', id: 'boton-tierra'},
    {nombre: '🌍', id: 'boton-tierra'},
    {nombre: '🌍', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},    
)

ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌍', id: 'boton-tierra'},
)


function iniciarJuego() {
    seleccionarAtaque.style.display = 'none'  
    
    mokepones.forEach((Mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${Mokepon.nombre}>
        <label class="tarjeta-de-mokepon" for=${Mokepon.nombre}>
            <p>${Mokepon.nombre}</p>
            <img src=${Mokepon.foto} alt=${Mokepon.nombre}>
        </label>
         `  
        contenedorTarjetas.innerHTML  += opcionDeMokepones

    }
    )

    Reiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJuagador)
    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra)
    botonReiniciar.addEventListener('click',reiniciarJuego)
}

function   seleccionarMascotaJuagador () {
           
        sectionSeleccionarMascota.style.display = 'none'    
        seleccionarAtaque.style.display = 'flex'
        
        if (inputHipodogue.checked)
            spanMascotaJugador.innerHTML = 'Hipodogue'
        else if (inputCapipepo.checked)
            spanMascotaJugador.innerHTML = 'Capipepo'
        else if (inputRatigueya.checked)
            spanMascotaJugador.innerHTML = 'Ratigueya'
        else (
            alert('Selecciona una mascota')
        )
        
        seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,3) 
   
    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodogue'   
    } else if(mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'     
    }
}

function ataqueFuego () {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua () {
    ataqueJugador ='AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra () {
    ataqueJugador ='TIERRA'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO'
    } else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    } else{
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate(){
    
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("-ufff     EMPATE 😜")}
    else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("-GANASTE 😉")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo} 
    else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){ 
        crearMensaje("-GANASTE 😉")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo}
    else if(ataqueJugador  == 'TIERRA' && ataqueEnemigo == 'AGUA'){ 
        crearMensaje("-GANASTE 😉")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo}
    else{ 
        crearMensaje("-PERDISTE 🤣")
        vidasJugador --
        spanVidasJuagador.innerHTML = vidasJugador       
    }   
    
    revisarVidas()
}

function revisarVidas() {
    if(vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES GANASTE")
    } else if(vidasJugador == 0) {
        crearMensajeFinal("Los siento perdiste")
    }
}

function crearMensaje (resultado){
    
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo 
    ataquesDelJuagador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal (resultadoFinal){
       
    sectionMensajes.innerHTML = resultadoFinal 
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    Reiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()  
}

function aleatorio(min, max) {
    return Math.floor(Math.random()* (max - min + 1)+ min)
}

window.addEventListener('load',iniciarJuego)














