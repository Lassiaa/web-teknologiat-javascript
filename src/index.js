import { coursesFi, coursesEn } from "./modules/sodexo-data";

let lang = 'fi';
let activeMenu = coursesFi;

let menuOrder = 'asc';

/**
 * Renders menu content to html page
 * @param {Array} menu - Array of dishes
 */
const renderMenu = (menu) => {
  const menuBox = document.querySelector('.restaurant');
  menuBox.innerHTML = '';
  const list = document.createElement('ul');
  for (const dish of menu) {
    const li = document.createElement('li');
    li.textContent = dish;
    list.append(li);
  }
  menuBox.append(list);
};

renderMenu(activeMenu);

/**
 * Sorts menu alphapetically
 * @param {Array} menu - Array of dishes
 * @param {string} order - 'asc' or 'desc'
 * @returns sorted menu array
 */
const sortMenu = (menu, order='asc') => {
  menu.sort();
  if (order === 'desc') {
    menu.reverse();
  }
  return menu;
};

/**
 * Change UI language
 * @param {string} language
 */
const changeLanguage = (language) => {
  if (language === 'fi') {
    activeMenu = coursesFi;
  } else if (language === 'en') {
    activeMenu = coursesEn;
  }
  lang = language;
  renderMenu(activeMenu);
};

/**
 * Get a random dish from menu
 * @param {Array} menu - Array of dishes
 * @returns random dish item
 */
const getRandomDish = (menu) => {
  const randomIndex = Math.floor(Math.random() * menu.length);
  return menu[randomIndex];
};

const sortButton = document.querySelector('#sort-button');
sortButton.addEventListener('click', () => {
  if (menuOrder === 'asc') {
    menuOrder = 'desc';
  } else if (menuOrder === 'desc') {
    menuOrder = 'asc';
  }
  renderMenu(sortMenu(activeMenu, menuOrder));
});

const langButton = document.querySelector('#lang-button');
langButton.addEventListener('click', () => {
  if (lang === 'fi') {
    lang = 'en';
  } else {
    lang = 'fi';
  };
  renderMenu(activeMenu, changeLanguage(lang));
});

const randomButton = document.querySelector('#random-button');
const randomDisplay = document.querySelector('#random-display');
randomButton.addEventListener('click', () => {
  randomDisplay.textContent = getRandomDish(activeMenu);
});

//TODO: wrap to function / move to separate module
if (APP_CONF.productionMode && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
