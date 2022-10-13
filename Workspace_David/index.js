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
box.placeholder = "Tú DNI"
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
box2.placeholder = "Tú nombre y apellidos"
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
box3.placeholder = "Escribe tú dirección"
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

//Cabecera de los RadioButtons/Formulario/Fieldset
let cabecera = document.createElement("h3")
cabecera.id = "titulo_botones"
let text = document.createTextNode("¿Qué tipo de pizza quieres?")
cabecera.appendChild(text)
contenedor.appendChild(cabecera)

let formBotones = document.createElement("form")
formBotones.id = "formulario1"
contenedor.appendChild(formBotones)

let lineas = document.createElement("fieldset")
lineas.id = "lineas"
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

//Cabecera del segundo RadioButton/Formulario/Fieldset
let cabecera2 = document.createElement("h3")
cabecera2.id = "titulo_tipos"
let text2 = document.createTextNode("¿Qué masa prefieres?")
cabecera2.appendChild(text2)
contenedor.appendChild(cabecera2)

let formBotones2 = document.createElement("form")
formBotones2.id = "formulario2"
contenedor.appendChild(formBotones2)

let lineas2 = document.createElement("fieldset")
lineas2.id = "lineas2"
formBotones2.appendChild(lineas2)

//Boton para masa fina
let label6 = document.createElement("label")
label6.id = "opciones_masa"
let textoMasaFina = document.createTextNode("Fina")

label6.appendChild(textoMasaFina)
lineas2.appendChild(label6)

let fina = document.createElement("input")
fina.type = "radio"
fina.name = "masa"
fina.id ="fina"
label6.appendChild(fina)

//Boton para masa clásica
let textoMasaClasica = document.createTextNode("Clásica")
label6.appendChild(textoMasaClasica)
let clasica = document.createElement("input")
clasica.id = "clasica"
clasica.type = "radio"
clasica.name = "masa"
label6.appendChild(clasica)

//Boton para masa gruesa
let textoMasaGruesa = document.createTextNode("Masa gruesa")
label6.appendChild(textoMasaGruesa)
let gruesa = document.createElement("input")
gruesa.id = "gruesa"
gruesa.type = "radio"
gruesa.name = "masa"
label6.appendChild(gruesa)

//Boton para calzone
let textoCalzone = document.createTextNode("Calzone")
label6.appendChild(textoCalzone)
let calzone = document.createElement("input")
calzone.id = "calzone"
calzone.type = "radio"
calzone.name = "masa"
label6.appendChild(calzone)

//Cabecera para el Checkbox
let tituloCheckbox = document.createElement("h3")
tituloCheckbox.id = "titulo_ingredientes"
let textoCheckbox = document.createTextNode("¿Algún extra?")
tituloCheckbox.appendChild(textoCheckbox)
contenedor.appendChild(tituloCheckbox)

    //Bacon y checkbox
let label7 = document.createElement("label")
label7.id = "checkbox"
let ingrediente1 = document.createElement("p")
let txtingrediente1 = document.createTextNode("Bacon")
label7.appendChild(ingrediente1)
ingrediente1.appendChild(txtingrediente1)
contenedor.appendChild(label7)
let check1 = document.createElement("input")
check1.type = "checkbox"
check1.id= "ingredientes"
ingrediente1.appendChild(check1)

    //Peperonni y checkbox 
let ingrediente2 = document.createElement("p")
let txtingrediente2 = document.createTextNode("Peperonni")
label7.appendChild(ingrediente2)
ingrediente2.appendChild(txtingrediente2)
let check2 = document.createElement("input")
check2.type = "checkbox"
check2.id = "ingredientes"
ingrediente2.appendChild(check2)

    //Piña y checkbox
let ingrediente3 = document.createElement("p")
let txtingrediente3 = document.createTextNode("Piña")
ingrediente3.appendChild(txtingrediente3)
label7.appendChild(ingrediente3)
let check3 = document.createElement("input")
check3.type = "checkbox"
check3.id = "ingredientes"
ingrediente3.appendChild(check3)

    //Extra queso
let ingrediente4 = document.createElement("p")
let txtingrediente4 = document.createTextNode("Extra de queso")
ingrediente4.appendChild(txtingrediente4)
label7.appendChild(ingrediente4)

let check4 = document.createElement("input")
check4.id = "ingredientes"
check4.type = "checkbox"
ingrediente4.appendChild(check4)

    //Extra barbacoa
let ingrediente5 = document.createElement("p")
let txtingrediente5 = document.createTextNode("Extra barbacoa")
ingrediente5.appendChild(txtingrediente5)
label7.appendChild(ingrediente5)

let check5 = document.createElement("input")
check5.type = "checkbox"
check5.id = "ingredientes"
ingrediente5.appendChild(check5)

//Incorporación de imágenes
let div2 = document.createElement("div")
div2.id = "contenedor_img"
let imagen1 = document.createElement("img")
imagen1.id = "pizza1"
imagen1.src ="/Pictures/image-156496.png"
div2.appendChild(imagen1)
contenedor.appendChild(div2)

let imagen2 = document.createElement("img")
imagen2.id = "pizza2"
imagen2.src = "/Pictures/pngkey.com-pizza-steve-png-7813080.png"
div2.appendChild(imagen2)
contenedor.appendChild(div2)

//Campo select
let ultimo = document.createElement("h3")
ultimo.id = "titulo_ciudad"
let txtUltimo = document.createTextNode("Y por último.. ¿ Dónde mandamos la pizza ?")
ultimo.appendChild(txtUltimo)
contenedor.appendChild(ultimo)

let seleccion = document.createElement("select")
seleccion.id = "ciudades"

let option1 = document.createElement("option")
let option1texto = document.createTextNode("Madrid")
option1.appendChild(option1texto)

let option2 = document.createElement("option")
let option2texto = document.createTextNode("Barcelona")
option2.appendChild(option2texto)

let option3 = document.createElement("option")
let option3texto = document.createTextNode("Toledo")
option3.appendChild(option3texto)

seleccion.appendChild(option1)
seleccion.appendChild(option2)
seleccion.appendChild(option3)

contenedor.appendChild(seleccion)
