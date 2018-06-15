let t3 = new LSystem(['X', "Y", "F", "+", "-"]
                    , ["F", "X"]
                    , {"X" : "X+YF+", "Y": "-FX-Y"},
                    90);

t3.draw = () => {
    background(255)
    let angle = 0;

    let lastLine = {x:width/1.5, y:height/2};

    for(let e of t3.tree){
        if(e == "F"){
            let newLine = {
                x: Math.cos(angle*Math.PI/180) * 10 + lastLine.x,
                y: Math.sin(angle*Math.PI/180) * 10 + lastLine.y
            }
            line(lastLine.x, lastLine.y, newLine.x, newLine.y);
            lastLine = newLine;
        }

        if(e == "-"){
            angle -= t3.angle;
        }

        if(e == "+"){
            angle += t3.angle;
        }

    }

}