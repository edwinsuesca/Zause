import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  options = [
    {element: "Inicio", routerLink: "/home"},
    {element: "Nav", routerLink: "/nav"},
    {element: "Qué es Zause", routerLink: "/about"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
