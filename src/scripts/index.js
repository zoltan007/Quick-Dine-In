import 'regenerator-runtime'; /* for async await transpile */
import '../assets/main.css';
import data from '../DATA.json';

console.log(data);

const hamburgerButtonElement = document.querySelector('#hamburger');
const mainElement = document.querySelector('main');
const drawerElement = document.querySelector('#drawer');


hamburgerButtonElement.addEventListener("click", event => {
    drawerElement.classList.toggle('open');
    event.stopPropagation();
});

mainElement.addEventListener('click', function () {
    drawerElement.classList.remove('open');
});

let datarest='';

data.restaurants.forEach((restaurants) => {
    datarest +=`
        <div class="card">
            <section>
                <article class="restaurant-item">
                    <img class="restaurant-thumbnail" src="${restaurants.pictureId}" alt="${restaurants.name}">
                    <div class="restaurant-item-content">
                        <h1 class="restaurant-name">${restaurants.name}</h1>
                        <p class="restaurant-city"><strong>${restaurants.city}</strong></p>
                        <p class="restaurant-description">${restaurants.description.substring(0,170)}</p>
                        <p class="restaurant-rating"><strong> Rating: </strong> ${restaurants.rating}</p>
                        <button class="find-more" type="button" aria-label="see more info">Find More</button>
                    </div>
                </article>
            </section>
        </div>
    `;
});

document.getElementById("lists-container").innerHTML = datarest;

console.log('Hello Coders! :)');



    
