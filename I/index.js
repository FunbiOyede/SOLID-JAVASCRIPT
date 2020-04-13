//THE BAD
class shape {
    drawCircle();
    drawSquare();
    drawRectangle();
}

class Circle extends shape {
    drawCircle(){
        //...
    }
    drawSquare(){
        //...
    }
    drawRectangle(){
        //...
    }    
}
class Square extends shape {
    drawCircle(){
        //...
    }
    drawSquare(){
        //...
    }
    drawRectangle(){
        //...
    }    
}
class Rectangle extends shape {
    drawCircle(){
        //...
    }
    drawSquare(){
        //...
    }
    drawRectangle(){
        //...
    }    

}

//LOL SQUARE AND  RECTANGLE IS IMPLEMENT METHODS THAT ARE NOT USEFUL



// THE GOOD
class IShape {
    draw();
}
class ICircle {
    drawCircle();
}
class ISquare {
    drawSquare();
}
class IRectangle {
    drawRectangle();
}
class ITriangle {
    drawTriangle();
}
class Circle extends ICircle {
    drawCircle() {
        //...
    }
}
class Square extends ISquare {
    drawSquare() {
        //...
    }
}
class Rectangle extends IRectangle {
    drawRectangle() {
        //...
    }    
}
class Triangle extends ITriangle {
    drawTriangle() {
        //...
    }
}
class CustomShape extends IShape {
   draw(){
      //...
   }
}