import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosCrudComponent } from './formularios-crud.component';

describe('FormulariosCrudComponent', () => {
  let component: FormulariosCrudComponent;
  let fixture: ComponentFixture<FormulariosCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariosCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariosCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
