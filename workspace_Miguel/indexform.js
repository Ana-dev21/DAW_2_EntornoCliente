


let form=documents.forms.pedido;

 form.elements.getElementById('finalizar').onclick = function cuenta(){
    let t=0;
    let i=0;
    //radiobutton info:https://www.techiedelight.com/es/determine-whether-radio-button-selected-javascript/
    let tamaño = form.elements.getElementsByName(tamaño);
    if (tamaño.value==peque && tamaño.checked) {
        t=5;
    } else {
        if (tamaño.value==media && tamaño.checked) {
             t=5 ;       
    } else {
             t=10;        
    }
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
}

    

     




