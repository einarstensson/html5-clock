function Hand( params ){
  this.angle = typeof params["angle"] !== 'undefined' ? params["angle"] : 0;
  this.color = typeof params["color"] !== 'undefined' ? params["color"] : 0;
  this.speed = typeof params["speed"] !== 'undefined' ? params["speed"] : 0;
  this.radius = typeof params["radius"] !== 'undefined' ? params["radius"] : 0;
  this.x = typeof params["x"] !== 'undefined' ? params["x"] : 6;
  this.y = typeof params["y"] !== 'undefined' ? params["y"] : 6;
  this.width = typeof params["width"] !== 'undefined' ? params["width"] : 5;
}

Hand.prototype.render = function( context ){
  var canvas = document.getElementById( 'canvas' );

  context.save();

  // 1.) Move the coordinate system to starting x and y position of the hand
  context.translate( this.x, this.y );

  // 2.) Calculate the end point of the hand
  this.angle = Number((Number(this.angle.toFixed(5)) + (this.speed * 6)).toFixed(5));
  var rads = this.angle * Math.PI / 180;
  var pointX = Math.cos( rads );
  var pointY = Math.sin( rads );

  // 3.) Style the hand
  context.lineWidth = this.width;
  context.strokeStyle = this.color;

  // 4.) Draw the hand
  context.beginPath();
  context.moveTo(0, 0);
  context.lineTo( pointX * this.radius, pointY * this.radius );
  context.stroke();

  // 5.) Restore the coordinate system to its original settings
  context.restore();
}
