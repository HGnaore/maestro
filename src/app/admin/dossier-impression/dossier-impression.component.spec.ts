import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierImpressionComponent } from './dossier-impression.component';

describe('DossierImpressionComponent', () => {
  let component: DossierImpressionComponent;
  let fixture: ComponentFixture<DossierImpressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DossierImpressionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DossierImpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
