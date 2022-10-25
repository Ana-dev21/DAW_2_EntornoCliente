
function mostrarFormulario(){

    /* Creamos el div contenedor del formulario */
    var formContainer = document.createElement("div");

    //Le asignamos un id
    formContainer.id= "formContainer";

    //Le asignamos propiedades de CSS para probar
    //formContainer.style.backgroundColor="blue";

    //Le añadimos el formContainer al div principal ya existente
    divPrincipal.appendChild(formContainer);

    /* Creamos el formulario */
    var form = document.createElement("form");
    form.id = "form";
    formContainer.appendChild(form);
    //form.method = "get";
    //form.action = "?"; --> No hará ninguna acción

    //Creamos los campos del formulario
    //Nombre
    var nombre = document.createElement("p");
    nombre.textContent = "Nombre";
    form.appendChild(nombre);

    var inputNombre = document.createElement("input");
    inputNombre.type ="text";
    inputNombre.name ="nombre";
    inputNombre.size ="40";
    form.appendChild(inputNombre);

    //Apellidos
    var apellidos = document.createElement("p");
    apellidos.textContent = "Apellidos";
    form.appendChild(apellidos);

    var inputApellidos = document.createElement("input");
    inputApellidos.type ="text";
    inputApellidos.name ="apellidos";
    inputApellidos.size ="40";
    form.appendChild(inputApellidos);

    //DNI
    var dni = document.createElement("p");
    dni.textContent = "DNI";
    form.appendChild(dni);

    var inputDni = document.createElement("input");
    inputDni.type ="text";
    inputDni.name ="dni";
    inputDni.size ="40";
    form.appendChild(inputDni);

    //Teléfono
    var telefono = document.createElement("p");
    telefono.textContent = "Telefono";
    form.appendChild(telefono);

    var inputTelefono = document.createElement("input");
    inputTelefono.type ="number";
    inputTelefono.name ="dni";
    inputTelefono.size ="40";
    form.appendChild(inputTelefono);

    //Dirección
    var direccion = document.createElement("p");
    direccion.textContent = "Dirección";
    form.appendChild(direccion);

    var inputDireccion = document.createElement("input");
    inputDireccion.type ="text";
    inputDireccion.name ="direccion";
    inputDireccion.size ="40";
    form.appendChild(inputDireccion);

    //Menú
    var menu = document.createElement("p");
    menu.textContent = "Menú";
    form.appendChild(menu);

    var selectorMenu = document.createElement("select");
    selectorMenu.name = "selectorMenu";
    var optionMenu1 = document.createElement("option");
    optionMenu1.textContent = "Normal"
    var optionMenu2 = document.createElement("option");
    optionMenu2.textContent = "Vegetariano"
    var optionMenu3 = document.createElement("option");
    optionMenu3.textContent = "Vegano"

    form.appendChild(selectorMenu);
    selectorMenu.appendChild(optionMenu1);
    selectorMenu.appendChild(optionMenu2);
    selectorMenu.appendChild(optionMenu3);

    // Acompañantes

    
    //Comentarios
    var comentarios = document.createElement("p");
    comentarios.textContent = "Comentarios";
    form.appendChild(comentarios);

    var commentTextArea = document.createElement("textarea");
    commentTextArea.name ="comments";
    commentTextArea.rows = "3"
    commentTextArea.cols = "40"
    form.appendChild(commentTextArea);
    
    }
    

    /* Añadimos Menú a nodo principal div */
//Convertimos en objeto el div ya existente en nuestro HTML

let divPrincipal = document.getElementById("divPrincipal");

/* Generar el menu */
//creamos un div contenedor para el navbar
var navbar = document.createElement("nav");
navbar.id = "navbarContainer";

//Le añadimos el child navbar al div principal ya existente
divPrincipal.appendChild(navbar);

//Creamos una ul para las secciones del navbar
var menuList = document.createElement("ul");
menuList.id = "menuList";
//añadimos la ul al navbar
navbar.appendChild(menuList);

//Asignamos los li a la ul
//Creamos un array con los puntos del menú
var menuArray = ["INFORMACIÓN","CÓDIGO VESTIMENTA","REGALOS","REGISTRO"];

//Para cada item del menú: 
var i=0;
menuArray.forEach(item => {

    console.log(item);
    

    //creamos un li
    var li = document.createElement('li');

    //guardamos su posición del array
    var index = menuArray.indexOf(item);

    //Le asignamos al li el valor del item
    li.textContent = item;

    //agragamos el li a nuestra ul menuList
    menuList.appendChild(li);

    //asignamos como id li+el índice del campo en el array
    li.id= "li-" + i;
    
    //Asignamos la propiedad onclick al li3 y la función mostrarFormulario()
    if (i === 3) li.onclick =()=>{mostrarFormulario()} 
    
    i++
    //MANERA 2
    // if (index === 3) li.addEventListener("click",()=>{mostrarFormulario()});
    
})
























