import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { settings } from '../modelos/configuracion';
import { Institucion } from '../modelos/institucion';


@Component({
  selector: 'alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.sass']
})
export class AlumnoComponent implements OnInit, DoCheck, OnDestroy {
	public titulo:string = "Titulo Inicial de Alumno";
  public config = settings;
  public miInstitucion:Institucion;
  public misInstituciones: Array<Institucion>;
  constructor() { 
  	console.log("Alumno: Constructor del componente");
    this.miInstitucion = new Institucion("Tecsup", "JLByR", "20134567891", 2000);
    this.misInstituciones = [
      this.miInstitucion,
      new Institucion("Tecsup 2", "AQP", "12343365", 1999),
      new Institucion("Tecsup 1", "Lima", "12434365", 2001),
      new Institucion("Binario", "World", "34251876", 2005),
    ];
  }

  ngOnInit() {
  	console.log("Alumno: Se a ejecutado el evento onInit");
    console.log(this.misInstituciones);
  }
  ngDoCheck(){
  	console.log("Alumno: Se a ejecutado el evento DoCheck");
  }
  ngOnDestroy(){
  	console.log("Sea ejecutado el evento OnDestroy");
  }
  public cambiarTitulo(){
  	this.titulo = "Titulo Final del alumno";
  }
}
