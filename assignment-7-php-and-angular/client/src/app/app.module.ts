import { RecipeState } from './shared/store/states/recipe.state';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { BrowseRecipesComponent } from './components/browse-recipes/browse-recipes.component';
import { DiscoverRecipesComponent } from './components/discover-recipes/discover-recipes.component';
import { PostRecipeComponent } from './components/post-recipe/post-recipe.component';
import { HomeComponent } from './components/home/home.component';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { TheHeaderComponent } from './shared/components/the-header/the-header.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EditRecipeComponent,
    BrowseRecipesComponent,
    DiscoverRecipesComponent,
    PostRecipeComponent,
    HomeComponent,
    TheHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      RecipeState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
