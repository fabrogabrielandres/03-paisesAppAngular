import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/porPaisInterface';

@Component({
	selector: 'app-por-pais',
	templateUrl: './por-pais.component.html',
	styles: []
})
export class PorPaisComponent {
	termino: string = '';
	countries: Pais[] = [];
	public error: boolean = false;

	enviotextoPlaceholder: string="por pais variable"

	constructor(private paisService: PaisService) {}

	buscar(termino: string) {
		this.termino = termino;
		this.paisService.buscarPais(this.termino).subscribe({
			next: (paises) => {
				
				this.error = false;
				this.countries = paises;
			},
			error: (err) => {
				this.error = true;
				this.countries = [];
			}
		});
	}

	sugerencia(termino: string) {
		this.error=true
		}
}
