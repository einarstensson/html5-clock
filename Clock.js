window.CLOCK = {};

CLOCK.init = function(){
  this.canvas = document.getElementById( 'canvas' );
  this.width = this.canvas.width;
  this.height = this.canvas.height;
  this.context = this.canvas.getContext( '2d' );

  this.shapes = [];
  this.speed = 1;

  this.hoursSpeed = this.speed / 60 / 60;
  this.minutesSpeed = this.speed / 60;

  this.imageObj = new ImageObj({
    'src': 'clock.png',
    'x': 0,
    'y': 0,
    'height': this.height,
    'width': this.width
  });

  this.hoursHand = new Hand({
    'angle' : 270,
    'speed': this.hoursSpeed,
    'color': "#000000",
    'radius': (this.width * 0.45) / 2,
    'x': this.width / 2,
    'y': this.height / 2,
    'width' : this.width * 0.03
  });

  this.minutesHand = new Hand({
    'angle' : 270,
    'speed': this.minutesSpeed,
    'color': "#000000",
    'radius': (this.width * 0.65) / 2,
    'x': this.width / 2,
    'y': this.height / 2,
    'width' : this.width * 0.016
  });

  this.secondsHand = new Hand({
    'angle' : 270,
    'speed': this.speed,
    'color': "#ff0000",
    'radius': (this.width * 0.95) / 2,
    'x': this.width / 2,
    'y': this.height / 2,
    'width': this.width * 0.01
  });

  this.animate();
}

CLOCK.animate = function(){
  var self = this;

  setInterval(function(){
    self.buildShapes();
    console.log("second")
  }, 1000);
}

CLOCK.buildShapes = function(){
  var self = this;
  this.context.clearRect(0, 0, this.width, this.height);
  this.shapes.push(this.imageObj);

  self.imageObj.render( self.context );

  //Render hands
  this.hoursHand.render( this.context );
  this.minutesHand.render( this.context );
  this.secondsHand.render( this.context );
}

CLOCK.render = function(){
  this.context.clearRect(0, 0, this.width, this.height);
  for(index in this.shapes){
      this.shapes[index].render();
  }
}

window.onload = function(){
  CLOCK.init();
}
