class Stone {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':5
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     // pos.x=mouseX;
     // pos.y=mouseY;

      push();
      translate(pos.x, pos.y);
      
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black")
      fill("black");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  