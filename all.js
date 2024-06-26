console.log('123');
$(document).ready(function () {
  $('.title').lettering();
  $('.button').lettering();
});

$(document).ready(function () {
  animation();
}, 2000);

$('.button').click(function () {
  animation();
});

function animation() {
  var title1 = new TimelineMax();
  title1.to('.button', 0, { visibility: 'hidden', opacity: 0 });
  title1.staggerFromTo(
    '.title span',
    0.5,
    { ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80 },
    { ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0 },
    0.05,
  );
  title1.staggerFromTo(
    '.hide .item01',
    0.5,
    { ease: Back.easeOut.config(1.7), opacity: 1, top: 0 },
    { ease: Back.easeOut.config(1.7), opacity: 1, top: -47 },
    0.05,
  );
  title1.staggerFromTo(
    '.hide .item02',
    0.5,
    { ease: Back.easeOut.config(1.7), opacity: 1, top: 0 },
    { ease: Back.easeOut.config(1.7), opacity: 1, top: -47 },
    0.05,
  );
  title1.staggerFromTo(
    '.hide .item03',
    0.5,
    { ease: Back.easeOut.config(1.7), opacity: 1, top: 0 },
    { ease: Back.easeOut.config(1.7), opacity: 1, top: -44 },
    0.05,
  );
  title1.to('.button', 0.2, { visibility: 'visible', opacity: 1 });


}
