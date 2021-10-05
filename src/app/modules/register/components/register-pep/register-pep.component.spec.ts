import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPepComponent } from './register-pep.component';

describe('RegisterPepComponent', () => {
  let component: RegisterPepComponent;
  let fixture: ComponentFixture<RegisterPepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
