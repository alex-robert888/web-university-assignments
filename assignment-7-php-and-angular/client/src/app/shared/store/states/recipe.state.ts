import { SaveRecipeToEdit } from './../actions/recipe.actions';
import { Recipe } from 'src/app/shared/model/recipe.model';
import { State, Action, StateContext, Selector } from '@ngxs/store';

export class RecipeStateModel {
  recipeToEdit: Recipe | undefined;
}

@State<RecipeStateModel>({
  name: 'recipes',
  defaults: {
    recipeToEdit: undefined
  }
})
export class RecipeState {
  @Selector()
  static getRecipeToEdit(state: RecipeStateModel): Recipe | undefined {
    return state.recipeToEdit;
  }

  @Action(SaveRecipeToEdit)
  saveRecipeToEdit({getState, patchState} : StateContext<RecipeStateModel>, { payload }: SaveRecipeToEdit) {
    patchState({
      recipeToEdit: payload
    })
  }
}