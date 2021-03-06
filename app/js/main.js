$(function() {

  $('.news-slider').slick({

    prevArrow:'<svg class="arrow-left" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99777 0.928572C6.99777 0.828125 6.95312 0.73884 6.88616 0.671875L6.32812 0.11384C6.26116 0.046875 6.16071 0.00223231 6.07143 0.00223231C5.98214 0.00223231 5.8817 0.046875 5.81473 0.11384L0.613839 5.31473C0.546875 5.3817 0.502232 5.48214 0.502232 5.57143C0.502232 5.66071 0.546875 5.76116 0.613839 5.82812L5.81473 11.029C5.8817 11.096 5.98214 11.1406 6.07143 11.1406C6.16071 11.1406 6.26116 11.096 6.32812 11.029L6.88616 10.471C6.95312 10.404 6.99777 10.3036 6.99777 10.2143C6.99777 10.125 6.95312 10.0246 6.88616 9.95759L2.5 5.57143L6.88616 1.18527C6.95312 1.1183 6.99777 1.01786 6.99777 0.928572Z" fill="#171821"/></svg>',
    nextArrow:'<svg class="arrow-right" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.64062 5.57143C6.64062 5.48214 6.59598 5.3817 6.52902 5.31473L1.32812 0.11384C1.26116 0.046875 1.16071 0.00223231 1.07143 0.00223231C0.982143 0.00223231 0.881696 0.046875 0.814732 0.11384L0.256696 0.671875C0.189732 0.73884 0.145089 0.839285 0.145089 0.928572C0.145089 1.01786 0.189732 1.1183 0.256696 1.18527L4.64286 5.57143L0.256696 9.95759C0.189732 10.0246 0.145089 10.125 0.145089 10.2143C0.145089 10.3147 0.189732 10.404 0.256696 10.471L0.814732 11.029C0.881696 11.096 0.982143 11.1406 1.07143 11.1406C1.16071 11.1406 1.26116 11.096 1.32812 11.029L6.52902 5.82812C6.59598 5.76116 6.64062 5.66071 6.64062 5.57143Z" fill="#171821"/></svg>',

    fade: true,

  });

  $('.editors-slider').slick({
    prevArrow:'<svg class="arrow-left" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99777 0.928572C6.99777 0.828125 6.95312 0.73884 6.88616 0.671875L6.32812 0.11384C6.26116 0.046875 6.16071 0.00223231 6.07143 0.00223231C5.98214 0.00223231 5.8817 0.046875 5.81473 0.11384L0.613839 5.31473C0.546875 5.3817 0.502232 5.48214 0.502232 5.57143C0.502232 5.66071 0.546875 5.76116 0.613839 5.82812L5.81473 11.029C5.8817 11.096 5.98214 11.1406 6.07143 11.1406C6.16071 11.1406 6.26116 11.096 6.32812 11.029L6.88616 10.471C6.95312 10.404 6.99777 10.3036 6.99777 10.2143C6.99777 10.125 6.95312 10.0246 6.88616 9.95759L2.5 5.57143L6.88616 1.18527C6.95312 1.1183 6.99777 1.01786 6.99777 0.928572Z" fill="#171821"/></svg>',
    nextArrow:'<svg class="arrow-right" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.64062 5.57143C6.64062 5.48214 6.59598 5.3817 6.52902 5.31473L1.32812 0.11384C1.26116 0.046875 1.16071 0.00223231 1.07143 0.00223231C0.982143 0.00223231 0.881696 0.046875 0.814732 0.11384L0.256696 0.671875C0.189732 0.73884 0.145089 0.839285 0.145089 0.928572C0.145089 1.01786 0.189732 1.1183 0.256696 1.18527L4.64286 5.57143L0.256696 9.95759C0.189732 10.0246 0.145089 10.125 0.145089 10.2143C0.145089 10.3147 0.189732 10.404 0.256696 10.471L0.814732 11.029C0.881696 11.096 0.982143 11.1406 1.07143 11.1406C1.16071 11.1406 1.26116 11.096 1.32812 11.029L6.52902 5.82812C6.59598 5.76116 6.64062 5.66071 6.64062 5.57143Z" fill="#171821"/></svg>',
    slidesToShow: 4,

    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 577,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  $('.related-slider').slick({
    prevArrow:'<svg class="arrow-left" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99777 0.928572C6.99777 0.828125 6.95312 0.73884 6.88616 0.671875L6.32812 0.11384C6.26116 0.046875 6.16071 0.00223231 6.07143 0.00223231C5.98214 0.00223231 5.8817 0.046875 5.81473 0.11384L0.613839 5.31473C0.546875 5.3817 0.502232 5.48214 0.502232 5.57143C0.502232 5.66071 0.546875 5.76116 0.613839 5.82812L5.81473 11.029C5.8817 11.096 5.98214 11.1406 6.07143 11.1406C6.16071 11.1406 6.26116 11.096 6.32812 11.029L6.88616 10.471C6.95312 10.404 6.99777 10.3036 6.99777 10.2143C6.99777 10.125 6.95312 10.0246 6.88616 9.95759L2.5 5.57143L6.88616 1.18527C6.95312 1.1183 6.99777 1.01786 6.99777 0.928572Z" fill="#171821"/></svg>',
    nextArrow:'<svg class="arrow-right" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.64062 5.57143C6.64062 5.48214 6.59598 5.3817 6.52902 5.31473L1.32812 0.11384C1.26116 0.046875 1.16071 0.00223231 1.07143 0.00223231C0.982143 0.00223231 0.881696 0.046875 0.814732 0.11384L0.256696 0.671875C0.189732 0.73884 0.145089 0.839285 0.145089 0.928572C0.145089 1.01786 0.189732 1.1183 0.256696 1.18527L4.64286 5.57143L0.256696 9.95759C0.189732 10.0246 0.145089 10.125 0.145089 10.2143C0.145089 10.3147 0.189732 10.404 0.256696 10.471L0.814732 11.029C0.881696 11.096 0.982143 11.1406 1.07143 11.1406C1.16071 11.1406 1.26116 11.096 1.32812 11.029L6.52902 5.82812C6.59598 5.76116 6.64062 5.66071 6.64062 5.57143Z" fill="#171821"/></svg>',
    slidesToShow: 3, 

    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $(".star").rateYo({
    normalFill: "#A0A0A0",
    ratedFill: "#FBC02D",
    readOnly: true,
    spacing: "5px",
    starWidth: "14px",
  });

});



//menu
const menuBtn = document.querySelector('.menu__burger');
const menuList = document.querySelector('.menu__list');
const menuLink = document.querySelectorAll('.menu__link');
const menuSubLink = document.querySelectorAll('.menu__link--sub');

const menuSubSubLink = document.querySelectorAll('.menu-sub__link');

menuBtn.addEventListener('click', function() {
  menuList.classList.toggle('active');
  menuBtn.classList.toggle('active');
  document.querySelector('body').classList.toggle('scroll-block');
});

for (let i = 0; i < menuLink.length; i++) {
  menuLink[i].addEventListener('click', function () {
    menuList.classList.remove('active');
    menuBtn.classList.remove('active');
    document.querySelector('body').classList.remove('scroll-block');
  });
}

for (let i = 0; i < menuSubSubLink.length; i ++) {
  menuSubSubLink[i].addEventListener('click', function() {
    menuList.classList.remove('active');
    menuBtn.classList.remove('active');
    document.querySelector('body').classList.remove('scroll-block');
  });
}



const searchBtn = document.querySelector('.menu__search');
const menuSearch = document.querySelector('.search-txt');

searchBtn.addEventListener('click', function () {
  menuSearch.classList.toggle('search-txt--active');
}) 


//filters

const newsTabsNav = document.querySelector('.latest-news__tabs-nav');

newsTabsNav.addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('latest-news__tab-btn')) {
    
    const path = target.dataset.path;

    document.querySelectorAll('.latest-news__tab-btn').forEach(el => {
      {el.classList.remove('latest-news__tab-btn--active')};
      target.classList.add('latest-news__tab-btn--active');
    })

    document.querySelectorAll('.latest-news__item').forEach (el => {
      el.style.display = 'none';
      el.classList.remove('latest-news__item--visible');
    });

    document.querySelectorAll(`[data-target="${path}"]`).forEach(el => {
      el.closest('.latest-news__item').classList.add('latest-news__item--visible');
    });
      

    if (path == 'all') {
      document.querySelectorAll('.latest-news__item').forEach(el => {
        el.classList.add('latest-news__item--visible');
      });
    }
  }
});


//dropdown

const dropdownBtn = document.querySelector('.menu__item--dropdown');
const menuSubList = document.querySelector('.menu-sub__list');

dropdownBtn.addEventListener('click', function() {
  menuSubList.classList.toggle('menu-sub__list--active');
});

//modal

const modal = document.querySelector('.modal');
const modalOpen = document.querySelector('.modal__open');
const modalClose = document.querySelector('.modal__close');
const modalOverlay = document.querySelector('.modal__overlay');

const openModal = function() {
  modal.classList.remove('hidden');
  modalOverlay.classList.remove('hidden');
}

const closeModal = function() {
  modal.classList.add('hidden');
  modalOverlay.classList.add('hidden');
}

modalOpen.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
  if( e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
})






