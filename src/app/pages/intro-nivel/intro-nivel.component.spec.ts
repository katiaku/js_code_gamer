import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroNivelComponent } from './intro-nivel.component';

describe('IntroNivelComponent', () => {
  let component: IntroNivelComponent;
  let fixture: ComponentFixture<IntroNivelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroNivelComponent]
    });
    fixture = TestBed.createComponent(IntroNivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
