import "./css/public.css";
import "./css/index.css";

import "./js/jquery-1.12.4.min";
import "./js/public";
import "./js/nav";
import "./js/jquery.flexslider-min";
$(function () {
  $("#home_slider").flexslider({
    animation: "slide",
    controlNav: true,
    directionNav: true,
    animationLoop: true,
    slideshow: true,
    slideshowSpeed: 2000,
    useCSS: false,
  });
});
