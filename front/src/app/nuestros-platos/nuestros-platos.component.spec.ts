import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrosPlatosComponent } from './nuestros-platos.component';

describe('NuestrosPlatosComponent', () => {
  let component: NuestrosPlatosComponent;
  let fixture: ComponentFixture<NuestrosPlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestrosPlatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestrosPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
