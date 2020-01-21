

function color() {
    let colores=document.getElementById("obtener").value;
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${colores}`)
    .then(function (colorear) {
        document.body.style.background=colorear.data.color.name;  
        console.log(colorear.data.color.name);
    })

}

document.getElementById("nombre").addEventListener("click",llamar);

function llamar() {
    color()
    let llamarNombre=document.getElementById("obtener").value;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${llamarNombre}`)
    .then(function(informacion) {
        let img = `<img src="${informacion.data.sprites.front_default}" >`
         document.getElementById("imagen").innerHTML=img;
         let info = informacion.data.name
         document.getElementById("datos").innerHTML="Nombre:"+info; 
         let peso = informacion.data.weight;
         document.getElementById("peso").innerHTML="Peso:"+peso;
        console.log(informacion.data.name);
        console.log(informacion.data.weight);
        let habilidades="";
        for (let i = 0; i <informacion.data.abilities.length ; i++) {
            
            habilidades+=informacion.data.abilities[i].ability.name+" ";
        }
        document.getElementById("habilidades1") .innerHTML= "Habilidades:"+habilidades; 
        console.log(habilidades);

        let estadisticas="";
        
        for (let i = 0; i < informacion.data.stats.length; i++) {
            estadisticas+=informacion.data.stats[i].stat.name+" :"+informacion.data.stats[i].base_stat+" ";
            
        }
        document.getElementById("estadisticas").innerHTML= "Estadisticas:"+estadisticas;
        console.log(estadisticas);
        let tipo;
        for (let i = 0; i < informacion.data.types.length; i++) {
            
            tipo=informacion.data.types[i].type.name;
        }
        document.getElementById("tipo").innerHTML="Tipo:"+tipo;
    })
}