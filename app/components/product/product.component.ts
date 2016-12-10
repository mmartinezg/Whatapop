import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Product } from "../../models/product";

@Component({
    selector: "product",
    templateUrl: "./app/components/product/product.component.html"
})
export class ProductComponent {

    @Input() data: Product;
    @Output() verDetalleProductoSeleccionado: EventEmitter<number> = new EventEmitter<number>();

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
    | Green Path                                                       |
    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
    | Expón un atributo de salida con el decorador correspondiente. El |
    | tipo de dicho atributo debe permitir la emisión de eventos; la   |
    | idea es enviar al componente padre el producto sobre el cuál se  |
    | ha hecho clic. Y puesto que dicho clic se realiza en el template |
    | de este componente, necesitas, además, un manejador para el      |
    | mismo.                                                           |
    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    verDetalleProducto(){
        this.verDetalleProductoSeleccionado.emit(this.data.id);
    }
}
