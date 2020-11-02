class Plink{
    constructor(x, y, r){

        var options={
            isStatic : true
        }

        this.r=r;

        this.body = Bodies.circle(x, y, this.r, options);

        World.add(world, this.body);
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        circle(0, 0, this.r);
        pop();

        
        }
};