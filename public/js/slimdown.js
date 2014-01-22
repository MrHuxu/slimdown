var count = 0
function show_pic(){
  if(count < a){
    $('.arc_link:eq(' + count + ')').animate({
      opacity:0.8,
      marginLeft:0,
    },400)
    count += 1
  }
}

$(document).ready(function(){
  hljs.initHighlightingOnLoad();

  a = $('div.arc_link').length
  $('.arc_year').fadeIn('slow');
  $('#homelist').fadeIn();
  $('#pro_list').fadeIn();
  $('#aboutme_label').fadeIn();
  $('#arc_content').hide().fadeIn();

  setInterval('show_pic()', 90)

  $('.arc_link').hover(function(){
    $(this).animate({
      marginLeft:20,
      opacity:1
    },100).animate({
      marginLeft:10,
      opacity:0.9
    },100).animate({
      marginLeft:20,
      opacity:1
    },100);
  }, function(){
    $(this).stop(true).animate({
      marginLeft:0,
      opacity:0.8
    },100)
  });
});
