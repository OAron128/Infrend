import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeradoListComponent } from './verado-list.component';

describe('VeradoListComponent', () => {
  let component: VeradoListComponent;
  let fixture: ComponentFixture<VeradoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeradoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeradoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
