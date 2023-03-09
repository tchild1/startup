//hardcoded until it is stored in a DB
let potentialMeal1 = {"day": "Monday", "name": "recipe1", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let potentialMeal2 = {"day": "Tuesday", "name": "recipe2", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let potentialMeal3 = {"day": "Wednesday", "name": "recipe3", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let potentialMeal4 = {"day": "Thursday", "name": "recipe4", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let potentialMeal5 = {"day": "Friday", "name": "recipe5", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let potentialMeal6 = {"day": "Saturday", "name": "recipe6", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let potentialMeal7 = {"day": "Sunday", "name": "recipe7", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let potentialMeal8 = {"day": "Monday", "name": "recipe8", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}

let listOfPotentialMeals = [potentialMeal1, potentialMeal2, potentialMeal3, potentialMeal4, potentialMeal5, potentialMeal6, potentialMeal7, potentialMeal8]

function potentialMeals() {
    for (let potentialMeal=0; potentialMeal<listOfPotentialMeals.length; potentialMeal++) {
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
        let cardTitleText = document.createTextNode(`${listOfPotentialMeals[potentialMeal].day}`)
        cardTitle.classList.add("card-title")
        cardTitle.appendChild(cardTitleText)

        let cardDescription = document.createElement("p")
        let cardDescriptionText = document.createTextNode(`${listOfPotentialMeals[potentialMeal].name}`)
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

        if (potentialMeal<2) {
            document.getElementById("upcomingTopTop").appendChild(mealCard)
        } else if (potentialMeal<4) {
            document.getElementById("upcomingTopBottom").appendChild(mealCard)
        } else if (potentialMeal<6) {
            document.getElementById("upcomingBottomTop").appendChild(mealCard)
        } else if (potentialMeal<8) {
            document.getElementById("upcomingBottomBottom").appendChild(mealCard)
        }
    }
}



