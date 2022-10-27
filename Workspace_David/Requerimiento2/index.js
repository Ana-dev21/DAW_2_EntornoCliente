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

function totalIngredientes(){
    const valor1 = document.getElementById("bacon");
    const valor2 = document.getElementById("champiñones");
    const valor3 = document.getElementById("piña");
    const valor4 = document.getElementById("pulledPork")


    //No me gusta nada este método, pero mientra tanto............. ;(
    let y = 0;
    if (valor1.checked == true) {
      y++; 
    }
    if (valor2.checked == true) {
      y++;
    }
    if (valor3.checked == true) {
      y++;
    }
    if (valor4.cheked == true){
        y++;
    }
    let euros = parseInt(y)
    return euros;
}

function precioTotal(){

    return alert("El precio es  " + `${totalTamaños()}` + `${totalIngredientes()}` +"Euros")
}


window.onload = function(){

    let tamañoPizza = document.getElementById("finalizar")
    tamañoPizza.addEventListener("click", precioTotal)

}