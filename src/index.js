// $(function () {
//   $("#home_slider").flexslider({
//     animation: "slide",
//     controlNav: true,
//     directionNav: true,
//     animationLoop: true,
//     slideshow: true,
//     slideshowSpeed: 2000,
//     useCSS: false,
//   });
// });
let a = "";
try {
  let ab = new Promise((resolve, reject) => {
    let randon = Math.random();
    resolve();
    a();
  }).then(() => {
    a();
  });
  ab.catch((err) => {
    console.log(err, "123");
  });
} catch (err) {
  console.log(err, "err");
}
