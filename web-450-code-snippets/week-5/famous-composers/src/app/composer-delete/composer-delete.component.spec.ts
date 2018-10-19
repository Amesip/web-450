import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposerDeleteComponent } from './composer-delete.component';

describe('ComposerDeleteComponent', () => {
  let component: ComposerDeleteComponent;
  let fixture: ComponentFixture<ComposerDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposerDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposerDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
