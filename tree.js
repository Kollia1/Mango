class Tree extends BaseClass{
    
        constructor(x,y) {
          super(x,y,200,350)
          this.image=loadImage("tree.png")
          World.add(world, this.body);
        }
        display(){
         super.display()
      }
      
    
}