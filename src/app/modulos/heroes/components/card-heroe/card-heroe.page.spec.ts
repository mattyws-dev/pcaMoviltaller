import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardHeroePage } from './card-heroe.page';

describe('CardHeroePage', () => {
  let component: CardHeroePage;
  let fixture: ComponentFixture<CardHeroePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHeroePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
