$(function(){
      	var a = 0;
      	setInterval(function(){
      		a++;
      		$('#js1 li').eq(a).css('display','block');
      		$('#js1 li').eq(a).siblings().css('display','none');
      		if(a == 2){
      			a = -1;
      		}
      	},1000)
      })