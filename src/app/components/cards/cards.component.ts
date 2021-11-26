import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  platos = [
    { name: 'Carne al Barbu', img: '../../../assets/img/platos/1.jpg', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: 100 },

    { name: 'Andrea Corrales', img: '../../../assets/img/platos/2.jpg', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: 95 },

    { name: 'Beto Cárdenas', img: '../../../assets/img/platos/3.jpg', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet. Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet. Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: 90 },

    { name: 'Juan', img: '../../../assets/img/platos/4.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, accusamus praesentium commodi soluta nostrum ipsam.', score: 85 },

    { name: 'Fideos con verduras', img: '../../../assets/img/platos/5.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, accusamus praesentium commodi soluta nostrum ipsam.', score: 80 },

    { name: ' tteokbokki en salsa picante coreana', img: '../../../assets/img/platos/6.jpg', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: 75 },

    { name: 'Laura Ruíz', img: '../../../assets/img/platos/7.jpg', description: 'Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet. Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet. Chef de Bogotá con 7 años de experiencia; especialista en pizzas gourmet.', score: 70 },

    { name: 'Trozos de filete de pollo con champiñones guisados en salsa de tomate con brócoli hervido y arroz', img: '../../../assets/img/platos/8.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, accusamus praesentium commodi soluta nostrum ipsam.', score: 65 },

    { name: 'Champiñones con verduras', img: '../../../assets/img/platos/9.jpg', description: 'Este es el nuevo perfil de un nuevo chef', score: 60 }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  public cambioClase = (description: any, showMore: any) => {
    description.classList.toggle('hide');
    if (showMore.innerHTML == 'Ver menos') {
      showMore.innerHTML = 'Ver más'
    } else { showMore.innerHTML = 'Ver menos' }
  }
}
