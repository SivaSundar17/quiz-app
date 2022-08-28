import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizMaterialsComponent } from './quiz-materials.component';

describe('QuizMaterialsComponent', () => {
  let component: QuizMaterialsComponent;
  let fixture: ComponentFixture<QuizMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
