import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaTableComponent } from './visa-table.component';

describe('VisaTableComponent', () => {
  let component: VisaTableComponent;
  let fixture: ComponentFixture<VisaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisaTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
