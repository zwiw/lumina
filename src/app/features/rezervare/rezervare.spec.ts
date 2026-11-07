import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rezervare } from './rezervare';

describe('Rezervare', () => {
  let component: Rezervare;
  let fixture: ComponentFixture<Rezervare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rezervare],
    }).compileComponents();

    fixture = TestBed.createComponent(Rezervare);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
