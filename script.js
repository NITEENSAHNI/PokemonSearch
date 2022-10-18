let tosearch;
let PokeArray = [];
let images ;
let pokename;
let i = 0;

function search()
{   
    tosearch = document.getElementById("tosearch").value 
    tosearch = tosearch.toLowerCase();
    fetch('https://pokeapi.co/api/v2/pokemon/'+tosearch).then((resolve)=>resolve.json()).then((PokeonObject)=>
    {
        
       images = PokeonObject.sprites.other["official-artwork"].front_default;
       console.log("this",images)
    }).catch((error)=>{
        console.log("pokemon not found 404",error)
    })
    document.getElementById("pokedex").innerHTML=tosearch.toUpperCase();
    
    
    
   document.getElementById("image").style.backgroundImage =`url("${images}")`;
   document.getElementById("container").style.backgroundColor="teal";
   

}
