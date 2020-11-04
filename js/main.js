let pages = 1
// let cacheCharacters = {}

async function charactersList(){
   // kolla i cache 
    const response = await fetch("http://swapi.dev/api/people/?page="+pages)
    const data = await response.json() 
    return data.results
}

async function nextPrevCharacters(){
    const nextPreviousCharacters = await charactersList()
    const prev = document.querySelector(".prev")
    const loading_char_prev = document.querySelector("#loader_char")
    const prevPage = document.querySelector(".pages")
    prevPage.innerText = "1" + " / " + "9"
    prev.addEventListener("click", function(event){
        hideDetailsList()
        hideCharInList(true)
        loading_char_prev.classList.add("loader") 
        if(pages > 1){
            pages--;
            prevPage.innerText = pages + " / " + "9"
            renderCharactersList()    
        }
        setTimeout(function(){  
            loading_char_prev.classList.remove("loader")
            hideCharInList(false)
        }, 1500); 
    })  

    const next = document.querySelector(".next")
    const loading_char = document.querySelector("#loader_char")
    const nextPage = document.querySelector(".pages")
    next.addEventListener("click", function(event){
        hideCharInList(true)
        loading_char.classList.add("loader")
        if(pages < 9){
            pages++; 
        } 
        nextPage.innerText =  pages + " / " + "9"  
        hideDetailsList()
        renderCharactersList()
        setTimeout(function(){  
            hideCharInList(false)
            loading_char.classList.remove("loader") 
        }, 1500); 
    })       
}

nextPrevCharacters()

function hideDetailsList(){
    const details = document.querySelectorAll(".clear")
    for(let currentInfo of details){
       currentInfo.classList.add("hidden")
    }
}

function showDetailsList(){
    const details = document.querySelectorAll(".clear")
    for(let currentInfo of details){
       currentInfo.classList.remove("hidden")
    }
}

function hideCharInList(boo){
    const hideCharList = document.querySelectorAll("li")
    for(let currentInfo of hideCharList){
        if(boo== true){
            currentInfo.classList.add("hidden")
        } else if(boo == false){
            currentInfo.classList.remove("hidden")
        }
    }
}

async function renderCharactersList(){
    const characters = await charactersList()
    for (let i = 0; i < characters.length; i++){
        document.querySelector(".char-"+i).innerHTML = characters[i].name
    }
    
    const elementOnLi = document.querySelectorAll("li") 
    for(let currentCharacter of elementOnLi){
        const loading_details = document.querySelector("#loader_details")
        const loadingPlanet = document.querySelector("#loader_planet")
        currentCharacter.addEventListener("click", function(event){
            loading_details.classList.add("loader") 
            loadingPlanet.classList.add("loader_planet") 
            showDetailsList()
            setTimeout(function(){
            for(let j = 0; j < elementOnLi.length; j++){
                if(currentCharacter == elementOnLi[j]){
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
                        loading_details.classList.remove("loader") 
                        loadingPlanet.classList.remove("loader_planet") 
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
        }, 1500);
        
        })         
    }      
}
renderCharactersList()