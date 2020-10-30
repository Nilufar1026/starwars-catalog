const chooseList=document.querySelector(".char")
const cardDetailsTitle1 = document.querySelector(".title1")
const cardDetailsText1 = document.querySelector(".text1")
const cardDetailsTitle2 = document.querySelector(".title2")
const cardDetailsText2 = document.querySelector(".text2")

chooseList.addEventListener("click",function(){
    cardDetailsTitle1.classList.add("visible") 
    cardDetailsText1.classList.add("visible") 
    cardDetailsTitle2.classList.add("visible") 
    cardDetailsText2.classList.add("visible") 
})



 

// var starWarsPeopleList = document.querySelector('ul');
// fetch('https://swapi.dev/api/people/') 

// .then(function(response) { 
// console.log(response)
// })


