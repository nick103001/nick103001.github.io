var myFont;
var img1;
var img2;
var standard_gym;
var gym_bro;
var gym_tapes;
var bathroom_burger;
var bathroom_eaten;
var textNum = 18;
var soundplayed = false;
var damndaniel;
var backgroundchoice = [img1,img2,standard_gym,gym_bro, gym_tapes];
var arrayIndex = 0;
var backgroundIndex = 0;
var clinteastwood;
var vaporwave;
var big_guap;
var race_alien_background;
var race_human_background;
var race_meme_background;
var portal;
var player;
var alien = new race("alien", 50, 100, 20);
var human = new race("human", 20, 50, 100);
var meme = new race("meme", 100, 20, 50);
var black;
var explosion;

function race(name, health, intelligence, strength) {
  this.name = name;
  this.health = health;
  this.intelligence = intelligence;
  this.strength = strength;
}

function preload() {
   img1 =  loadImage("assets/Spooky Woods.jpg");
   img2 = loadImage("assets/log-cabin-in-the-woods.jpg");
   standard_gym = loadImage("assets/Gym-Empty.jpg");
   gym_bro = loadImage("assets/Gym-Bro1.jpg");
   gym_tapes = loadImage("assets/Gym-Mixtapes.jpg");
   bathroom_burger = loadImage("assets/bathroom-burger.jpg");
   bathroom_eaten = loadImage("assets/Bathroom-Eaten.jpg");
   big_guap = loadImage("assets/Big Guap.jpg");
   race_alien_background = loadImage("assets/race-alien.jpg");
   race_human_background = loadImage("assets/race-human.jpg");
   race_meme_background = loadImage("assets/race-meme.jpg");
   black = loadImage("assets/Win3x_Black_Screen_of_Death.gif");
   portal = loadGif("assets/teleport.gif");
   explosion = loadGif("assets/EXPLOSION.gif-c200");

   myFont = loadFont("assets/vcr_osd_mono (1)/VCR_OSD_MONO_1.001.ttf");

   damndaniel = loadSound("assets/shout damndaniel.mp3");
   gameover1 = loadSound("assets/Sonic 1 Music Game Over.mp3");
   clinteastwood = loadSound("assets/Clint Eastwood - Gorillaz Lyrics.mp3");
   vaporwave = loadSound("assets/MACINTOSH PLUS - リサフランク420現代のコンピュー.mp3");
   allstar = loadSound("assets/Smash MouthAll Star with Lyrics.mp3");
}
function setup() {
  createCanvas(500,500);
}
function draw() {
  if (backgroundIndex == 0) {
    background(img1);
  }
  else if (backgroundIndex == 1) {
    background(img2);
  }
  else if (backgroundIndex == 2) {
    background(standard_gym);
  }
  else if (backgroundIndex == 3) {
    background(gym_bro);
  }
  else if (backgroundIndex == 4) {
    background(gym_tapes);
  }
  else if (backgroundIndex == 5){
    background(black);
  }
  else if (backgroundIndex == 6){
    background(race_human_background);
  }
  else if (backgroundIndex == 7){
    background(race_alien_background);
  }
  else if (backgroundIndex == 8){
    background(race_meme_background);
  }
  else if (backgroundIndex == 9){
    background(bathroom_burger);
  }
  else if (backgroundIndex == 10){
    background(bathroom_eaten);
  }
  else if (backgroundIndex == 11){
    background(portal);
  }
  else if(backgroundIndex == 12){
    background(big_guap);
  }
    textbox(          "You feel a bag over your head. But first of all who are you?                     HUMAN  ALIEN  MEME",
                      "Seriously, you chose the human? Kinda boring, but, whatever, your choice.    click here",
                      "The alien, nice choice. Aliens are pretty smart and stuff so that's cool. click here",
                      "The meme. Memes are eternal. I applaud your choice. click here",
                      "You find yourself in a spooky forest...like, woah this is actually kind of scary",
                      "DAMN DANIEL!",
                       "Do you wish to follow the meme?\n   YES                   NO",
                      "Are you serious? You just heard the shout of damn daniel and his white vans, and you're not following him?",
                      "I  can't believe you right now." ,
                      "Are you just gonna stay in these woods forever?\n   YES                   NO",
                      "Um...ok",
                      "You stay in the woods for the rest of your life and become one with nature GAME OVER great ending 10/10",
                      "That's it...that's the end. Refresh the page to make the right choice.",
                      "While following the living meme himself, you run into a mysterious cabin..",
                      "You should go investigate! Always works in horror movies..",
                      "Oh damn! This isn't a creepy cabin! It's actually just a frickin amazing gym!",
                      "A swole boy approaches!",
                      "Suh dude, you on that grind?",
                      "Uh, yeah....\nlol nah \nYeah fam, just tryna get my pump",
                      "Alright bro, I see you.",
                      "So uh bro, you seem like a pretty swag dude. Can you choose some music to play?",
                      "Here are the options. Just click on what seems fresh.",
                      "Nice pick bro, nice.",
                      "* You suddenly feel rather famished. You ask this fine gym bro if there is any nourishment near by.",
                      "Yeah, my bromigo. Pretty sure I saw something in the bathroom. lol idk fam",
                      "You set off to make your way to the bathroom.",
                      "In the bathroom, you see a burger. A rotten Big Mac.",
                      "It disgusts you, but also attracts you. You want to eat it.",
                      "You consume the burger.",
                      "SUDDENLY, A WARP IN SPACE TIME OPENS!",
                      "So, it was you who ate my big mac. I am Big Guap. Prepare to meet your end, traveler.",
                      " FIGHT               PLEAD FOR MERCY",
                      "Please, have mercy! We can make peace!",
                      "I will allow you to live, if you become my loyal slave FOR EVER!!!",
                      "Become his slave \n Fight for your life",
                      "You become Big Guap's slave and serve him big macs for the rest of your life. GAME OVER",
                      "You dare try and fight Big Guap! I am eternal. I will kill you. I will kill you until you are dead.",
                      " You lightly punch Big Guap.",
                      "I am defeated, traveler!!! You are now the new Big Guap, but at what cost? GAME OVER",
                    );
    if (mouseIsPressed) {
      console.log(mouseX,mouseY);
    }
// var x = [text2, text3];

//textbox(5, x[5]);
}


