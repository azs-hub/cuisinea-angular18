import { RecipeService } from '@/features/recipes/recipe.service';
import { Component, OnInit, inject } from '@angular/core';
import type { RecipeCategory } from '@/types/recipe'

@Component({
  selector: 'app-home-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class HomeBannerComponent implements OnInit {
  recipeService = inject(RecipeService);
  
  selectedCategory = this.recipeService.selectedCategory
  categories: RecipeCategory[] = []

  ngOnInit () {
    this.categories = this.recipeService.fetchRecipeCategories();
  }

  setSelectedCategory = (category: RecipeCategory): void => {
    this.recipeService.setSelectedCategory(category)
  }

  isCategorySelected = (category: RecipeCategory): boolean => {
    return this.selectedCategory()?.id === category.id
  }
}
