//hardcoded until it is stored in a DB
// let upcomingMeal1 = {"day": "Monday", "name": "recipe1", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
// let upcomingMeal2 = {"day": "Tuesday", "name": "recipe2", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
// let upcomingMeal3 = {"day": "Wednesday", "name": "recipe3", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
// let upcomingMeal4 = {"day": "Thursday", "name": "recipe4", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
// let upcomingMeal5 = {"day": "Friday", "name": "recipe5", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
// let upcomingMeal6 = {"day": "Saturday", "name": "recipe6", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
// let upcomingMeal7 = {"day": "Sunday", "name": "recipe7", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}
// let upcomingMeal8 = {"day": "Monday", "name": "recipe8", "ingredients": {"ingredient1": 1, "ingredient2": 2, "ingredient3": 3}}

let listOfUpcomingMeals = JSON.parse(window.localStorage.getItem("Upcoming Meals"))

if (listOfUpcomingMeals === null) {
    listOfUpcomingMeals = []
}

function upcomingMeals() {
    if (listOfUpcomingMeals.length === 0) {
        let mealCard = document.createElement("div")
        mealCard.classList.add("mealSelectCard")
        mealCard.classList.add("fixheight")
        mealCard.classList.add("UpcomingMealsTabs")
        mealCard.classList.add("card")

        let cardImage = document.createElement("img")
        cardImage.classList.add("card-img-top")
        cardImage.src ="https://i.pinimg.com/564x/d2/b2/dc/d2b2dc893543463bfdcf979f4889dd5c.jpg"
        
        let mealCardBody = document.createElement("div")
        mealCardBody.classList.add("cardButtons")
        mealCardBody.classList.add("card-body")

        let cardTitle = document.createElement("h5")
        let cardTitleText = document.createTextNode(`Click 'Plan My Meals!'`)
        cardTitle.classList.add("card-title")
        cardTitle.appendChild(cardTitleText)

        let cardDescription = document.createElement("p")
        let cardDescriptionText = document.createTextNode(`Plan to see upcoming meals.`)
        cardDescription.classList.add("card-text")
        cardDescription.appendChild(cardDescriptionText)

        let cardButton = document.createElement("button")
        let buttonText = document.createTextNode("Plan Meals!")
        cardButton.classList.add("widenButton")
        cardButton.classList.add("btn")
        cardButton.classList.add("btn-primary")
        cardButton.appendChild(buttonText)
        cardButton.addEventListener("click", function gotoplan() {window.location.href = 'daySelector.html'});

        mealCard.appendChild(cardImage)
        mealCard.appendChild(mealCardBody)
        mealCardBody.appendChild(cardTitle)
        mealCardBody.appendChild(cardDescription)
        mealCardBody.appendChild(cardButton)

        document.getElementById("upcomingTopTop").appendChild(mealCard)
    }
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
        let cardTitleText = document.createTextNode(`${listOfUpcomingMeals[upcomingMeal].name}`)
        cardTitle.classList.add("card-title")
        cardTitle.appendChild(cardTitleText)

        let cardDescription = document.createElement("p")
        let cardDescriptionText = document.createTextNode(`${listOfUpcomingMeals[upcomingMeal].description}`)
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


// let Ingredient1 = {name: "Ingredient1"}
// let Ingredient2 = {name: "Ingredient2"}
// let Ingredient3 = {name: "Ingredient3"}
// let Ingredient4 = {name: "Ingredient4"}
// let Ingredient5 = {name: "Ingredient5"}
// let Ingredient6 = {name: "Ingredient6"}
// let Ingredient7 = {name: "Ingredient7"}
// let Ingredient8 = {name: "Ingredient8"}

// ingredientList = [Ingredient1, Ingredient2, Ingredient3, Ingredient4, Ingredient5, Ingredient6, Ingredient7, Ingredient8]


function neededIngredients() {
    for (let meal=0; meal<listOfUpcomingMeals.length; meal++) {
        for (let ingredient in listOfUpcomingMeals[meal].ingredients){
        let ingredientBox = document.createElement("div")
        ingredientBox.classList.add("input-group")
        ingredientBox.classList.add("mb-3")
        
        let ingredientCheck = document.createElement("div")
        ingredientCheck.classList.add("input-group-text")
        
        let checkInputBox = document.createElement("input")
        checkInputBox.classList.add("form-check-input")
        checkInputBox.classList.add("mt-0")
        checkInputBox.type = "checkbox"

        
        let ingredientText = document.createElement("div")
        ingredientText.classList.add("form-control")
        document.getElementsByClassName("form-control").type = "text"
        ingredientText.innerHTML = `${ingredient}`
        
    
        document.getElementById("ingredientList").appendChild(ingredientBox)

        ingredientBox.appendChild(ingredientCheck)
        ingredientCheck.appendChild(checkInputBox)
        ingredientBox.appendChild(ingredientText)
    }
  }
}



//hardcoded until it is stored in a DB
let potentialMeal1 = {name: "Noodles", description: "Description of the meal", ingredients: {ingredient1: 1, ingredient2: 2, ingredient3: 3}}
let potentialMeal2 = {name: "Sadwiches", description: "Description of the meal", ingredients: {ingredient4: 1, ingredient5: 2, ingredient6: 3}}
let potentialMeal3 = {name: "Pizza", description: "Description of the meal", ingredients: {ingredient7: 1, ingredient8: 2, ingredient9: 3}}
let potentialMeal4 = {name: "Burgers", description: "Description of the meal", ingredients: {ingredient10: 1, ingredient11: 2, ingredient12: 3}}
let potentialMeal5 = {name: "Salad", description: "Description of the meal", ingredients: {ingredient13: 1, ingredient14: 2, ingredient15: 3}}
let potentialMeal6 = {name: "Pasta", description: "Description of the meal", ingredients: {ingredient16: 1, ingredient17: 2, ingredient18: 3}}
let potentialMeal7 = {name: "Omelette", description: "Description of the meal", ingredients: {ingredient19: 1, ingredient20: 2, ingredient21: 3}}
let potentialMeal8 = {name: "Cereal", description: "Description of the meal", ingredients: {ingredient22: 1, ingredient23: 2, ingredient24: 3}}
let potentialMeal9 = {name: "Tacos", description: "Description of the meal", ingredients: {ingredient25: 1, ingredient26: 2, ingredient27: 3}}
let potentialMeal10 = {name: "Burritos", description: "Description of the meal", ingredients: {ingredient28: 1, ingredient29: 2, ingredient30: 3}}
let potentialMeal11 = {name: "Hotdogs", description: "Description of the meal", ingredients: {ingredient31: 1, ingredient32: 2, ingredient33: 3}}
let potentialMeal12 = {name: "Chicken and rice", description: "Description of the meal", ingredients: {ingredient34: 1, ingredient35: 2, ingredient36: 3}}
let potentialMeal13 = {name: "Ribs", description: "Description of the meal", ingredients: {ingredient37: 1, ingredient38: 2, ingredient39: 3}}
let potentialMeal14 = {name: "French dip", description: "Description of the meal", ingredients: {ingredient40: 1, ingredient41: 2, ingredient42: 3}}
let potentialMeal15 = {name: "Enchiladas", description: "Description of the meal", ingredients: {ingredient43: 1, ingredient44: 2, ingredient45: 3}}
let potentialMeal16 = {name: "Salmon", description: "Description of the meal", ingredients: {ingredient46: 1, ingredient47: 2, ingredient48: 3}}

let listOfPotentialMeals = [potentialMeal1, potentialMeal2, potentialMeal3, potentialMeal4, potentialMeal5, potentialMeal6, potentialMeal7, potentialMeal8]

daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

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
        let cardTitleText = document.createTextNode(`${listOfPotentialMeals[potentialMeal].name}`)
        cardTitle.classList.add("card-title")
        cardTitle.appendChild(cardTitleText)

        let cardDescription = document.createElement("p")
        let cardDescriptionText = document.createTextNode(`${listOfPotentialMeals[potentialMeal].description}`)
        cardDescription.classList.add("card-text")
        cardDescription.appendChild(cardDescriptionText)

        let cardButton = document.createElement("button")
        let buttonText = document.createTextNode("View Meal")
        cardButton.classList.add("widenButton")
        cardButton.classList.add("btn")
        cardButton.classList.add("btn-primary")
        cardButton.appendChild(buttonText)
        cardButton.addEventListener('click', function() {
            mealSelected(listOfPotentialMeals[potentialMeal])
        })

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

function mealSelected(meal) {
    listOfUpcomingMeals.push(meal)
    localStorage.setItem("Upcoming Meals", JSON.stringify(listOfUpcomingMeals));

    console.log(new Date(Math.abs(window.localStorage.getItem("Date Planned") + (window.localStorage.getItem("Number Of Days Planned") * 24 * 60 * 60 * 1000))))
    
        // document.getElementById("dayOfWeek").innerHTML = (Math.abs(window.localStorage.getItem("Date Planned") + (window.localStorage.getItem("Number Of Days Planned") * 24 * 60 * 60 * 1000)))

    if (document.getElementById("dayOfWeek").innerHTML === "Sunday") {
        window.location.href = "home.html"
    } else {
        document.getElementById("dayOfWeek").innerHTML = daysOfWeek[(daysOfWeek.indexOf(document.getElementById("dayOfWeek").innerHTML) + 1)]
    }
    
}

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
        let cardTitleText = document.createTextNode(`${listOfPotentialMeals[potentialMeal].name}`)
        cardTitle.classList.add("card-title")
        cardTitle.appendChild(cardTitleText)

        let cardDescription = document.createElement("p")
        let cardDescriptionText = document.createTextNode(`${listOfPotentialMeals[potentialMeal].description}`)
        cardDescription.classList.add("card-text")
        cardDescription.appendChild(cardDescriptionText)

        let cardButton = document.createElement("button")
        let buttonText = document.createTextNode("Share Meal!")
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

function searchContacts() {
    while (document.getElementById("contactList").firstChild) {
        document.getElementById("contactList").removeChild(document.getElementById("contactList").firstChild);
    }

    if (document.getElementById("basic-url2").value === "") {
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
            contactText.innerHTML = `${contactList[contact].name}`
            
        
            document.getElementById("contactList").appendChild(contactBox)
    
            contactBox.appendChild(contactCheck)
            contactCheck.appendChild(checkInputBox)
            contactBox.appendChild(contactText)
        }
    } else {
        for (let contact=0; contact<contactList.length; contact++) {
            if (contactList[contact].name.toUpperCase().includes(document.getElementById("basic-url2").value.toUpperCase().split(" ").join(""))) {
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
                contactText.innerHTML = `${contactList[contact].name}`
                
            
                document.getElementById("contactList").appendChild(contactBox)
        
                contactBox.appendChild(contactCheck)
                contactCheck.appendChild(checkInputBox)
                contactBox.appendChild(contactText)
            }
        }
    }
}


function planUntil() {
    window.location.href = "planPage.html"

    const diffTime = Math.abs(new Date(`${document.getElementById("SelectedDate").value}`) - new Date())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))  

    window.localStorage.setItem('Date Planned', new Date())
    window.localStorage.setItem('Number Of Days to Plan', diffDays)
    window.localStorage.setItem('Number Of Days Planned', 0)
}

