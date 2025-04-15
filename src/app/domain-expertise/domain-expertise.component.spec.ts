import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainExpertiseComponent } from './domain-expertise.component';

describe('DomainExpertiseComponent', () => {
  let component: DomainExpertiseComponent;
  let fixture: ComponentFixture<DomainExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainExpertiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
