export default class Paddle{
    constructor(gameWidth, gameHeight){
        this.width = 150;
        this.height = 150;

        this.position={
            x:gameWidth / 2 - this.width / 2,
            y:gameHeight - this.height - 10,
        }
    }

    

    draw(ctx){
        console.log("ctx:", ctx);
        ctx.fillRect(thi.position.x, this.position.y, this.width, this.height)
    }
}