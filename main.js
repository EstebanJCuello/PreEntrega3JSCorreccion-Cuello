const productos = [
    { nombre: "Fideos", precio: 350},
    { nombre: "Arroz", precio: 400},
    { nombre: "Ravioles", precio: 500},
    { nombre: "Harina", precio: 250},
    { nombre: "Lentejas", precio: 300},
];
let carrito = []

let seleccion = prompt("Hola, desea comprar algun producto si o no.") 

while(seleccion != "si" && seleccion != "no"){
    alert("Porfavor ingresar si o no")
    seleccion = prompt("Hola, desea comprar algo si o no.")
}

if(seleccion == "si"){
    alert("A continuacion nuestra lista de productos")
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$")
    alert(todosLosProductos.join(" - "))
}
else if (seleccion == "no"){
    alert("gracias por venir.")
}

while(seleccion != "no"){
    let producto = prompt("Agregar un producto a tu carrito")
    let precio = 0 

    if(producto == "Fideos" || producto == "Arroz" || producto == "Ravioles" || producto == "Harina" || producto == "Lentejas"){
        switch (producto) {
            case "Fideos":
                precio = 350
                break;
            case "Arroz":
                precio = 400
                break;
            case "Ravioles":
                precio = 500
                break;
            case "Harina":
                precio = 250
                break;
            case "Lentejas":
                precio = 300
                break;
            default:
                break;
    }
    let unidades = parseInt(prompt("Cuantas unidades desea llevar?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
    alert("No tenemos ese producto")
    }

    seleccion = prompt("Desea seguir comprando?")

    while(seleccion === "no"){
        alert("gracias por comprar! Hasta pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, Total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio} `)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`)  