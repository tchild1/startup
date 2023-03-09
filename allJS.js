//hardcoded until it is stored in a DB
let upcomingMeal1 = {"day": "Monday", "name": "recipe1", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let upcomingMeal2 = {"day": "Tuesday", "name": "recipe2", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let upcomingMeal3 = {"day": "Wednesday", "name": "recipe3", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let upcomingMeal4 = {"day": "Thursday", "name": "recipe4", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let upcomingMeal5 = {"day": "Friday", "name": "recipe5", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let upcomingMeal6 = {"day": "Saturday", "name": "recipe6", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let upcomingMeal7 = {"day": "Sunday", "name": "recipe7", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
let upcomingMeal8 = {"day": "Monday", "name": "recipe8", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}

let listOfUpcomingMeals = [upcomingMeal1, upcomingMeal2, upcomingMeal3, upcomingMeal4, upcomingMeal5, upcomingMeal6, upcomingMeal7, upcomingMeal8]

function upcomingMeals() {
    for (let upcomingMeal=0; upcomingMeal<listOfUpcomingMeals.length; upcomingMeal++) {
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
        let cardTitleText = document.createTextNode(`${listOfUpcomingMeals[upcomingMeal].day}`)
        cardTitle.classList.add("card-title")
        cardTitle.appendChild(cardTitleText)

        let cardDescription = document.createElement("p")
        let cardDescriptionText = document.createTextNode(`${listOfUpcomingMeals[upcomingMeal].name}`)
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

        if (upcomingMeal<2) {
            document.getElementById("upcomingTopTop").appendChild(mealCard)
        } else if (upcomingMeal<4) {
            document.getElementById("upcomingTopBottom").appendChild(mealCard)
        } else if (upcomingMeal<6) {
            document.getElementById("upcomingBottomTop").appendChild(mealCard)
        } else if (upcomingMeal<8) {
            document.getElementById("upcomingBottomBottom").appendChild(mealCard)
        }
    }
}


class recipe {
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }
}

function addrecipe() {
    //create new recipe object
    new recipe(document.getElementById("RecipeName").value, document.getElementById("RecipeIngredients").value);

    //store this recipe in database
    localStorage.setItem("RecipeName", document.getElementById("RecipeName").value);
    localStorage.setItem("RecipeIngredients", document.getElementById("RecipeIngredients").value);

    //clear text boxes
    document.getElementById("RecipeIngredients").value = "";
    document.getElementById("RecipeName").value = "";

    //send message confirming that the recepe was created
    let confirmationMessage = document.createElement("div");
    let confirmationMessageText = document.createTextNode("Recipe Added!");
    confirmationMessage.appendChild(confirmationMessageText);
    let addrecipeButton = document.getElementById("addRecipeButton");
    addrecipeButton.after(confirmationMessage);
    confirmationMessage.style.textAlign = "center"

    //remove the message after 3 seconds
    setTimeout(() => confirmationMessage.remove(),3000)
}


let Ingredient1 = {name: "Ingredient1"}
let Ingredient2 = {name: "Ingredient2"}
let Ingredient3 = {name: "Ingredient3"}
let Ingredient4 = {name: "Ingredient4"}
let Ingredient5 = {name: "Ingredient5"}
let Ingredient6 = {name: "Ingredient6"}
let Ingredient7 = {name: "Ingredient7"}
let Ingredient8 = {name: "Ingredient8"}

ingredientList = [Ingredient1, Ingredient2, Ingredient3, Ingredient4, Ingredient5, Ingredient6, Ingredient7, Ingredient8]


function neededIngredients() {
    for (let ingredient=0; ingredient<ingredientList.length; ingredient++) {
        let ingredientBox = document.createElement("div")
        ingredientBox.classList.add("input-group")
        ingredientBox.classList.add("mb-3")
        
        let ingredientCheck = document.createElement("div")
        ingredientCheck.classList.add("input-group-text")
        
        let checkInputBox = document.createElement("input")
        checkInputBox.setAttribute("id", `${ingredient}`)
        checkInputBox.classList.add("form-check-input")
        checkInputBox.classList.add("mt-0")
        checkInputBox.type = "checkbox"

        
        let ingredientText = document.createElement("div")
        ingredientText.classList.add("form-control")
        document.getElementsByClassName("form-control").type = "text"
        ingredientText.innerHTML = `Ingredient ${ingredient + 1}`
        
    
        document.getElementById("ingredientList").appendChild(ingredientBox)

        ingredientBox.appendChild(ingredientCheck)
        ingredientCheck.appendChild(checkInputBox)
        ingredientBox.appendChild(ingredientText)
    }
}



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

