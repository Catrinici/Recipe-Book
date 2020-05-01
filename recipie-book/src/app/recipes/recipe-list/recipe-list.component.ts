import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

	recipes: Recipe[];
	subscribtion: Subscription;


	constructor(private recipeService: RecipeService,
		private router: Router,
		private route: ActivatedRoute) { }

	ngOnInit() {
		this.subscribtion = this.recipeService.recipesChanged
			.subscribe(
				(recipes: Recipe[]) => {
					this.recipes = recipes;
				}
			)
		this.recipes = this.recipeService.getRecipes();
	}

	onNewRecipe() {
		this.router.navigate(['new'], { relativeTo: this.route })
	}

	ngOnDestroy() {
		this.subscribtion.unsubscribe();
	}


}
