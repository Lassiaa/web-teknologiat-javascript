const coursesEn = ["Hamburger, cream sauce and poiled potates",
                "Goan style fish curry and whole grain rice",
                "Vegan Chili sin carne and whole grain rice",
                "Broccoli puree soup, side salad with two napas",
                "Lunch baguette with BBQ-turkey filling",
                "Cheese / Chicken / Vege / Halloum burger and french fries"];

const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
                "Goalaista kalacurrya ja täysjyväriisiä",
                "vegaani Chili sin carne ja täysjyväriisi",
                "Parsakeittoa,lisäkesalaatti kahdella napaksella",
                "Lunch baguette with BBQ-turkey filling",
                "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];

let lang = 'fi';
let activeMenu = coursesFi;

/**
 * Renders menu content to html page
 * @param {Array} menu - Array of dishes
 */

const renderMenu = (menu) => {
  const menuBox = document.querySelector('.restaurant1');
  menuBox.innerHTML = '';
  const list = document.createElement('ul');

  for (const dish of menu) {
    const li = document.createElement('li');
    li.textContent = dish;
    list.append(li);
  };
  menuBox.append.list;
};

renderMenu(activeMenu);

/**
 * Sorts menu alphabetically
 * @param {Array} menu - Array of dishes
 * @param {String} order - 'asc' or 'desc'
 * @returns
 */

const sortMenu = (menu, order='asc') => {
  menu.sort();
  if (order === 'desc'){
    menu.reverse();
  };
  return menu;
};

/**
 * Change UI language
 * @param {String} language
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
 * Returns a random dish from an array
 * @param {Array} menu - Array of dishes
 * @returns random dish item
 */
const getRandomDish = (menu) => {
  const randomIndex = Math.floor(Math.random() * menu.length);
  return menu[randomIndex];
};

const sortButton = document.querySelector('#sort-button');
sortButton.addEventListener('click', () => {
  renderMenu(sortMenu(activeMenu));
});

// console.log(sortMenu(activeMenu));
