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
