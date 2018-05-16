import jQuery from 'jquery';
import slick from 'slick-carousel';

function TwitterSlider () {

  var twitterSlider = jQuery('#twitter-gallery .gallery__slides'),
      twitterDots = jQuery('.twitter__gallery-dots');

  twitterSlider.slick({
    arrows: false,
    dots: true,
    appendDots: twitterDots,
    autoplay: true
  });
  
}

TwitterSlider();

export default TwitterSlider;