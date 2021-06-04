import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocaoListItemComponent } from './produto-list-item.component';

describe('PromocaoListItemComponent', () => {
  let component: PromocaoListItemComponent;
  let fixture: ComponentFixture<PromocaoListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocaoListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocaoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
