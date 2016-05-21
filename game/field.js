class Field {
    constructor(
        fieldElem, fieldWidth, fieldHeight, fieldBorderWidth
    ) {
        this.element = fieldElem;
        this._drawField(fieldWidth, fieldHeight, fieldBorderWidth);
    }
    _drawField(fieldWidth, fieldHeight, fieldBorderWidth) {

        this.element.style.width = fieldWidth + 'px';
        this.element.style.height = fieldHeight + 'px';
        this.element.style.borderWidth = fieldBorderWidth + 'px';
    }

}


export default Field;
