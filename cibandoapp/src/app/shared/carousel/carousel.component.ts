import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  percorso = '../../../assets/images/carousel-';

  // Arrey con oggetti multipli

  images = [
    {
      id: 1,
      titolo: 'spaghetti al pomodoro',
    },

    {
      id: 2,
      titolo: 'Tagliata di manzo',
    },

    {
      id: 3,
      titolo: 'Tiramisù classico',
    },
  ];
}

