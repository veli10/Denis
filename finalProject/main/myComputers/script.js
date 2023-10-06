const mainPageBtn = document.querySelector("#main-page")
const newComputerBtn = document.querySelector("#new-computer")
const table = document.querySelector("table")
const body = document.querySelector("body")
const contaner = document.querySelector(".contaner")
const submit = document.querySelector("#save-changes")
const resetInfo = document.querySelector("#reset-info")
const infos = document.querySelectorAll(".info")
const computerMakingWindow = document.querySelector("#computer-making")
let addingNew = true

let users = [
    {
        username: "test",
        phoneNumber: "055-299-92-56",
        password: "test",
        computers: [

        ],
        curentId: 1000,
        userIndex: 0,
        theme: "light"
    }
]

if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users))
}
let localUsers
let localCurentUser
let localCurentUserIndex

let removingButton


localCurentUser = JSON.parse(localStorage.getItem("curentUser"))
for (let index in JSON.parse(localStorage.getItem("users"))) {
    if (JSON.parse(localStorage.getItem("users"))[index].username == localCurentUser) {
        localCurentUserIndex = index
    }
}
try {
    document.querySelector("html").setAttribute("data-bs-theme", JSON.parse(localStorage.getItem("users"))[localCurentUserIndex].theme)
} catch (error) {
    console.log(error)
}
for (let index in JSON.parse(localStorage.getItem("users"))[localCurentUserIndex].computers) {
    table.innerHTML += `
        <tbody class="${index}">
            <td>${JSON.parse(localStorage.getItem("users"))[localCurentUserIndex].computers[index].id}</td>
            <td>${JSON.parse(localStorage.getItem("users"))[localCurentUserIndex].computers[index].name}</td>
            <td><img src="${JSON.parse(localStorage.getItem("users"))[localCurentUserIndex].computers[index].image}" data-bs-toggle="modal" data-bs-target="#img-preview-modal" onclick="imageModalPreviewEvent(this)" style="cursor: pointer;"></td>
            <td>${JSON.parse(localStorage.getItem("users"))[localCurentUserIndex].computers[index].price}</td>
            <td>${JSON.parse(localStorage.getItem("users"))[localCurentUserIndex].computers[index].os}</td>
            <td>
                <button id="edit-computer" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-making" onclick="editButtonEvent(this)">Edit</button>
                <button id="remove-computer" class="btn btn-danger" onclick="computerRemovingModalEvent(this)" data-bs-toggle="modal" data-bs-target="#computer-removing">Remove</button>
            </td>
        </tbody>
        `
}
const editButtonEvent = function (button) {
    computerMakingWindow.querySelector(".modal-title").innerText = "Edit computer"
    addingNew = false
    button.classList.add("clicked")
    let editingComputerIndex = Number(button.parentNode.parentNode.parentNode.className)
    for (let i in infos) {
        if (i !== 0) {
            infos[i].querySelector("input").value = Object.values(JSON.parse(localStorage.getItem("users"))[localCurentUserIndex].computers[editingComputerIndex])[i]
        }
    }
}

