import Producto from "./Producto.js";

export default class Inventario {
    constructor() {
        this._lista = null;
    }

    agregarProducto(nuevoProducto) {
        console.log("agregar");
    }

    _agregarProducto() {

    }

    buscarProducto(codigo) {
        console.log(codigo);
        console.log("buscar");

    }

    _buscarProducto() {

    }

    inOrder() {
        console.log("indOrder");

    }

    preOrder() {
        console.log("preOrder");

    }

    postOrder() {
        console.log("postOrder");

    }

}