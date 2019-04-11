function next_right(){
  var elem = document.querySelector('.carousel');
  var instance = M.Carousel.getInstance(elem);
  instance.next();
}

function next_left(){
  var elem = document.querySelector('.carousel');
  var instance = M.Carousel.getInstance(elem);
  instance.prev();
}