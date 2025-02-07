// function fnSaludar(){
    // alert("ADIVINASTE CORRECTAMENTE");
    // console.log("console.log1")
    // }

function verificarnumero(){
    let recibirNumero = document.getElementById("numero").value;
    let mensaje ="";
    let numerorandom = Math.floor(Math.random() * 10) + 1;
    // let es una palabra reservada para establecer una variable
    console.log(numerorandom, "consolelog1");
    console.log(recibirNumero);
    // sirve para mostrar los valores en el inspector de la web
    if(recibirNumero == numerorandom){
    mensaje = "lo lograste"    
    }
    // if es una de las condicionales

    else if(recibirNumero > numerorandom){
        mensaje = "el numero es mayor"    
    }
    else {
    mensaje = "el numero es menor"
     }
    document.getElementById("resultado").innerText = mensaje;
}
    














