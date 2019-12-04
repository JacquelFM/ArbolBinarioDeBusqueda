import Producto from "./Producto.js";

export default class Inventario {
    constructor() {
        this._lista = null;
        this._raizArbol = null;
    }

    agregarProducto(nuevoProducto) {
        if (this._raizArbol == null) {
            this._raizArbol = nuevoProducto;
        } else {
            this._agregarProducto(this._raizArbol, nuevoProducto);
        }
    }

    _agregarProducto(raiz, producto) {
        if (producto.codigo < raiz.codigo) {
            if (raiz.izquierda == null) {
                raiz.izquierda = producto;
            } else {
                this._agregarProducto(raiz.izquierda, producto);
            }
        } else {
            if (raiz.derecha === null) {
                raiz.derecha = producto;
            } else {
                this._agregarProducto(raiz.derecha, producto)
            }
        }

    }

    buscarProducto(codigo) {
        console.log(codigo);
        console.log("buscar");

    }

    _buscarProducto() {

    }

    inOrder(valor, sentencia) {
        console.log("indOrder");

        if (valor.izquierda != null) {
            this.inOrder(valor.izquierda, sentencia)
        }

        sentencia += valor.codigo + ", ";

        if (valor.derecha != null) {
            this.inOrder(valor.derecha, sentencia)
        }

    }

    preOrder(valor, sentencia) {
        console.log("preOrder");

        sentencia += valor.codigo + ", ";

        if (valor.izquierda != null) {
            this.preOrder(valor.izquierda, sentencia);
        }

        if (valor.derecha != null) {
            this.preorder(valor.derecha, sentencia);
        }
    }

    postOrder(valor, sentencia) {
        console.log("postOrder");

        if (valor.izquierda != null) {
            this.postOrder(valor.izquierda, sentencia)
        }

        if (valor.derecha != null) {
            this.postOrder(valor.derecha, sentencia)
        }

        sentencia += valor.codigo + " ";
    }

}