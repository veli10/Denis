const mainPageBtn = document.querySelector("#main-page-btn")
const categoriesButtons = document.querySelectorAll(".search-category")
const detailsButtons = document.querySelectorAll(".details-button")
const detailsModal = document.querySelector("#computer-details")
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
localUsers = JSON.parse(localStorage.getItem("users"))
mainPageBtn.addEventListener("click", function () {
    window.location.href = "../index.html"
})
for (let index in localUsers) {
    for (let computer in localUsers[index].computers) {
        if (localUsers[index].computers[computer].category == "Acer") {
            document.querySelector("#acer").innerHTML += `
            <div class="computer">
                <img src="${localUsers[index].computers[computer].image}" alt="">
                <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
                <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
                <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
                <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
                <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
                <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
                <div class="info">
                    <div class="category">${localUsers[index].computers[computer].category}</div>
                    <div class="name">${localUsers[index].computers[computer].name}</div>
                    <div class="price">${localUsers[index].computers[computer].price}</div>
                    <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
                    <div class="new">${localUsers[index].computers[computer].new}</div>
                    <div class="image">${localUsers[index].computers[computer].image}</div>
                    <div class="ram">${localUsers[index].computers[computer].ram}</div>
                    <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
                    <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
                    <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
                    <div class="os">${localUsers[index].computers[computer].os}</div>
                    <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
                    <div class="phone-number">${localUsers[index].phoneNumber}</div>
                </div>
            </div>
            `
        } else if (localUsers[index].computers[computer].category == "Hp") {
            document.querySelector("#hp").innerHTML += `
            <div class="computer">
                <img src="${localUsers[index].computers[computer].image}" alt="">
                <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
                <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
                <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
                <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
                <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
                <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
                <div class="info">
                    <div class="category">${localUsers[index].computers[computer].category}</div>
                    <div class="name">${localUsers[index].computers[computer].name}</div>
                    <div class="price">${localUsers[index].computers[computer].price}</div>
                    <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
                    <div class="new">${localUsers[index].computers[computer].new}</div>
                    <div class="image">${localUsers[index].computers[computer].image}</div>
                    <div class="ram">${localUsers[index].computers[computer].ram}</div>
                    <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
                    <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
                    <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
                    <div class="os">${localUsers[index].computers[computer].os}</div>
                    <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
                    <div class="phone-number">${localUsers[index].phoneNumber}</div>
                </div>
            </div>
            `
        } else if (localUsers[index].computers[computer].category == "Asus") {
            document.querySelector("#asus").innerHTML += `
            <div class="computer">
                <img src="${localUsers[index].computers[computer].image}" alt="">
                <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
                <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
                <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
                <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
                <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
                <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
                <div class="info">
                    <div class="category">${localUsers[index].computers[computer].category}</div>
                    <div class="name">${localUsers[index].computers[computer].name}</div>
                    <div class="price">${localUsers[index].computers[computer].price}</div>
                    <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
                    <div class="new">${localUsers[index].computers[computer].new}</div>
                    <div class="image">${localUsers[index].computers[computer].image}</div>
                    <div class="ram">${localUsers[index].computers[computer].ram}</div>
                    <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
                    <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
                    <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
                    <div class="os">${localUsers[index].computers[computer].os}</div>
                    <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
                    <div class="phone-number">${localUsers[index].phoneNumber}</div>
                </div>
            </div>
            `
        } else if (localUsers[index].computers[computer].category == "Dell") {
            document.querySelector("#dell").innerHTML += `
            <div class="computer">
                <img src="${localUsers[index].computers[computer].image}" alt="">
                <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
                <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
                <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
                <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
                <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
                <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
                <div class="info">
                    <div class="category">${localUsers[index].computers[computer].category}</div>
                    <div class="name">${localUsers[index].computers[computer].name}</div>
                    <div class="price">${localUsers[index].computers[computer].price}</div>
                    <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
                    <div class="new">${localUsers[index].computers[computer].new}</div>
                    <div class="image">${localUsers[index].computers[computer].image}</div>
                    <div class="ram">${localUsers[index].computers[computer].ram}</div>
                    <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
                    <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
                    <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
                    <div class="os">${localUsers[index].computers[computer].os}</div>
                    <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
                    <div class="phone-number">${localUsers[index].phoneNumber}</div>
                </div>
            </div>
            `
        } else if (localUsers[index].computers[computer].category == "Mac") {
            document.querySelector("#mac").innerHTML += `
            <div class="computer">
                <img src="${localUsers[index].computers[computer].image}" alt="">
                <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
                <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
                <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
                <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
                <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
                <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
                <div class="info">
                    <div class="category">${localUsers[index].computers[computer].category}</div>
                    <div class="name">${localUsers[index].computers[computer].name}</div>
                    <div class="price">${localUsers[index].computers[computer].price}</div>
                    <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
                    <div class="new">${localUsers[index].computers[computer].new}</div>
                    <div class="image">${localUsers[index].computers[computer].image}</div>
                    <div class="ram">${localUsers[index].computers[computer].ram}</div>
                    <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
                    <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
                    <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
                    <div class="os">${localUsers[index].computers[computer].os}</div>
                    <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
                    <div class="phone-number">${localUsers[index].phoneNumber}</div>
                </div>
            </div>
            `
        } else if (localUsers[index].computers[computer].category == "Lenovo") {
            document.querySelector("#lenovo").innerHTML += `
            <div class="computer">
                <img src="${localUsers[index].computers[computer].image}" alt="">
                <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
                <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
                <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
                <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
                <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
                <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
                <div class="info">
                    <div class="category">${localUsers[index].computers[computer].category}</div>
                    <div class="name">${localUsers[index].computers[computer].name}</div>
                    <div class="price">${localUsers[index].computers[computer].price}</div>
                    <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
                    <div class="new">${localUsers[index].computers[computer].new}</div>
                    <div class="image">${localUsers[index].computers[computer].image}</div>
                    <div class="ram">${localUsers[index].computers[computer].ram}</div>
                    <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
                    <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
                    <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
                    <div class="os">${localUsers[index].computers[computer].os}</div>
                    <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
                    <div class="phone-number">${localUsers[index].phoneNumber}</div>
                </div>
            </div>
            `
        } else if (localUsers[index].computers[computer].category == "Lg") {
            document.querySelector("#lg").innerHTML += `
            <div class="computer">
                <img src="${localUsers[index].computers[computer].image}" alt="">
                <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
                <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
                <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
                <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
                <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
                <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
                <div class="info">
                    <div class="category">${localUsers[index].computers[computer].category}</div>
                    <div class="name">${localUsers[index].computers[computer].name}</div>
                    <div class="price">${localUsers[index].computers[computer].price}</div>
                    <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
                    <div class="new">${localUsers[index].computers[computer].new}</div>
                    <div class="image">${localUsers[index].computers[computer].image}</div>
                    <div class="ram">${localUsers[index].computers[computer].ram}</div>
                    <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
                    <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
                    <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
                    <div class="os">${localUsers[index].computers[computer].os}</div>
                    <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
                    <div class="phone-number">${localUsers[index].phoneNumber}</div>
                </div>
            </div>
            `
        } else if (localUsers[index].computers[computer].category == "Casper") {
            document.querySelector("#casper").innerHTML += `
            <div class="computer">
                <img src="${localUsers[index].computers[computer].image}" alt="">
                <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
                <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
                <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
                <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
                <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
                <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
                <div class="info">
                    <div class="category">${localUsers[index].computers[computer].category}</div>
                    <div class="name">${localUsers[index].computers[computer].name}</div>
                    <div class="price">${localUsers[index].computers[computer].price}</div>
                    <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
                    <div class="new">${localUsers[index].computers[computer].new}</div>
                    <div class="image">${localUsers[index].computers[computer].image}</div>
                    <div class="ram">${localUsers[index].computers[computer].ram}</div>
                    <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
                    <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
                    <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
                    <div class="os">${localUsers[index].computers[computer].os}</div>
                    <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
                    <div class="phone-number">${localUsers[index].phoneNumber}</div>
                </div>
            </div>
            `
        } else if (localUsers[index].computers[computer].category == "Fujitsu") {
            document.querySelector("#fujitsu").innerHTML += `
            <div class="computer">
                <img src="${localUsers[index].computers[computer].image}" alt="">
                <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
                <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
                <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
                <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
                <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
                <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
                <div class="info">
                    <div class="category">${localUsers[index].computers[computer].category}</div>
                    <div class="name">${localUsers[index].computers[computer].name}</div>
                    <div class="price">${localUsers[index].computers[computer].price}</div>
                    <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
                    <div class="new">${localUsers[index].computers[computer].new}</div>
                    <div class="image">${localUsers[index].computers[computer].image}</div>
                    <div class="ram">${localUsers[index].computers[computer].ram}</div>
                    <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
                    <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
                    <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
                    <div class="os">${localUsers[index].computers[computer].os}</div>
                    <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
                    <div class="phone-number">${localUsers[index].phoneNumber}</div>
                </div>
            </div>
            `
        } else if (localUsers[index].computers[computer].category == "Nexus") {
            document.querySelector("#nexus").innerHTML += `
            <div class="computer">
                <img src="${localUsers[index].computers[computer].image}" alt="">
                <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
                <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
                <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
                <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
                <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
                <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
                <div class="info">
                    <div class="category">${localUsers[index].computers[computer].category}</div>
                    <div class="name">${localUsers[index].computers[computer].name}</div>
                    <div class="price">${localUsers[index].computers[computer].price}</div>
                    <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
                    <div class="new">${localUsers[index].computers[computer].new}</div>
                    <div class="image">${localUsers[index].computers[computer].image}</div>
                    <div class="ram">${localUsers[index].computers[computer].ram}</div>
                    <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
                    <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
                    <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
                    <div class="os">${localUsers[index].computers[computer].os}</div>
                    <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
                    <div class="phone-number">${localUsers[index].phoneNumber}</div>
                </div>
            </div>
            `
        } else if (localUsers[index].computers[computer].category == "Samsung") {
            document.querySelector("#samsung").innerHTML += `
            <div class="computer">
                <img src="${localUsers[index].computers[computer].image}" alt="">
                <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
                <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
                <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
                <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
                <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
                <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
                <div class="info">
                    <div class="category">${localUsers[index].computers[computer].category}</div>
                    <div class="name">${localUsers[index].computers[computer].name}</div>
                    <div class="price">${localUsers[index].computers[computer].price}</div>
                    <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
                    <div class="new">${localUsers[index].computers[computer].new}</div>
                    <div class="image">${localUsers[index].computers[computer].image}</div>
                    <div class="ram">${localUsers[index].computers[computer].ram}</div>
                    <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
                    <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
                    <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
                    <div class="os">${localUsers[index].computers[computer].os}</div>
                    <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
                    <div class="phone-number">${localUsers[index].phoneNumber}</div>
                </div>
            </div>
            `
        } else if (localUsers[index].computers[computer].category == "Tosbiha") {
            document.querySelector("#tosbiha").innerHTML += `
            <div class="computer">
                <img src="${localUsers[index].computers[computer].image}" alt="">
                <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
                <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
                <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
                <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
                <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
                <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
                <div class="info">
                    <div class="category">${localUsers[index].computers[computer].category}</div>
                    <div class="name">${localUsers[index].computers[computer].name}</div>
                    <div class="price">${localUsers[index].computers[computer].price}</div>
                    <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
                    <div class="new">${localUsers[index].computers[computer].new}</div>
                    <div class="image">${localUsers[index].computers[computer].image}</div>
                    <div class="ram">${localUsers[index].computers[computer].ram}</div>
                    <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
                    <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
                    <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
                    <div class="os">${localUsers[index].computers[computer].os}</div>
                    <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
                    <div class="phone-number">${localUsers[index].phoneNumber}</div>
                </div>
            </div>
            `
        } else if (localUsers[index].computers[computer].category == "Sony") {
            document.querySelector("#sony").innerHTML += `
            <div class="computer">
                <img src="${localUsers[index].computers[computer].image}" alt="">
                <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
                <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
                <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
                <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
                <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
                <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
                <div class="info">
                    <div class="category">${localUsers[index].computers[computer].category}</div>
                    <div class="name">${localUsers[index].computers[computer].name}</div>
                    <div class="price">${localUsers[index].computers[computer].price}</div>
                    <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
                    <div class="new">${localUsers[index].computers[computer].new}</div>
                    <div class="image">${localUsers[index].computers[computer].image}</div>
                    <div class="ram">${localUsers[index].computers[computer].ram}</div>
                    <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
                    <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
                    <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
                    <div class="os">${localUsers[index].computers[computer].os}</div>
                    <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
                    <div class="phone-number">${localUsers[index].phoneNumber}</div>
                </div>
            </div>
            `
        }
        // switch (localUsers[index].computers[computer].category.toLowerCase()) {
        //     case "acer":
        //         document.querySelector("#acer").querySelector(".Acer").innerHTML += `
        //         <div class="computer">
        //             <img src="${localUsers[index].computers[computer].image}" alt="">
        //             <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
        //             <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
        //             <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
        //             <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
        //             <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
        //             <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
        //             <div class="info">
        //                 <div class="category">${localUsers[index].computers[computer].category}</div>
        //                 <div class="name">${localUsers[index].computers[computer].name}</div>
        //                 <div class="price">${localUsers[index].computers[computer].price}</div>
        //                 <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
        //                 <div class="new">${localUsers[index].computers[computer].new}</div>
        //                 <div class="image">${localUsers[index].computers[computer].image}</div>
        //                 <div class="ram">${localUsers[index].computers[computer].ram}</div>
        //                 <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
        //                 <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
        //                 <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
        //                 <div class="os">${localUsers[index].computers[computer].os}</div>
        //                 <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
        //                 <div class="phone-number">${localUsers[index].phoneNumber}</div>
        //             </div>
        //         </div>
        //         `
        //     case "hp":
        //         document.querySelector("#hp").querySelector(".Hp").innerHTML += `
        //         <div class="computer">
        //             <img src="${localUsers[index].computers[computer].image}" alt="">
        //             <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
        //             <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
        //             <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
        //             <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
        //             <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
        //             <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
        //             <div class="info">
        //                 <div class="category">${localUsers[index].computers[computer].category}</div>
        //                 <div class="name">${localUsers[index].computers[computer].name}</div>
        //                 <div class="price">${localUsers[index].computers[computer].price}</div>
        //                 <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
        //                 <div class="new">${localUsers[index].computers[computer].new}</div>
        //                 <div class="image">${localUsers[index].computers[computer].image}</div>
        //                 <div class="ram">${localUsers[index].computers[computer].ram}</div>
        //                 <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
        //                 <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
        //                 <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
        //                 <div class="os">${localUsers[index].computers[computer].os}</div>
        //                 <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
        //                 <div class="phone-number">${localUsers[index].phoneNumber}</div>
        //             </div>
        //         </div>
        //         `
        //     case "asus":
        //         document.querySelector("#asus").querySelector(".Asus").innerHTML += `
        //         <div class="computer">
        //             <img src="${localUsers[index].computers[computer].image}" alt="">
        //             <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
        //             <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
        //             <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
        //             <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
        //             <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
        //             <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
        //             <div class="info">
        //                 <div class="category">${localUsers[index].computers[computer].category}</div>
        //                 <div class="name">${localUsers[index].computers[computer].name}</div>
        //                 <div class="price">${localUsers[index].computers[computer].price}</div>
        //                 <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
        //                 <div class="new">${localUsers[index].computers[computer].new}</div>
        //                 <div class="image">${localUsers[index].computers[computer].image}</div>
        //                 <div class="ram">${localUsers[index].computers[computer].ram}</div>
        //                 <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
        //                 <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
        //                 <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
        //                 <div class="os">${localUsers[index].computers[computer].os}</div>
        //                 <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
        //                 <div class="phone-number">${localUsers[index].phoneNumber}</div>
        //             </div>
        //         </div>
        //         `
        //     case "dell":
        //         document.querySelector("#dell").querySelector(".Dell").innerHTML += `
        //         <div class="computer">
        //             <img src="${localUsers[index].computers[computer].image}" alt="">
        //             <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
        //             <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
        //             <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
        //             <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
        //             <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
        //             <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
        //             <div class="info">
        //                 <div class="category">${localUsers[index].computers[computer].category}</div>
        //                 <div class="name">${localUsers[index].computers[computer].name}</div>
        //                 <div class="price">${localUsers[index].computers[computer].price}</div>
        //                 <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
        //                 <div class="new">${localUsers[index].computers[computer].new}</div>
        //                 <div class="image">${localUsers[index].computers[computer].image}</div>
        //                 <div class="ram">${localUsers[index].computers[computer].ram}</div>
        //                 <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
        //                 <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
        //                 <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
        //                 <div class="os">${localUsers[index].computers[computer].os}</div>
        //                 <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
        //                 <div class="phone-number">${localUsers[index].phoneNumner}</div>
        //             </div>
        //         </div>
        //         `
        //     case "mac":
        //         document.querySelector("#mac").querySelector(".Mac").innerHTML += `
        //         <div class="computer">
        //             <img src="${localUsers[index].computers[computer].image}" alt="">
        //             <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
        //             <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
        //             <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
        //             <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
        //             <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
        //             <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
        //             <div class="info">
        //                 <div class="category">${localUsers[index].computers[computer].category}</div>
        //                 <div class="name">${localUsers[index].computers[computer].name}</div>
        //                 <div class="price">${localUsers[index].computers[computer].price}</div>
        //                 <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
        //                 <div class="new">${localUsers[index].computers[computer].new}</div>
        //                 <div class="image">${localUsers[index].computers[computer].image}</div>
        //                 <div class="ram">${localUsers[index].computers[computer].ram}</div>
        //                 <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
        //                 <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
        //                 <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
        //                 <div class="os">${localUsers[index].computers[computer].os}</div>
        //                 <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
        //                 <div class="phone-number">${localUsers[index].phoneNumner}</div>
        //             </div>
        //         </div>
        //         `
        //     case "lenovo":
        //         document.querySelector("#lenovo").querySelector(".Lenovo").innerHTML += `
        //         <div class="computer">
        //             <img src="${localUsers[index].computers[computer].image}" alt="">
        //             <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
        //             <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
        //             <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
        //             <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
        //             <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
        //             <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
        //             <div class="info">
        //                 <div class="category">${localUsers[index].computers[computer].category}</div>
        //                 <div class="name">${localUsers[index].computers[computer].name}</div>
        //                 <div class="price">${localUsers[index].computers[computer].price}</div>
        //                 <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
        //                 <div class="new">${localUsers[index].computers[computer].new}</div>
        //                 <div class="image">${localUsers[index].computers[computer].image}</div>
        //                 <div class="ram">${localUsers[index].computers[computer].ram}</div>
        //                 <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
        //                 <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
        //                 <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
        //                 <div class="os">${localUsers[index].computers[computer].os}</div>
        //                 <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
        //                 <div class="phone-number">${localUsers[index].phoneNumner}</div>
        //             </div>
        //         </div>
        //         `
        //     case "lg":
        //         document.querySelector("#lg").querySelector(".Lg").innerHTML += `
        //         <div class="computer">
        //             <img src="${localUsers[index].computers[computer].image}" alt="">
        //             <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
        //             <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
        //             <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
        //             <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
        //             <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
        //             <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
        //             <div class="info">
        //                 <div class="category">${localUsers[index].computers[computer].category}</div>
        //                 <div class="name">${localUsers[index].computers[computer].name}</div>
        //                 <div class="price">${localUsers[index].computers[computer].price}</div>
        //                 <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
        //                 <div class="new">${localUsers[index].computers[computer].new}</div>
        //                 <div class="image">${localUsers[index].computers[computer].image}</div>
        //                 <div class="ram">${localUsers[index].computers[computer].ram}</div>
        //                 <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
        //                 <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
        //                 <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
        //                 <div class="os">${localUsers[index].computers[computer].os}</div>
        //                 <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
        //                 <div class="phone-number">${localUsers[index].phoneNumber}</div>
        //             </div>
        //         </div>
        //         `
        //     case "casper":
        //         document.querySelector("#casper").querySelector(".Casper").innerHTML += `
        //         <div class="computer">
        //             <img src="${localUsers[index].computers[computer].image}" alt="">
        //             <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
        //             <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
        //             <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
        //             <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
        //             <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
        //             <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
        //             <div class="info">
        //                 <div class="category">${localUsers[index].computers[computer].category}</div>
        //                 <div class="name">${localUsers[index].computers[computer].name}</div>
        //                 <div class="price">${localUsers[index].computers[computer].price}</div>
        //                 <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
        //                 <div class="new">${localUsers[index].computers[computer].new}</div>
        //                 <div class="image">${localUsers[index].computers[computer].image}</div>
        //                 <div class="ram">${localUsers[index].computers[computer].ram}</div>
        //                 <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
        //                 <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
        //                 <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
        //                 <div class="os">${localUsers[index].computers[computer].os}</div>
        //                 <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
        //                 <div class="phone-number">${localUsers[index].phoneNumber}</div>
        //             </div>
        //         </div>
        //         `
        //     case "fujitsu":
        //         document.querySelector("#fujitsu").querySelector(".Fujitsu").innerHTML += `
        //         <div class="computer">
        //             <img src="${localUsers[index].computers[computer].image}" alt="">
        //             <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
        //             <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
        //             <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
        //             <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
        //             <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
        //             <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
        //             <div class="info">
        //                 <div class="category">${localUsers[index].computers[computer].category}</div>
        //                 <div class="name">${localUsers[index].computers[computer].name}</div>
        //                 <div class="price">${localUsers[index].computers[computer].price}</div>
        //                 <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
        //                 <div class="new">${localUsers[index].computers[computer].new}</div>
        //                 <div class="image">${localUsers[index].computers[computer].image}</div>
        //                 <div class="ram">${localUsers[index].computers[computer].ram}</div>
        //                 <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
        //                 <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
        //                 <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
        //                 <div class="os">${localUsers[index].computers[computer].os}</div>
        //                 <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
        //                 <div class="phone-number">${localUsers[index].phoneNumber}</div>
        //             </div>
        //         </div>
        //         `
        //     case "nexus":
        //         document.querySelector("#nexus").querySelector(".Nexus").innerHTML += `
        //         <div class="computer">
        //             <img src="${localUsers[index].computers[computer].image}" alt="">
        //             <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
        //             <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
        //             <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
        //             <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
        //             <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
        //             <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
        //             <div class="info">
        //                 <div class="category">${localUsers[index].computers[computer].category}</div>
        //                 <div class="name">${localUsers[index].computers[computer].name}</div>
        //                 <div class="price">${localUsers[index].computers[computer].price}</div>
        //                 <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
        //                 <div class="new">${localUsers[index].computers[computer].new}</div>
        //                 <div class="image">${localUsers[index].computers[computer].image}</div>
        //                 <div class="ram">${localUsers[index].computers[computer].ram}</div>
        //                 <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
        //                 <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
        //                 <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
        //                 <div class="os">${localUsers[index].computers[computer].os}</div>
        //                 <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
        //                 <div class="phone-number">${localUsers[index].phoneNumber}</div>
        //             </div>
        //         </div>
        //         `
        //     case "samsung":
        //         document.querySelector("#samsung").querySelector(".Samsung").innerHTML += `
        //         <div class="computer">
        //             <img src="${localUsers[index].computers[computer].image}" alt="">
        //             <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
        //             <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
        //             <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
        //             <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
        //             <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
        //             <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
        //             <div class="info">
        //                 <div class="category">${localUsers[index].computers[computer].category}</div>
        //                 <div class="name">${localUsers[index].computers[computer].name}</div>
        //                 <div class="price">${localUsers[index].computers[computer].price}</div>
        //                 <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
        //                 <div class="new">${localUsers[index].computers[computer].new}</div>
        //                 <div class="image">${localUsers[index].computers[computer].image}</div>
        //                 <div class="ram">${localUsers[index].computers[computer].ram}</div>
        //                 <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
        //                 <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
        //                 <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
        //                 <div class="os">${localUsers[index].computers[computer].os}</div>
        //                 <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
        //                 <div class="phone-number">${localUsers[index].phoneNumber}</div>
        //             </div>
        //         </div>
        //         `
        //     case "tosbiha":
        //         document.querySelector("#tosbiha").querySelector(".Tosbiha").innerHTML += `
        //         <div class="computer">
        //             <img src="${localUsers[index].computers[computer].image}" alt="">
        //             <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
        //             <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
        //             <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
        //             <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
        //             <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
        //             <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
        //             <div class="info">
        //                 <div class="category">${localUsers[index].computers[computer].category}</div>
        //                 <div class="name">${localUsers[index].computers[computer].name}</div>
        //                 <div class="price">${localUsers[index].computers[computer].price}</div>
        //                 <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
        //                 <div class="new">${localUsers[index].computers[computer].new}</div>
        //                 <div class="image">${localUsers[index].computers[computer].image}</div>
        //                 <div class="ram">${localUsers[index].computers[computer].ram}</div>
        //                 <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
        //                 <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
        //                 <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
        //                 <div class="os">${localUsers[index].computers[computer].os}</div>
        //                 <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
        //                 <div class="phone-number">${localUsers[index].phoneNumber}</div>
        //             </div>
        //         </div>
        //         `
        //     case "sony":
        //         document.querySelector("#sony").querySelector(".Sony").innerHTML += `
        //         <div class="computer">
        //             <img src="${localUsers[index].computers[computer].image}" alt="">
        //             <h3 class="name">Name: ${localUsers[index].computers[computer].name}</h3>
        //             <h3 class="describtion">Describtion: ${localUsers[index].computers[computer].describtion}</h3>
        //             <h3 class="price">Price: ${localUsers[index].computers[computer].price}</h3>
        //             <h3 class="new">New: ${localUsers[index].computers[computer].new}</h3>
        //             <h3 class="phone">Phone: ${localUsers[index].phoneNumber}</h3>
        //             <button class="details-button btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-details" onclick="detailsModalCall(this)">Details</button>
        //             <div class="info">
        //                 <div class="category">${localUsers[index].computers[computer].category}</div>
        //                 <div class="name">${localUsers[index].computers[computer].name}</div>
        //                 <div class="price">${localUsers[index].computers[computer].price}</div>
        //                 <div class="describtion">${localUsers[index].computers[computer].describtion}</div>
        //                 <div class="new">${localUsers[index].computers[computer].new}</div>
        //                 <div class="image">${localUsers[index].computers[computer].image}</div>
        //                 <div class="ram">${localUsers[index].computers[computer].ram}</div>
        //                 <div class="cpu">${localUsers[index].computers[computer].cpu}</div>
        //                 <div class="perm-memory">${localUsers[index].computers[computer].permMemory}</div>
        //                 <div class="type-of-perm-memory">${localUsers[index].computers[computer].typeOfMem}</div>
        //                 <div class="os">${localUsers[index].computers[computer].os}</div>
        //                 <div class="video-card">${localUsers[index].computers[computer].videoCard}</div>
        //                 <div class="phone-number">${localUsers[index].phoneNumber}</div>
        //             </div>
        //         </div>
        //         `
        //     default:
        //         bugFixer()
        // }
    }
}

