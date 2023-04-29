import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceDisplayerComponent } from './advice-displayer.component';

describe('AdviceDisplayerComponent', () => {
  let component: AdviceDisplayerComponent;
  let fixture: ComponentFixture<AdviceDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviceDisplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviceDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
