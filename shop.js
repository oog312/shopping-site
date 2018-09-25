$(document).ready(function(){
  $("#sp_menu_btn").click(function(){
    $(".toggle").slideToggle();
  });
});

$(window).load(function(){
$("#pro_img_lists img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_photo img").attr("src", img_src);
  });
});