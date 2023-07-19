import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPasienComponent } from './card-pasien.component';

describe('CardPasienComponent', () => {
  let component: CardPasienComponent;
  let fixture: ComponentFixture<CardPasienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPasienComponent]
    });
    fixture = TestBed.createComponent(CardPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
