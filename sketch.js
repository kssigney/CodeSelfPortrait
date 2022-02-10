function setup() {
  createCanvas(520, 520);
}

function draw() {
  background(255);
//Hair
noStroke()
fill(0,0,0);
arc(225, 250, 300, 380, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);

//Face
noStroke()
fill(162, 126, 103);
ellipse(225, 175, 200, 225);

//Eyebrow
stroke(0);
strokeWeight(3);
fill(162, 126, 103); 
arc(200, 125, 40, 20, PI,0); //lefteyebrow
arc(250, 125, 40, 20, PI,0); //righteyebrow

//Hairline
noStroke()
fill(0, 0, 0);
arc(225, 100, 150, 75, PI, 0);
triangle(150,100, 100, 150, 300, 100);
arc(300, 100, 80, 80, QUARTER_PI, PI+QUARTER_PI);

//Eyeball
fill(255); 
ellipse(200, 160, 60, 60); //lefteyeball
ellipse(250, 160, 60, 60); //righteyeball

//Pupil
fill(0, 0, 0); 
ellipse(200, 170, 40, 40); //leftpupil
ellipse(250, 170, 40, 40); //rightpupil 

//ShinyPart
fill(255); 
ellipse(200, 160, 15, 15); //leftshiny
ellipse(250, 160, 15, 15); //rightshiny

//Nose
stroke(0);
strokeWeight(2);
fill(162, 126, 103);
arc(225, 200, 15, 15, HALF_PI, PI + HALF_PI);

//BottomLip
noStroke();
fill(243,143,155);
arc(225,235,40,30, 0, PI);

//TopLip
noStroke();
fill(246,166,175);
arc(220,235,30, 25,PI,0); //left
arc(230,235,30, 25,PI,0); //right

//Neck
fill(162, 126, 103);
rect(200, 265, 50, 55, 20);

//Shirt
fill(243,143,155);
rect(120, 305, 205, 100, 20);
}