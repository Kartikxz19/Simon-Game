var index=-1;
var gamePattern=[];
var buttonColor=["red","green","blue","yellow"];
var userArray=[];
var levelCount=1;
var firstTime=1;
function playSound(name)
{
  var audio=new Audio("sounds/"+name+".mp3");
  audio.play();
}
function nextsequence()
{
  $("#level-title").text("Level "+levelCount);
  levelCount++;
  var randomnumber=Math.floor(Math.random()*4);
var randomChosenColor=buttonColor[randomnumber];
gamePattern.push(randomChosenColor);
$("#"+randomChosenColor).fadeOut(100);
$("#"+randomChosenColor).fadeIn(100);
playSound(randomChosenColor);
}
$(document).keydown(function(event){
  if(event.key==="a"||event.key==="A")
  {
    if(firstTime===1)
    {
      firstTime=0;
      nextsequence();
    }
  }

})
$(document).click(function(event){
  var userChosenColor;
  $("#"+event.target.id).toggleClass("pressed");
  setTimeout(function(){
      $("#"+event.target.id).toggleClass("pressed");
  },130);
  switch(event.target.id)
  {
    case "green":
      userChosenColor="green";
      playSound("green");
      break;
    case "red":
      userChosenColor="red";
      playSound("red");
      break;
    case "blue":
    userChosenColor="blue";
    playSound("blue");
      break;
    case "yellow":
    userChosenColor="yellow";
    playSound("yellow");
      break;
    default:
  }

  userArray.push(userChosenColor);
  index++;
  checker();

})
function checker()
{
  if(userArray[index]===gamePattern[index])
  {
      if(index==gamePattern.length-1)
      {
        setTimeout(function(){
          userArray=[];
          index=-1;
          nextsequence();
        },250);
      }
  }
  else
  {
    wrongchoice();
  }
}
function wrongchoice()
{
  $("body").toggleClass("game-over");
  $("#level-title").text("GAME OVER !");
  playSound("wrong");
  gamePattern=[];
  userArray=[];
  levelCount=1;
  firstTime=1;
  index=-1;
  setTimeout(function(){
    $("body").toggleClass("game-over");
    $("#level-title").text("Press A Key to Start");
  },500);
}
