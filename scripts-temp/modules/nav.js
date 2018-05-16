import jQuery from 'jquery';

function NavToggle () {

  var navOpenBtn = jQuery('#nav-btn-open'),
      navCloseBtn = jQuery('#nav-btn-close'),
      navOffCanvas = jQuery('.nav');

  //open nav on click
  navOpenBtn.click(function() {

    navOffCanvas.addClass('nav--open');
    navOpenBtn.addClass('menu-icon--hidden');

  });

  //close nav on click
  navCloseBtn.click(function() {

    navOffCanvas.removeClass('nav--open');
    navOpenBtn.removeClass('menu-icon--hidden');

  });

}

NavToggle();

export default NavToggle;