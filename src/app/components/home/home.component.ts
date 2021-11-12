import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chefs = [
    {name: 'Carlos Herrera', img: '../../../assets/img/chef1.png', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet', score: '80%'},

    {name: 'Andrea Corrales', img: '../../../assets/img/chef2.png', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet. Lorem ipsum', score: '12%'},

    {name: 'Beto Cárdenas', img: '../../../assets/img/chef3.png', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet', score: '93%'},

    {name: 'Humbreto López', img: '../../../assets/img/chef4.png', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet', score: '77%'},

    {name: 'Carlos Herrera', img: '../../../assets/img/chef1.png', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet', score: '80%'},

    {name: 'Andrea Corrales', img: '../../../assets/img/chef2.png', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet', score: '12%'},

    {name: 'Beto Cárdenas', img: '../../../assets/img/chef3.png', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet', score: '93%'},

    {name: 'Humbreto López', img: '../../../assets/img/chef4.png', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet', score: '77%'}
  ]

  constructor() { }

  ngOnInit(): void {

  }

/*   currentStyles: Record<string, string> = {};
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
    };
  } */
}


