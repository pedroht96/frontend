import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoListItemComponent } from './produto-list-item.component';

describe('ProdutoListItemComponent', () => {
  let component: ProdutoListItemComponent;
  let fixture: ComponentFixture<ProdutoListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
