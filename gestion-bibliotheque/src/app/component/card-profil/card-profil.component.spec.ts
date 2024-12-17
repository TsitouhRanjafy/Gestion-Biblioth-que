import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfilComponent } from './card-profil.component';

describe('CardProfilComponent', () => {
  let component: CardProfilComponent;
  let fixture: ComponentFixture<CardProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProfilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
