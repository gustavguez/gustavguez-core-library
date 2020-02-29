import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGustavguezCoreComponent } from './ngx-gustavguez-core.component';

describe('NgxGustavguezCoreComponent', () => {
  let component: NgxGustavguezCoreComponent;
  let fixture: ComponentFixture<NgxGustavguezCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxGustavguezCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGustavguezCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
