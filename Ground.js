class Ground{

    constructor(){
    // x pos, y pos, width, height
        this.body=Bodies.rectangle(width/2,height-20,width,10,{isStatic:true});
        World.add(world,this.body);
    }

    display(){

        push();
        fill("white")
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,width,10);
        pop();
    }


}