function textbox(text18,text19,text20,text21,text0, text1, text2, text3, text4, text5, text6, text7,text8,text9,text10,text11, text12,text13,text14,text15,text16,text17,text22,text23, text24,text25,text26,text27,text28,text29,text30,text31, text33, text34, text35,text36,text37, text38, text39) {
  fill(0);
  stroke(255);
  rect(50,400,400,75);
  fill(255);
  textFont(myFont);
  textSize(18);

if (textNum == 18){
  text(text18,52,400,400,75);
  backgroundIndex = 5;
}
else if (textNum == 19){
  text(text19,52,400,400,75);
  backgroundIndex = 6;
}
else if (textNum == 20){
  text(text20,52,400,400,75);
  backgroundIndex = 7;
}
else if (textNum == 21){
  text(text21,52,400,400,75);
  backgroundIndex = 8;
}
else if (textNum == 0){
  text(text0,52,400, 400, 75);
}
else if (textNum == 1) {
  text(text1,52,400, 400, 75);
  if (!soundplayed) {
    damndaniel.play();
    soundplayed = true;
  }
}
else if (textNum == 2) {
  text(text2,52,400, 400, 75);
}
  else if (textNum == 3) {
    text(text3,52,400, 400, 75);

  }
else if (textNum == 4){
      text(text4,52,400, 400, 75);
  }

else if (textNum == 5){
      text(text5,52,400, 400, 75);
}
else if (textNum == 6) {
      text(text6,52,400, 400, 75);
}
else if (textNum == 7) {
      text(text7,52,400, 400, 75);
      if (!soundplayed) {
        gameover1.play();
        soundplayed = true;
      }
}
else if (textNum == 8) {
      text(text8,52,400, 400, 75);
}
  else if (textNum == 9) {
    text(text9,52,400, 400, 75);
    backgroundIndex = 1;
  }
  else if (textNum == 10) {
    text(text10,52,400, 400, 75);
  }
  else if (textNum == 11) {
    text(text11,52,400, 400, 75);
    backgroundIndex = 2;
  }
  else if (textNum == 12) {
    text(text12,52,400, 400, 75);
    backgroundIndex = 2;
  }
  else if (textNum == 13) {
    text(text13,52,400, 400, 75);
    backgroundIndex = 3;
  }
  else if (textNum == 14) {
      text(text14,52,400, 400, 75);
      backgroundIndex = 3;
      }
  else if (textNum == 15) {
        text(text15,52,400, 400, 75);
        backgroundIndex = 3;
  }
  else if (textNum == 16) {
    text(text16,52,400, 400, 75);
      backgroundIndex = 3;
  }
  else if (textNum == 17) {
    text(text17,52,400, 400, 75);
      backgroundIndex = 4;
  }
  else if (textNum == 22) {
    text(text22,52,400, 400, 75);
      backgroundIndex = 3;
  }
  else if (textNum == 23) {
    text(text23,52,400,400, 75);
    backgroundIndex = 3;
  }
  else if (textNum == 24) {
    text(text24,52,400,400, 75);
    backgroundIndex = 3;
  }
  else if (textNum == 25) {
    text(text25,52,400,400, 75);
    backgroundIndex = 3;
  }
  else if (textNum == 26) {
    text(text26,52,400,400, 75);
    backgroundIndex = 9;
  }
  else if (textNum == 27) {
    text(text27,52,400,400, 75);
    backgroundIndex = 9;
  }
  else if (textNum == 28) {
    text(text28,52,400,400, 75);
    backgroundIndex = 10;
}
else if (textNum == 29) {
  text(text29,52,400,400, 75);
  backgroundIndex = 11;
}
else if(textNum == 30) {
  text(text30,52,400,400,75);
  backgroundIndex = 12;
}
else if(textNum == 31) {
  text(text31,52,400,400,75);
  backgroundIndex = 12;
}
else if(textNum == 33) {
  text(text33,52,400,400,75);
  backgroundIndex = 12;
}
else if(textNum == 34) {
  text(text34,52,400,400,75);
  backgroundIndex = 12;
}
else if(textNum == 35) {
  text(text35,52,400,400,75);
  backgroundIndex = 12;
}
else if(textNum == 36) {
  text(text36,52,400,400,75);
  backgroundIndex = 12;
}
else if(textNum == 37) {
  text(text37,52,400,400,75);
  backgroundIndex = 12;

}
else if(textNum == 38) {
  text(text38,52,400,400,75);
  backgroundIndex = 12;
}
else if(textNum == 39) {
  text(text39,52,400,400,75);
  backgroundIndex = 12;
  for(var i = 0; i < 3; i++) {
    if (i % 2) {
      image(explosion, 32 * i, 74 * i);
    }
    else {
      image(explosion, 92 * i, 10 * i);
    }
}}
else if(textNum == 32) {
  text(text32,52,400,400,75);
  backgroundIndex = 12;
  for(var i = 0; i < 3; i++) {
    if (i % 2) {
      image(explosion, 32 * i, 74 * i);
    }
    else {
      image(explosion, 92 * i, 10 * i);
    }
  }
}
}

