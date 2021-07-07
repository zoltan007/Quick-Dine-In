import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurants) => `
  <div class="restaurant__detail">
  <h2>Restaurant Detail</h2>
  <div class="thumbnail">
    <img src="${CONFIG.BASE_URL}${CONFIG.BASE_IMAGE_URL_MED}/${restaurants.pictureId}"
    srcset="${CONFIG.BASE_URL}${CONFIG.BASE_IMAGE_URL_SML}/${restaurants.pictureId} 550w, ${CONFIG.BASE_URL}${CONFIG.BASE_IMAGE_URL_MED}/${restaurants.pictureId} 800w"
    sizes="(max-width: 600px) 600px, 800px" 
    alt="${restaurants.name}">
  <table>
    <tr>
        <td><i class="fas fa-store"></i></td>
        <td><a>${restaurants.name}</a></td>
    </tr>
    <tr>
        <td><i class="fas fa-star"></i></td>
        <td><a>${restaurants.rating}</a></td>
    </tr>
    <tr><td><i class="fas fa-map-marked-alt"></i></td>
        <td><a>${restaurants.address}, ${restaurants.city}</a></td>
    </tr>
    <tr>
        <td><i class="fas fa-utensils"></i></td>
        <td><a id="categories"></a></td>
    </tr>
  </table>
  </div>
`;

const restaurantCategoriesTemplate = (category) =>`
  <a>${category.name}</a>
`;

const createMenuListTemplate = (menu) => `
  <p>${menu.name}</p>
`;

const userReviewTemplate = (reviews) => `
  <div class="card>
    <div class="card-content">
        <div class="header">
          <p>${reviews.name}</p>
        </div>
        <p class="review-date">${reviews.date}</p>
        <p class="review-caption"><em>${reviews.review.length > 80? `${reviews.review.substring(0, 80)}...` : reviews.review}"</em></p>
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurants) => `
    <div class="restaurant-item">
      <section>
          <article>
            <div class="restaurant-item__header">
              <img class="restaurant-thumbnail" src="${restaurants.pictureId}" alt="${restaurants.name}">
              <div class="restaurants-item__header__rating">
                <p>⭐️<span class="restaurant-rating">${restaurants.rating}</span> </p>
              </div>
              <h1 class="restaurant-name">${restaurants.name}</h1>
            </div>
            <div class="restaurant-item__content">
              <p class="restaurant-city"><strong>${restaurants.city}</strong></p>
              <p class="restaurant-description">${restaurants.description.substring(0, 170)}</p>
              <button class="find-more" type="button" aria-label="see more info"><a href="#/detail/${list.id}">Find More</a></button>
            </div>
          </article>
      </section>
    </div>
  `;

const createLikeButttonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
`;

const createLikedButttonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  restaurantCategoriesTemplate,
  createMenuListTemplate,
  userReviewTemplate,
  createLikeButttonTemplate,
  createLikedButttonTemplate,
};
