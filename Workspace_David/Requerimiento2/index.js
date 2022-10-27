function totalTamaños(){

    //Referencia a los tamaños de la pizza
    let tamaño = document.getElementsByName("tamaño").values
    let x = 0;

    switch (tamaño){
        
        case tamaño[0]:
            x = 5;
            break;
        case tamaño[1]:
            x = 10;
            break;
        case tamaño[2]:
            x = 15;
            break;
        default:
            console.log("ERROR")
    }
    return alert(`El precio TOTAL es ${x}, DISFRUTA LA PIZZA`)
    
}

window.onload = function(){

    let envio = document.getElementById("finalizar")
    envio.addEventListener("click", totalTamaños)
}