import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/porPaisInterface';

@Component({
	selector: 'app-ver-pais',
	templateUrl: './ver-pais.component.html',
	styles: []
})
export class VerPaisComponent implements OnInit {
	country !:Pais
	constructor(private activateRoute: ActivatedRoute, private paisService: PaisService) {}

	ngOnInit(): void {
		this.activateRoute.params
			.pipe(switchMap((param) => this.paisService.getPaisAlpha(param['id'])),
			tap(console.log))
			.subscribe((pais) =>this.country=pais[0]);

	}
}
