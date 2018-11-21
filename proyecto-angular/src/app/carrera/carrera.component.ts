import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.sass']
})
export class CarreraComponent implements OnInit {
	public NombreCarrera:string = "Ingeniería de Sistemas";
	public DuracionCarrera:number = 5;
  constructor() { }

  ngOnInit() {
  }

}
