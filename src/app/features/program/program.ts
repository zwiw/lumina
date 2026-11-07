import { Component, inject } from '@angular/core';
import { FilmService } from '../../core/services/film-service';

@Component({
  imports: [],
  selector: 'app-program',
  styleUrl: './program.scss',
  templateUrl: './program.html',
})
export class Program {
  private readonly filmService = inject(FilmService);
  protected readonly filme = this.filmService.getToate();
}