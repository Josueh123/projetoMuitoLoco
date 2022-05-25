const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var edges;
var bgImg;
var ground;
var groundImg;
var viking;
var mago;
var morsego;


function preload() {

    bgImg = loadImage("./cenario/ImagemDeFundo1.jpg");
    groundImg = loadImage("./cenario/ground.png");
    vikingImg = loadImage("./imagensDosPersonagens/vikinSkirym.png");
    magoImg = loadImage("./imagensDosPersonagens/magoMuitoDoMal.png");
    morCEGO = loadImage("./imagensDosPersonagens/morsego.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = createSprite(300,350,1200,400);
    ground.addImage(groundImg);

    viking = createSprite(201,300,50,60);
    viking.addImage(vikingImg);
    viking.scale = 0.4;
    edges = createEdgeSprites();

}

function draw(){
    background(bgImg);
    //imageMode(CENTER);
   // image(bgImg,600,200,1200,400);
    maguinho();
    morseguinho();
    drawSprites();
    
}

function maguinho(){

    if (frameCount % 60 == 0 ) {
     
        mago = createSprite(1000,300,80,60);
        mago.addImage(magoImg);
        mago.scale = 0.5;

        mago.velocityX = -7;

        mago.bounceOff(edges);

    }

}

function morseguinho(){

    if (frameCount % 60 == 0 ) {

    morsego = createSprite(201,300,03,04);  
    morsego.addImage(morCEGO);
    morsego.scale = 0.2;
    morsego.velocityX = 2;
    morsego.velocityY = -2;

    }
}
