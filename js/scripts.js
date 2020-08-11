$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
    $("#walrus-showing-img-showing").toggle();
    $("#walrus-showing-img-hidden").toggle();
  });
});