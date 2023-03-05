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