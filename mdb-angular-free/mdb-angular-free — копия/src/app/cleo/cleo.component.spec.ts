import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleoComponent } from './cleo.component';

describe('CleoComponent', () => {
  let component: CleoComponent;
  let fixture: ComponentFixture<CleoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
