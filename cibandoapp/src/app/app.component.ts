import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cibandoapp';

  // pecorso da dove prendre le immagini da sostituire  nel carousel

  evidenziato=false;

  onEvidenziato (){

    this.evidenziato = !this.evidenziato


  }
}
