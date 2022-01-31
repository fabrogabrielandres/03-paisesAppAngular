import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/porPaisInterface';
import { PaisService } from '../../services/pais.service';

@Component({
	selector: 'app-por-region',
	templateUrl: './por-region.component.html',
	styles: []
})
export class PorRegionComponent implements OnInit {
	regiones: string[] = [ 'america', 'asia', 'europe', 'oseania' ];
	currentRegion: string = '';
  data:Pais[]=[]

	constructor( private paisService : PaisService ) {}
	conditionalClass(region: string) {
		return this.currentRegion === region ? 'btn btn-primary' : 'btn btn-secondary';
	}

	asignar(region: string) {
		this.currentRegion = region;
		console.log(this.currentRegion);
	}

  obtenerPorRegion(region:string){
    this.paisService.getPorRegion(region)
      .subscribe({
        next:(data)=>{this.data=data
        },
        error:(error)=>{
          console.log(error);
          
        }
      })
    
    
  } 

	ngOnInit(): void {}
}
