document.getElementById("audio").src = "cancion1.mp3 ";

bodyStart = document.getElementById("bodyStartID");
seleccionPokemon = document.getElementById("seleccionPokemonDiv");
jugador1Nombre = document.getElementById("jugador1Nombre");
jugador2Nombre = document.getElementById("jugador2Nombre");
instrucciones = document.getElementById("Instrucciones");
instrucciones2 = document.getElementById("InstruccionesPelea");
resultadoRound = document.getElementById("resultadoRound");

//Funcion comenzar
function jugador1(){
console.log("Se ocultará")
bodyStart.style.display = "none";
seleccionPokemon.style.display ="block"

document.getElementById("winnerDiv1").style.display = "none";
document.getElementById("winnerDiv2").style.display = "none";



for (var i = 0; i < pokemons.length; i++) {
    console.log("pokemon es "+i);
    console.log(pokemons[i]);
    set_pokemon(pokemons[i]);
  }
}

/*------> Templates <------*/
let string_card = `
<div class=" card-pok" onmouseover="hover(this);" onclick="clickPokemon(this)" data-toggle="modal" data-target="#myModal">
  <img class="card-img-top" src="img-to-remplace" alt="Card image cap">
  <div class="card-body">
    <p class="card-text text-center" id="pok-title-card">title-to-remplace</p>
    <p class="card-text id-pok text-center" id="pkdx-num">num-of-pokemon</p>
  </div>
  <div class="overlay-pok">
  </div>
</div>
`;

// Get the modal
var modal = document.getElementById('exampleModal');

