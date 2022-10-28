



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
<<<<<<< HEAD
    };


    
    //checkbox info : https://mundocursos.online/como-saber-si-un-checkbox-esta-seleccionado-en-javascript/
    let bacon = form.elements.getElementById('bacon');
        bacon.addEventListener("change", validaCheckbox, false);
        function validaCheckbox(){
        var checked = checkbox.checked;
        if(checked){
             i+1;
        }
    };

    let champis = form.elements.getElementById('champiñones');
        champis.addEventListener("change", validaCheckbox, false);
        function validaCheckbox(){
        var checked = checkbox.checked;
        if(checked){
             i+1;
        }
    };

    let piña = form.elements.getElementById('piña');
        piña.addEventListener("change", validaCheckbox, false);
        function validaCheckbox(){
        var checked = checkbox.checked;
        if(checked){
             i+1;
        }
    };
    let pulledpork = form.elements.getElementById('pulledPork');
        pulledpork.addEventListener("change", validaCheckbox, false);
        function validaCheckbox(){
        var checked = checkbox.checked;
        if(checked){
             i+1;
        }
    };
     let resultado = parseInt(t +i);
    
        return resultado;
        alert("el precio de la pizza es "+cuenta+" euros");
=======
    let euros = parseInt(x)
    return euros;
>>>>>>> a30b5b8b1cfe3d7dec7fcd824e217141cead5cbf
}


 function totalIngredientes(){
    //comprobamos los ingredientes marcados recorriendo el array de ingredientes
    let  checkbox = document.getElementsByName('ingredientes');
    let t=0;
    for (let x=0; x<checkbox.length;x++){
        if(checkbox[x].checked){
            t++;
        }
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



