import Field from './field';
import Ball from './ball';


class Game {
    constructor({
        fieldElem, fieldWidth, fieldHeight, fieldBorderWidth, ballElem, ballRadius
    }) {
        this._ball = new Ball(
            ballElem, ballRadius
        );
        this._field = new Field(
            fieldElem, fieldWidth, fieldHeight, fieldBorderWidth
        );

        this._field.element.addEventListener('click', () => {
            let fieldCoords = this._field.element.getBoundingClientRect();

            let fieldInnerCoords = {
                top: fieldCoords.top + this._field.element.clientTop,
                left: fieldCoords.left + this._field.element.clientLeft
            };


            let toMoveCoords = {
                x: event.clientX - fieldInnerCoords.left,
                y: event.clientY - fieldInnerCoords.top
            };
            let ballToMoveCoords = {
                x: toMoveCoords.x - ballRadius,
                y: toMoveCoords.y - ballRadius

            };

            if (toMoveCoords.x - ballRadius < 0) {
                ballToMoveCoords.x = 0;
            }
            if (toMoveCoords.y - ballRadius < 0) {
                ballToMoveCoords.y = 0;
            }
            if (toMoveCoords.x + ballRadius > fieldWidth) {
                ballToMoveCoords.x = fieldWidth - fieldBorderWidth - ballRadius;
            }
            if (toMoveCoords.y + ballRadius > fieldHeight) {
                ballToMoveCoords.y = fieldHeight - fieldBorderWidth - ballRadius;
            }

            this._ball.moveBall(ballToMoveCoords);
        });
    }
}

export default Game;