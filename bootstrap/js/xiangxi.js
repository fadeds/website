$(function(){
	$('#header .nav .nav-main .btn').click(function(){
		$('#header .nav-list').toggle("slow");
	});
	$(window).scroll(function(){
	if($(window).scrollTop() >= 300){
		$('#header .nav,#header .nav-bg').css({
			'padding':'0px'
		},100);
		$('#header .nav .nav-list').css('top','10px');
		$('#header .nav .nav-main h1 a').css('color','#fff');
	}else{
		$('#header .nav,#header .nav-bg').css({
			'padding':'10px 0px'
		},100);
		$('#header .nav .nav-main h1 a').css('color','#019ee3');
		$('#header .nav .nav-list').css('top','20px');

	}
	});
	$('.sampleimage').zoomio();
})
window.onload=function(){
		var arr=['affinity.jpeg','banner.jpg','cinelli.jpeg'];
		var num=Math.floor(Math.random()*100000000)%3;
		$('#bg').css('background-Image','url'+'('+'img/'+arr[num]+')');
		function init(){
          var arr = [];
          for (var i = 0; i < 7; i++) {
            arr[i] = new ShuffleText(document.querySelector('#text' + i));
          }
          for (var i = 0; i < arr.length; i++) {
            $('#text' + i)
              .data('index', i)
              .hover(function () {
                arr[$(this).data('index')].start();
              }, function () {
                arr[$(this).data('index')].start();
              });
            arr[i].start();
          }
		}
		init();
	}
	