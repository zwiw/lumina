import { Component, inject, signal } from '@angular/core';
import { FilmService } from '../../core/services/film-service';

@Component({
  imports: [],
  selector: 'app-rezervare',
  styleUrl: './rezervare.scss',
  templateUrl: './rezervare.html',
})
export class Rezervare {
  private readonly filmService = inject(FilmService);

  protected readonly filme = this.filmService.getToate();
  protected readonly rezervari = this.filmService.rezervari;

  protected readonly nume = signal('');
  protected readonly filmId = signal(1);
  protected readonly bilete = signal(1);
  protected readonly mesaj = signal('');
  protected readonly eroare = signal('');

  setNume(e: Event): void {
    this.nume.set((e.target as HTMLInputElement).value);
  }

  setFilm(e: Event): void {
    this.filmId.set(Number((e.target as HTMLSelectElement).value));
  }

  setBilete(e: Event): void {
    const valoare = Number((e.target as HTMLInputElement).value);
    this.bilete.set(Math.min(10, Math.max(1, valoare || 1)));
  }

  trimite(): void {
    this.mesaj.set('');
    this.eroare.set('');

    const nume = this.nume().trim();
    if (nume.length < 2) {
      this.eroare.set('Scrie numele tău (minimum 2 litere).');
      return;
    }

    const film = this.filme.find(f => f.id === this.filmId());
    if (!film) {
      this.eroare.set('Alege un film.');
      return;
    }

    this.filmService.adauga(nume, film, this.bilete());
    this.mesaj.set(`Mulțumim, ${nume}! Ai rezervat ${this.bilete()} bilet(e) la „${film.titlu}", ora ${film.ora}.`);
    this.nume.set('');
    this.bilete.set(1);
  }

  anuleaza(id: number): void {
    this.filmService.anuleaza(id);
  }
}
