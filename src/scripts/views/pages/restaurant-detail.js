import RestaurantData from '../../data/restaurant-data';
import UrlParser from '../../routes/url-parser';
import {
  createRestaurantDetailTemplate,
  createMenuListTemplate,
  restaurantCategoriesTemplate,
  userReviewTemplate,
} from '../templates/template-creator';
import LikeButton from '../../utils/like-button';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const RestaurantDetail = {

  async render() {
    return `
    <section class="restaurant">
      <article id="restaurant"></article>

      <article class="menu">
        <div class="list food"></div>
        <div class="list drink"></div>
      </article>
    </section>

    <section id="review" class="rate">
      <article class="user-rate"></article>
    </section>
    
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantData.restaurantDetail(url.id);

    const restaurantContainer = document.querySelector('#restaurant');
    const userRateContainer = document.querySelector('.user-rate');
    const food = document.querySelector('.food');
    const drink = document.querySelector('.drink');

    restaurantContainer.innerHTML += createRestaurantDetailTemplate(restaurant.restaurant);
    const categories = document.querySelector('#categories');

    restaurant.restaurant.categories.forEach((category) => {
      categories.innerHTML += restaurantCategoriesTemplate(category);
    });
    food.innerHTML = '<h3>Food Menu</h3>';
    restaurant.restaurant.menus.foods.forEach((foodList) => {
      food.innerHTML += createMenuListTemplate(foodList);
    });
    drink.innerHTML = '<h3>Drink Menu</h3>';
    restaurant.restaurant.menus.drinks.forEach((drinkList) => {
      drink.innerHTML += createMenuListTemplate(drinkList);
    });

    restaurant.restaurant.consumerReviews.forEach((usrRate) => {
      userRateContainer.innerHTML += userReviewTemplate(usrRate);
    });

    LikeButton.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurants: restaurant.restaurant,
      favoriteRestaurant: FavoriteRestaurantIdb,
    });
  },
};

export default RestaurantDetail;
