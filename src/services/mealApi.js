export const getFoodByIngredient = async (ingredient) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const getFoodByName = async (name) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};
export const getFoodByFirstLetter = async (letter) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const getMeals = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};

export const getMealsCategories = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log(error);
  }
};
