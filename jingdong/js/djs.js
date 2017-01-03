$(function(){
   		var a = 5;
   		var b = 4
    	setInterval(function(){
    		$('#djs3').text(a);
    		$('#djs2').text(b);
    		a--;
    		if(a == -1){
    			a = 5;
    			b-- ;
    		};
    		if(b == -1){
    			b = 4;
    		}
    	},1000);
    	
   })