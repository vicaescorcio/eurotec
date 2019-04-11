(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel').carousel({
      indicators: true,
      numVisible: 2,
      onCycleTo: function(){
        $('.fade_section').fadeToggle("500");
      }
    });

    $('input#input_text, textarea#textarea2').characterCounter();


  }); // end of document ready
})(jQuery); // end of jQuery name space
