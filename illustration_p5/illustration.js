// illustration.js
//text: He was an old man who fished alone in a skiff in the Gulf Stream
//name of the book: the old man and the sea


// list the illustration that i am going to use
var backgroundImg;
var boatImg;
var cloud1Img;
var cloud2Img;
var cloud3Img;
var cloud4Img;
var fishImg;
var handImg;
var oldmanImg;
var skyblockImg;
var waterImg;
var waveImg;
var wheeImg;
var oldmanLeanImg;
var oldmanStandImg;
var fish2Img;
var fish3Img;

//give a starting position for the cloud 1,2,3,4
var cloud1X = -100;
var cloud2X = 100;
var cloud3X = 300;
var cloud4X = 500;
//give a starting position for the wave
var waveX = 300;
//give a attribute to the water
var waterY = 190;
var waterSpeedY = 0.5;
//give a attribute to the ship
var boatY = 235;
var boatSpeedY = 0.2;
//giave a starting position for the fish 2,3
var fish2X = 800;
var fish2Xspeed = -0.5;
var fish3X = 0;
var fish3Xspeed = 0.5;



function preload() {
	backgroundImg = loadImage("images/background.png");
	boatImg = loadImage("images/boat.png");
	cloud1Img = loadImage("images/cloud1.png");
	cloud2Img = loadImage("images/cloud2.png");
	cloud3Img = loadImage("images/cloud3.png");
	cloud4Img = loadImage("images/cloud4.png");
	fishImg = loadImage("images/fish.png");
	handImg = loadImage("images/hand.png");
	oldmanImg = loadImage("images/oldman.png");
	skyblockImg = loadImage("images/skyblock.png");
	waterImg = loadImage("images/water.png");
	waveImg = loadImage("images/wave.png");
	wheelImg = loadImage("images/wheel.png");
	oldmanLeanImg = loadImage("images/oldmanLean.png");
	oldmanStandImg = loadImage("images/oldmanStand.png");
	fish2Img = loadImage("images/fish2.png");
	fish3Img = loadImage("images/fish3.png");
}

function setup() {
	createCanvas(800, 590);
}

function draw() {
	image(backgroundImg, 0, 0);


	//animate the water
	waterY = waterY + waterSpeedY;
	if (waterY > 240) {
		waterSpeedY = -waterSpeedY;
	}
	if (waterY < 190) {
		waterSpeedY = -waterSpeedY;
	}

	//place the water
	image(waterImg, 0, waterY - 45);
	image(waterImg, -100, waterY - 60);

	//animte the oldman
	image(oldmanImg, 300, 209);

	if (mouseIsPressed) {
		image(oldmanLeanImg, 280, 225);
	} else {
		image(oldmanStandImg, 300, 220);
	}
	//place the hand of old man
	// wind the fishing rod when clicked
	if (mouseIsPressed) {
		image(handImg, random(320, 340), 279);
	} else {
		image(handImg, 340, 279);
	}

	//animate the fishing rod
	if (mouseY > 235) {
		mouseY = 235;
	}
	if (mouseY < 80) {
		mouseY = 80;
	}

	if (mouseIsPressed) {
		image(fishImg, random(401, 404), mouseY);
	} else {
		image(fishImg, 400, 235);
	}

	//hide the rope
	image(skyblockImg, 350, 74);

	//animate the boat
	boatY = boatY + boatSpeedY;
	if (boatY > 255) {
		boatSpeedY = -boatSpeedY;
	}
	if (boatY < 235) {
		boatSpeedY = -boatSpeedY;
	}
	image(boatImg, 50, boatY);

	waterY = waterY + waterSpeedY;
	if (waterY > 240) {
		waterSpeedY = -waterSpeedY;
	}
	if (waterY < 190) {
		waterSpeedY = -waterSpeedY;
	}


	// animate the wave
	waveX += 0.8;
	if (waveX > 800) {
		waveX = -200;
	}
	image(waveImg, waveX, 365);
	image(waveImg, waveX - 200, waterY + 130);
	image(waveImg, waveX - 500, waterY + 110);
	image(waveImg, waveX - 800, waterY + 120);
	image(waveImg, waveX + 200, waterY + 100);
	image(waveImg, waveX + 500, waterY + 120);
	image(waveImg, waveX + 800, waterY + 130);

	// animate the water
	image(waterImg, 0, waterY + 30);


	//draw fish
	fish3X = fish3X + fish3Xspeed;
	if (fish3X > 800) {
		fish3X = 0;
	}
	image(fish3Img, fish3X, waterY + 200);
	image(fish3Img, fish3X + 150, waterY + 230);
	// animate the wave

	image(waveImg, waveX, 365);
	image(waveImg, waveX - 300, 365);
	image(waveImg, waveX - 600, 365);
	image(waveImg, waveX - 900, 365);
	image(waveImg, waveX + 300, 365);
	image(waveImg, waveX + 600, 365);
	image(waveImg, waveX + 900, 365);

	// animate the clouds
	cloud1X += 0.8;
	if (cloud1X > 800) {
		cloud1X = -200;
	}
	image(cloud1Img, cloud1X, 100);

	cloud2X += 0.5;
	if (cloud2X > 800) {
		cloud2X = -200;
	}
	image(cloud2Img, cloud2X, 50);

	cloud3X += 0.8;
	if (cloud3X > 800) {
		cloud3X = -200;
	}
	image(cloud3Img, cloud3X, 5);

	cloud4X += 0.6;
	if (cloud4X > 800) {
		cloud4X = -200;
	}
	image(cloud4Img, cloud4X, 80);

	//draw wheel that tell that the fish bited the rod
	image(wheelImg, 450, random(225, 227));

	//draw fish
	fish2X = fish2X + fish2Xspeed;
	if (fish2X < 0) {
		fish2X = 800;
	}
	image(fish2Img, fish2X, waterY + 300);

}
