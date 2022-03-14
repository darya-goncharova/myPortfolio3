      /*Burger*/


const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const section = document.querySelector('.section');

 

function toggleMenu() {
  burgerItem.classList.toggle('hamburger__menu_open');
  }
  burgerItem.addEventListener('click', toggleMenu);


(function () {

burgerItem.addEventListener('click', () => {
  document.body.classList.toggle('_lock');
  menu.classList.toggle('header__nav_open');
  section.classList.toggle('section_open');
});
}());

menu.addEventListener("click", (event) => {
  if(event.target){
    menu.classList.remove("header__nav_open");
    burgerItem.classList.remove("hamburger__menu_open");
    document.body.classList.remove('_lock');
    section.classList.remove('section_open');
 }
});

      /*Gallery Buttons*/


const portfolioBtns = document.querySelectorAll('.pbutton');
const portfolioBtnContainer = document.querySelector('.portfolio__buttons');
const portfolioImages = document.querySelectorAll('.gallery__element');


portfolioBtns.forEach((el) => el.addEventListener('click', changeImage));
  function changeImage(event) {
    const season = event.target.getAttribute('data-season');
    portfolioImages.forEach((img, index) => img.src = `./assets/img/gallery/${season}/${index + 1}.jpg`);
   
  }

  function preloadImages() {
    for(let i = 1; i <= 6; i++) {
      const seasons = ['winter', 'spring', 'summer', 'autumn'];
      const img = new Image();
      seasons.forEach ((img, i)  =>  img.src = `./assets/img/${seasons}/${i}.jpg`);
    }
  }
  preloadImages();

//Changing the color of button
portfolioBtnContainer.classList.remove('pbutton_active');
portfolioBtns.forEach(element => {
  element.addEventListener('click', changeClassActive);
});
  function changeClassActive() {
    portfolioBtnContainer.querySelector('.pbutton_active').classList.remove('pbutton_active');
    this.classList.add("pbutton_active");
    };
  
/// internationalization

const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}

const ruLang = document.querySelector(".language__link-ru");
const enLang = document.querySelector(".language__link-en");

function getTranslate(lang) {
  const data = document.querySelectorAll('[data-i18]');
  data.forEach((el) => {
    el.textContent = i18Obj[lang][el.dataset.i18];
  });
}

ruLang.addEventListener("click", () => {getTranslate('ru')});
enLang.addEventListener("click", () => {getTranslate('en')});

() => {getTranslate('язык')}


/// changing themes

const lightSections = document.querySelectorAll('.light-theme');
const sunButton =  document.querySelector('.theme-activator');

lightSections.forEach((el) => el.classList.remove('light-theme'));
sunButton.addEventListener('click', changeThemeActive);

function changeThemeActive() {
  lightSections.forEach(element => {
    element.classList.toggle("light-theme");    
    })
    };

    const image =  document.querySelector('.theme_icon');
    image.addEventListener('click', changeThemeLogo);
    function changeThemeLogo() {
    let mySrc = image.getAttribute('src');
      if (mySrc === "./assets/svg/carbon_sun.svg") {
        image.setAttribute( 'src', "./assets/svg/moon.svg");
      }
      else {
        image.setAttribute( 'src', "./assets/svg/carbon_sun.svg");
      }
  }



  // Local storage


  let lang = 'en';
  let theme = 'dark';



  function setLocalStorage() {
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);
  }
  window.addEventListener('beforeunload', setLocalStorage);

  function getLocalStorage() {
    if(localStorage.getItem('lang')) {
      const lang = localStorage.getItem('lang');
      getTranslate(lang);
    }
   else if(localStorage.getItem('theme')) {
      const theme = localStorage.getItem('theme');
      changeThemeActive();
    }
  }
  window.addEventListener('load', getLocalStorage);



  /// Animation Button

