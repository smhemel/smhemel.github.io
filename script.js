const macbookView = document.querySelector(".macbook-view");
const loadingWrapper = document.getElementById("loading-wrapper");
const portfolioContainer = document.getElementById("portfolio");
const macbookScreen = document.querySelector(".macbook-screen");

setTimeout(() => {
  macbookView.classList.add("change");
}, 300);

$(window).on("load resize", function () {
  macbookScreenHeight = macbookScreen.clientHeight;
  macbookScreenWidth = macbookScreen.clientWidth;

  loadingWrapper.style.height =
    macbookScreenHeight - (macbookScreenHeight / 100) * 10 + "px";
  portfolioContainer.style.height =
    macbookScreenHeight - (macbookScreenHeight / 100) * 10 + "px";
  loadingWrapper.style.width =
    macbookScreenWidth - (macbookScreenWidth / 100) * 26 + "px";
  portfolioContainer.style.width =
    macbookScreenWidth - (macbookScreenWidth / 100) * 26 + "px";
});

$(function () {
  $(".menu-link").click(function () {
    $(".menu-link").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

$(".search-bar input")
  .focus(function () {
    $(".header").addClass("wide");
  })
  .blur(function () {
    $(".header").removeClass("wide");
  });
