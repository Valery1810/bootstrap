$(document).ready(function() {
  $("button[filter]").click(function() {
    if ($(this).attr("filter") != "all") {
      $(".filter>div[filter != '" + $(this).attr("filter") + "']").hide(350);
      $(".filter>div[filter = '" + $(this).attr("filter") + "']").show(350);
    } else {
      $(".filter>div").show(350);
    }
  });
/**********************************/
$("#navigation").on("click","a", function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
      top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 800);
}); 

});

function tick() {
  let curTime = new Date();
  let hours = 23 - curTime.getHours();
  if (hours < 10) hours = "0" + hours;
  let minutes = 59 - curTime.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;
  let seconds = 59 - curTime.getSeconds();
  if (seconds < 10) seconds = "0" + seconds;
  document.getElementById("h").innerHTML = hours + " : ";
  document.getElementById("m").innerHTML = minutes + " : ";
  document.getElementById("s").innerHTML = seconds;
}
setInterval(tick, 1000);

$('#blog .more_view').on('click', function(){
  $('#blog .blog-item[col=3]').css('display','flex');
});