function set_pokemon(pokemons) {
    // Código para la tarjeta
    var div_pok = document.createElement('div');
    /*div_pok.className = "col-sm-6";
    div_pok.className = "col-md-4";
    div_pok.className = "col-lg-3";
    div_pok.className = "col-xl-2";*/
    div_pok.className = " card pok-container col-3 border border-dark";
    
    // Código para el contenedor
    var pokemons_container = document.getElementById('card-container');
    pokemons_container.appendChild(div_pok);

    if(pokemons.types == "fire"){
        div_pok.style.background = "linear-gradient(to top, red 0%, orange 50%)";
    }else if(pokemons.types == "poison"){
        div_pok.style.background = "linear-gradient(to top, purple 0%, violet 100%)";
    }else if(pokemons.types == "water"){
        div_pok.style.background = "linear-gradient(to top, rgb(56, 56, 250) 0%, skyblue 50%)";
    }else if(pokemons.types == "electric"){
        div_pok.style.background = "linear-gradient(to top, orange 0%, yellow 100%)";
    }else if(pokemons.types == "normal"){
        div_pok.style.background = "linear-gradient(to top, gray 0%, white 50%)";
    }else if(pokemons.types == "grass"){
        div_pok.style.background = "linear-gradient(to top, lightgreen 0%, white 80%)";
    }else if(pokemons.types == "dragon"){
        div_pok.style.background = "linear-gradient(to top, darkblue, rgb(56, 56, 250) 20%, darkblue 80%)";
    }else if(pokemons.types == "ice"){
        div_pok.style.background = "lightblue";
    }else if(pokemons.types == "psychic"){
        div_pok.style.background = "linear-gradient(to top, purple 0%, pink 50%)";
    }else if(pokemons.types == "bug"){
        div_pok.style.background = "linear-gradient(to top, green 0%, lightgreen 80%)";
    }else if(pokemons.types == "ground"){
        div_pok.style.background = "linear-gradient(to top, rgb(128, 90, 40) 0%, white 80%";
    }else if(pokemons.types == "fighting"){
        div_pok.style.background = "linear-gradient(to top, black 0%, rgba(201, 36, 36) 15%, black 85%) ";
    }else if(pokemons.types == "fairy"){  
        div_pok.style.background = "linear-gradient(to top, rgb(241, 140, 157)  0%, violet 40%, rgb(241, 140, 157) 80% )";
    }else if(pokemons.types[0] == "poison" && pokemons.types[1] == "grass" ){
        div_pok.style.background = "linear-gradient(to right, violet 0%, lightgreen 100%)";
    }else if(pokemons.types[0] == "flying" && pokemons.types[1] == "fire"){
        div_pok.style.background = "linear-gradient(to right,lightblue 0%, orange 100%)";
    }else if(pokemons.types[0] == "poison" && pokemons.types[1] == "bug"){
        div_pok.style.background = "linear-gradient(to right,violet 0%, green 100%)";
    }else if(pokemons.types[0] == "normal" && pokemons.types[1] == "flying"){
        div_pok.style.background = "linear-gradient(to right,white 0%, lightblue 100%)";
    }else if(pokemons.types[0] == "flying" && pokemons.types[1] == "bug"){
        div_pok.style.background = "linear-gradient(to right,lightblue 0%, green 100%)";
    }else if(pokemons.types[0] == "poison" && pokemons.types[1] == "ground"){
        div_pok.style.background = "linear-gradient(to right,violet 0%, rgb(192, 142, 77) 100%)";
    }else if(pokemons.types[0] == "flying" && pokemons.types[1] == "poison"){
        div_pok.style.background = "linear-gradient(to right,lightblue 0%, violet 100%)";
    }else if(pokemons.types[0] == "bug" && pokemons.types[1] == "grass"){
        div_pok.style.background = "linear-gradient(to right,green 0%, lightgreen 100%)";
    }else if(pokemons.types[0] == "fighting" && pokemons.types[1] == "water"){
        div_pok.style.background = "linear-gradient(to right, rgba(201, 36, 36, 0.856) 0%, lightblue 100%)";
    }else if(pokemons.types[0] == "poison" && pokemons.types[1] == "water"){
        div_pok.style.background = "linear-gradient(to right, violet 0%, lightblue 100%)";
    }else if(pokemons.types[0] == "ground" && pokemons.types[1] == "rock"){
        div_pok.style.background = "linear-gradient(to right, rgb(192, 142, 77) 0%, rgb(128, 90, 40) 100%)";
    }else if(pokemons.types[0] == "water" && pokemons.types[1] == "psychic"){
        div_pok.style.background = "linear-gradient(to right, lightblue 0%, pink 100%)";
    }else if(pokemons.types[0] == "steel" && pokemons.types[1] == "electric"){
        div_pok.style.background = "linear-gradient(to right, gray 0%, yellow 100%";
    }else if(pokemons.types[0] == "water" && pokemons.types[1] == "ice"){
        div_pok.style.background = "linear-gradient(to right, lightblue 0%, rgb(56, 56, 250) 100%)";
    }else if(pokemons.types[0] == "poison" && pokemons.types[1] == "ghost"){
        div_pok.style.background = "linear-gradient(to right, violet 0%, purple 100%)";
    }else if(pokemons.types[0] == "grass" && pokemons.types[1] == "psychic"){
        div_pok.style.background = "linear-gradient(to right, lightgreen 0%, pink 100%)";
    }else if(pokemons.types[0] == "ice" && pokemons.types[1] == "psychic"){
        div_pok.style.background = "linear-gradient(to right, rgb(56, 56, 250) 0%, pink 100%)";
    }else if(pokemons.types[0] == "rock" && pokemons.types[1] == "water"){
        div_pok.style.background = "linear-gradient(to right, rgb(128, 90, 40) 0%, lightblue 100%)";
    }else if(pokemons.types[0] == "flying" && pokemons.types[1] == "rock"){
        div_pok.style.background = "linear-gradient(to right,  lightblue 0%, rgb(128, 90, 40) 100%)";
    }else if(pokemons.types[0] == "flying" && pokemons.types[1] == "ice"){
        div_pok.style.background = "linear-gradient(to right,  lightblue 0%, rgb(56, 56, 250) 100%)";
    }else if(pokemons.types[0] == "flying" && pokemons.types[1] == "electric"){
        div_pok.style.background = "linear-gradient(to right,  lightblue 0%, yellow 100%)";
    }else if(pokemons.types[0] == "flying" && pokemons.types[1] == "dragon"){
        div_pok.style.background = "linear-gradient(to right,  lightblue 0%, darkblue 100%)";
    }else if(pokemons.types[0] == "flying" && pokemons.types[1] == "water"){
        div_pok.style.background = "linear-gradient(to right,  skyblue 0%, white 60%, rgb(56, 56, 250) 100%)";
    }else if(pokemons.types[0] == "fairy" && pokemons.types[1] == "psychic"){
        div_pok.style.background = "linear-gradient(to right, rgb(241, 140, 157)  0%, violet 50%, pink 100%)";
    }else if(pokemons.types[0]== "normal" && pokemons.types[1] == "fairy"){  
        div_pok.style.background = "linear-gradient(to right, white 0%, rgb(241, 140, 157) 70%)";
    }
    
    // Get title in string
    let title = pokemons.name;
    // Generate template with title
    let title_template = string_card.replace("title-to-remplace", title);
    // Get image in string
    let image = pokemons.art_url
    // Generate template with title
    let image_template = title_template.replace("img-to-remplace", image);
    // Get num pok
    let num_pok = pokemons.pkdx_id;
    // Generate final template
    let final_template = image_template.replace("num-of-pokemon", num_pok);
    console.log("Pokedex id es "+num_pok);
    // Add to container
    div_pok.insertAdjacentHTML('beforeend', final_template);
}

