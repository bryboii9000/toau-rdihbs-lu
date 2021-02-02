class Stone{
    constructor(x,y,width,height){
        var options = {
        isStatic:true,
        restitution : 0,
        density : 1.2,
        friction : 1
      }
      this.y = y
      this.x = x
      this.height = height
      this.width = width
      this.image = loadImage("images/stone.png")
      this.body = Bodies.rectangle(x,y,width,height,options);   
      World.add(world, this.body);
     
    }
    display(){
      
        var  paperpos = this.body.position
  
        push();
        translate(paperpos.x,paperpos.y);
        imageMode(CENTER);
        image(this.image,this.y,this.x,this.height,this.width)
        pop();
      };
    };

