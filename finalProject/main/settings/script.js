let localUsers = JSON.parse(localStorage.getItem("users"))
let curentUser = JSON.parse(localStorage.getItem("curentUser"))
let userIndex
for (let index in localUsers) {
    if (localUsers[index].username == curentUser) {
        userIndex = index
    }
}
try {
    document.querySelector("html").setAttribute("data-bs-theme", JSON.parse(localStorage.getItem("users"))[userIndex].theme)
} catch (error) {
    console.log(error)
}
const darkThemeButton = document.querySelector("#dark")
const lightThemeButton = document.querySelector("#light")
const mainPageBtn = document.querySelector("#main-page-btn")
darkThemeButton.addEventListener("click", function () {
    console.log("clicked")
    localUsers = JSON.parse(localStorage.getItem("users"))
    curentUser = JSON.parse(localStorage.getItem("curentUser"))
    userIndex = 0
    for (let index in localUsers) {
        if (localUsers[index].username == curentUser) {
            userIndex = index
        }
    }
    localUsers[userIndex].theme = "dark"
    localStorage.removeItem("users")
    localStorage.setItem("users", JSON.stringify(localUsers))
})
lightThemeButton.addEventListener("click", function () {
    console.log("clicked")
    localUsers = JSON.parse(localStorage.getItem("users"))
    curentUser = JSON.parse(localStorage.getItem("curentUser"))
    userIndex = 0
    for (let index in localUsers) {
        if (localUsers[index].username == curentUser) {
            userIndex = index
        }
    }
    try {
        localUsers[userIndex].theme = "light"
    } catch (error) {
        console.log(error)
    }
    localStorage.removeItem("users")
    localStorage.setItem("users", JSON.stringify(localUsers))
})
mainPageBtn.addEventListener("click", function () {
    window.location.href = "../index.html"
})