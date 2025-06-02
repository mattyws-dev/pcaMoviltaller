import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonItem, IonCard } from '@ionic/angular/standalone';
import { HeaderPage } from "../../../../shared/components/header/header.page";
import { CardHeroePage } from "../../components/card-heroe/card-heroe.page";
import { HeroeService } from 'src/app/core/services/heroe.service';
import { Heroe } from 'src/app/shared/models/heroe';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.page.html',
  styleUrls: ['./lista-heroes.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderPage, CardHeroePage]
})
export class ListaHeroesPage implements OnInit {

  constructor(public _heroeService:HeroeService) { }

  ngOnInit() {
  }

  inforHeroe(heroe: Heroe){
    console.log(heroe);
  }


}
