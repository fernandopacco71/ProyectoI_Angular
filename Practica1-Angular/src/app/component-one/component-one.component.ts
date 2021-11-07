import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnDestroy {

  constructor() { }

  /*ngOnInit(): void {
  }*/
  
  
  ngOnDestroy(): void {
    alert('desea ocultar el contendio del componente uno');
  }
  figura:any={
    tipo:'Trapecio',
    imagen:'assets/trapecio.png'
  }
}
