import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SedsMastheadComponent } from './seds-masthead.component';

describe('SedsMastheadComponent', () => {
  let component: SedsMastheadComponent;
  let fixture: ComponentFixture<SedsMastheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SedsMastheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SedsMastheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
