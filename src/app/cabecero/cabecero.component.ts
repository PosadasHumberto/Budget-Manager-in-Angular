import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  //atributos
  @Input()
  ingreso : number;

  @Input()
  egreso : number;

  @Input()
  porcentaje : number;

  @Input()
  presupuesto : number;

  //constructor
  constructor() { }

  ngOnInit(): void {
  }

}
