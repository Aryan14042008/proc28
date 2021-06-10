class Launcher{
    constructor(bodyA, B){
        var options = {
            'bodyA': bodyA,
            'pointB': B,
            'stiffness': 0.04,
            'length': 10
        }
         this.pointB=B;
        this.launcher=Constraint.create(options);            
        World.add(world,this.launcher);
    }
    fly(){
    
   this.launcher.bodyA = null;
         }

         display(){
        if(this.launcher.bodyA)
        { 
        var pointA = this.launcher.bodyA.position;
        var ptB = this.B;
        strokeWeight(4);
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }
    
};