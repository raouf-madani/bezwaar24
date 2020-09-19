$(document).ready(function() {

      $('.acc .questionContainer').click(function() {

        $(this).next('.content').slideToggle();
      });
    });
 


$(document).ready(function() {
       
        if (window.matchMedia("(max-width: 1199px)").matches) {

        $('.dropdown').click(function() {
          const current_dropdown = $(this).children('.dropdown-menu');
          $(".dropdown-menu").not(current_dropdown).slideUp();
          current_dropdown.slideToggle();
        });
        }



    });



$(document).ready(function() {
    var myCarousel = $(".carousel");
    myCarousel.append("<ol class='carousel-indicators'></ol>");
    var indicators = $(".carousel-indicators");

    myCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
      (index === 0) ?

      indicators.append("<li data-target='#carouselExampleIndicators' data-slide-to='" + index + "' class='active'></li>"):
        indicators.append("<li data-target='#carouselExampleIndicators' data-slide-to='" + index + "'></li>");
    });
    $('.carousel-inner div:first').addClass('active');

    $('.carousel').carousel();
});

$(document).ready(function() {
$(".card-text").each(function(i) {
    len = $(this).text().length;
    if (len > 164) {
      $(this).text($(this).text().substr(0, 164) + '...');
    }
  });
});