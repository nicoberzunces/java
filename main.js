

const IVA = 1.21

function calcularIva(importe){  
    if (parseFloat(importe)){  
        let resultado = importe * IVA  
        alert("el importe final es: " + resultado) 
    }

}


function calcularPrecioFinal(){  
    let precioDelProducto = prompt("ingresa el importe del producto:") 
    calcularIva(precioDelProducto) 
}

calcularPrecioFinal()




//Arrays
let frutas = ["Manzana","Melon","Banana","Piña"]

for (let x=0; x < frutas.length; x++)
  console.log(frutas[x])