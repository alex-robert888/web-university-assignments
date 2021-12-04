import { Recipe } from 'src/app/shared/model/recipe.model';

export class SaveRecipeToEdit {
  static readonly type = '[TUTORIAL] Save Recipe To Edit';

  constructor(public payload: Recipe) {}
}