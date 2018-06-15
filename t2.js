let t2 = new LSystem(["0", "1"],
					["0"],
					{
						"1": "11",
						"0":"1[0]0"
					});

t2.draw = ()=>{
	background(255)
	translate(width/2, height)
	let positions = [];
	let angle = 90;
	let oldPos = {x:0, y:0};
	for(let e of t2.tree){
		
		
		if(e == 0 || e == 1){
			let newPos = {
				x: Math.cos((angle * PI) / 180) * 20 + oldPos.x,
				y: -Math.sin((angle * PI) / 180) * 20 + oldPos.y
			};
			line(oldPos.x, oldPos.y, newPos.x, newPos.y)
			oldPos = newPos;
			if(positions.length == 0)
				positions.push({pos: oldPos, angle:angle});
		}

		if(e == "["){
			positions.push({pos:oldPos, angle:angle});
			angle -= 45;
		}

		if(e == "]"){
			oldPos = positions[positions.length-1].pos;
			angle = positions[positions.length-1].angle;
			positions.pop();
			angle += 45;
		}

	}

	stroke(0)
}
