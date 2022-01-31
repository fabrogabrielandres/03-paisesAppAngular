import { Component } from '@angular/core';
import { Capital } from '../../interfaces/porCapital';
import { PaisService } from '../../services/pais.service';

@Component({
	selector: 'app-por-capital',
	templateUrl: './por-capital.component.html',
	styles: []
})
export class PorCapitalComponent {
	termino: string = '';
	countries: Capital[] = [];
	public error: boolean = false;

	enviotextoPlaceholder: string="por capital variable"


	constructor(private paisService: PaisService) {}

	buscar(termino: string) {
		this.termino = termino;
		this.paisService.buscarCapital(this.termino).subscribe({
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
