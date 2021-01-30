class Hero{

    constructor(x,y,radius){

        this.body= Bodies.circle(x,y,radius,{friction:0.5,density:2.5});
        World.add(world,this.body)
        this.radius=radius;
        this.image=loadImage("images/Superhero-02.png");
    }

    display(){

        push();
        fill("purple");
        translate(this.body.position.x,this.body.position.y);
     //   this.image=loadImage("Superhero-02.png")
        rotate(this.body.angle)
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,0,0,200,100);
        pop();

    }

}