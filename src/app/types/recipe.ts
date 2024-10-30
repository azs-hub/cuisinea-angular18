export interface Recipe {
  id: string
  image: string
  name: string
  shortDescription: string
  note: string
  serving: number
  level: RecipeLevel
  cost: number
  tags: RecipeCategory[]
  ingredients: Ingredient[]
  duration: RecipeDuration
  steps: RecipeStep[]
}

export interface RecipeCategory {
  id: string
  label: string
}

export interface Ingredient {
  id: string
  name: string
  image: string
  quantity: number
  unit: IngredientUnit
}

export interface RecipeDuration {
  id: string
  prepTimeMin: number
  soakTimeMin: number
  cookTimeMin: number
  totalTimeMin: number
}

export interface RecipeStep {
  id: string
  position: number
  description: string
}

export enum RecipeLevel {
  easy = 'easy',
  intermediary = 'intermediary',
  difficult = 'difficult',
}

export enum IngredientUnit {
  liter = 'l',
  grams = 'g',
  unit = 'unit',
}

export enum Layout {
  grid = 'grid',
  list = 'list',
  carousel = 'carousel',
}
