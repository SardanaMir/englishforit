$(document).ready(function() {

    $('form').submit(function(e) {
      e.preventDefault();
      $.ajax({
          type: "POST",
          url: "assets/mailer/smart.php",
          data: $(this).serialize()
      }).done(function() {
          $(this).find("input").val("");
          $('#form').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');
  
          $('form').trigger('reset');
      });
      return false;
    });
  
    //modal
    $('#interview-link').on('click', function() {
        $('.overlay-1, #interview').fadeIn('slow');
    });

    $('#cv-link').on('click', function() {
        $('.overlay-2, #cv').fadeIn('slow');
    });
    $('#vocabulary-link').on('click', function() {
        $('.overlay-3, #vocabulary').fadeIn('slow');
    });

    $('.overlay__modal-close').on('click', function() {
        $('.overlay-1, #interview').fadeOut('slow');
        $('.overlay-2, #cv').fadeOut('slow');
        $('.overlay-3, #vocabulary').fadeOut('slow');
    });
  
    $('.overlay-1').on('click', function() {
        $('.overlay-1, #interview').fadeOut('slow');
    });

    $('.overlay-2').on('click', function() {
        $('.overlay-2, #cv').fadeOut('slow');
    });
    $('.overlay-3').on('click', function() {
        $('.overlay-3, #vocabulary').fadeOut('slow');
    });


  
  });