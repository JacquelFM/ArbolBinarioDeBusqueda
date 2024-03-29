import Inventario from './Inventario.js';
import Producto from './Producto.js';

class Main {
    constructor() {
        let inventario = new Inventario();

        document.querySelector("#btnAgregar").addEventListener("click", () => {
            let intCodigo = document.querySelector("#numCodigo").value;
            let intNombre = document.querySelector("#nombreArticulo").value;
            let intPrecio = Number(document.querySelector("#precioArticulo").value);
            let intCantidad = Number(document.querySelector("#cantidad").value);
            let intDescripcion = document.querySelector("#descripcionArticulo").value;

            inventario.agregarProducto(
                new Producto(
                    intCodigo,
                    intNombre,
                    intPrecio,
                    intCantidad,
                    intDescripcion
                ));

        });

        document.querySelector("#btnBuscar").addEventListener("click", () => {
            let codigo = document.querySelector("#intCodigo").value;

            inventario.buscarProducto(codigo);
        });

        document.querySelector("#btnInOrder").addEventListener("click", () => {
            let codigo = document.querySelector("#intCodigo").value;

            inventario.inOrder(codigo);
        });

        document.querySelector("#btnPreOrder").addEventListener("click", () => {
            let codigo = document.querySelector("#intCodigo").value;

            inventario.preOrder(codigo);
        });

        document.querySelector("#btnPostOrder").addEventListener("click", () => {
            let codigo = document.querySelector("#intCodigo").value;

            inventario.postOrder(codigo);
        });

    }
}

let m = new Main();