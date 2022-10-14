//Añadimos Menú a nodo principal div
//Convertimos en objeto el div ya existente en nuestro HTML
let divPrincipal = document.getElementById("divPrincipal");

//Generar el menu
//creamos un div contenedor
var menu = document.createElement("nav")
menu.id = "contenedorMenu"
//Le añadimos el child menu
divPrincipal.appendChild(menu);
//Creamos una ul
var menuList = document.createElement("ul")
menu.appendChild(menuList)

//Asignamos los li a la ul
var menuArray = ["INFORMACIÓN","CÓDIGO VESTIMENTA","REGALOS","REGISTRO"]
menuList.id = "menuList"

menuArray.forEach(item => {
    console.log(item)
    var li = document.createElement('li')
    li.textContent = item
    menuList.appendChild(li)
    //asignamos como id li+el índice del campo en el array
    li.id= "li" + menuArray.indexOf(item)
    
})

//Asignamos la propiedad
li3.onclick = "mostrarFormulario()"

function mostrarFormulario(){
alert("Veo que quieres mostrar el formulario")
}






















