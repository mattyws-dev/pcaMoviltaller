import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCard, IonButton } from '@ionic/angular/standalone';
import { Heroe } from 'src/app/shared/models/heroe';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.page.html',
  styleUrls: ['./card-heroe.page.scss'],
  standalone: true,
  imports: [IonButton, IonCard, IonCardTitle, IonCardHeader, IonCardContent, CommonModule, FormsModule]
})
export class CardHeroePage implements OnInit {
  
  @Input() heroe = {} as Heroe
  constructor() { }
  
  ngOnInit() {
  }

  verHeroe() {
  throw new Error('Method not implemented.');
  }

}
