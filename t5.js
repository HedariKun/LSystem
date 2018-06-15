let t5 = new LSystem(['F', 'G'],
                    ['F', '-', 'G', '-', 'G'],
                    {'F':"F-G+F+G-F", "G": "GG"},
                    120);

t5.draw = () => {
    background(255);
    let lastPoint = {x:0, y:height};
    let angle = 0;

    for(let e of t5.tree){
        if(e == "F" || e == "G"){
            let newPoint = {
                x: Math.cos(angle * Math.PI / 180) * 10 + lastPoint.x,
                y: Math.sin(angle * Math.PI / 180) * 10 + lastPoint.y
            }

            line(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
            lastPoint = newPoint;
        }

        if(e == "-"){
            angle -= t5.angle;
        }

        if(e == "+"){
            angle += t5.angle;
        }

    }

}