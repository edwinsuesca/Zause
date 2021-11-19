import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  constructor() { }
  showCat = "none";
  ngOnInit(): void {
    console.log(this.color())
  }

  generarLetra(){
    var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
    var numero = (Math.random()*15).toFixed(0);
    return letras[numero];
  }

  color(){
    var coolor = "";
    for(var i=0;i<4;i++){
      coolor = coolor + this.generarLetra();
    }
    return "#ff" + coolor;
  }

  categoryShow(){
    this.showCat = "grid";
  }

  categoryNone(){
    this.showCat = "none";
    console.log(this.showCat)
  }
}
