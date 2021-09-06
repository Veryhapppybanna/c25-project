class computerArcher{
    constructor(x, y, width, height, angle){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
    }

     this.body = Bodies.rectangle(x,y,this.r);
    this.image = loadImage("./assets/computerArcher.png")
    Matter.Body.setAngle(this.body,-PI)

    World.add(world,this.body)


    display(){
        if(move === "UP" && playerArcher.body.angle < 1.77){
             angleValue = 0.1;
        }else{
            angleValue =-0.1;
        }
        
        if(move === "down" && playerArcher.body.angle >1.47){
            angleValue =-0.1
        }else{
            angleValue = 0.1
        }
    } 

}