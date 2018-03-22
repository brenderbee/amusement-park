$(document).ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();
    var inputHeight = parseInt($("#height").val());

    $(".short").removeClass("highlight");
    $(".tall").removeClass("highlight");
    $(".all").removeClass("highlight");

    if (inputHeight < 36) {
      $(".rides").show();
      $(".short").addClass("highlight");
      $(".all").addClass("highlight");
    } else {
      $(".rides").show();
      $(".tall").addClass("highlight");
      $(".all").addClass("highlight");
    }

    $(".height").text(inputHeight);


  });
});
