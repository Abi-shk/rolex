import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleviewComponent } from './singleview.component';

describe('SingleviewComponent', () => {
  let component: SingleviewComponent;
  let fixture: ComponentFixture<SingleviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleviewComponent]
    });
    fixture = TestBed.createComponent(SingleviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
