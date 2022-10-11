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
box.required
contenedor.appendChild(box)

// Campo Nombre
let label2 = document.createElement("label")
label.id = "label_nom"
let nom = document.createTextNode("Nombre y apellidos")
label2.appendChild(nom)
contenedor.appendChild(label2)

let box2 = document.createElement("input")
box2.id = "nombre"
box2.type = "text"
box2.placeholder = "Tu nombre y apellidos"
contenedor.appendChild(box2)

// Campo dirección
let label3 = document.createElement("label")
label.id = "label_dir"
let address = document.createTextNode("Dirección")
label3.appendChild(address)
contenedor.appendChild(label3)

let box3 = document.createElement("input")
box3.id = "dir"
box3.type = "text"
box3.placeholder = "Escribe tu dirección"
contenedor.appendChild(box3)

// Campo telf
let label4 = document.createElement("label")
label4.id = "label_telf"
let telefono = document.createTextNode("Teléfono")
label4.appendChild(telefono)
contenedor.appendChild(label4)

let box4 = document.createElement("input")
box4.id = "telf"
box.type = "number"
contenedor.appendChild(box4)

//Radio buttons







