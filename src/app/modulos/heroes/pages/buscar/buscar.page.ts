import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderPage } from "../../../../shared/components/header/header.page";
import { CardHeroePage } from "../../components/card-heroe/card-heroe.page";
import { HeroeService } from 'src/app/core/services/heroe.service';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/shared/models/heroe';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, HeaderPage, CardHeroePage]
})
export class BuscarPage implements OnInit {

  query = ''
  heroes: Heroe[] = []

  constructor(private _activateRoute:ActivatedRoute, private _heroeServoce:HeroeService) { }

  ngOnInit() {
    this._activateRoute.params.subscribe( params => {
      this.query = params['query']
      this.heroes = this._heroeServoce.buscarHeroe(this.query)
    })
  }

}
