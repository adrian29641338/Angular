import { Component} from '@angular/core';

@Component({
	selector: 'curso',
	templateUrl: './curso.component.html',
})

export class CursoComponent {
	public nombre:string = "Angular 7";
	constructor(){
		console.log("Curso: Constructor del componente");
	}
}