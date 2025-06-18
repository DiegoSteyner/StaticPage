import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerguntasCrudComponent } from './perguntas-crud.component';

describe('PerguntasCrudComponent', () => {
  let component: PerguntasCrudComponent;
  let fixture: ComponentFixture<PerguntasCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerguntasCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerguntasCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
