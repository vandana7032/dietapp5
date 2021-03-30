var women,men,back;
var SERVE=0;
var gameState = SERVE;
var END=2;
var PLAY=1;
var INSTRUCTION=3;
var INSTRUCTIONS=4;
var balancedDietImg;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22;

function preload(){
  balancedDietImg=loadImage("balanced diet.jpg");
}

function setup() {
  createCanvas(1400,1000);

  women=createSprite(700, 400, 300, 50);
  women.shapeColor="pink";

  men=createSprite(700,550,300,50);
  men.shapeColor="pink";

  back=createSprite(1000,850,100,43);
  back.shapeColor="blue";
  back.visible=false;

  
  //column1
  block1=createSprite(110,100,200,50);
  block1.shapeColor="pink";
  block1.visible=false;

  block2=createSprite(400,100,200,50);
  block2.shapeColor="pink";
  block2.visible=false;

  block3=createSprite(700,100,200,50);
  block3.shapeColor="pink";
  block3.visible=false;

  block4=createSprite(1000,100,200,50);
  block4.shapeColor="pink";
  block4.visible=false;

  block5=createSprite(1290,100,200,50);
  block5.shapeColor="pink";
  block5.visible=false;

  //column2
  block6=createSprite(110,300,200,50);
  block6.shapeColor="pink";
  block6.visible=false;

  block7=createSprite(400,300,200,50);
  block7.shapeColor="pink";
  block7.visible=false;

  block8=createSprite(700,300,200,50);
  block8.shapeColor="pink";
  block8.visible=false;

  block9=createSprite(1000,300,200,50);
  block9.shapeColor="pink";
  block9.visible=false;

  block10=createSprite(1290,300,200,50);
  block10.shapeColor="pink";
  block10.visible=false;

  //column3
  block11=createSprite(110,500,200,50);
  block11.shapeColor="pink";
  block11.visible=false;

  block12=createSprite(400,500,200,50);
  block12.shapeColor="pink";
  block12.visible=false;

  block13=createSprite(700,500,200,50);
  block13.shapeColor="pink";
  block13.visible=false;

  block14=createSprite(1000,500,200,50);
  block14.shapeColor="pink";
  block14.visible=false;

  block15=createSprite(1290,500,200,50);
  block15.shapeColor="pink";
  block15.visible=false;

  //column4
  block16=createSprite(110,700,200,50);
  block16.shapeColor="pink";
  block16.visible=false;

  block17=createSprite(400,700,200,50);
  block17.shapeColor="pink";
  block17.visible=false;

  block18=createSprite(700,700,200,50);
  block18.shapeColor="pink";
  block18.visible=false;

  block19=createSprite(1000,700,200,50);
  block19.shapeColor="pink";
  block19.visible=false;

  block20=createSprite(1290,700,200,50);
  block20.shapeColor="pink";
  block20.visible=false;

  //column2
  block21=createSprite(110,900,200,50);
  block21.shapeColor="pink";
  block21.visible =false;

  block22=createSprite(400,900,200,50);
  block22.shapeColor="pink";
  block22.visible =false;

}

 function draw() {
   background("purple")
  
   drawSprites();
  
  
   //men
   if(gameState === PLAY){ 

   textSize(20);
   fill("blue");
   stroke("blue");
   text("5 '2'61-63",55,105);
   text("5 '2'64-68",345,105);
   text("5 '3'62-65",645,105);
   text("5 '3'66-69",945,105);
   text("5 '4'63-67",1240,105);
   text("5 '4'68-70",55,305);
   text("5 '5'65-68",345,305);
   text("5 '5'68-71",645,305);
   text("5 '6'65-69",945,305);
   text("5 '6'70-74",1237,305);
   text("5 '7'66-71",55,505);
   text("5 '7'72-76",345,505);
   text("5 '8'67-72",645,505);
   text("5 '8'73-78",945,505);
   text("5 '9'67-70",1240,505);
   text("5 '9'71-78",55,705);
   text("5 '10'70-75",345,705);
   text("5 '10'76-81",645,705);
   text("5 '11'72-76",945,705);
   text("5 '11'77-82",1240,705);
  
      block1.visible = true;
      block2.visible = true;
      block3.visible = true;
      block4.visible = true;
      block5.visible = true;
      block6.visible = true;
      block7.visible = true;
      block8.visible = true;
      block9.visible = true;
      block10.visible = true;
      block11.visible = true;
      block12.visible = true;
      block13.visible = true;
      block14.visible = true;
      block15.visible = true;
      block16.visible = true;
      block17.visible = true;
      block18.visible = true;
      block19.visible = true;
      block20.visible = true;
      
      women.visible=false;
      men.visible=false;   
      back.visible=true;

      textSize(16);
      fill("black");
      stroke("white");
      text("You should know your and height and weight",1050,800);
      text("and if you are less than this that",1050,850);
      text("u are healthy and no need any diet",1050 ,900);
     
       textSize(25);
       fill("white");
       stroke("black")
       text("Back",975,860);
    
       if(mousePressedOver(back)){
         gameState=SERVE;
       }

       if(mousePressedOver(block1)|| mousePressedOver(block3)|| mousePressedOver(block5)|| mousePressedOver(block7)|| mousePressedOver(block9)|| mousePressedOver(block11)|| mousePressedOver(block13)|| mousePressedOver(block15)|| mousePressedOver(block17)|| mousePressedOver(block19)|| mousePressedOver(block21)){
        gameState=INSTRUCTION;
      }
      if(mousePressedOver(block2)|| mousePressedOver(block4)|| mousePressedOver(block6)|| mousePressedOver(block8)|| mousePressedOver(block10)|| mousePressedOver(block12)|| mousePressedOver(block14)|| mousePressedOver(block16)|| mousePressedOver(block18)|| mousePressedOver(block20)|| mousePressedOver(block22)){
         gameState=INSTRUCTIONS;
      }
   }
    
   
   if(gameState === SERVE){
    
    textSize(25);
    fill("red");
    stroke("red");
    text("Women",650,410);
    text("Men",670,560);

    fill("blue");
    stroke("white")
    textSize(43);
    text("Hi!",670,220);
    text("select your gender",550,280);
   
    block1.visible = false;
    block2.visible = false;
    block3.visible = false;
    block4.visible = false;
    block5.visible = false;
    block6.visible = false;
    block7.visible = false;
    block8.visible = false;
    block9.visible = false;
    block10.visible = false;
    block11.visible = false;
    block12.visible = false;
    block13.visible = false;
    block14.visible = false;
    block15.visible = false;
    block16.visible = false;
    block17.visible = false;
    block18.visible = false;
    block19.visible = false;
    block20.visible = false;
    block21.visible = false;
    block22.visible = false;

    men.visible = true;
    women.visible = true;
    back.visible = false;

     if(mousePressedOver(men)){
     gameState=PLAY; 
     }
      
     if(mousePressedOver(women))
     gameState=END;

    
   }
   if(gameState===INSTRUCTION){
                
      textSize(25);
      fill("white");
      stroke("pink");
      text("You can lose 3kgs in a week with this plan",400,230);
      text("BreakFast : Begin your day with one cup of low fat milk with a tablespoon oats or cornflakes.",200,360);
      text("Lunch : You can prepare dalia khichidi loaded with vegatables.apart from that you can",200,450);
      text("eat which is less in calories.",290,490)
      text("Tea time : Replace regular and milk based tea with green tea.",200,540);
      text("Dinner : Any gluten free porridge or dalia cooked with low-fat milk.",200,620);
      text("Midmeal snack : Melon seeds,walnuts or almonds.",200,690);


 
    back.visible=false;
    block1.visible = false;
    block2.visible = false;
    block3.visible = false;
    block4.visible = false;
    block5.visible = false;
    block6.visible = false;
    block7.visible = false;
    block8.visible = false;
    block9.visible = false;
    block10.visible = false;
    block11.visible = false;
    block12.visible = false;
    block13.visible = false;
    block14.visible = false;
    block15.visible = false;
    block16.visible = false;
    block17.visible = false;
    block18.visible = false;
    block19.visible = false;
    block20.visible = false;
    block21.visible = false;
    block22.visible = false;

    }

    if(gameState===INSTRUCTIONS){
                
      fill("white");
      stroke("green")
      textSize(30);
      text("You can lose 5kgs in a week with this plan",400,150);
      fill("green");
      stroke("white");
      text("1.Reduce your snacking.",150,250);
      text("2.Eat foods that help control your weight-gaining hormones.",150,300);
      text("3.Limit your treat meals.",150,350);
      text("4.keep yourself hydrated through out the day.",150,400);
      text("5.Improve your gut health.",150,450);
      text("6.Workout at least an hour.",150,500);
      text("7.Reduce tea/coffee intake.",150,550);
      text("8.Avoid sugary drinks.",150,600);
      text("9.Eat more proteins and fewer carbs.",150,650);
      text("10.Avoid junkfood.",150,700);

      back.visible=false;
      block1.visible = false;
      block2.visible = false;
      block3.visible = false;
      block4.visible = false;
      block5.visible = false;
      block6.visible = false;
      block7.visible = false;
      block8.visible = false;
      block9.visible = false;
      block10.visible = false;
      block11.visible = false;
      block12.visible = false;
      block13.visible = false;
      block14.visible = false;
      block15.visible = false;
      block16.visible = false;
      block17.visible = false;
      block18.visible = false;
      block19.visible = false;
      block20.visible = false;
      block21.visible = false;
      block22.visible = false;
  
      }
      //women
   if(gameState === END){ 

        block1.visible = true;
        block2.visible = true;
        block3.visible = true;
        block4.visible = true;
        block5.visible = true;
        block6.visible = true;
        block7.visible = true;
        block8.visible = true;
        block9.visible = true;
        block10.visible = true;
        block11.visible = true;
        block12.visible = true;
        block13.visible = true;
        block14.visible = true;
        block15.visible = true;
        block16.visible = true;
        block17.visible = true;
        block18.visible = true;
        block19.visible = true;
        block20.visible = true;
        block21.visible = true;
        block22.visible = true;
        
        textSize(20);
        fill("red");
        stroke("red");
         text("5 '1'55-57",55,105);
         text("5 '1'59-63",345,105);
         text("5 '2'57-61",645,105);
         text("5 '2'61-64",945,105);
         text("5 '3'58-62",1240,105);
         text("5 '3'63-66",55,305);
         text("5 '4'59-64",345,305);
         text("5 '4'64-68",645,305);
         text("5 '5'62-66",945,305);
         text("5 '5'66-70",1237,305);
         text("5 '6'62-65",55,505);
         text("5 '6'65-67",345,505);
         text("5 '7'63-68",645,505);
         text("5 '7'69-73",945,505);
         text("5 '8'66-70",1240,505);
         text("5 '8'71-75",55,705);
         text("5 '9'67-72",345,705);
         text("5 '9'72-76",645,705);
         text("5 '10'67-72",945,705);
         text("5 '10'73-77",1240,705);
         text("5 '11'69-73",55,905);
         text("5 '11'74-79",345,905);
    
        women.visible=false;
        men.visible=false;  
        back.visible=true;

        textSize(16);
        fill("black");
        stroke("white");
        text("You should know your and height and weight",1050,800);
        text("and if you are less than this that",1050,850);
        text("u are healthy and no need any diet",1050 ,900);

        textSize(25);
        fill("white");
        stroke("black")
        text("Back",975,860);

        
        if(mousePressedOver(back)){
          gameState=SERVE;
          }

       if(mousePressedOver(block1)|| mousePressedOver(block3)|| mousePressedOver(block5)|| mousePressedOver(block7)|| mousePressedOver(block9)|| mousePressedOver(block11)|| mousePressedOver(block13)|| mousePressedOver(block15)|| mousePressedOver(block17)|| mousePressedOver(block19)|| mousePressedOver(block21)){
            gameState=INSTRUCTION;
          }
       if(mousePressedOver(block2)|| mousePressedOver(block4)|| mousePressedOver(block6)|| mousePressedOver(block8)|| mousePressedOver(block10)|| mousePressedOver(block12)|| mousePressedOver(block14)|| mousePressedOver(block16)|| mousePressedOver(block18)|| mousePressedOver(block20)|| mousePressedOver(block22)){
            gameState=INSTRUCTIONS;
         }
    }
   

}
