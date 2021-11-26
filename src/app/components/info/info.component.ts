import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  info = [
    {title: 'Elije un Chef', content: 'Aquí podrás buscar al profesional de conina que mejor se adapte a tus requerimientos. Disfruta de una experiencia gastronómica en la comodidad de tu casa con un chef a domicilio.'},

    {title: 'Platos', content: 'Aquí podrás buscar los platos que más te gusten. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iste deserunt sunt quas ullam autem odit vero magnam nobis vel, nam esse! Qui mollitia, aspernatur assumenda recusandae doloremque libero voluptates. <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iste deserunt sunt quas ullam autem odit vero magnam nobis vel, nam esse! Qui mollitia, aspernatur assumenda recusandae doloremque libero voluptates.'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
