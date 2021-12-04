import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Recipe } from 'src/app/shared/model/recipe.model';
import { RecipeService } from 'src/app/shared/service/recipe-service.service';

@Component({
  selector: 'app-post-recipe',
  templateUrl: './post-recipe.component.html',
  styleUrls: ['./post-recipe.component.scss']
})
export class PostRecipeComponent implements OnInit {
  recipeForm = new FormGroup({
    name: new FormControl(),
    type: new FormControl(),
    author: new FormControl(),
    content: new FormControl()
  })

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    
  }

  onInsertFormSubmit() {
    console.log(this.recipeForm.value)
    this.recipeService.create(new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['type'],
      this.recipeForm.value['author'],
      this.recipeForm.value['content']
    ))
  }

}
