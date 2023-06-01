import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeradoComponent } from './verado.component';

describe('VeradoComponent', () => {
  let component: VeradoComponent;
  let fixture: ComponentFixture<VeradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
