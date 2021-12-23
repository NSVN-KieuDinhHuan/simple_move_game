/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size,speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed=speed

  this.setimage=function (image){
    this.image=image
  }
  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }
  this.setSpeed= function(speed){
    return this.speed=speed
  }

  this.moveRight = function(){
    this.left += this.speed;
    console.log('ok: ' + this.left);
  }
  this.moveleft = function(){
    this.left -= this.speed;
    console.log('ok: ' + this.left);
  }

  this.movebottom = function(){
    this.top+= this.speed;
    console.log('ok: ' + this.left);
  }
  this.moveTop = function(){
    this.top-= this.speed;
    console.log('ok: ' + this.left);
  }

}

var hero = new Hero('cat1.png', 20, 30, 200,20);
hero.setSpeed(50)
function start(){
  let a=window.innerWidth - hero.size
  let b=window.innerHeight-hero.size
  if(hero.left < a && hero.top <= 20 ){
    hero.moveRight();
    hero.setimage("cat1.png")
  }else  if(hero.top <= b && hero.left >= a) {
    hero.movebottom();
  }else if(hero.top >= b &&hero.left>20){
    hero.moveleft()
    hero.setimage("cat2.png")
  }else if(hero.left<=30 && hero.top >= 20){
    hero.moveTop()
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
   setTimeout(start, 500)
}

start();