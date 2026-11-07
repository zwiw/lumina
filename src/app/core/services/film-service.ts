import { Service } from '@angular/core';
import { Film } from '../models/film';

@Service()
export class FilmService {
  private readonly filme: Film[] = [
    { id: 1, titlu: 'Ultima gară', ora: '18:00', durata: 110 },
    { id: 2, titlu: 'Noaptea în oraș', ora: '19:30', durata: 95 },
    { id: 3, titlu: 'Marea albastră', ora: '21:00', durata: 125 },
  ];

  getToate(): Film[] {
    return this.filme;
  }
}