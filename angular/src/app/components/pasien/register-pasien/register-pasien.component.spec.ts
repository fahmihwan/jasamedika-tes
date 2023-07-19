import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPasienComponent } from './register-pasien.component';

describe('RegisterPasienComponent', () => {
  let component: RegisterPasienComponent;
  let fixture: ComponentFixture<RegisterPasienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPasienComponent]
    });
    fixture = TestBed.createComponent(RegisterPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
