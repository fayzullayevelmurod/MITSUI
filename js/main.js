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
})



