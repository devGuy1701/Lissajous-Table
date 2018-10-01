class Curve {

    constructor() {
        this.current = new createVector();
        this.path = [];
    }
    
    setX (x) {
        this.current.x = x;
    }

    setY (y) {
        this.current.y = y;
    }

    setPoint () {
        this.path.push(this.current);
    }

    show () {
        stroke(0, 255, 0);
        strokeWeight(1);
        noFill();
        beginShape();
        this.path.map((pt) => {
            vertex(pt.x, pt.y);
        });
        endShape();
        strokeWeight(8);
        point(this.current.x, this.current.y);
        this.current = createVector();
    }

}