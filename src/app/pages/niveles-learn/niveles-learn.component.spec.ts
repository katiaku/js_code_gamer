import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelesLearnComponent } from './niveles-learn.component';

describe('NivelesLearnComponent', () => {
  let component: NivelesLearnComponent;
  let fixture: ComponentFixture<NivelesLearnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NivelesLearnComponent]
    });
    fixture = TestBed.createComponent(NivelesLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
