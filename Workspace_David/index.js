// Creación del div
let div = document.createElement("div")
div.id = "main";
document.body.appendChild(div) //Añadimos el div a la página HTML

//Creación de un h1 con título.
let contenedor = document.getElementById("main")
let title = document.createElement("h1")

title.textContent = "Formulario con DOM"
contenedor.appendChild(title)

//Campo de DNI.
let label = document.createElement("label")
label.id = "label_dni"
let identif = document.createTextNode("DNI")
label.appendChild(identif)
contenedor.appendChild(label)

let box = document.createElement("input")
box.id = "dni"
box.type = "text"
box.placeholder = "Tu DNI"
contenedor.appendChild(box)

// Campo Nombre
let label2 = document.createElement("label")
label.id = "label_nom"
let nom = document.createTextNode("Nombre y Apellidos")
label2.appendChild(nom)
contenedor.appendChild(label2)

let box2 = document.createElement("input")
box2.id = "nombre"
box2.type = "text"
box2.placeholder = "Tu nombre y apellidos"
contenedor.appendChild(box2)

// Campo dirección


// Campo telf



