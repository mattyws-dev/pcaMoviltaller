import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonSearchbar } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonButtons, IonContent, IonMenuButton, IonHeader, IonTitle, IonToolbar, CommonModule, ReactiveFormsModule]
})
export class HeaderPage implements OnInit, AfterViewInit{

  @Input() title = ''
  buscador = new FormControl('')

  @ViewChild('search') search!:IonSearchbar;

  constructor(private _router: Router, private _activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this._activateRoute.params.subscribe( params => {
      this.buscador.patchValue(params['query'])
    })
    
    this.buscador.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
    )
    .subscribe(value => {
      if (this._router.url !== `/buscar/${value}`) {
        this._router.navigate(['/buscar', value]);
      }
    });


  }
  
  ngAfterViewInit(){
    if (this._router.url.startsWith('/buscar')){
      setTimeout(() => {
        this.search.setFocus()
      }, 300);
    }
  }

}

