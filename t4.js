let t4 = new LSystem(['A', 'B'],
                     ['A'],
                    {"A": "B-A-B", "B":"A+B+A"}, 
                    60);

let scale = 1;

t4.draw = () => {
    background(255)
    let angle = 0;
    let lastPoint = {x: 0, y: height};

    for(let e of t4.tree){
        if(e == "A" || e == "B"){
            let newPoint = {
                x: Math.cos(angle * Math.PI / 180) * 5 + lastPoint.x,
                y: -Math.sin(angle * Math.PI / 180) * 5 + lastPoint.y
            }
            line(lastPoint.x*scale, lastPoint.y*scale, newPoint.x*scale, newPoint.y*scale)
            lastPoint = newPoint;
        }

        if(e == "-"){
            angle -= t4.angle;
        }
        if(e == "+"){
            angle += t4.angle;
        }
    }   

}