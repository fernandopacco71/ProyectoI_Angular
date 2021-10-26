import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calcularAreaCuadrado(lado:number):number{
    return lado*lado;
  }
  Hallar:any={
    lado:16,
  }
}
