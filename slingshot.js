class Slingshot
{
    constructor(bodyA, pointB)
    {
        var options = 
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 0
        }
        this.pointB = pointB; 

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    stoneFly(){
        this.sling.bodyA = null;
    }
    stoneAtch(stoneBody){
        this.sling.bodyA = stoneBody;
    }
    display()
    {
        if(this.sling.bodyA !== null){
        push();
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
    }
    
}