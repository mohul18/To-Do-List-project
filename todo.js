
let input = document.getElementById("input")
let addbtn = document.getElementById("add-minus-btn")
let taskcontainer = document.getElementById("task-container")
let ul = document.querySelector("ul")

function update() {
    let create = document.createElement("li")
    create.innerHTML = input.value + "<button onclick='deleteitem(event)'>Delete</button>"
    ul.append(create)
}

function deleteitem(event) {
    event.target.parentElement.remove()

}