/*------> Hover functions <------*/
// Hover
function hover(element) {
    //console.log(element);
}
// Unhover
function unhover(element) {
    //console.log(element);
}
// Click
function clickPokemon(element) {
    console.log("Click en el elemeto "+element)
    console.log("Pokemon es "+element.getElementsByClassName("id-pok")[0].innerHTML);
    let num = element.getElementsByClassName("id-pok")[0].innerHTML - 1;
    openModal(num);
}

var mostrarBotonAzul = 0;
/*------> Modal y seleccion de pokemons para jugadores <------*/
function openModal(id_pokedex) {

    if(mostrarBotonAzul == 0){        // Sleccion del pokemon del jugador 1
        document.getElementById("btnSelecJugador2").style.display = "none";
        document.getElementById("pokemonJugador1Id").src = pokemons[id_pokedex].art_url;
        document.getElementById("winnerImage").src = pokemons[id_pokedex].art_url;
    } else{       // Sleccion del pokemon del jugador 2
        document.getElementById("btnSelecJugador2").style.display = "block";
        document.getElementById("pokemonJugador2Id").src = pokemons[id_pokedex].art_url;
        document.getElementById("winnerImage2").src = pokemons[id_pokedex].art_url;
        mostrarBotonAzul = 0; 
        //Se pasa a la pantalla pelea
    }
    console.log(pokemons[id_pokedex]);
    document.getElementById("backdrop").style.display = "block";
    console.log(document.getElementById("pokemonLabelTitle"));
    document.getElementById("pokemonLabelTitle").innerHTML = "#"+id_pokedex+" "
    +pokemons[id_pokedex].name + "  ("+ pokemons[id_pokedex].types+ ")";
    document.getElementById("img_popup").src = pokemons[id_pokedex].art_url;
    document.getElementById("pok-description-popup").innerHTML = pokemons[id_pokedex].description;
    document.getElementById("exampleModal").style.display = "block";
    document.getElementById("exampleModal").className += "show";

    // let title = element.getElementById("modal-title");
}

function closeModal() {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("exampleModal").style.display = "none"
    document.getElementById("exampleModal").className += document.getElementById("exampleModal").className.replace("show", "")
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal()
    }
}

// Sleccion del pokemon del jugador 1
function selectPokeJugador1(){
    console.log("jugador 1 selecciono")
     document.getElementById("btnSelecJugador1").style.display = "none";
     instrucciones.innerHTML = "Jugador 2 escoge tu pokémon";
     closeModal();
    mostrarBotonAzul = 1;     
}

// Sleccion del pokemon del jugador 1
function pelea(){
    closeModal();
    //Se muestra de nuevo el boton rojo de seleccion para siguiente partida
    document.getElementById("btnSelecJugador1").style.display = "block";

    instrucciones2.innerHTML = " Deja a tu rival sin puntos de vida.<br> Ataque vence a Derribo. <br>Derribo vence a Guardia. <br> Guardia vence a Ataque. <br> Jugador 1 escoge primero.";
    seleccionPokemon.style.display = "none";
    document.getElementById("peleadiv").style.display = "block";
    document.getElementById("audio").src = "cancion2.mp3";
    console.log(" la cancion es" + document.getElementById("audio").src)
}

