let shareableMeal1 = {"day": "Monday", "name": "recipe1", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let shareableMeal2 = {"day": "Tuesday", "name": "recipe2", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let shareableMeal3 = {"day": "Wednesday", "name": "recipe3", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let shareableMeal4 = {"day": "Thursday", "name": "recipe4", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let shareableMeal5 = {"day": "Friday", "name": "recipe5", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let shareableMeal6 = {"day": "Saturday", "name": "recipe6", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let shareableMeal7 = {"day": "Sunday", "name": "recipe7", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let shareableMeal8 = {"day": "Monday", "name": "recipe8", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}

let listOfshareableMeals = [shareableMeal1, shareableMeal2, shareableMeal3, shareableMeal4, shareableMeal5, shareableMeal6, shareableMeal7, shareableMeal8]

let Contact1 = {name: "Contact1"}
let Contact2 = {name: "Contact2"}
let Contact3 = {name: "Contact3"}
let Contact4 = {name: "Contact4"}
let Contact5 = {name: "Contact5"}
let Contact6 = {name: "Contact6"}
let Contact7 = {name: "Contact7"}
let Contact8 = {name: "Contact8"}

contactList = [Contact1, Contact2, Contact3, Contact4, Contact5, Contact6, Contact7, Contact8]



function shareableMeals() {
    for (let shareableMeal=0; shareableMeal<listOfshareableMeals.length; shareableMeal++) {
        let mealCard = document.createElement("div")
        mealCard.classList.add("mealSelectCard")
        mealCard.classList.add("fixheight")
        mealCard.classList.add("UpcomingMealsTabs")
        mealCard.classList.add("card")

        let cardImage = document.createElement("img")
        cardImage.classList.add("card-img-top")
        cardImage.src ="https://i.pinimg.com/474x/65/00/06/650006cec1a1292d5924c110252f4453.jpg"
        
        let mealCardBody = document.createElement("div")
        mealCardBody.classList.add("cardButtons")
        mealCardBody.classList.add("card-body")

        let cardTitle = document.createElement("h5")
        let cardTitleText = document.createTextNode(`${listOfshareableMeals[shareableMeal].day}`)
        cardTitle.classList.add("card-title")
        cardTitle.appendChild(cardTitleText)

        let cardDescription = document.createElement("p")
        let cardDescriptionText = document.createTextNode(`${listOfshareableMeals[shareableMeal].name}`)
        cardDescription.classList.add("card-text")
        cardDescription.appendChild(cardDescriptionText)

        let cardButton = document.createElement("button")
        let buttonText = document.createTextNode("View Meal")
        cardButton.classList.add("widenButton")
        cardButton.classList.add("btn")
        cardButton.classList.add("btn-primary")
        cardButton.appendChild(buttonText)

        mealCard.appendChild(cardImage)
        mealCard.appendChild(mealCardBody)
        mealCardBody.appendChild(cardTitle)
        mealCardBody.appendChild(cardDescription)
        mealCardBody.appendChild(cardButton)

        if (shareableMeal<2) {
            document.getElementById("upcomingTopTop").appendChild(mealCard)
        } else if (shareableMeal<4) {
            document.getElementById("upcomingTopBottom").appendChild(mealCard)
        } else if (shareableMeal<6) {
            document.getElementById("upcomingBottomTop").appendChild(mealCard)
        } else if (shareableMeal<8) {
            document.getElementById("upcomingBottomBottom").appendChild(mealCard)
        }
    }

    for (let contact=0; contact<contactList.length; contact++) {
        let contactBox = document.createElement("div")
        contactBox.classList.add("input-group")
        contactBox.classList.add("mb-3")
        
        let contactCheck = document.createElement("div")
        contactCheck.classList.add("input-group-text")
        
        let checkInputBox = document.createElement("input")
        checkInputBox.setAttribute("id", `${contact}`)
        checkInputBox.classList.add("form-check-input")
        checkInputBox.classList.add("mt-0")
        checkInputBox.type = "checkbox"

        
        let contactText = document.createElement("div")
        contactText.classList.add("form-control")
        document.getElementsByClassName("form-control").type = "text"
        contactText.innerHTML = `contact ${contact + 1}`
        
    
        document.getElementById("contactList").appendChild(contactBox)

        contactBox.appendChild(contactCheck)
        contactCheck.appendChild(checkInputBox)
        contactBox.appendChild(contactText)
    }
}

function contacts() {
    
}

