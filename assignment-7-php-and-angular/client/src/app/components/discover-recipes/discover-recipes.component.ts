import { SaveRecipeToEdit } from './../../shared/store/actions/recipe.actions';
import { RecipeService } from 'src/app/shared/service/recipe-service.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/shared/model/recipe.model';
import { Store } from '@ngxs/store';


@Component({
  selector: 'app-discover-recipes',
  templateUrl: './discover-recipes.component.html',
  styleUrls: ['./discover-recipes.component.scss']
})
export class DiscoverRecipesComponent implements OnInit {
  recipes$: Observable<Array<Recipe>> | undefined

  constructor(private recipeService: RecipeService, public store: Store) { 
    
  }

  ngOnInit(): void {
    this.recipes$ = this.recipeService.index()
  }

  onEditLinkClicked(r: Recipe): void {
    console.log(r);
    this.store.dispatch(new SaveRecipeToEdit(r));
  }

  deleteRecipe(recipeId: number): void {
    this.recipeService.destroy(recipeId);
    this.recipes$ = this.recipeService.index()
  }
}
