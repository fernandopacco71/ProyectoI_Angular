import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    alert("BIENBENIDOS A MI PAGINA WEB Att. LuisFernando");
  }

  calcularAreaCuadrado(baseMayor:number,baseMenor:number,altura:number):number{
    return ((baseMayor+baseMenor)*altura)/2;
  }
  Hallar:any={
    bMayor:0,
    bMenor:0,
    altur:0
  }
  mostrar: boolean = true;
}
