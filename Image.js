function ImageObj( params ){
  this.src = typeof params["src"] !== 'undefined' ? params["src"] : "";

  this.height = typeof params["height"] !== 'undefined' ? params["height"] : "";
  this.width = typeof params["width"] !== 'undefined' ? params["width"] : "";
  this.x = typeof params["x"] !== 'undefined' ? params["x"] : 0;
  this.y = typeof params["y"] !== 'undefined' ? params["y"] : 0;

  this.element = this.createElement();
}

ImageObj.prototype.createElement = function( element ){
  var element = typeof element !== 'undefined' ? element : new Image();
  element.src = this.src;

  return element;
}

ImageObj.prototype.render = function( context ){
  context.drawImage( this.element, this.x, this.y, this.width, this.height );
}
