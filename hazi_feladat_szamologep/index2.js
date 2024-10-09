var kijelzo  = document.getElementById("kijelzo"); //a kijelző nevű változót deklaráljuk, mely alapvetően a számológép kijelzőét szimbolizálja.

function appendToDisplay(input){ 
    kijelzo.value += input;  // Eme függvény segítségével jön létre a lehetőség arra,hogy a számokat megjelenítsük a számológép kijelzőjén.
}

function torolj(){
    kijelzo.value = ""; // Ez a függvény egy üres sztringgel tér vissza,tehát kitörli a kijelzőn lévő összes számot. Ezt term. külön gombhoz kapcsoltam.
}

function szamolj(){
  if (kijelzo.value.includes('^2')) { //A számológép "törzse", először egy elágazással, mely a négyzetre emelés elvégzéshez szükséges. Melyhez hozzá adtunk egy try-catch szerkezetet a esetlegesen jelentkező hibák kezelésére. Mindenkét helyen a JS beépített függvényeit használtam ezek a:"pow", "eval", voltak. Természetesen a hibakezelést mindkét helyen alkalmaztam.
    kijelzo.value = parseInt(kijelzo.value);
   
    try {
      kijelzo.value = Math.pow(kijelzo.value, 2); //Apró módosítás/ szépítésként a négyzetre emelés gomb függvényének bemeneti értékeként csak a ^2-t adtam meg,hogy ne jelezze ki csúnyán a számológép kijelzőjén, a művelet elvégzésekor, ezért fentebb az elágazásban is ezt alkalmaztam.
    } catch (e) {
      kijelzo.value = "Error";
    }
  }


    try{kijelzo.value = eval(kijelzo.value);
    }catch(e){
        kijelzo.value = "Error";
    }

}



    
    
    
    
