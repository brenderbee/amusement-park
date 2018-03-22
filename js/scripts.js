$(document).ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();
    var inputHeight = parseInt($("#height").val());

    if (inputHeight < 36) {
      $(".rides").show();
      $(".tall").hide();
    } else {
      $(".rides").show();
      $(".short").hide();
    }

    $(".height").text(inputHeight);


  });
});
