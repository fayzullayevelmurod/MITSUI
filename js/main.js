window.addEventListener('load', () => {
  try {
    const cookie = document.querySelector('.cookie'); // Cookie banner
    const closeCookie = document.querySelector('.close-cookie__btn'); // Yopish tugmasi

    // LocalStorage'dan "cookieAccepted" qiymatini o‘qib tekshiramiz
    const isCookieAccepted = localStorage.getItem('cookieAccepted');

    // Agar localStorage'da cookieAccepted mavjud bo‘lmasa, banner ko‘rinadi
    if (!isCookieAccepted || isCookieAccepted !== 'true') {
      cookie.classList.add('show'); // Cookie bannerni ko‘rsatish
    }

    // Yopish tugmasi bosilganda
    closeCookie.addEventListener('click', () => {
      cookie.classList.remove('show'); // Cookie bannerni yashirish
      localStorage.setItem('cookieAccepted', 'true'); // LocalStorage'ga qiymat saqlash
    });
  } catch (error) {

  }
});
window.addEventListener('DOMContentLoaded', () => {
  "use strict";


  // product views;
  const listView = document.querySelector('.list-view');
  const gridView = document.querySelector('.grid-view');
  const productCards = document.querySelector('.product-cards');
  if (listView) {
    productCards.classList.add('grid-view');
    listView.addEventListener('click', () => {
      listView.classList.add('active');
      gridView.classList.remove('active');
      productCards.classList.remove('grid-view');
      productCards.classList.add('list-view');
    })
    gridView.addEventListener('click', () => {
      gridView.classList.add('active');
      listView.classList.remove('active');
      productCards.classList.remove('list-view');
      productCards.classList.add('grid-view');
    })
  }

  // imask
  try {
    IMask(
      document.getElementById('phone-mask'),
      {
        mask: '+{7}(000)000-00-00'
      }
    )
  } catch (error) {
    console.log('Imask error', error);

  }

  // contact form
  const contactForm = document.querySelectorAll('.contact-form__box');
  if (contactForm) {
    contactForm.forEach(item => {
      const formInput = item.querySelector("input");
      const label = item.querySelector("label");

      // Input hodisalarini boshqarish
      formInput.addEventListener("input", (e) => {
        if (e.target.value !== "") {
          label.classList.add("active");
          formInput.classList.add('active');
        } else {
          label.classList.remove("active");
          formInput.classList.remove('active');
        }
      });

      // Fokus yo'qolganda hodisani kuzatish
      formInput.addEventListener("blur", (e) => {
        if (e.target.value === "") {
          label.classList.remove("active");
          formInput.classList.remove('active');
        }
      });

      // Fokusga kiritilganda hodisa
      formInput.addEventListener("focus", () => {
        label.classList.add("active");
        formInput.classList.add('active');
      });
    });
  }

  try {
    // Elementlarni tanlash
    const selectFilter = document.querySelector('.select-filter');
    if (selectFilter) {
      const selectedText = selectFilter.querySelector('.select-text');
      const filterOptions = selectFilter.querySelector('.filter-scrollbox');
      const filterItems = filterOptions.querySelectorAll('.filter-item span');
      const openFilterBtn = document.querySelector('.selected-filter');

      // Filterni ochish va yopish
      openFilterBtn.addEventListener('click', () => {
        const isOpen = filterOptions.classList.toggle('show'); // "show" klassini qo'shish yoki olib tashlash
        openFilterBtn.classList.toggle('active', isOpen); // "active" klassini boshqarish
      });

      // Tanlangan elementni o‘zgartirish
      filterItems.forEach((item) => {
        item.addEventListener('click', () => {
          selectedText.textContent = item.textContent; // Tanlangan filter matnini o‘zgartirish
          filterOptions.classList.remove('show'); // Filterni yopish
          openFilterBtn.classList.remove('active'); // "active" klassini olib tashlash
        });
      });

      // Sahifadagi boshqa joyni bosganda filterni yopish
      document.addEventListener('click', (e) => {
        if (!selectFilter.contains(e.target)) {
          filterOptions.classList.remove('show'); // Filterni yopish
          openFilterBtn.classList.remove('active'); // "active" klassini olib tashlash
        }
      });
    }
  } catch (error) {
    console.log(error);
  }

  var galleryThumbs = new Swiper(".gallery-thumbs", {
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 3,
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: 'vertical',
  });

  var galleryMain = new Swiper(".gallery-main", {
    watchOverflow: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    preventInteractionOnTransition: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });

  galleryMain.on('slideChangeTransitionStart', function () {
    galleryThumbs.slideTo(galleryMain.activeIndex);
  });

  galleryThumbs.on('transitionStart', function () {
    galleryMain.slideTo(galleryThumbs.activeIndex);
  });
  try {
    document.querySelectorAll('.counter-box').forEach(counterBox => {
      // Counter elementlarini tanlash
      const countDisplay = counterBox.querySelector('.count'); // Hozirgi qiymatni ko'rsatuvchi element
      const incrementBtn = counterBox.querySelector('.inc'); // Qo'shish tugmasi
      const decrementBtn = counterBox.querySelector('.dec'); // Ayirish tugmasi

      // Boshlang'ich qiymatni o'qish
      let count = parseInt(countDisplay.textContent, 10);

      // Qo'shish funksiyasi
      incrementBtn.addEventListener('click', () => {
        count++;
        countDisplay.textContent = count; // Yangi qiymatni chiqarish
      });

      // Ayirish funksiyasi
      decrementBtn.addEventListener('click', () => {
        if (count > 1) { // Qiymat 1 dan kam bo'lmasligi uchun
          count--;
          countDisplay.textContent = count; // Yangi qiymatni chiqarish
        }
      });
    });
  } catch (error) {

  }
})



