$(document).ready(function(){
  /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
  var disqus_shortname = 'guaimao'; // required: replace example with your forum shortname

  /* * * DON'T EDIT BELOW THIS LINE * * */
  (function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();

  var obj
  $('#index>div').hover(function(){
    $(this).animate({ 
      backgroundColor:'#386',
      opacity:0.8
    }, 'fast')
    obj=$(this).children('p')
    $(obj[0]).animate({ backgroundColor:'#ff9999' }, 'fast')
  }, function(){
    $(this).animate({ 
      backgroundColor:'#bbbbbb',
      opacity:0.8
    }, 'fast')
    obj=$(this).children('p')
    $(obj[0]).animate({ backgroundColor:'#bbbbbb' }, 'fast')
  })

  $('#home').hover(function(){
    $('#home_link').html('首    页')
  }, function(){
    $('#home_link').html('HOME')
  })

  $('#archives').hover(function(){
    $('#archives_link').html('文章归档')
  }, function(){
    $('#archives_link').html('ARCHIVES')
  })

  $('#projects').hover(function(){
    $('#projects_link').html('我的项目')
  }, function(){
    $('#projects_link').html('PROJECTS')
  })

  $('#aboutme').hover(function(){
    $('#aboutme_link').html('关    于')
  }, function(){
    $('#aboutme_link').html('ABOUTME')
  }) 

  $('#home').click(function(){
    $(this).animate({ opacity:1 }, 'fast', function(){
      location.href = '/'
    })
  })
  $('#archives').click(function(){
    $(this).animate({ opacity:1 }, 'fast', function(){
      location.href = '/archives'
    })
  })
  $('#projects').click(function(){
    $(this).animate({ opacity:1 }, 'fast', function(){
      location.href = '/projects'
    })
  })
  $('#aboutme').click(function(){
    $(this).animate({ opacity:1 }, 'fast', function(){
      location.href = '/aboutme'
    })
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
