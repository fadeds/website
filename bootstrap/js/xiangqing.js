window.onload=function(){
		var arr=['affinity.jpeg','banner.jpg','cinelli.jpeg'];
		var num=Math.floor(Math.random()*100000000)%3;
		$('#bg').css('background-Image','url'+'('+'img/'+arr[num]+')');
	}