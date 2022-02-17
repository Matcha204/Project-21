var lion, lionImg, cloud, cloudImg, grass, grassImg, invisibleGround

function preload(){
    lionImg = loadImage("lion.jpg");
    cloudImg = loadImage("cloud.png");
    grassImg = loadImage("grass.png");

    cloudsGroup = new Group();

}

function setup() {
    createCanvas(600, 300);
    lion.addImage("lion", lionImg);
    cloud.addImage("cloud", cloudImg);

    grass = createSprite (300, 200)
    grass.addImage("grass", grassImg);
    grass.velocityX = -3

    invisibleGround = createSprite(300, 200, 600, 10);
    invisibleGround.visible = false
}

function draw() {
 background("#c7fcef")

 if (grass.x > 400) {
     grass.x = 300
 } 

 if (keyDown("space")){
     lion.velocityY = -4
 }

 lion.velocityY = lion.velocityY + 0.8

 if (cloudsGroup.isTouching(lion)){
     lion.velocityY = 0;
 }

 lion.collide(invisibleGround);

 spawnClouds();
 drawSprites();
}

function spawnClouds() {
    if (frameCount % 240 === 0){
        var cloud = createSprite(200, -50)
        cloud.addImage(cloudImg);
        cloud.velocityX=-3

        lion.depth = cloud.depth;
        lion.depth +=1;

        cloud.lifetime = 200

        cloud.y = Math.round(random(200,300))
    }

}