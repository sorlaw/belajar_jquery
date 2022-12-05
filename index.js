$(document).ready(function () {
  $("#tombol_hide").click(function () {
    $("h1").hide();
  });

  $("#tombol_show").click(function () {
    $("h1").show();
  });

  $("#tombol_small").click(function () {
    $("body").css("background-color", "black");
  });

  $("#tombol_red").click(function () {
    $("h1").css("color", "red");
  });
});
