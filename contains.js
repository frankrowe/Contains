(function(){

  var contains = {
    Point: function (_x, _y) {
      this.x = _x;
      this.y = _y;
    },
    find: function(p, poly){
      var inside = false;
      for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        var xi = poly[i].x, yi = poly[i].y;
        var xj = poly[j].x, yj = poly[j].y;
        
        var intersect = ((yi > p.y) != (yj > p.y)) &&
            (p.x < (xj - xi) * (p.y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
      }       
      return inside;
    }
  };

  window.Contains = contains;

}) ();