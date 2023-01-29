import MenuFi from '../menu-fi.json';
import MenuEn from '../menu-en.json';

let coursesFi = new Array();
let coursesEn = new Array();

for (let i = 0; i < (Object.keys(MenuFi.MenusForDays[i].SetMenus).length); i++) {
  coursesFi.push(MenuFi.MenusForDays[0].SetMenus[i].Components);
}

for (let i = 0; i < (Object.keys(MenuEn.MenusForDays[i].SetMenus).length); i++) {
  coursesEn.push(MenuEn.MenusForDays[0].SetMenus[i].Components);
}

export { coursesFi, coursesEn };
