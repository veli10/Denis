let localUsers = JSON.parse(localStorage.getItem("users"))
let curentUser
try {
    curentUser = JSON.parse(localStorage.getItem("curentUser"))
    
} catch (error) {
    console.log(error)
}
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
const logInBtn = document.querySelector(".log-in")
const logOutBtn = document.querySelector(".log-out")
const myComputersBtn = document.querySelector(".my-computers")
const computerShopBtn = document.querySelector(".computer-shop")
const settingsBtn = document.querySelector("#settings")
console.log(settingsBtn)
const h3 = document.querySelector("h3")
if (localStorage.getItem("curentUser")) {
    logInBtn.style.display = "none"
    h3.innerHTML = `User: ${JSON.parse(localStorage.getItem("curentUser"))}`
} else {
    logOutBtn.style.display = "none"
    myComputersBtn.style.display = "none"
}
logOutBtn.addEventListener("click", function(){
    localStorage.removeItem("curentUser")
    h3.innerHTML = `User: `
    this.style.display = "none"
    myComputersBtn.style.display = "none"
    logInBtn.style.display = "inline"
})
logInBtn.addEventListener("click", function(){
    window.location.href = "../login/index.html"
})
myComputersBtn.addEventListener("click", function(){
    window.location.href = "./myComputers/index.html"
})
computerShopBtn.addEventListener("click", function(){
    window.location.href = "./computerShop/index.html"
})
settingsBtn.addEventListener("click", function() {
    window.location.href = "../main/settings/index.html"
})