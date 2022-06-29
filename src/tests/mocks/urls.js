import meals from './meals';
import drinks from './drinks';
import mealsCategories from './mealsCategories';
import drinksCategories from './drinksCategories';
import mealsById from './mealsById';
import drinksById from './drinksById';
import areas from './areas';
import mealsByArea from './mealsByArea';
import mealsByCategory from './mealsByCategory';
import mealsByIngredient from './mealsByIngredient';
import mealsByName from './mealsByName';
import mealsByFirstLetter from './mealsByFirstLetter';
import mealsByFirstLetterRedirect from './mealsByFirstLetterRedirect';

const URLS = {
  'https://www.themealdb.com/api/json/v1/1/search.php?s=': meals,
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=': drinks,
  'https://www.themealdb.com/api/json/v1/1/list.php?c=list': mealsCategories,
  'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list': drinksCategories,
  'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52977': mealsById,
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15997': drinksById,
  'https://www.themealdb.com/api/json/v1/1/random.php': mealsById,
  'https://www.thecocktaildb.com/api/json/v1/1/random.php': drinksById,
  'https://www.themealdb.com/api/json/v1/1/list.php?a=list': areas,
  'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian': mealsByArea,
  'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef': mealsByCategory,
  'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken': mealsByIngredient,
  'https://www.themealdb.com/api/json/v1/1/search.php?s=chocolate': mealsByName,
  'https://www.themealdb.com/api/json/v1/1/search.php?f=w': mealsByFirstLetter,
  'https://www.themealdb.com/api/json/v1/1/search.php?f=y': mealsByFirstLetterRedirect,
};

export default URLS;
