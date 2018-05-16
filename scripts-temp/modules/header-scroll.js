import jQuery from 'jquery';

function HeaderScroll () {

  var headerScrolled = jQuery('.page-header__header-area'),
      logo = headerScrolled.find('.logo'),
      menuIcon = headerScrolled.find('.menu-icon'),
      page = jQuery(document);

      page.scroll(function() {

        if (page.scrollTop() > 0) {
          
          headerScrolled.addClass('page-header__header-area--scrolled');
          logo.removeClass('logo--light').addClass('logo--dark');
          menuIcon.removeClass('menu-icon--light').addClass('menu-icon--dark');

        } else {
          
          headerScrolled.removeClass('page-header__header-area--scrolled');
          logo.removeClass('logo--dark').addClass('logo--light');
          menuIcon.removeClass('menu-icon--dark').addClass('menu-icon--light');
        }

      });

}

HeaderScroll();

export default HeaderScroll;

