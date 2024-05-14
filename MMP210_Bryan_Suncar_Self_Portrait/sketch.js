/*This is my Javascript code for my Self Portrait Project Version 3. This version I add interaction to my Self Portrait*/


function setup() {
    createCanvas(940, 560);
}

function draw() {
    background(220);
    
    var colorBack = 250;
    var colorWhite = 0;
    var earsX = 370;
    var earsX2 = 570;
    var earsY = 120;
    var earsSize = 150;
    var earsSize2 = 240;
    
    
    //EARS
    stroke(colorBack);
    fill(colorWhite);
    ellipse(earsX, earsY, earsSize, earsSize2);
    ellipse(earsX2, earsY, earsSize, earsSize2);
    
    var strokeR = 159;
    var strokeG = 26;
    var strokeB = 31;
    var fillR = 159;
    var fillG = 26;
    var fillB = 31;
    var headX = 470;
    var headY = 280;
    var headSize = 330;
    
    //HEAD
    stroke(strokeR, strokeG, strokeB);
    fill(fillR, fillG, fillB);
    ellipse(headX, headY, headSize);
    
    //TEARS
   
    
    var eyeXright = 588;
    var eyeYright = 240;
    var eyeSize = 80;
    var eyeXleft = 352;
    var eyeYleft = 240;
    
    //EYE
    fill(colorBack);
    ellipse(eyeXright, eyeYright, eyeSize);
    ellipse(eyeXleft, eyeYleft, eyeSize);
    
    var mouthX = 470;
    var mouthY = 310;
    var mouthSize = 300;
    var mouthSize2 = 260;
    var mouthSize3 = 0;
    var teethX = 355;
    var teethY = 310;
    var teethS1 = 230;
    var teethS2 = 50;
    var teethS3n4 = 0;
    var teethS5n6 = 90;
    
    var  mouthS = map(mouseY,0, width, mouthSize, 100);
    
    //MOUTH
    fill(colorWhite);
    arc(mouthX, mouthY, mouthSize, mouthS, mouthSize3, PI);
    fill(colorBack, colorBack, colorBack);
    stroke(colorWhite, colorWhite, colorWhite);
    rect(teethX, teethY, teethS1, teethS2, teethS3n4, teethS3n4, teethS5n6,teethS5n6);
    
    var cloudS = 200;
    var cloudX1 = 10;
    var cloudX2 = 100;
    var cloudX3 = 200;
    var cloudX4 = 250;
    var cloudX5 = 550;
    var cloudX6 = 530;
    var cloudX7 = 450;
    var cloudX8 = 400;
    var cloudX9 = 880;
    var cloudX10 = 770;
    var cloudX11 = 670;
    var cloudX12 = 610;
    var cloudY1 = 500;
    var cloudY2 = 530;
    var cloudY3 = 560;
    var cloudY4 = 590;
    var cloudY5 = 620;
    var cloudY6 = 625;
    var cloudY7 = 630;
    var cloudY8 = 610;
    var cloudY9 = 500;
    var cloudY10 = 530;
    var cloudY11 = 560;
    var cloudY12 = 590;
    
    a = map(mouseX, 0, height, 20, 400);
    b = map(mouseX, 0, height, 10, 140);
    c = map(mouseX, 0, height, 30, 60);
    d = map(mouseX, 0, height, 20, 200);
    e = map(mouseX, 12, height, 20, 250);
    f = map(mouseX, 0, height, 0, 100);
    
    //CLOUDS
    //LEFT SIDE
    fill(250, 50, 50, a); //MAP OPACITY FOR a
    noStroke();
    ellipse(cloudX1, cloudY1, cloudS);
    ellipse(cloudX2, cloudY2, cloudS);
    fill(250, 50, 30, b); //MAP OPACITY FOR b
    ellipse(cloudX3, cloudY3, cloudS);
    ellipse(cloudX4, cloudY4, cloudS);
    //CENTER SIDE
    fill(250, 30, 50, c); //MAP OPACITY FOR c
    ellipse(cloudX5, cloudY5, cloudS);
    ellipse(cloudX6, cloudY6, cloudS);
    fill(250, 50, 10, d); //MAP OPACITY FOR d
    ellipse(cloudX7, cloudY7, cloudS);
    ellipse(cloudX8, cloudY8, cloudS);
    //RIGHT SIDE
    fill(250, 40, 40, e); //MAP OPACITY FOR e
    ellipse(cloudX9, cloudY9, cloudS);
    ellipse(cloudX10, cloudY10, cloudS);
    fill(250, 30, 20, f); //MAP OPACITY FOR f
    ellipse(cloudX11, cloudY11, cloudS);
    ellipse(cloudX12, cloudY12, cloudS);
}