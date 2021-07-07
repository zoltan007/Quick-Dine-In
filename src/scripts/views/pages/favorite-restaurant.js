import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {createRestaurantItemTemplate} from '../templates/template-creator';

const FavoriteRestaurant = {
  async render() {
    return `
    <div class="content">
    <h1 class="list-label">Your Favorites</h1>
      <div id="restaurants" class="restaurants">

    </div>
  </div>
  `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default FavoriteRestaurant;
