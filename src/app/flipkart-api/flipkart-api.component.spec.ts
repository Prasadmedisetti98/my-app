import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartApiComponent } from './flipkart-api.component';

describe('FlipkartApiComponent', () => {
  let component: FlipkartApiComponent;
  let fixture: ComponentFixture<FlipkartApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
