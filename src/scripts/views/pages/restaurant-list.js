import RestaurantData from '../../data/restaurant-data';
import {createRestaurantItemTemplate} from '../templates/template-creator';

const RestaurantList = {
  async render() {
    return `
  <div class="hero">
       <h1 class="hero-headline">Your Only Place To Looking For The Nearest Restaurant</h1>
  </div>
  <div class="content">
    <section>
      <h1 class="list-label">Explore The Restaurant! Make Your Choice!</h1>
      <article id="restaurants" class="restaurants"></article>
    </section>
  </div>

  </div>
    `;
  },

  async afterRender() {
    const restaurant = await RestaurantData.restaurantList();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurant.forEach((restaurants) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurants);
    });
  },
};

export default RestaurantList;