const detailsModalCall = function (button) {
    detailsModal.querySelector("img").setAttribute("src", `${button.parentNode.querySelector("img").src}`)
    detailsModal.querySelector(".phone-number").innerHTML = `Video card: ${button.parentNode.querySelector(".info").querySelector(".phone-number").innerHTML}`
    detailsModal.querySelector(".category").innerHTML = `Category: ${button.parentNode.parentNode.id}`
    detailsModal.querySelector(".name").innerHTML = `Name: ${button.parentNode.querySelector(".info").querySelector(".name").innerHTML}`
    detailsModal.querySelector(".describtion").innerHTML = `Describtion: ${button.parentNode.querySelector(".info").querySelector(".describtion").innerHTML}`
    detailsModal.querySelector(".price").innerHTML = `Price: ${button.parentNode.querySelector(".info").querySelector(".price").innerHTML}`
    detailsModal.querySelector(".new").innerHTML = `New: ${button.parentNode.querySelector(".info").querySelector(".new").innerHTML}`
    detailsModal.querySelector(".ram").innerHTML = `RAM: ${button.parentNode.querySelector(".info").querySelector(".ram").innerHTML}`
    detailsModal.querySelector(".cpu").innerHTML = `CPU: ${button.parentNode.querySelector(".info").querySelector(".cpu").innerHTML}`
    detailsModal.querySelector(".memory").innerHTML = `Pernament memory: ${button.parentNode.querySelector(".info").querySelector(".perm-memory").innerHTML}`
    detailsModal.querySelector(".type-of-memory").innerHTML = `Type of pernament memory: ${button.parentNode.querySelector(".info").querySelector(".type-of-perm-memory").innerHTML}`
    detailsModal.querySelector(".os").innerHTML = `OS: ${button.parentNode.querySelector(".info").querySelector(".os").innerHTML}`
    detailsModal.querySelector(".video-card").innerHTML = `Video card: ${button.parentNode.querySelector(".info").querySelector(".video-card").innerHTML}`
}
// const categoryButtonClick = function(button) {
//     console.log(button)
//     let buttonId = button.id
//     console.log(buttonId)
//     try {
//         for (let index in categoriesButtons) {
//             console.log(categoriesButtons[index])
//             if (categoriesButtons[index].id !== buttonId) {
//                 categoriesButtons[index].classList.remove("active")
//             } else {
//                 categoriesButtons[index].classList.add("active")
//             }
//         }
//     } catch (error) {
//         console.log(error + " error was found doing TRY function")
//     }
//     updateActiveButtons()
// }

