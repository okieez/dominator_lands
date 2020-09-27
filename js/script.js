// Vanilla JS Code For Mobile Nav

const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
  selectElement('header').classList.toggle('active');
});

// jQuery Code For Hiding Nav Links & Showing Search Bar

$(document).ready(function () {
  $('#search-icon').click(function () {
    $('.hide-item').toggleClass('nav-link__hide');
    $('.stretch-item').toggleClass('nav-link__stretch')
  })
})