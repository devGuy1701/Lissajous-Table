let rows, cols;
let w;
let d;
let r;
let angle;
let x, y, px, py;

let curves;

//let angles;

function setup() {
    createCanvas(800, 800);
    
    w = 80;
    d = w - 0.2 * w;
    r = d / 2;
    angle = 0;
    cols = floor(width / w) - 1;
    rows = floor(height / w) - 1;
    curves = new Array(cols).fill(0).map(() => new Array(rows).fill(0));

    for(let i = 0; i < cols; i++) {
        for(let j = 0; j < rows; j++) {
            curves[i][j] = new Curve();
        }
    }
    //angles = [0, PI/8,PI/4,PI * 3/8,HALF_PI,HALF_PI,PI * 5/8,PI * 3/4, PI* 7/8, PI ];
}
  
function draw() {
    background(0);
    noFill();
    
    stroke(255);
    
    for(let i = 0; i < cols; i++) {
        
        x = w + i * w + w / 2;
        y = w / 2;
        strokeWeight(1);
        stroke(255);
        ellipse(x, y, d, d);

        px = r * cos(angle * (i + 1) - HALF_PI);
        py = r * sin(angle * (i + 1) - HALF_PI);
        /*px = r * cos(angle * (angles[i]) - HALF_PI);
        py = r * sin(angle * (angles[i]) - HALF_PI);*/
        strokeWeight(8);
        stroke(255);
        point(px + x, py + y);

        stroke(255, 100);
        strokeWeight(1);
        line(px + x, 0, px + x, height);

        for(let j = 0; j < rows; j++) {
            curves[j][i].setX(px + x);
        }

        
    }

    for(let i = 0; i < rows; i++) {
        
        x = w / 2;
        y = w + i * w + w / 2;
        strokeWeight(1);
        stroke(255);
        ellipse(x, y, d, d);

        px = r * cos(angle * (i + 1) - HALF_PI);
        py = r * sin(angle * (i + 1) - HALF_PI);
        /*px = r * cos(angle * (angles[i]) - HALF_PI);
        py = r * sin(angle * (angles[i]) - HALF_PI);*/
        strokeWeight(8);
        stroke(255);
        point(px + x, py + y);

        stroke(255, 100);
        strokeWeight(1);
        line(0, py + y, width, py + y);

        for(let j = 0; j < cols; j++) {
            curves[i][j].setY(py + y);
        }
        
    }

    for(let i = 0; i < cols; i++) {
        for(let j = 0; j < rows; j++) {
            curves[i][j].setPoint();
            curves[i][j].show();
        }
    }



    angle += 0.01;
}
