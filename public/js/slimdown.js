$(document).ready(function(){
  var obj
  $('#index>div').hover(function(){
    $(this).animate({ 
      backgroundColor:'#386',
      opacity:0.8
    }, 'fast')
    var obj=$(this).children('p')
    $(obj[0]).animate({ backgroundColor:'#ff9999' }, 'fast')
  }, function(){
    $(this).animate({ 
      backgroundColor:'#bbbbbb',
      opacity:0.8
    }, 'fast')
    obj=$(this).children('p')
    $(obj[0]).animate({ backgroundColor:'#bbbbbb' }, 'fast')
  })

  $('#home').click(function(){
    $(this).css('opacity', '1')
    location.href = '/'
  })
  $('#archives').click(function(){
    $(this).css('opacity', '1')
    location.href = '/archives'
  })
  $('#projects').click(function(){
    $(this).css('opacity', '1')
    location.href = '/projects'
  })
  $('#aboutme').click(function(){
    $(this).css('opacity', '1')
    location.href = '/aboutme'
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
