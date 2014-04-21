var parent_width = $('#logoitem').width()
var son_width = $('#logo').width()
$('#logoitem').css('padding-left', parent_width / 2 - son_width / 2)

function change_location(){
  if($('#logoitem').width() != parent_width){
    parent_width = $('#logoitem').width()
    $('#logoitem').css('padding-left', parent_width / 2 - son_width / 2)
  }
}

$(document).ready(function(){
  setInterval('change_location()', 100)

  $('#home').popup({
    position:'bottom right',
    variation:'inverted',
    target:'#home',
    content:'首页'
  })

  $('#archives').popup({
    position:'bottom center',
    variation:'inverted',
    target:'#archives',
    content:'文章归档'
  })

  $('#projects').popup({
    position:'bottom center',
    variation:'inverted',
    target:'#projects',
    content:'我的项目'
  })
})


var count1 = 0
function show_pic(){
  if(count1 < a){
    $('.arc_link:eq(' + count1 + ')').animate({
      opacity:0.8,
      marginLeft:0,
    },400)
    count1 += 1
  }
}

$(document).ready(function(){
  hljs.initHighlightingOnLoad();

  a = $('div.arc_link').length
  $('.arc_year').fadeIn('slow');
  $('#pro_list').fadeIn();
  $('#aboutme_label').fadeIn('slow');
  $('#arc_content').hide().fadeIn('slow');
  $('#homelist').fadeIn('slow')

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
