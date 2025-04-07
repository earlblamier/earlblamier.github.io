import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureLeftComponent } from './feature-left.component';

describe('FeatureLeftComponent', () => {
  let component: FeatureLeftComponent;
  let fixture: ComponentFixture<FeatureLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureLeftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
