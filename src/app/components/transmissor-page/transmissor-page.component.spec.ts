import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmissorPageComponent } from './transmissor-page.component';

describe('TransmissorPageComponent', () => {
  let component: TransmissorPageComponent;
  let fixture: ComponentFixture<TransmissorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransmissorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmissorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
