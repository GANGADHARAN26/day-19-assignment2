

//container-fluid
var div1=document.createElement("div");
div1.setAttribute("class","container-fluid");
//head
var head=document.createElement("h1");
head.innerHTML="BIBLE NAME: ROMAN";


div1.appendChild(head);
document.body.appendChild(div1);



async function bar(){
    let ele=await fetch("https://bible-api.com/romans%2012:1-2,5-7,9,13:1-9&10");
    let ele1=await ele.json();
    //console.log(ele1);
    //text 

var para=document.createElement("p");
para.innerHTML=`Content : ${ele1.text}`;
div1.appendChild(para);
document.body.appendChild(div1);

//verses
var ver=document.createElement("h5");
ver.innerHTML="Total verses -> 16";

div1.append(ver);
document.body.appendChild(div1);

//iteration
for(var i=0;i<16;i++)
{
   //card
   var card=document.createElement("div");
   card.setAttribute("class","card");
   card.style.backgroundColor="	#dfcfbe";
   //card-header
   var card_header=document.createElement("div");
   card_header.setAttribute("class","card-header");
   card_header.innerHTML=`Verse : ${ele1.verses[i].verse}`;
   //card-body
   var car_body=document.createElement("div");
   car_body.setAttribute("class","card-body");
   //text para
   var para=document.createElement("p");
   para.setAttribute("class","card-text");
   para.innerHTML=`Text : ${ele1.verses[i].text}`;
   //appending all cards
   car_body.appendChild(para);
   card.appendChild(card_header);
   card.appendChild(car_body);
   document.body.appendChild(card);

}

}
bar();
