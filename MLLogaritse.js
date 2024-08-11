const shfaqe = document.getElementById("shfaqe");

function shfaqeneEkran(input){
    shfaqe.value += input;
}

function pastroEkranin(){
    shfaqe.value = "";
}

function bejLLogarite(){
    try{
        shfaqe.value = eval(shfaqe.value);
    }
    catch{
        shfaqe.value = "Error";
    }
}