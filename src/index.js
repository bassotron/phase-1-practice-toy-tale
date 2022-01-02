let addToy = false;
let toyCollectionDiv = document.querySelector("div#toy-collection")

document.addEventListener("DOMContentLoaded", () => {

    handleNewToyForm()










})







const handleNewToyForm = () => {
    const addBtn = document.querySelector("#new-toy-btn");
    const toyFormContainer = document.querySelector(".container");
    addBtn.addEventListener("click", () => {
        // hide & seek with the form
        addToy = !addToy;
        if (addToy) {
            toyFormContainer.style.display = "block";
        } else {
            toyFormContainer.style.display = "none";
        }
    });
}


fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(toysArr => {
        toysArr.forEach((toyObj) => {
            turnToyToCard(toyObj)
            console.log(toyObj);




        })
    })


function turnToyToCard(toy) {
    let toyCardDiv = document.createElement("div")
    toyCardDiv.className = "card"
    let toyNameH2 = document.createElement("h2")
    toyNameH2.innerText = toy.name
    let toyImage = document.createElement("img")
    toyImage.src = toy.image
    toyImage.className = "toy-avatar"
    toyImage.alt = toy.name
    let toyLikeCount = document.createElement("p")
    toyLikeCount.innertext = `${toy.likes} Likes`
    let toyLikeButton = document.createElement("button")
    toyLikeButton.classname = "like-btn"
    toyLikeButton.innerText = "Like <3"

    toyCardDiv.append(toyNameH2, toyImage, toyLikeButton, toyLikeCount)
    toyCollectionDiv.append(toyCardDiv)

}