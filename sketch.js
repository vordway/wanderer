
var vid;
var value = 0;
var amp;
var song;
var showVid = false;
var volHistory=[];

function preload() {
  song = loadSound("soundpiece_chris_final.mp3")
}

function setup() {
  createCanvas(1500,800);
  background(0);
  
  song.play();
  song.loop();
  
  amp= new p5.Amplitude();
  
  setTimeout(vidTrigger, 11000);
  
  vid = createVideo('driving copy.MOV');
  // vid.position(200,350);
  // vid.size(2000,700);
  vid.play();
  vid.loop();
  vid.hide();
  vid.volume(0);

}

function draw() {
  background(0);
  if (showVid) {
    image(vid, 300, 100, 1600, 1200);
  }
  stroke(230);
  noFill();
  beginShape();
  
  var vol = amp.getLevel();
  volHistory.push(vol);
 for (var i =0; i<volHistory.length;i++){
   var y=map(volHistory[i],0,1.9,height/1.8,0);
   vertex(i,y);
 }
  endShape();
  
  if (volHistory.length > (width-400)) {
    volHistory.splice(2,1);
  }
  
  stroke(0);
  line(volHistory.length,0,volHistory.length,height);
  
}

function vidTrigger() {
  showVid = true;
  
}
  


function maind()
{
	startdate = new Date()
	now(startdate.getYear(),startdate.getMonth(),startdate.getDate(),startdate.getHours(),startdate.getMinutes(),startdate.getSeconds())
}



function ChangeValue(number,pv)
{
	numberstring =""
	
	var j=0 
	var i=0
	while (number > 1)
	 { 

	    numberstring = (Math.round(number-0.5) % 10) + numberstring
	    number= number / 10
	    j++
	    if (number > 1 && j==3) { 
			numberstring = "," + numberstring 
			j=0}
	    i++
	 }

	 numberstring=numberstring
	 //numberstring.class('funky')


if (pv==1) {document.getElementById("worldpop").innerHTML=numberstring }


//if (pv==1) { document.schuld.schuld.value = numberstring }
//if (pv==2) {document.newnow.newnow.value = numberstring}

}

	

function now(year,month,date,hours,minutes,seconds) 
{       
	startdatum = new Date(year,month,date,hours,minutes,seconds)

var now = 5600000000.0
var now2 = 5690000000.0
var groeipercentage = (now2 - now) / now *100
var groeiperseconde = (now * (groeipercentage/100))/365.0/24.0/60.0/60.0 
nu = new Date ()                
schuldstartdatum = new Date (96,1,1)                            
secondenoppagina = (nu.getTime() - startdatum.getTime())/1000
totaleschuld= (nu.getTime() - schuldstartdatum.getTime())/1000*groeiperseconde + now
ChangeValue(totaleschuld,1);
//ChangeValue(secondenoppagina*groeiperseconde,2);



timerID = setTimeout("now(startdatum.getYear(),startdatum.getMonth(),startdatum.getDate(),startdatum.getHours(),startdatum.getMinutes(),startdatum.getSeconds())",200)
}


window.onload=maind