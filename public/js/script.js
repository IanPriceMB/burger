$(document).ready(function() {
    $(".devour-form").on("submit", function(event) {
      event.preventDefault();
  
      var burger_id = $(this).children(".burger_id").attr('value');
      $.ajax({
        method: "PUT",
        url: "/burgers/" + burger_id
      }).then(function(data) {
        location.reload();
      });
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
    
        var burger ={
            burger_name: $('#add-burger').val().trim()
        }
        $.ajax({
          method: "POST",
          url: "/burgers/create",
          data: burger
        }).then(function(data) {
          location.reload();
        });
      });
  });
  