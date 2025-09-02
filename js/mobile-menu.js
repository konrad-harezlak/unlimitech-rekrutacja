$(document).ready(function() {
  const $menuButton = $('.main-header__menu');
  const $mobileMenu = $('#mobileMenu');
  
  $menuButton.on('click', function() {
    $mobileMenu.offcanvas('show');
  });

});

$(document).ready(function() {
  $('#mobileMenu a[data-bs-toggle="offcanvas"]').on('click', function(e) {
    $('#mobileMenu').offcanvas('hide');
  });

  $('#subnav-damskie-buty .back-to-main-menu').on('click', function(e) {
    e.preventDefault();
    $('#subnav-damskie-buty').offcanvas('hide');
    $('#mobileMenu').offcanvas('show');
  });
});

$(document).ready(function() {
  $('#subnav-damskie-buty a[data-bs-target="#subnav-czolenka"]').on('click', function(e) {
    $('#subnav-damskie-buty').offcanvas('hide');
  });

  $('#subnav-czolenka .back-to-parent-menu').on('click', function(e) {
    e.preventDefault();
    $('#subnav-czolenka').offcanvas('hide');
    $('#subnav-damskie-buty').offcanvas('show');
  });
});