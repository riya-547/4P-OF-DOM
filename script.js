 
 // selection
 let a = document.querySelector("h2")
console.log(a);

//change HTML
let b = document.querySelector("h3")
b.innerHTML = "yes the code of HTML is change with the help of DOM!"

//change CSS
let c = document.querySelector("h4")
c.style.color = "red"
c.style.backgroundColor = "black"
c.style.fontSize = "50px"

//eventlistner


let d = document.querySelector("h5")
 d.addEventListener("click", function(){
    d.innerHTML = "yes click event works"
    d.style.color = "white"
    d.style.backgroundColor = "black"
    d.style.fontSize = "60px"
    
 })

