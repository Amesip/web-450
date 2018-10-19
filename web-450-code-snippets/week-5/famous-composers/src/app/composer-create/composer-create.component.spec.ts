import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposerCreateComponent } from './composer-create.component';

describe('ComposerCreateComponent', () => {
  let component: ComposerCreateComponent;
  let fixture: ComponentFixture<ComposerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
