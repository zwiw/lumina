import { Service, signal } from '@angular/core';
import { Film, Rezervare } from '../models/film';

@Service()
export class FilmService {
  private readonly filme: Film[] = [
    { id: 1, titlu: 'Ultima gară', ora: '18:00', durata: 110 },
    { id: 2, titlu: 'Noaptea în oraș', ora: '19:30', durata: 95 },
    { id: 3, titlu: 'Marea albastră', ora: '21:00', durata: 125 },
  ];

  private readonly _rezervari = signal<Rezervare[]>([]);
  readonly rezervari = this._rezervari.asReadonly();

  getToate(): Film[] {
    return this.filme;
  }

  adauga(nume: string, film: Film, bilete: number): void {
    const noua: Rezervare = {
      id: Date.now(),
      nume,
      titlu: film.titlu,
      ora: film.ora,
      bilete,
    };
    this._rezervari.update(lista => [...lista, noua]);
  }

  anuleaza(id: number): void {
    this._rezervari.update(lista => lista.filter(r => r.id !== id));
  }
}
