import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegioesPageComponent } from './regioes-page.component';

describe('RegioesPageComponent', () => {
  let component: RegioesPageComponent;
  let fixture: ComponentFixture<RegioesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegioesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegioesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
