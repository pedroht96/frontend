import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteListItemComponent } from './cliente-list-item.component';

describe('ClienteListItemComponent', () => {
  let component: ClienteListItemComponent;
  let fixture: ComponentFixture<ClienteListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
