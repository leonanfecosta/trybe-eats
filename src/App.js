import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Explore from './pages/Explore';
import ExploreFoods from './pages/explore/ExploreFoods';
import ExploreDrinks from './pages/explore/ExploreDrinks';
import ExploreFoodsIngredients from './pages/explore/ExploreFoodsIngredients';
import ExploreDrinksIngredients from './pages/explore/ExploreDrinksIngredients';
import ExploreFoodsNacionalities from './pages/explore/ExploreFoodsNacionalities';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import RecipeDetailsDrinks from './pages/RecipeDetailsDrinks';
import RecipeDetailsFoods from './pages/RecipeDetailsFoods';
import FoodProvider from './context/FoodProvider';
import NotFound from './pages/NotFound';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserProvider from './context/UserProvider';

function App() {
  return (
    <main>
      <UserProvider>
        <FoodProvider>
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/foods" component={ Foods } />
            <Route exact path="/drinks" component={ Drinks } />
            <Route exact path="/drinks/:id" component={ RecipeDetailsDrinks } />
            <Route exact path="/foods/:id" component={ RecipeDetailsFoods } />
            <Route exact path="/explore" component={ Explore } />
            <Route exact path="/explore/foods" component={ ExploreFoods } />
            <Route exact path="/explore/drinks" component={ ExploreDrinks } />
            <Route
              exact
              path="/explore/foods/ingredients"
              component={ ExploreFoodsIngredients }
            />
            <Route
              exact
              path="/explore/drinks/ingredients"
              component={ ExploreDrinksIngredients }
            />
            <Route
              exact
              path="/explore/foods/nationalities"
              component={ ExploreFoodsNacionalities }
            />
            <Route exact path="/profile" component={ Profile } />
            <Route exact path="/done-recipes" component={ DoneRecipes } />
            <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
            <Route exact path="/explore/drinks/nationalities" component={ NotFound } />
          </Switch>
          {/* <div className="meals">
        <span className="logo">TRYBE</span>
        <object
          className="rocksGlass"
          type="image/svg+xml"
          data={ rockGlass }
        >
          Glass
        </object>
      </div> */}
        </FoodProvider>
      </UserProvider>

    </main>
  );
}

export default App;
