import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {

  constructor() { }
  title="SITIO WEB DE ICIT";
  version="hola mundo angulas v12";
  ngOnInit(): void {
  }

}
