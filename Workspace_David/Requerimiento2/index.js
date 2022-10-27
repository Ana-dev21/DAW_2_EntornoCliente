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
    return alert(`El precio es ${euros}`)
}

window.onload = function(){

    let envio = document.getElementById("finalizar")
    envio.addEventListener("click", totalTamaños)
}