import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bilete } from './bilete';

describe('Bilete', () => {
  let component: Bilete;
  let fixture: ComponentFixture<Bilete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bilete],
    }).compileComponents();

    fixture = TestBed.createComponent(Bilete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
