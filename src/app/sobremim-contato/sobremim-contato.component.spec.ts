import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremimContatoComponent } from './sobremim-contato.component';

describe('SobremimContatoComponent', () => {
  let component: SobremimContatoComponent;
  let fixture: ComponentFixture<SobremimContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremimContatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobremimContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
