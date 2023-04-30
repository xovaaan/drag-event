let drag = document.querySelector("div");
let drag2 = document.querySelector("p");
drag2.addEventListener("dragstart", function(e){
    e.dataTransfer.setData("Text", e.target.id);
})
drag.addEventListener("dragover", function(e){
    e.preventDefault();
})
drag.addEventListener("drop", function(e){
    let iris = e.dataTransfer.getData("Text");
    drag.appendChild(document.getElementById(iris));
    e.preventDefault();
})