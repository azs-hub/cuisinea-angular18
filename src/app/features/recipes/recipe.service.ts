import { Injectable, signal } from '@angular/core';
import {
  getFakeRecipes,
  getFakeRecipe,
  getFakeRecipesByCategoryId,
  getFakeAllCategoriesRecipes
} from '@/mocks/recipe.mock'
import type { Recipe, RecipeCategory } from '@/types/recipe'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  latestRecipes = signal<Recipe[]>([]);
  selectedCategory = signal<RecipeCategory | null>(null)

  fetchLatestRecipes = async (listLength = 5): Promise<void> => {
    try {
      const recipes = await getFakeRecipes(listLength)
      this.latestRecipes.set(recipes || [])
    } catch (error) {
      console.error('Error loading recipes:', error);
      this.latestRecipes.set([]);  
    }
  }
  
  fetchRecipesByCategoryId = (categoryId: string): Recipe[] =>
    getFakeRecipesByCategoryId(categoryId, 5)
  
  fetchRecipe = (id: string): Recipe => getFakeRecipe(id)

  fetchRecipeCategories = (): RecipeCategory[] => getFakeAllCategoriesRecipes()

  setSelectedCategory = (category: RecipeCategory): void => {
    // this.selectedCategory.set(category)
    const isCategoryExist = this.selectedCategory()?.id === category.id
    if (isCategoryExist) 
      this.selectedCategory.set({} as RecipeCategory)
    else
    this.selectedCategory.set(category)
  }
}

