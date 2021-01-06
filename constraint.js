class Chain{
    constructor(bodyA,pointB){
        var option = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.08,
            length:7
        }
        this.pointB = pointB
        this.Chain = Constraint.create(option)
        World.add(world,this.Chain)
    }
    fly(){
        this.Chain.bodyA = null
    }
    attach(body){
      this.Chain.bodyA = body
    }
    display(){
        if(this.Chain.bodyA){
        var bodyA = this.Chain.bodyA.position
        var point = this.pointB
        push()
        strokeWeight(3)
        fill("black")
        line(bodyA.x,bodyA.y,point.x,point.y)
        pop()
        }
    }
}