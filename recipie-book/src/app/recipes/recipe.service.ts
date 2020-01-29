import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe('Tasty Roast Beef', 'Classic roast beef recipe using rump roast', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_1280.jpg',
			[
				new Ingredient('Meat', 1),
				new Ingredient('French fries', 20)

			]),
		new Recipe('Grilled Steak Salad', 'Grilled Steak Salad with Asparagus and Potatoes', 'https://cdn.pixabay.com/photo/2018/05/10/13/57/dinner-3387614_960_720.jpg', [
			new Ingredient('Meat', 1),
			new Ingredient('Asparagus', 20),
			new Ingredient('Potatoes', 7)
		])
	];

	constructor(private slService: ShoppingListService) {

	}
	getRecipes() {
		return this.recipes.slice();
	}
	getRecipe(index: number) {
		return this.recipes[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}

}