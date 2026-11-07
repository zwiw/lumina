import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-bilete',
  styleUrl: './bilete.scss',
  templateUrl: './bilete.html',
})
export class Bilete {
  protected readonly preturi = signal([
    { tip: 'Adult', pret: 80 },
    { tip: 'Student', pret: 40 },
    { tip: 'Copil', pret: 30 },
  ]);
}