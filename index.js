let ErrorThrown = false;
function login() {
    if (document.getElementById("Username").value === "") {
        if (ErrorThrown === false) {
            let ErrorDiv = document.createElement("div");
            let ErrorDivText = document.createTextNode("You need to enter a username!")
            ErrorDiv.appendChild(ErrorDivText);
            let LoginBox = document.getElementById("UsernameBox");
            LoginBox.after(ErrorDiv);
            ErrorDiv.classList.add("width80");
            ErrorDiv.classList.add("input-group");
            ErrorDiv.classList.add("mb-3");
            document.getElementById("UsernameBox").classList.remove("mb-3");
            ErrorThrown = true;
        }
    } else {
        localStorage.setItem("Username", document.getElementById("Username").value);
        window.location.href = "home.html";
    }
}