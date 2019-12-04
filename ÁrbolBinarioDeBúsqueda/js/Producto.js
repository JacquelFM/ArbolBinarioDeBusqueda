export default class Producto {
    constructor(codigo, nombre, precio, cantidad, descripcion) {
        this._codigo = codigo;
        this._nombre = nombre;
        this._precio = precio;
        this._cantidad = cantidad;
        this._descripcion = descripcion;
        this._hder = null;
        this._hizq = null;

    }

    get codigo() {
        return this._codigo;
    }

    get nombre() {
        return this._nombre;
    }

    get hder() {
        return this._hder;
    }

    get hizq() {
        return this._hizq;
    }

    get precio() {
        return this._precio;
    }

    get cantidad() {
        return this._cantidad;
    }

    get descripcion() {
        return this._descripcion;
    }

    set hder(nuevo) {
        this._hder = nuevo;
    }

    set hizq(nuevo) {
        this._hizq = nuevo;
    }

    toString() {
        return `Nombre: ${this._nombre}, 
        precio: ${this._precio},
        cantidad: ${this._cantidad} y 
        decripción: ${this._descripcion}`;
    }

}