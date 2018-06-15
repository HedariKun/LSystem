class LSystem{
    
    constructor(variables, axiom, rules, angle){
        this.v = variables;
        this.a = axiom;
        this.r = rules;
        this.angle = angle || 0;
        this.n = 0;
        this.tree = [];
    }

    update(){
        if(this.n == 0) return this.tree = this.a;
        
        let newTree = [];

        for(let e of this.tree){
            let r = this.r[e];
            if(r != null || r != undefined){
                let m = r.split("");
                for(let l of m){
                    newTree.push(l);
                }  
            } else {
                newTree.push(e);
            }
        }
        this.tree = newTree;
    }

    draw(){
        console.log(this.tree);
    }

    show(){
        this.update();
        this.n++;
        this.draw();
    }

}