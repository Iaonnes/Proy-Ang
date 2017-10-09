import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
@Output()  recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Esto es una Receta', 'solo es una prueba',
               'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Fischplatte.JPG/1280px-Fischplatte.JPG'),
    new Recipe('Esto es otra Receta', 'solo es otra prueba',
               'https://pixnio.com/free-images/2017/03/27/2017-03-27-13-57-10.jpg')
  ];

  constructor(private recipeService: RecipeService) {

   }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
