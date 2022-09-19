var Play=1;
var End=0;

var estadoJogo=Play;

var trex ,trex_running,trex_collided;
var soloImage,solo,solo_invisivel;
var pontos;

var Nuvem,GrupoNuvens,NuvemImage;
var obstaculos,GrupoObstaculos,obstaculo1,obstaculo2,obstaculo3,obstaculo4,obstaculo5,obstaculo6
var fimImg, reinicio;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided=loadImage("trex_collided");
soloImage=loadImage("ground2.png");
NuvemImage=loadImage("nuvem.png");

obstaculo1=loadImage("obstacle1.png");
obstaculo2=loadImage("obstacle2.png");
obstaculo3=loadImage("obstacle3.png");
obstaculo4=loadImage("obstacle4.png");
obstaculo5=loadImage("obstacle5.png");
obstaculo6=loadImage("obstacle6.png");
}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
 trex=createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running);
 trex.addAnimation("collided",trex_collided);
 trex.scale=0.5;
trex.x=50;
solo=createSprite(200,180,400,20);
solo.addImage("solo",soloImage);
solo.x=solo.width/2;
solo_invisivel=createSprite(200,190,400,10);
solo_invisivel.visible=false;

GrupoObstaculos= new Group();
GrupoNuvens= new Group();
pontos=o;
trex.setCollider("circle",0,0,40);
trex.debug=true;

}

function draw(){
  background("white")
  trex.collide(solo_invisivel);
  drawSprites();
    if(estadoJogo==Play){
      gerarNuvens()
      gerarObstaculos()
     
      
  solo.velocityX=-2
  if(solo.x<0){
    solo.x=solo.width/2;
  }
if(keyDown("space")&& trex.y>160){
  trex.velocityY=-10;
}
trex.velocityY=trex.velocityY+0.5
if(GrupoObstaculos.isTouching(trex)){
  estadoJogo=End;
}
    }
    if(estadoJogo==End){
solo.velocityX=0;
GrupoNuvens.setVelocityXEach(0);
GrupoObstaculos.setVelocityXEach(0)
trex.changeAnimation("collided",trex_collided);
GrupoNuvens.setlifetimeeach(-1);
GrupoObstaculos.setlifetimeeach(-1);
trex.velocityY=0;
    }
}
function gerarNuvens(){
  if(frameCount % 60 ==0){
  Nuvem=createSprite(600,100,40,10);
  Nuvem.velocityX=-3;
  Nuvem.addImage(NuvemImage);
  Nuvem.y=Math.round(random(10,60));
  Nuvem.scale=0.1;

  Nuvem.depht=trex.depht;
  trex.depht=trex.depht+1;

  Nuvem.lifetime=250;
  GrupoNuvens.add(Nuvem);
  }
}
function gerarObstaculos(){
  if (frameCount % 60 ==0){
    var obstaculos=createSprite(600,165,10,40)
    obstaculos.velocityX=-6;
var rand=Math.round(random(1,6));
switch(rand){
case 1: obstaculos.addImage(obstaculo1);
break;
case 2: obstaculos.addImage(obstaculo2);
break;
case 3:obstaculos.addImage(obstaculo3);
break;
case 4: obstaculos.addImage(obstaculo4);
break;
case 5: obstaculos.addImage(obstaculo5);
break;
case 6: obstaculos.addImage(obstaculo6);
break;
}
obstaculos.scale=0.5;
obstaculos.lifetime=300;
GrupoObstaculos.add(obstaculos);






}
}