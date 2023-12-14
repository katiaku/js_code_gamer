import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModProfileComponent } from './mod-profile.component';

describe('ModProfileComponent', () => {
  let component: ModProfileComponent;
  let fixture: ComponentFixture<ModProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModProfileComponent]
    });
    fixture = TestBed.createComponent(ModProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
