var msxGraphics = (function(){

  var context = null;

  return {
  	
    init : function(ctx){
      context = ctx;
    },
    
    pset : function(x1, y1, color){
    	context.fillStyle = color;
       	context.fillRect(x1,y1,1,1);
  	},
  	
    line : function(x1, y1, x2, y2, color){
		context.beginPath();
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.strokeStyle = color;
		context.stroke();
    },
    circle : function(x1, y1, radius, color){
		context.beginPath();
		context.strokeStyle = color;
		context.arc(x1, y1, radius, 0, 2*Math.PI);
		context.stroke();
    }
  }

})(); 