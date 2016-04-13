var msxGraphics = (function(){

  var context = null;

  return {
    init : function(ctx){
      context = ctx;
    },
    line : function(x1, y1, x2, y2, color){
		context.beginPath();
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.strokeStyle = color;
		context.stroke();
    }
  }

})(); 