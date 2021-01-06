class Mango{
    constructor(x,y,width,height){
        var option = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,option)
        this.image = loadImage("mango.png")
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        imageMode(CENTER)
        translate(pos.x,pos.y)
        rotate(angle)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}