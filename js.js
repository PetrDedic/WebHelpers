//scroll button

$(window).scroll(function () {
  if (this.scrollY > 500) {
    $(".scroll-button").addClass("show");
  } else {
    $(".scroll-button").removeClass("show");
  }
});

function Up() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

//menu
$(document).ready(function () {
  //active class toggle
  $(function () {
    $(".menu").on("click", function () {
      if ($(".menu").hasClass("active")) {
        $("*").removeClass("shown");
        $("*").removeClass("active");
        $("*").removeClass("active2");
      } else {
        $(".menu").addClass("active");
        $(".menu-item1").addClass("shown");
        $(".menu-item2").addClass("shown");
        $(".menu-item3").addClass("shown");
      }
    });

    $(".menu2").on("click", function () {
      $(this).toggleClass("active2");

      $(".menu-item31").toggleClass("shown");
      $(".menu-item32").toggleClass("shown");
    });
  });

  //ignore list and removing class
  /*$(function () {
    var ignore = Array("#menu");
    ignore.forEach(function (item) {
      $(item).click(function () {
        return false;
      });
    });
    $(document).on("click", function () {
      $("#menu").removeClass("active");
    });
  });*/
});
