const pages = 1

async function charactersList(page){
   
    const response = await fetch("https://swapi.dev/api/people/")
    const data = await response.json() 
    return data.results
}

async function renderCharactersList(){
    const characters = await charactersList(pages)
    for (let i = 0; i < characters.length; i++){
        document.querySelector(".char-"+i).innerText = characters[i].name
    }

    const elementLi = document.querySelectorAll("li") 
    for(let currentCharacter of elementLi){
        currentCharacter.addEventListener("click", function(event){
            for(let j = 0; j < elementLi.length; j++){
                if(currentCharacter == elementLi[j]){
                    document.querySelector(".name").innerText = characters[j].name
                    document.querySelector(".height").innerText = "Height: " + characters[j].height
                    document.querySelector(".mass").innerText = "Mass: " + characters[j].mass 
                    document.querySelector(".hair_color").innerText = "Hair color: " + characters[j].hair_color
                    document.querySelector(".skin_color").innerText = "Skin color: " + characters[j].skin_color 
                    document.querySelector(".eye_color").innerText = "Eye color: " + characters[j].eye_color
                    document.querySelector(".birth_year").innerText = "Birth year: " + characters[j].birth_year
                    document.querySelector(".gender").innerText = "Gender: " + characters[j].gender
                    
                    fetch(characters[j].homeworld)
                    .then((resp) => resp.json())
                    .then(function(data) {
                        document.querySelector(".name_planet").innerText =  data.name
                        document.querySelector(".rotation_period").innerText =  "Rotation period: " + data.rotation_period
                        document.querySelector(".orbital_period").innerText =  "Orbital period: " + data.orbital_period
                        document.querySelector(".diameter").innerText =  "Diameter: " + data.diameter
                        document.querySelector(".climate").innerText =  "Climate: " + data.climate
                        document.querySelector(".gravity").innerText =  "Gravity: " + data.gravity
                        document.querySelector(".terrain").innerText =  "Terrain: " + data.terrain
                    })                  
                } 
            }           
        })         
    }   
}

renderCharactersList()

const next=document.querySelector(".next")
const previous=document.querySelector(".prev")
var i = 0;
next.addEventListener("click",function(){
    if (i < 8 ) {
        i++;
    } else if (i = 8) {
        i = 1;
    }
    document.querySelector(".number").innerText = i;
  
 })

 previous.addEventListener("click",function(){
    if (i > 1) {
        --i;
    } else if (i = 1) {
        i = 8;
    }
    document.querySelector(".number").innerText = i;
  
 })


