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
