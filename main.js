


let pie = document.getElementById("titulo")
titulo.innerHTML= "<h1>TIENDA CABJ</h1>"

const productos = [{ id: 1,  nombre: "Remera Boca 2024", precio: 55000 },
                  {  id: 2,  nombre: "Pantalon CABJ 2024", precio: 30000 },
                  {  id: 3,  nombre: "Remera entrenamiento"  , precio: 24500},
                  {  id: 4,  nombre: "Medias Cabj" , precio: 10000,}];
                
let carrito = []

for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.classList.add("color");
    //Definimos el innerHTML//
    contenedor.innerHTML = `<h3> id: ${producto.id}</h3>
                            <p>  Producto: ${producto.nombre}</p>
                            <b> $ ${producto.precio}</b>`;
    document.body.appendChild(contenedor);
    //creamos el boton para comprar y le damos funcionamiento//
 let comprar = document.createElement("button");
 comprar.innerText = "Comprar";

 contenedor.append(comprar);

 comprar.addEventListener("click",() =>{
    carrito.push({
        id: producto.id,
        producto: producto.nombre,
        precio: producto.precio,
    });
console.log(carrito);
saveLocal();
 } );
};
//guardamos los datos del carrito en local storage//
const saveLocal = () => {
    localStorage.setItem("carrito",JSON.stringify (carrito))

}