function getGamePercentage() {
  return (textNum / 39);
}

function mousePressed() {
  if (textNum == 18) {
      if (140 < mouseX && mouseX < 200 && 440 < mouseY && mouseY < 460){
          textNum = 19;
          player = human;
      }
      else if (215 < mouseX && mouseX < 275 && 440 < mouseY && mouseY < 460){
            textNum = 20;
            player = alien;
      }
      else if (290 < mouseX && mouseX < 340 && 440 < mouseY && mouseY < 460){
            textNum = 21;
            player = meme;
      }
      console.log(textNum);
  }
  if (textNum == 19) {
    if (163 < mouseX && mouseX < 276 && 440 < mouseY && mouseY < 460){
      textNum = 0;
    }
  }
  if (textNum == 20) {
    if (110 < mouseX && mouseX < 223 && 440 < mouseY && mouseY < 460){
      textNum = 0;
    }
  }
  if (textNum == 21) {
    if (270 < mouseX && mouseX < 381 && 420 < mouseY && mouseY < 440){
      textNum = 0;
    }
  }

  if (textNum == 2) {
      if (80 < mouseX && mouseX < 116 && 419 < mouseY && mouseY < 437){
          textNum = 9;
      }
      else if (312 < mouseX && mouseX < 336 && 419 < mouseY && mouseY < 437){
        textNum =  3;
      }
  }
  else if (textNum == 5) {
      if (81 < mouseX && mouseX < 116 && 439 < mouseY && mouseY < 459){
      textNum = 6;
    }
    if (312 < mouseX && mouseX < 336 && 439 < mouseY && mouseY < 459){
      textNum =  2;
    }
  }
  else if (textNum == 14){
    if (52 < mouseX && mouseX < 446 && 400 < mouseY && mouseY < 470){
      textNum = 15;
    }
  }
if (textNum == 17) {
  if (9 < mouseX && mouseX < 180 && 213 < mouseY && mouseY < 374){
    textNum = 22;
    if (!soundplayed) {
      vaporwave.play();
      soundplayed = true;
    }
  }
  else if (315 < mouseX && mouseX < 484 && 195 < mouseY && mouseY < 360){
    textNum = 22;
    if (!soundplayed) {
      allstar.play();
      soundplayed = true;
    }
  }
  else if (172 < mouseX && mouseX < 323 && 21 < mouseY && mouseY < 170){
    textNum = 22;
    if (!soundplayed) {
      clinteastwood.play();
      soundplayed = true;
    }
  }
}
  else if (textNum == 31){
    if (290 < mouseX && mouseX < 401 && 394 < mouseY && mouseY < 415){
      textNum = 34;
    }
    if (0 < mouseX && mouseX < 250 && 394 < mouseY && mouseY < 415){
      textNum = 37;
    }
}
else if (textNum == 35){
  if (46 < mouseX && mouseX < 224 && 393 < mouseY && mouseY < 417){
    textNum = 36;
  }
  else if (textNum == 35){
    if (59 < mouseX && mouseX < 226 && 417 < mouseY && mouseY < 436){
      textNum = 37;
    }
else if (textNum == 37){
  if (51 < mouseX && mouseX < 190 && 392 < mouseY && mouseY < 432){
    textNum = 32;
    }
}
}
}
}

function keyPressed() {
  soundplayed = false;
  if (keyCode == UP_ARROW)  {
    textNum++;
    console.log("1 pressed");
  }
  else if (keyCode == LEFT_ARROW) {
    textNum += 2;
    console.log("2 pressed");
  }
  else if (keyCode == RIGHT_ARROW) {
    textNum++;
    console.log("3 pressed");
  }
}
