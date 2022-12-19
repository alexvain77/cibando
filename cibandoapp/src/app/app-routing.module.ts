import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, // percorso di default

{ path: 'home', component: HomeComponent},
{ path: 'ricette', component: RecipesComponent},
{ path: '**', redirectTo: 'home'} //percorso di emergenza

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
