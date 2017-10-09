import { Recipe } from './recipe.model';


export class RecipeService  {
	  recipes: Recipe[] = [
    new Recipe('Esto es una Receta', 'solo es una prueba',
               'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Fischplatte.JPG/1280px-Fischplatte.JPG'),
    new Recipe('Esto es otra Receta', 'solo es otra prueba',
               'https://pixnio.com/free-images/2017/03/27/2017-03-27-13-57-10.jpg')
  ];

getRecipes(){
	return this.recipes.slice();
}

}