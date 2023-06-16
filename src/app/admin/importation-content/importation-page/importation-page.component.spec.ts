import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportationPageComponent } from './importation-page.component';

describe('ImportationPageComponent', () => {
  let component: ImportationPageComponent;
  let fixture: ComponentFixture<ImportationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
