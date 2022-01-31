import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/porPaisInterface';

@Injectable({
	providedIn: 'root'
})
export class PaisService {
	private apiUrl: string = 'https://restcountries.com/v3.1';

	constructor(private http: HttpClient) {}

	buscarPais(termino: string): Observable<Pais[]> {
		return this.http.get<Pais[]>(`${this.apiUrl}/name/${termino}`);
	}

	buscarCapital(termino: string): Observable<Pais[]> {
		return this.http.get<Pais[]>(`${this.apiUrl}/capital/${termino}`);
	}

	getPaisAlpha(id: string): Observable<Pais> {
		return this.http.get<Pais>(`${this.apiUrl}/alpha/${id}`);
	}

	getPorRegion(termino: string): Observable<Pais[]> {
		return this.http.get<Pais[]>(`${this.apiUrl}/region/${termino}`);
	}
}
