import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallExternalWebServiceComponent } from './call-external-web-service.component';

describe('CallExternalWebServiceComponent', () => {
  let component: CallExternalWebServiceComponent;
  let fixture: ComponentFixture<CallExternalWebServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallExternalWebServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallExternalWebServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
