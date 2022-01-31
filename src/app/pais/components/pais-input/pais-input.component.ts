import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {debounceTime, Subject} from "rxjs";

@Component({
	selector: 'app-pais-input',
	templateUrl: './pais-input.component.html',
	styles: []
})
export class PaisInputComponent implements OnInit {
	@Output() onEnter: EventEmitter<string> = new EventEmitter();
	@Output() onDebounce: EventEmitter<string> = new EventEmitter();

	@Input() recivetextoPlaceholder?:string
	
	debouncer:Subject<string> = new Subject(); 
	
	termino: string = '';
	
	ngOnInit()  {
		this.debouncer
		.pipe(debounceTime(300))
		.subscribe(valor=>{
			this.onDebounce.emit(valor)
			
		})
	}


	buscar() {
		this.onEnter.emit(this.termino);
		console.log("buscar",this.termino);
		
	}

	teclaPresionada(event: any ){
		const valor = event.target.value
				
		this.debouncer.next(valor)
	
		
	}
}
