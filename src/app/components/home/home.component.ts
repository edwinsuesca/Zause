import { Component, OnInit } from '@angular/core';
import { ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slider = [
    {
      img1: './../../../assets/img/slider/1.jpg',
      description: 'Reverencia por la vida'
    },

    {
      img1: './../../../assets/img/slider/2.jpg',
      description: 'Reverencia por la vida'
    },

    {
      img1: './../../../assets/img/slider/3.png',
      description: 'Reverencia por la vida'
    },

    {
      img1: './../../../assets/img/slider/4.png',
      description: 'Reverencia por la vida'
    }
  ]

  chefs = [
    { name: 'Diego Molina', img: '../../../assets/img/chef1.png', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: 100 },

    { name: 'Andrea Corrales', img: '../../../assets/img/chef2.png', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: 95 },

    { name: 'Beto Cárdenas', img: '../../../assets/img/chef3.png', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet. Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet. Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: 90 },

    { name: 'Juan', img: '../../../assets/img/chef4.png', description: 'Chef de Bogotá con 7 años de experiencia.', score: 85 },

    { name: 'Carlos Herrera', img: '../../../assets/img/chef5.jpg', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet. Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet. Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: 80 },

    { name: 'Natalia Gil', img: '../../../assets/img/chef7.jpg', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: 75 },

    { name: 'Laura Ruíz', img: '../../../assets/img/chef6.webp', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet. Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet. Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: 70 },

    { name: 'Humbreto López', img: '../../../assets/img/chef4.png', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: 65 },

    { name: 'Santiago', img: '../../../assets/img/chef4.png', description: 'Este es el nuevo perfil de un nuevo chef', score: 60 },

    { name: 'Carla', img: '../../../assets/img/chef6.webp', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet. Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet. Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: 55 },

    { name: 'Wilson', img: '../../../assets/img/chef4.png', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: 50 },

    { name: 'Diego', img: '../../../assets/img/chef4.png', description: 'Este es el nuevo perfil de un nuevo chef', score: 45 },

    { name: 'Lucas', img: '../../../assets/img/chef4.png', description: 'Chef de Bogotá con 7 años de experiencia.', score: 40 }
  ];

  chefsOrder = [];
  order = [];
  desc = false;
  viewChefCondition = 6;
  viewChefs = [];
  margin: number = 0;


  constructor() { }
  // @ViewChild('description') public description!:ElementRef;
  @ViewChild('boxSlider') public boxSlider!: ElementRef;

  ngOnInit() {
    for (let i = 0; i <= (this.chefs.length - 1); i++) {
      let temp = this.chefs[i].score;
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
      if (i <= this.viewChefCondition - 1) {
        this.viewChefs.push(this.chefs[i])
      }
    }
  }
  ngAfterViewInit() {
    this.boxSlider.nativeElement.style.width = (this.slider.length * 100) + '%';
  }

  public cambioClase = (description: any, showMore: any) => {
    description.classList.toggle('hide');
    if (showMore.innerHTML == 'Ver menos') {
      showMore.innerHTML = 'Ver más'
    } else { showMore.innerHTML = 'Ver menos' }
  }

  public moreChefs = () => {
    var temp = this.viewChefCondition;
    if (this.viewChefCondition <= (this.chefs.length) - 3) {
      this.viewChefCondition += 3;
    }

    else {
      this.viewChefCondition += this.chefs.length - this.viewChefCondition;
    }

    for (let i = temp; i <= this.viewChefCondition - 1; i++) {
      this.viewChefs.push(this.chefs[i])
    }
  }

  public sliderCh(side: string) {
    if (side == "left" && this.margin < 0) {
      this.margin += 100;
      console.log(this.margin)
    }

    if (side == "right" && this.margin > -((this.slider.length - 1) * 100)) {
      this.margin -= 100;
      console.log(this.margin)
    }
  }

  /*   currentStyles: Record<string, string> = {};
    setCurrentStyles() {
      // CSS styles: set per current state of component properties
      this.currentStyles = {
        'font-style': this.canSave ? 'italic' : 'normal',
      };
    } */
}



