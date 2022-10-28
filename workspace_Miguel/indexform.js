



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
    };

 function totalIngredientes(){
    //comprobamos los ingredientes marcados recorriendo el array de ingredientes
    let  checkbox = document.getElementsByName('ingredientes');
    let t=0;
    for (let x=0; x<checkbox.length;x++){
        if(checkbox[x].checked)
            t++;
    }
    let euros= parseInt(t)
    return euros;
}


function precioTotal(){

    return alert("El precio es  " + `${totalTamaños() + totalIngredientes()}` +" Euros")
}


window.onload = function(){

    let tamañoPizza = document.getElementById("finalizar")
    tamañoPizza.addEventListener("click", precioTotal)

}



