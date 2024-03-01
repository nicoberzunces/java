
const cantidadCarrito = document.getElementById("cantidadCarrito")
const tiendaBoca = document.getElementById("tiendaBoca")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")
const pie = document.getElementById("titulo")
titulo.innerHTML= "<h1>TIENDA CABJ</h1>"

const productos = [{ id: 1,  nombre: "Remera Boca 2024", precio: 55000, img:"https://bocashop.vteximg.com.br/arquivos/ids/169923-1000-1000/HY0276.png?v=638343776360330000",cantidad: 1,},
                  {  id: 2,  nombre: "Pantalon CABJ 2024", precio: 30000, img:"https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/u6cc872wantd3nujp90q9y62h1ry/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5",cantidad: 1,},
                  {  id: 3,  nombre: "Remera entrenamiento"  , precio: 24500, img:"https://assets.adidas.com/images/w_600,f_auto,q_auto/5db8c876c0f54efaa5b4ae3f0125838d_9366/Camiseta_de_Entrenamiento_Boca_Juniors_Condivo_22_Azul_HC1007_21_model.jpg",cantidad: 1,},
                  {  id: 4,  nombre: "Medias Cabj" , precio: 10000, img:"https://bocashop.vteximg.com.br/arquivos/ids/169777-550-550/HY3317_1.jpg?v=638277992179170000", cantidad: 1,}]
                
let carrito = [];

productos.forEach((producto) => {
    let contenedor = document.createElement("div");
    contenedor.className = "tarjeta";
    //Definimos el innerHTML//
    contenedor.innerHTML = `<p>  Producto: ${producto.nombre}</p>
                            <h3> id: ${producto.id}</h3>
                            <b class="precio"> $ ${producto.precio}</b>
                            <img src="${producto.img}">
                            `;
    tiendaBoca.append(contenedor)
    //creamos el boton para comprar y le damos funcionamiento//
 let comprar = document.createElement("button");
 comprar.innerText = "Comprar";
 comprar.className = "Comprar";

 contenedor.append(comprar);
comprar.addEventListener("click",() =>{
    const repeat = carrito.some((repeatProducto) => repeatProducto.id === producto.id)
    console.log(repeat)
    if (repeat){
        carrito.map((prod) => {
            if(prod.id === producto.id){
                prod.cantidad++;
            } 
        })
    } else{
     carrito.push({
    id: producto.id,
    nombre: producto.nombre,
    precio: producto.precio,
    img: producto.img,
    cantidad: producto.cantidad,
 });
}
 
console.log(carrito);
carritoCounter()


});


});

//guardamos los datos del carrito en local storage//
const saveLocal = () => {
    localStorage.setItem("carrito",JSON.stringify (carrito))
    saveLocal();
}