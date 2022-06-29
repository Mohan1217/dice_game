var name1=prompt("enter player1 name");
var name2=prompt("enter player2 name");

var player1=document.querySelectorAll("p")[0].innerHTML=name1;
var player2=document.querySelectorAll("p")[1].innerHTML=name2;

var randomNumber1=Math.floor(Math.random()*6)+1;
var imageName="dice"+randomNumber1+".png";
var imageSource="images/"+imageName;
var image1=document.querySelectorAll("img")[0].setAttribute("src",imageSource);


var randomNumber2=Math.floor(Math.random()*6)+1;
var imageName2="dice"+randomNumber2+".png";
var imageSource2="images/"+imageName2;
var image2=document.querySelectorAll("img")[1].setAttribute("src",imageSource2);

if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="DRAW 😑";
}
  else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=name1+" won🥳";
  }
  else{
    document.querySelector("h1").innerHTML=name2+" won🥳";
  }
