import {Egreso} from "./egreso.model";

export class EgresoService {

  //atributos
  egresos : Egreso[] = [
    new Egreso("Rent", 900),
    new Egreso("Clothes", 200)
  ];


  //Métodos
  eliminarEgr(egr : Egreso){
    //ubicar el indice del egreso recibido en el arreglo
    const indice = this.egresos.indexOf(egr);

    //eliminar el elemento del arreglo usando su indice
    this.egresos.splice(indice,1);
  }

  agregaregreso(egr : Egreso){
    this.egresos.push(egr);
  }
}
