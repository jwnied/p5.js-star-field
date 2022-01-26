function Star(){
  
  this.make = function(){
    this.x = random(-width/2,width/2);
    this.y = random(-height/2,height/2);
    this.z = width;
    this.pz = this.z;
    this.rcolor = random(255);
    this.gcolor = random(255);
    this.bcolor = random(255);
    this.rcolor2 = random(255);
    this.gcolor2 = random(255);
    this.bcolor2 = random(255);
  }
  this.make();
  this.z = random(width);
  
  this.update = function(){
    this.z=this.z-forwardSpeed;
    if(this.z<1){
      this.make();
    }
  }
  
  this.show = function(){
    
    var sx = map(this.x/this.z,0,1,0,width);
    var sy = map(this.y/this.z,0,1,0,height);
    
    var r = map(this.z, 0, width, 16, 0);
    
    
    var psx = map(this.x/this.pz,0,1,0,width);
    var psy = map(this.y/this.pz,0,1,0,height);
    
    stroke(this.rcolor2,this.gcolor2,this.bcolor2);
    fill(this.rcolor,this.gcolor,this.bcolor);
    
    line(sx,sy,psx,psy);
    ellipse(sx,sy,r,r);
    
    this.pz=this.z;
  }
  this.edge = function() {

  }
}