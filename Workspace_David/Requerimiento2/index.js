/**
 * Toma el valor del botón de radio que está marcado y lo devuelve como un número entero.
 * @returns El valor de la variable x.
 */
function totalTamaños(){
    //Referencia a los tamaños de la pizza
    let tamaño = document.getElementsByName("tamaño")
    let x = 0;
    if(tamaño[0].checked){
        x = 5;
    }else if (tamaño[1].checked){
        x = 10;
    }else if (tamaño[2].checked){  
        x = 15;
    }else{
        alert("Ninguna seleccionada")
    }
    let euros = parseInt(x)
    return euros
}

/**
 * Toma el número de casillas marcadas y lo devuelve como un número entero.
 * @returns El número de casillas marcadas.
 */

function totalIngredientes(){
    let  checkbox = document.getElementsByName("ingredientes");
    let y = 0;
    for (let x = 0; x <checkbox.length; x++){
        if(checkbox[x].checked){
            y++;
        }
    }
    let euros = parseInt(y)
    return euros;
}

function precioTotal(){
    
    return alert("El precio es  " + `${totalTamaños() + totalIngredientes()}` + " Euros")
}    

window.onload = function(){

    let tamañoPizza = document.getElementById("finalizar")
    tamañoPizza.addEventListener("click", precioTotal)

}