import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KelurahanComponent } from './kelurahan.component';

describe('KelurahanComponent', () => {
  let component: KelurahanComponent;
  let fixture: ComponentFixture<KelurahanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KelurahanComponent]
    });
    fixture = TestBed.createComponent(KelurahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
