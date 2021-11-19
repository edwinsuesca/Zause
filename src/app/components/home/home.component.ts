import { Component, OnInit } from '@angular/core';
import { ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chefs = [
    {name: 'Diego Molina', img: '../../../assets/img/chef1.png', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: '100%'},

    {name: 'Andrea Corrales', img: '../../../assets/img/chef2.png', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: '90%'},

    {name: 'Beto Cárdenas', img: '../../../assets/img/chef3.png', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet. Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet. Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: '93%'},

    {name: 'Humbreto López', img: '../../../assets/img/chef4.png', description: 'Chef de Bogotá con 7 años de experiencia.', score: '61%'},

    {name: 'Carlos Herrera', img: '../../../assets/img/chef5.jpg', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet. Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet. Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: '40%'},

    {name: 'Natalia Gil', img: '../../../assets/img/chef7.jpg', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: '50%'},

    {name: 'Laura Ruíz', img: '../../../assets/img/chef6.webp', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet. Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet. Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: '53%'},

    {name: 'Humbreto López', img: '../../../assets/img/chef4.png', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: '77%'}
  ]

  chefsOrder = [];
  order = []
  desc = false;
  
  constructor() { }
  // @ViewChild('description') public description!:ElementRef;
  ngOnInit() {

    for (let i = 0; i <= (this.chefs.length - 1); i++) {
      let temp = parseInt(this.chefs[i].score.replace(/%/, ""));
      this.order.push(temp);
    }

    for (let i = 0; i <= (this.chefs.length - 1); i++) {
      for (let j = 1; j < (this.order.length - i); j++) {
        if (this.order[j - 1] < this.order[j]) {
          let tmp = this.order[j - 1];
          this.order[j - 1] = this.order[j];
          this.order[j] = tmp;

          let tmp2 = this.chefs[j - 1];
          this.chefs[j - 1] = this.chefs[j];
          this.chefs[j] = tmp2;
        }
      }
    }
  }
  
  public cambioClase = (description:any, showMore:any) =>{
    description.classList.toggle('hide');
    if(showMore.innerHTML == 'Ver menos'){
      showMore.innerHTML = 'Ver más'
    }else{showMore.innerHTML = 'Ver menos'}
  }

/*   currentStyles: Record<string, string> = {};
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
    };
  } */
}



