class Sand {
    constructor(x, y,width,height) {
      var options = {
          'restitution':0.8,
          'friction':5,
          'density':1
      }
      this.body = Bodies.circle(200,100,20,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
  
      push();
      translate(pos.x, pos.y);
      
      ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,10,10);
      strokeWeight(4);
      stroke("black")
      fill("green");
      pop();
    }
  };
  