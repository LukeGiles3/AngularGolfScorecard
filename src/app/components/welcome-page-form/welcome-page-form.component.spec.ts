import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageFormComponent } from './welcome-page-form.component';

describe('WelcomePageFormComponent', () => {
  let component: WelcomePageFormComponent;
  let fixture: ComponentFixture<WelcomePageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomePageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
