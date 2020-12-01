class Mango  {
    constructor(x, y){
        var options = {
            'restitution':0,
            'friction':1,
            'isStatic':true,
            'density':1.0
        }
        this.r=10
        this.body = Bodies.circle(x, y, this.r, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
        this.image = loadImage("mango.png");
    }
    
    display(){

        push();

        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.r*2,this.r*2);
        pop();
    }
  
  
  
  };