$(document).ready(() => {
  $(".ui.dropdown")
    .dropdown("set value", 3)
    .dropdown("set text", 3)
    .dropdown("toggle");
  $("#exit-cart").on('click', function () {
    window.location.href= "./ama-romach.html";
  });
});
