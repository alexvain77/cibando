import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
  ricette: Recipe[];

  constructor(private recipeService: RecipeService) {
    // console.log('questo è il costruttore');
  }

  // LifeCycle hook
  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe({
      next: (ricette) => {
        this.ricette = ricette;
      },
      error: (errore) => {
        console.log(errore);
      }
    });

    // console.log('questo è l onInit');
  }
}
