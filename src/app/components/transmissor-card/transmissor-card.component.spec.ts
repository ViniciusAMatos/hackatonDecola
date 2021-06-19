import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmissorCardComponent } from './transmissor-card.component';

describe('TransmissorCardComponent', () => {
  let component: TransmissorCardComponent;
  let fixture: ComponentFixture<TransmissorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransmissorCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmissorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
