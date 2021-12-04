import { HomeComponent } from './components/home/home.component';
import { PostRecipeComponent } from './components/post-recipe/post-recipe.component';
import { DiscoverRecipesComponent } from './components/discover-recipes/discover-recipes.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { BrowseRecipesComponent } from './components/browse-recipes/browse-recipes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'discover',
    component: DiscoverRecipesComponent
  },
  {
    path: 'browse',
    component: BrowseRecipesComponent
  },
  {
    path: 'post',
    component: PostRecipeComponent
  },
  {
    path: 'edit/:id',
    component: EditRecipeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
