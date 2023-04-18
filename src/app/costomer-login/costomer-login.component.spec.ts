import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostomerLoginComponent } from './costomer-login.component';

describe('CostomerLoginComponent', () => {
  let component: CostomerLoginComponent;
  let fixture: ComponentFixture<CostomerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostomerLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostomerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
