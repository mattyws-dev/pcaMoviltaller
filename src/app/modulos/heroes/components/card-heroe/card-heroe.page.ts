import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardContent, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCard, IonButton, IonModal, IonButtons, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { Heroe } from 'src/app/shared/models/heroe';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.page.html',
  styleUrls: ['./card-heroe.page.scss'],
  standalone: true,
  imports: [IonIcon, IonModal, IonButton, IonCard, IonCardTitle, IonCardHeader, IonCardContent, CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonButtons, IonContent]
})
export class CardHeroePage implements OnInit {
  
  @Input() heroe = {} as Heroe
  @Output() heroeSeleccionado = new EventEmitter()

  isModalOpen = false
  constructor() { 
    addIcons({close});
  }
  
  ngOnInit() {
  }

  verHeroe() {
    this.heroeSeleccionado.emit(this.heroe)
    this.isModalOpen = true
  }

  setOpen(){
    this.isModalOpen = false
  }

}
