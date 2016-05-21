class Ball {
    constructor(
        ballElem, ballRadius
    ) {
        this.element = ballElem;
        //draw ball
        this.element.width = ballRadius * 2;
    }

    moveBall({
        x, y
    }) {
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
    }

}
export default Ball;