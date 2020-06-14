class chain{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
    var options ={
        bodyA: body1,
        bodyB:body2
    
    }
            this.chain =Constraint.create(options);
            World.add(world,this.chain);
            pointB:{x:this.offsetX, y=this.offsetY}
    }
    display()
    {
        line(paper1.body.position.x,bird.body.position.y,constraintlog.body.position.x,constraintlog.body.position.y);
        chain = new chain(paper1.body, ground)
    
    }
    }
    