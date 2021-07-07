import RestaurantList from '../views/pages/restaurant-list';
import RestaurantDetail from '../views/pages/restaurant-detail';
import FavoriteRestaurant from '../views/pages/favorite-restaurant';

const routes = {
  '/': RestaurantList, // default page
  '/home': RestaurantList,
  '/detail/:id': RestaurantDetail,
  '/favorite': FavoriteRestaurant,
};

export default routes;
