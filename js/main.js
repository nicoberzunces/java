
const cantidadCarrito = document.getElementById("cantidadCarrito")
const tiendaBoca = document.getElementById("tiendaBoca")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")
const pie = document.getElementById("titulo")
titulo.innerHTML= "<h1>TIENDA CABJ</h1>"
const redes = document.getElementById("redes")

const productos = [{ id: 1,  nombre: "Remera Boca 2024", precio: 55000, img:"https://bocashop.vteximg.com.br/arquivos/ids/169923-1000-1000/HY0276.png?v=638343776360330000",cantidad: 1,},
                  {  id: 2,  nombre: "Pantalon CABJ 2024", precio: 30000, img:"https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/u6cc872wantd3nujp90q9y62h1ry/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5",cantidad: 1,},
                  {  id: 3,  nombre: "Remera entrenamiento"  , precio: 24500, img:"https://assets.adidas.com/images/w_600,f_auto,q_auto/5db8c876c0f54efaa5b4ae3f0125838d_9366/Camiseta_de_Entrenamiento_Boca_Juniors_Condivo_22_Azul_HC1007_21_model.jpg",cantidad: 1,},
                  {  id: 5,  nombre: "Medias Cabj" , precio: 10000, img:"https://bocashop.vteximg.com.br/arquivos/ids/169777-550-550/HY3317_1.jpg?v=638277992179170000", cantidad: 1,},
                  {  id: 6,  nombre: "Campera oficial 2024" , precio: 76000, img:"https://newsport.vtexassets.com/arquivos/ids/18704830-800-auto?v=638446646541870000&width=800&height=auto&aspect=true", cantidad: 1,},
                  {  id: 7,  nombre: "Bandera" , precio: 12300, img:"https://http2.mlstatic.com/D_NQ_NP_876064-MLA43779551018_102020-O.webp", cantidad: 1,},
                  {  id: 8,  nombre: "Reloj oficial" , precio: 16400, img:"https://http2.mlstatic.com/D_NQ_NP_960026-MLA50201527353_062022-O.webp", cantidad: 1,},
                  {  id: 9,  nombre: "Musculosa 2024" , precio: 37600, img:"https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw010c926d/products/ADHY0405/ADHY0405-1.JPG", cantidad: 1,},
                  {  id: 10,  nombre: "Botines Cabj" , precio: 41500, img:"https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6eae29d3/products/ADGZ2562/ADGZ2562-1.JPG", cantidad: 1,},]
                
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

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
console.log(carrito.length)
carritoCounter()
saveLocal();

});


});

//guardamos los datos del carrito en local storage//
const saveLocal = () => {
    localStorage.setItem("carrito",JSON.stringify (carrito))
}



