import jQuery from 'jquery';
import slick from 'slick-carousel';

function HeaderSlider () {

  var headerSlider = jQuery('#header-slider .gallery__slides'),
  	  headerDots = jQuery('.page-header__gallery-dots');

  headerSlider.slick({
  	arrows: false,
  	vertical: true,
  	verticalSwiping: true,
  	dots: true,
  	appendDots: headerDots,
  	autoplay: true
  });
  
}

HeaderSlider();

export default HeaderSlider;