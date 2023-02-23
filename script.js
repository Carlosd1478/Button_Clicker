function logout(login) {
    if(login.innerText == "Logout") {
        login.innerText = "Login";
    }
    else {
        login.innerText = "Logout";
    }
}

function hide(element){
    element.remove()
}