const computerRemovingModalEvent = function(button) {
    removingButton = button
}
const removeButtonEvent = function () {
    removingButton.classList.add("clicked")
    for (let index in document.querySelectorAll("tbody")) {
        try {
            console.log(index)
            if (document.querySelectorAll("tbody")[index].querySelectorAll("td")[5].querySelector("#remove-computer").classList.contains("clicked")) {
                let removingComputerIndex = index
                localUsers = JSON.parse(localStorage.getItem("users"))
                localCurentUser = localStorage.getItem("curentUser")
                for (let localUser in localUsers) {
                    if (localUsers[localUser].username == localCurentUser) {
                        localCurentUserIndex = localUser
                    }
                }
                localUsers[localCurentUserIndex].computers.splice(removingComputerIndex - 1, 1)
                localStorage.removeItem("users")
                localStorage.setItem("users", JSON.stringify(localUsers))
            }
        } catch (error) {
            console.log(error + " ERROR WAS FOUND")
        }
    }
    localUsers = JSON.parse(localStorage.getItem("users"))
    for (let index in localUsers) {
        if (localUsers[index].username == localCurentUser) {
            localCurentUserIndex = index
        }
    }
    localUsers[localCurentUserIndex].curentId--
    localStorage.removeItem("users")
    localStorage.setItem("users", JSON.stringify(localUsers))
    removingButton.parentNode.parentNode.parentNode.remove()
}
const imageModalPreviewEvent = function(img) {
    document.querySelector("#img-preview-modal-img").remove()
    document.querySelector("#modal-img-box").innerHTML = `<img id="img-preview-modal-img" src="${img.src}" alt="image will be here">`
}
newComputerBtn.addEventListener("click", function (event) {
    event.preventDefault()
    computerMakingWindow.querySelector(".modal-title").innerText = "New computer"
    addingNew = true
    for (let i in infos) {
        infos[i].querySelector("input").value = ""
    }
})
mainPageBtn.addEventListener("click", function () {
    window.location.href = "../index.html"
})
submit.addEventListener("click", function (event) {
    event.preventDefault()
    if (addingNew == true) {
        localUsers = JSON.parse(localStorage.getItem("users"))
        localCurentUser = JSON.parse(localStorage.getItem("curentUser"))
        for (let index in localUsers) {
            if (localUsers[index].username == localCurentUser) {
                localCurentUserIndex = index
            }
        }
        try {
            localUsers[localCurentUserIndex].curentId++
        } catch (error) {
            console.log(error)
        }
        localStorage.removeItem("users")
        localStorage.setItem("users", JSON.stringify(localUsers))
        try {
            table.innerHTML += `
                <tbody class="${JSON.parse(localStorage.getItem("users"))[localCurentUserIndex].curentId - 1001}">
                    <td>${localUsers[localCurentUserIndex].curentId}</td>
                    <td>${infos[1].querySelector("input").value}</td>
                    <td>
                        <img src="${infos[5].querySelector("input").value}" data-bs-toggle="modal" data-bs-target="#img-preview-modal" style="cursor: pointer;">
                    </td>
                    <td>${infos[2].querySelector("input").value}</td>
                    <td>${infos[10].querySelector("input").value}</td>
                    <td>
                        <button id="edit-computer" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#computer-making" onclick="editButtonEvent(this)">Edit</button>
                        <button id="remove-computer" class="btn btn-danger" onclick="removeButtonEvent(this)">Remove</button>
                    </td>
                </tbody>
                `
        } catch (error) {
            console.log(error)
        }
        localUsers[localCurentUserIndex].computers.push({
            category: infos[0].querySelector("input").value,
            name: infos[1].querySelector("input").value,
            price: infos[2].querySelector("input").value,
            describtion: infos[3].querySelector("input").value,
            new: infos[4].querySelector("input").value,
            image: infos[5].querySelector("input").value,
            ram: infos[6].querySelector("input").value,
            cpu: infos[7].querySelector("input").value,
            permMemory: infos[8].querySelector("input").value,
            typeOfMem: infos[9].querySelector("input").value,
            os: infos[10].querySelector("input").value,
            videoCard: infos[11].querySelector("input").value,
            id: JSON.parse(localStorage.getItem("users"))[localCurentUserIndex].curentId
        })
        localStorage.removeItem("users")
        localStorage.setItem("users", JSON.stringify(localUsers))
        addingNew = false
    } else {
        localUsers = JSON.parse(localStorage.getItem("users"))
        localCurentUser = JSON.parse(localStorage.getItem("curentUser"))
        for (let index in localUsers) {
            if (localUsers[index].username == localCurentUser) {
                localCurentUserIndex = index
            }
        }
        for (let index in document.querySelectorAll("tbody")) {
            let editingComputerIndex = 0
            try {
                if (document.querySelectorAll("tbody")[index].querySelectorAll("td")[5].querySelector("#edit-computer").classList.contains("clicked") == true) {
                    editingComputerIndex = index
                    let editingComputerId = localUsers[localCurentUserIndex].computers[editingComputerIndex].id
                    localUsers[localCurentUserIndex].computers[editingComputerIndex] = {
                        category: infos[0].querySelector("input").value,
                        name: infos[1].querySelector("input").value,
                        price: infos[2].querySelector("input").value,
                        describtion: infos[3].querySelector("input").value,
                        new: infos[4].querySelector("input").value,
                        image: infos[5].querySelector("input").value,
                        ram: infos[6].querySelector("input").value,
                        cpu: infos[7].querySelector("input").value,
                        permMemory: infos[8].querySelector("input").value,
                        typeOfMem: infos[9].querySelector("input").value,
                        os: infos[10].querySelector("input").value,
                        videoCard: infos[11].querySelector("input").value,
                        id: editingComputerId
                    }
                    localStorage.removeItem("users")
                    localStorage.setItem("users", JSON.stringify(localUsers))
                    for (let index in document.querySelectorAll("tbody")) {
                        document.querySelectorAll("tbody")[index].remove()
                    }
                    localStorage.removeItem("users")
                    localStorage.setItem("users", JSON.stringify(localUsers))
                }

            } catch (error) {
                console.log(error + " error was found")
            }
        }
    }
    setTimeout(function(){
        window.location.reload()
    }, 100)
})
resetInfo.addEventListener("click", function (event) {
    event.preventDefault()
    for (let i in infos) {
        infos[i].querySelector("input").value = ""
    }
})
document.querySelector("#remove-option-yes").addEventListener("click", function(event){
    event.preventDefault()
    removeButtonEvent()
})
setInterval(function () {
    try {
        document.querySelector("#img-preview").remove()
        document.querySelector("#img-preview-box").innerHTML += `
            <img id="img-preview" src="${infos[5].querySelector("input").value}" alt="Image preview will be shown here">
        `
    } catch (error) {
        console.log("image not found")
    }
}, 1000);