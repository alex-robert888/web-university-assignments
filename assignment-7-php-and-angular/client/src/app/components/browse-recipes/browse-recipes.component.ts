import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/shared/service/recipe-service.service';
import { Recipe } from 'src/app/shared/model/recipe.model';

@Component({
  selector: 'app-browse-recipes',
  templateUrl: './browse-recipes.component.html',
  styleUrls: ['./browse-recipes.component.scss']
})
export class BrowseRecipesComponent implements OnInit {
  searchForm = new FormGroup({
    type: new FormControl(localStorage.getItem('filterBy'))
  })
  recipesFiltered$!: Observable<Array<Recipe>> | undefined

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    let filterBy = localStorage.getItem('filterBy');
    if (filterBy) {
      this.recipesFiltered$ = this.recipeService.filter(filterBy);
    }
  }

  onSearch(): void {
    console.log(this.searchForm.value)
    this.recipesFiltered$ = this.recipeService.filter(this.searchForm.value['type'])
    localStorage.setItem('filterBy', this.searchForm.value['type']);
  }
}
