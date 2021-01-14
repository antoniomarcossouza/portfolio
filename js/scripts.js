function openNav() {

    var x = document.getElementById("navigation");

    if (x.className === "navigation") {
        x.className += " menujs";
        document.getElementById("menu-hamburguer").innerHTML = "&Cross;"
    } else {
        x.className = "navigation";
        document.getElementById("menu-hamburguer").innerHTML = "&#9776;"
    }

}