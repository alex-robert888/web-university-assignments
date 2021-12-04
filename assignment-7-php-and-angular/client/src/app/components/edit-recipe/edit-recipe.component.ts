import { RecipeState } from './../../shared/store/states/recipe.state';
import { Observable } from 'rxjs';
import { RecipeService } from 'src/app/shared/service/recipe-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Recipe } from 'src/app/shared/model/recipe.model';
import { Store, Select } from '@ngxs/store';


@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
  recipeForm!: FormGroup;
  idToEdit!: number;

  @Select(RecipeState.getRecipeToEdit) recipeToEdit$!: Observable<Recipe> 

  constructor(private recipeService: RecipeService, private store: Store) { 
  }

  ngOnInit(): void {
    this.recipeToEdit$.subscribe(
      response => {
        if (!response) return
        this.recipeForm = new FormGroup({
          name: new FormControl(response.name),
          type: new FormControl(response.type),
          author: new FormControl(response.author),
          content: new FormControl(response.content)
        });
        this.idToEdit = response.id; 
      }
    )
  }

  onEditFormSubmit() {
    console.log(this.recipeForm.value)
    let recipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['type'],
      this.recipeForm.value['author'],
      this.recipeForm.value['content']
    );
    recipe.id = this.idToEdit;
    this.recipeService.update(recipe);
  }
}
