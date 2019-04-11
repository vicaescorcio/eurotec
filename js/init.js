(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel').carousel({
      indicators: true,
      numVisible: 2,
      onCycleTo: function(){
        $('.fade_section').fadeToggle("200");
      }
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space
