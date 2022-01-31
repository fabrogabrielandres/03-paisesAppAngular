import { Component, Input } from '@angular/core';
import { Pais } from '../../interfaces/porPaisInterface';

@Component({
	selector: 'app-pais-tabla',
	templateUrl: './pais-tabla.component.html',
	styleUrls: []
})
export class PaisTablaComponent {
	@Input() countries: Pais[] = [];
}
