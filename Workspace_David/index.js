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
label2.id = "label_nom"
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
label3.id = "label_dir"
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
box4.type = "text"
contenedor.appendChild(box4)

//Cabecera de los radioButtons, Fieldset
let cabecera = document.createElement("h3")
cabecera.id = "titulo_botones"
let text = document.createTextNode("¿Que tipo de pizza quieres?")
cabecera.appendChild(text)
contenedor.appendChild(cabecera)

let formBotones = document.createElement("form")
formBotones.id = "formulario1"
contenedor.appendChild(formBotones)

let lineas = document.createElement("fieldset")
formBotones.appendChild(lineas)

//Boton de pizza individual
let label5 = document.createElement("label")
label5.id = "opcion"
let textoRadio = document.createTextNode("Individual")
label5.appendChild(textoRadio)
let radio1 = document.createElement("input")
radio1.id = "individual"
radio1.type = "radio"
radio1.name = "pizza"

label5.appendChild(radio1)
lineas.appendChild(label5)

//Boton para la pizza mediana
let textoRadioDuo = document.createTextNode("Mediana")
label5.appendChild(textoRadioDuo)
let radio2 = document.createElement("input")
radio2.id = "mediana"
radio2.type = "radio"
radio2.name = "pizza"
label5.appendChild(radio2)

//Boton para la pizza familiar
let textoRadioFamiliar = document.createTextNode("Familiar")
label5.appendChild(textoRadioFamiliar)
let radio3 = document.createElement("input")
radio3.id = "familiar"
radio3.type = "radio"
radio3.name = "pizza"
label5.appendChild(radio3)

//Boton para combo
let textoRadioCombo = document.createTextNode("Combo")
label5.appendChild(textoRadioCombo)
let radio4 = document.createElement("input")
radio4.type = "radio"
radio4.id = "combo"
radio4.name = "pizza"
label5.appendChild(radio4)

//Cabecera del segundo RadioButton/Fieldset
