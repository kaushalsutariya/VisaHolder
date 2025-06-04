import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiComponent } from './verifi.component';

describe('VerifiComponent', () => {
  let component: VerifiComponent;
  let fixture: ComponentFixture<VerifiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