// const updateActiveButtons = function() {
//     let activeCategoryId
//     try {
//         for (let index in categoriesButtons) {
//             if (categoriesButtons[index].classList.contains("active") == true) {
//                 activeCategoryId = categoriesButtons[index].id
//                 categoriesButtons[index].style.color = "blue"
//                 categoriesButtons[index].style.background = "#0000FF"
//                 document.querySelector(`.${activeCategoryId}`).classList.add("active")
//             } else {
//                 activeCategoryId = categoriesButtons[index].id
//                 categoriesButtons[index].style.color = ""
//                 categoriesButtons[index].style.background = ""
//                 document.querySelector(`.${activeCategoryId}`).classList.remove("active")
//             }
//         }
//     } catch (error) {
//         console.log(error + " error was found doing TRY function")
//     }
//     updateCategoryComputers()
// }
// const updateCategoryComputers = function() {
//     try {
//         for (let index in document.querySelectorAll(".computer-category-box")) {
//             console.log(document.querySelectorAll(".computer-category-box")[index])
//             if (document.querySelectorAll(".computer-category-box")[index].classList.contains("active") == true) {
//                 // document.querySelectorAll(".computer-category-box")[index].style.height = "0"
//                 // document.querySelectorAll(".computer-category-box")[index].style.width = "0"
//                 //document.querySelectorAll(".computer-category-box")[index].style.opacity = "0"
//                 //document.querySelectorAll(".computer-category-box")[index].style.position = "relative"
//                 // document.querySelectorAll(".computer-category-box")[index].hide(1000)
//                 // document.querySelectorAll(".computer-category-box")[index].parentNode = document.querySelector("body")
//                 document.querySelectorAll(".computer-category-box")[index].style.visiblity = "hidden"
//                 console.log("element visible")
//             } else {
//                 // document.querySelectorAll(".computer-category-box")[index].style.height = "100%"
//                 // document.querySelectorAll(".computer-category-box")[index].style.width = "100%"
//                 //document.querySelectorAll(".computer-category-box")[index].style.opacity = "1"
//                 //document.querySelectorAll(".computer-category-box")[index].style.position = "static"
//                 // document.querySelectorAll(".computer-category-box")[index].show(1000)
//                 // document.querySelectorAll(".computer-category-box")[index].parentNode = document.querySelector("#computers-section")
//                 document.querySelectorAll(".computer-category-box")[index].style.visiblity = "visible"
//                 console.log("elements invisible")
//             }
//         }
//     } catch (error) {
//         console.log(error + " error was found doing try function")
//     }
// }
// updateActiveButtons()