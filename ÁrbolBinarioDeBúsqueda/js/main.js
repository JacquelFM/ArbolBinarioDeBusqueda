import Inventario from './Inventario.js';
import Producto from './Producto.js';

class Main {
    constructor() {
        let inventario = new Inventario();

        document.querySelector("#btnAgregar").addEventListener("click", () => {
            inventario.agregarProducto();
        });

        document.querySelector("#btnBuscar").addEventListener("click", () => {
            let codigo = document.querySelector("#intCodigo").value;

            inventario.buscarProducto(codigo);
        });

        document.querySelector("#btnInOrder").addEventListener("click", () => {
            inventario.inOrder();
        });

        document.querySelector("#btnPreOrder").addEventListener("click", () => {
            inventario.preOrder();
        });

        document.querySelector("#btnPostOrder").addEventListener("click", () => {
            inventario.postOrder();
        });

    }
}

let m = new Main();