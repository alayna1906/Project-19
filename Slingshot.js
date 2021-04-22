class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body
    }
    display(){
        image(this.image1, 200, 24);
        image(this.image2, 172, 24);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke('#301608')
            line(pointA.x + 20, pointA.y + 10, pointB.x, pointB.y);
            line(pointA.x - 15, pointA.y + 10, pointB.x - 30, pointB.y + 10);
            image(this.image3, pointA.x - 30, pointA.y - 18, 10,20)
        }
    }
    
}