var botonPelea= 0;

function botonPeleaAtacarJ1(){
    botonPelea = 1;
    console.log(botonPelea)
}
function botonPeleaDefenderJ1(){
    botonPelea = 2;
    console.log(botonPelea)
}
function botonPeleaDerribarJ1(){
    botonPelea = 3;
    console.log(botonPelea)
}

var botonPeleaJ2= 0;
function botonPeleaAtacarJ2(){
    botonPeleaJ2 = 1;
    console.log(botonPeleaJ2)
    resultadoPelea()
}
function botonPeleaDefenderJ2(){
    botonPeleaJ2 = 2;
    console.log(botonPeleaJ2)
    resultadoPelea()
}
function botonPeleaDerribarJ2(){
    botonPeleaJ2 = 3;
    console.log(botonPeleaJ2)
    resultadoPelea()
}

//Preguntar que onda con esto!!!! <-----------
progreso2 = 100
$('#progressVidaJ2').css('width', progreso2 + '%');

progreso1 = 100
$('#progressVidaJ1').css('width', progreso1 + '%');

function resultadoPelea(){
    if(botonPelea == 1 && botonPeleaJ2 == 3){
        resultadoRound.innerHTML = "Jugador 1 gana el round"
        progreso2 -=25;
        $('#progressVidaJ2').css('width', progreso2 + '%');
        console.log("Jugador 1 gana el round")
    }else if(botonPelea == 1 && botonPeleaJ2 == 2){
        progreso1 -= 25
        $('#progressVidaJ1').css('width', progreso1 + '%');
        resultadoRound.innerHTML = "Jugador 2 gana el round"
        console.log("jugador 2 gana el round")
    }else if(botonPelea == 2 && botonPeleaJ2 == 1){
        resultadoRound.innerHTML = "Jugador 1 gana el round"
        progreso2 -=25;
        $('#progressVidaJ2').css('width', progreso2 + '%');
        console.log("jugador 1 gana el round")
    }else if(botonPelea == 2 && botonPeleaJ2 == 3){
        progreso1 -= 25
        $('#progressVidaJ1').css('width', progreso1 + '%');
        resultadoRound.innerHTML = "Jugador 2 gana el round"
        console.log("jugador 2 gana el round")
    }else if(botonPelea == 3 && botonPeleaJ2 == 1){
        progreso1 -= 25
        $('#progressVidaJ1').css('width', progreso1 + '%');
        resultadoRound.innerHTML = "Jugador 2 gana el round"
        console.log("jugador 2 gana el round")
    }else if(botonPelea == 3 && botonPeleaJ2 == 2){
        resultadoRound.innerHTML = "Jugador 1 gana el round"
        progreso2 -=25;
        $('#progressVidaJ2').css('width', progreso2 + '%');
        console.log("jugador 1 gana el round")
    } else{
        resultadoRound.innerHTML = "Empate"
        console.log("empate")
    }

    if(progreso1 == 0){
        felicidadesJ2()
        console.log("El J1 gano")
    } else if (progreso2 == 0){
        felicidadesJ1()
        console.log("El J2 gano")
    }
}

function felicidadesJ1(){
    document.getElementById("peleadiv").style.display = "none";
    document.getElementById("winnerDiv1").style.display = "block";
    progreso2 = 100
    $('#progressVidaJ2').css('width', progreso2 + '%');

    progreso1 = 100
    $('#progressVidaJ1').css('width', progreso1 + '%');
    document.getElementById("audio").src = "Victory (Gym Leader) - Pokémon Sword and Shield OST (Gamerip).mp3";

}

function felicidadesJ2(){
    document.getElementById("peleadiv").style.display = "none";
    document.getElementById("winnerDiv2").style.display = "block";
    progreso2 = 100
    $('#progressVidaJ2').css('width', progreso2 + '%');

    progreso1 = 100
    $('#progressVidaJ1').css('width', progreso1 + '%');
    document.getElementById("audio").src = "Victory (Gym Leader) - Pokémon Sword and Shield OST (Gamerip).mp3 ";

}

