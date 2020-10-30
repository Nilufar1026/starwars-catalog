const chooseList=document.querySelector(".char")
const cardDetailsTitle1 = document.querySelector(".title1")
const cardDetailsText1 = document.querySelector(".text1")
const cardDetailsTitle2 = document.querySelector(".title2")
const cardDetailsText2 = document.querySelector(".text2")

function showDetails(){
    cardDetailsTitle1.classList.add("visible") 
    cardDetailsText1.classList.add("visible") 
    cardDetailsTitle2.classList.add("visible") 
    cardDetailsText2.classList.add("visible") 
}
function hideDetails(){
    cardDetailsTitle1.classList.remove("visible") 
    cardDetailsText1.classList.remove("visible") 
    cardDetailsTitle2.classList.remove("visible") 
    cardDetailsText2.classList.remove("visible") 
}
// chooseList.addEventListener("click",showDetails)

chooseList.addEventListener("click",function(event){
    if(event.type=="click"){
        showDetails()
    }else{
        hideDetails()
    }
})




 

// var starWarsPeopleList = document.querySelector('ul');
// fetch('https://swapi.dev/api/people/') 

// .then(function(response) { 
// console.log(response)
// })


