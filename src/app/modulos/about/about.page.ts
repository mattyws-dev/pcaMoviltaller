import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonLabel, IonItem } from '@ionic/angular/standalone';
import { HeaderPage } from "../../shared/components/header/header.page";

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonList, IonContent, CommonModule, FormsModule, HeaderPage]
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
