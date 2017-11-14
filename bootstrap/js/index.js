$(document).ready(function(){
//导航点击滚动
$('.nav-list a').click(function(){
	var str=$(this).attr('title');
	var x=$(str).offset().top;
	$('html,body').animate({
		scrollTop:x
	},2000);
}) 
// 导航滚动效果
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
// 小屏导航条
$('#header .nav .nav-main .btn').click(function(){
	$('#header .nav-list').toggle("slow");
})
// 小轮播
var num=0;
var i=0;
function run(n,pr,sr){
	n-=1;	
	if(n<0){
		n=0;
	}
	$(sr).stop().animate({
		left:-n*pr+'px'
		},300);
	return n;
}
function runing(n,ne,sr){
	n+=1;
	if(n>2){
		n=0;
	}
	$(sr).stop().animate({
		'left':-n*ne+'px'
		},300);
	return n;
}
// work滚动
// 获取操作元素
var work='#main .work .right-container .right';
$('#main .work .right-container .right-control i').eq(0).click(function(){	
	// 每次点击重新获取元素宽度
	num = parseInt($('#main .work .right-container .right p').css('width'))+20;
	i=run(i,num,work);
	run(i,num,work);
});
$('#main .work .right-container .right-control i').eq(1).click(function(){
	num = parseInt($('#main .work .right-container .right p').css('width'))+20;
	i=runing(i,num,work);
	runing(i,num,work);
});
// say滚动
var saynum=0;
// 控制变量
var j=0;
// 获得操作元素 
var say='#main .say .say-bg .say-big .say-box';
$('#main .say .say-bg .bottom-control i').eq(0).click(function(){
	// 每次点击重新获取元素宽度
	saynum=parseInt($('#main .say .say-bg .say-big .say-box .say-main').css('width'))+20;
	j=run(j,saynum,say);
	run(j,saynum,say);
})
$('#main .say .say-bg .bottom-control i').eq(1).click(function(){
	saynum=parseInt($('#main .say .say-bg .say-big .say-box .say-main').css('width'))+20;
	j=runing(j,saynum,say);
	runing(j,saynum,say);
})

// 图片滑动
$('#main .service .imgs .imgs-box').children('li').mouseenter(function(){
	$(this).children('ul').animate({
		'top':'0px'
	},200);
	$(this).children('div').animate({
		'bottom':'4px'
	},200);
	$(this).siblings().children('ul').animate({
		'top':'-50px'
	},200);
	$(this).siblings().children('div').animate({
		'bottom':'-200px'
	},200);
})
// 图片链接
// 边框  service 
$('#main .service .sm-box .icon-bg').mouseenter(function(){
	$(this).addClass('active');
}).mouseleave(function(){
	$(this).removeClass('active');
});

//  价格详情  price
$('#main .price .details ul li:contains("SIGN UP")').children('a').click(function(){
	$('#main .price .details ul').removeClass('active');
	$('#main .price .details ul li:contains("SIGN UP")').children('a').removeClass('active');
	$('#main .price .details ul li:contains("$")').css({
		'background-color':'#F8F8F8',
		'color':'#ccc'
	})
	$(this).addClass('active');
	$(this).parent().parent().addClass('active');
	$(this).parent().parent().children(':contains("$")').css({
		'background-color':'#019ee3',
		'color':'#fff'
	})
});
// footer 小飞机
$('#footer .footer-box inp-box button').mouseenter(function(){
	$('#footer .footer-box inp-box button i').animate({
		right:'-40px',
		top:'-30px',
	},300);
}).mouseleave(function(){
	$('#footer .footer-box inp-box button i').animate({
		right:'0px',
		top:'0px',
	},300);
})

 $(".fancybox").fancybox({
    padding: 0,

    openEffect : 'elastic',
    openSpeed  : 650,

    closeEffect : 'elastic',
    closeSpeed  : 550,

    closeClick : true,
      
    beforeShow: function () {
      this.title = $(this.element).attr('title');
      this.title = '<h3>' + this.title + '</h3>' + '<p>' + $(this.element).parents('.portfolio-item').find('img').attr('alt') + '</p>';
    },
    
    helpers : {
      title : { 
        type: 'inside' 
      },
      overlay : {
        css : {
          'background' : 'rgba(0,0,0,0.8)'
        }
      }
    }
  });
  


})



$.Slitslider.defaults 	= {
	// transitions speed
	speed : 800,
	// if true the item's slices will also animate the opacity value
	optOpacity : true,
	// amount (%) to translate both slices - adjust as necessary
	translateFactor : 230,
	// maximum possible angle
	maxAngle : 25,
	// maximum possible scale
	maxScale : 2,
	// slideshow on / off
	autoplay : true,
	// keyboard navigation
	keyboard : true,
	// time between transitions
	interval : 3000,
	// callbacks
	// onBeforeChange : function( slide, idx ) { return false; },
	// onAfterChange : function( slide, idx ) { return false; }
};
			$(function() {
			
				var Page = (function() {

					var $navArrows = $( '#nav-arrows' ),
						$nav = $( '#nav-dots > span' ),
						slitslider = $( '#slider' ).slitslider( {
							onBeforeChange : function( slide, pos ) {

								$nav.removeClass( 'nav-dot-current' );
								$nav.eq( pos ).addClass( 'nav-dot-current' );

							}
						} ),

						init = function() {

							initEvents();
							
						},
						initEvents = function() {

							// add navigation events
							$navArrows.children( ':last' ).on( 'click', function() {

								slitslider.next();
								return false;

							} );

							$navArrows.children( ':first' ).on( 'click', function() {
								
								slitslider.previous();
								return false;

							} );

							$nav.each( function( i ) {
							
								$( this ).on( 'click', function( event ) {
									
									var $dot = $( this );
									
									if( !slitslider.isActive() ) {

										$nav.removeClass( 'nav-dot-current' );
										$dot.addClass( 'nav-dot-current' );
									
									}
									
									slitslider.jump( i + 1 );
									return false;
								
								} );
								
							} );

						};

						return { init : init };

				})();

				Page.init();
			});