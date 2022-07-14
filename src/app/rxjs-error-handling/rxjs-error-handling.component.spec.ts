import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsErrorHandlingComponent } from './rxjs-error-handling.component';

describe('RxjsErrorHandlingComponent', () => {
  let component: RxjsErrorHandlingComponent;
  let fixture: ComponentFixture<RxjsErrorHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsErrorHandlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsErrorHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
