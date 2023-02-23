import {Ingreso} from "./ingreso.model";

export class IngresoService {

  //atributos
  ingresos : Ingreso[] = [
    new Ingreso("Salary", 4000),
    new Ingreso("Car Sale", 500)
  ];

  //métodos
  eliminarIngreso(ingr : Ingreso){
    //obtener indice del ingreso recibido como parametro
    const indice : number = this.ingresos.indexOf(ingr);

    //eliminar el ingreso del arreglo de ingresos usando su index
    this.ingresos.splice(indice,1)
  }

  agregarIngreso(ing : Ingreso){
    this.ingresos.push(ing);
  }

}
