var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
  });

  var swiper = new Swiper(".DestinationSwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,

    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
  });
  
$(function(){
  $("#nav-placeholder").load("assets/placeholders/nav.html");
});
$(function(){
  $("#footer-placeholder").load("assets/placeholders/footer.html");
});