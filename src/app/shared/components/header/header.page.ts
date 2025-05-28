import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
  standalone: true,
  imports: [IonButtons, IonContent, IonMenuButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HeaderPage implements OnInit {

  @Input() title = ''
  constructor() { }

  ngOnInit() {
  }

}
