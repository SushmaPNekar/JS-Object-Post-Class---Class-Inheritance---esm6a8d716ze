// import using require

// declare class


// export class using module.exports
import Shape from './shape';
var shape = new Shape();

export class Circle extends shape{
    constructor(color,radius){
        super(color);
        this.radius = radius;
    }

    calculateArea(){
        console.log(3.14 * this.radius);
    }
}