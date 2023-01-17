class Circle{
    constructor(x,y,diam){
      this.x=x;
      this.y=y;
      this.diam=diam;
      this.history = [];
      
    }
    //num controls the density of the mess web
    init(num)
    {
      let r=width/6;
      for(let i=0;i<num;i++)
      {
        
      this.x=random(width/2-r,width/2+r);
      let d=Math.sqrt(r*r-(width/2-this.x)*(width/2-this.x));
      this.y=random(height/2-d,height/2+d);
      this.diam=random(20,60);
      let v = createVector(this.x, this.y,this.diam);
     
      this.history.push(v);
      dots.push(v);}
  
      if (this.history.length > 100) {
        this.history.splice(0, 1);
      }
    }
    show()
    {
      //drawing object trails and the ellipse
      
      beginShape();
      for (let i = 0; i < this.history.length; i++) {
        let pos = this.history[i];
        noFill();
        //trail color changes according to circle position
        var r = map(pos.y, 0, height, 0, 255/2);
        var g = map(pos.x, 0, width, 0, 255/2);
        var b = map(pos.y, 0, height, 0, 255/2);
    
        stroke(r, g, 255-b); 
  
        vertex(pos.x, pos.y);
        endShape();
      
      }
      
      noStroke();
  
      fill(255,255,255,150);
      
      ellipse(this.x, this.y, this.diam);
  
    }
    show_dots()
    {
      for (let i = 0; i < this.history.length; i++)
      {
  
        let pos = this.history[i];
     
        noStroke();
        fill(255,255,255,150);
        ellipse(pos.x,pos.y,pos.z);
      }
    }
    shine_dots()
    {
      
      
      for (let i=0;i<dots.length;i++)
      {
        let dot=dots[i];
        noStroke();
        
        var r = map(dot.y, 0, height, 0, 255);
        var g = map(dot.x, 0, width, 0, 255);
        var b = map(dot.y, 0, height, 0, 255)+100;
        
        fill(r,g,b,150);
        
        let incre_diam=int(frameCount%10);
        
        if(frameCount%3==0)
        { 
          ellipse(dot.x,dot.y,dot.z+incre_diam);}
        else{
          ellipse(dot.x,dot.y,dot.z-incre_diam);}
      }
    }
    enlarge_dots()
    {
      for (let i=0;i<dots.length;i++)
      {
        let dot=dots[i];
        noStroke();
        
        var r = map(dot.y, 0, height, 0, 255);
        var g = map(dot.x, 0, width, 0, 255);
        var b = map(dot.y, 0, height, 0, 255)+100;
        
        fill(r,g,b,150);
       
        
        ellipse(dot.x,dot.y,dot.z+enlarge_diam);
       
          
      }
    }
  }
  