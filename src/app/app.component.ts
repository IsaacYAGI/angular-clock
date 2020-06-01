import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fecha: Date = new Date();
  formato: string;

  constructor(){
    this.formato = "HH:mm:ss";
    this.update();
  }

  update(){
    setInterval(() => this.fecha = new Date(),1000);
  }
}
