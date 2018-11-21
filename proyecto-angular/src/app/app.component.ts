import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public title: string = 'Mi primer proyecto en angular js';
  public subtitle: string = 'es mi primera vez';
  public flagAlumno:boolean = true;

  public toogleAlumno(){
  	
  	this.flagAlumno = this.flagAlumno == true ? false : true;
  }
}
