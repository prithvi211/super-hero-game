class Box{

    constructor(x,y,width,height){

        this.body= Bodies.rectangle(x,y,width,height,{friction:1,density:0.5});
        World.add(world,this.body)
        this.width=width;
        this.height=height;
    }

    display(){

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();

    }

}