var  mangobodyPositon,stonebodyPosition
var score = 0

function detectollision(object1,object2){
    mangobodyPositon = object1.body.position
    stonebodyPosition = object2.body.position

    var distance = dist(stonebodyPosition.x,stonebodyPosition.y, mangobodyPositon.x, mangobodyPositon.y)
    if(distance <= object1.width+object2.width){
        Matter.Body.setStatic(object2.body,false)
        score = score+1
    }
}
