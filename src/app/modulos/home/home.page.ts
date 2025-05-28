import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem } from '@ionic/angular/standalone';
import { HeaderPage } from "../../shared/components/header/header.page";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonList, IonContent, CommonModule, FormsModule, HeaderPage]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
