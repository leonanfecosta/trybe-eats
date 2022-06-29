import meals from './meals';
import drinks from './drinks';
import mealsCategories from './mealsCategories';
import drinksCategories from './drinksCategories';
import mealsById from './mealsById';
import drinksById from './drinksById';
import areas from './areas';
import mealsByArea from './mealsByArea';

const URLS = {
  'https://www.themealdb.com/api/json/v1/1/search.php?s=': meals,
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=': drinks,
  'https://www.themealdb.com/api/json/v1/1/list.php?c=list': mealsCategories,
  'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list': drinksCategories,
  'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52977': mealsById,
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15997': drinksById,
  'https://www.themealdb.com/api/json/v1/1/list.php?a=list': areas,
  'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian': mealsByArea,
};

export default URLS;
