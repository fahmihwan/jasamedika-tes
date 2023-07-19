import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasienComponent } from './pasien.component';

describe('PasienComponent', () => {
  let component: PasienComponent;
  let fixture: ComponentFixture<PasienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasienComponent]
    });
    fixture = TestBed.createComponent(PasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
