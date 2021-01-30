$(document).ready(function(){
    $("li").click(function(){
  //  $(".body").html($(this).attr('title'));
    var type = $(this).attr('title');
    $("#main").fadeOut(1000, function() {
        $("#main").load(type + '.html');
    });
    
    $("#main").fadeIn(1000);
  });  
});