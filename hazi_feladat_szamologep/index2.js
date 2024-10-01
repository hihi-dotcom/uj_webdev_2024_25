var kijelzo  = document.getElementById("kijelzo"); 

function appendToDisplay(input){ 
    kijelzo.value += input; 
}

function torolj(){
    kijelzo.value = "";
}

function szamolj(){
  if (kijelzo.value.includes('^2')) {
    kijelzo.value = parseInt(kijelzo.value);
   
    try {
      kijelzo.value = Math.pow(kijelzo.value, 2); 
    } catch (e) {
      kijelzo.value = "Error";
    }
  }


    try{kijelzo.value = eval(kijelzo.value);
    }catch(e){
        kijelzo.value = "Error";
    }

}



    
    
    
    
