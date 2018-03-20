const Rotate=function(){
	
	if(this.clock!=null){
		window.addEventListener("load",this.loadDefault.bind(this),false);
	}
	
	
			this.ball["red"]={blue:510,black:480,red:180,green:210,pink:240};
			this.ball["green"]={black:480,red:150,green:180,pink:210,blue:240};
			this.ball["pink"]={red:120,green:150,pink:180,blue:210,black:240};
			this.ball["blue"]={green:510,pink:480,blue:210,black:510,red:240};
			this.ball["black"]={pink:510,blue:480,black:180,red:210,green:240};
			

}
Rotate.prototype.ball=[];
Rotate.prototype.sunset=180;
Rotate.prototype.rotateGap=0;
Rotate.prototype.clock=document.getElementById("clock");
Rotate.prototype.niddles=this.clock.children;
Rotate.prototype.niddle=[
	{deg:120,position:0}
	
];
Rotate.prototype.loadDefault=function(){
	//console.log(this.niddles[0].dataset.rotate);
	this.rotateGap=((90+270)/2)/this.niddles.length;
	console.log("Gap:"+this.rotateGap);
	
	for(let i=0; i<this.niddles.length; i++){
		
			let pos=(this.rotateGap+90*i)+90;
			
			let niddleRotate=this.niddles[i].dataset.rotate;
			this.niddles[i].style.transform="rotate("+niddleRotate+"deg)";
			this.niddles[i].children[0].addEventListener("click",this.makeRotate.bind(this));
			this.niddles[i].children[0].style.backgroundColor=this.niddles[i].children[0].id;
			
	}
}
Rotate.prototype.getDegree=function(myRotateTxt){
	let last=myRotateTxt.length-4;
	let rotateVal = myRotateTxt.slice(7,last);
	parseInt(rotateVal);
	return rotateVal;
}
Rotate.prototype.makeRotate=function(e){
	//console.log(e.target.id);
	//console.log(e.target.parentElement.style.transform);
	let parentDeg=this.getDegree(e.target.parentElement.style.transform);
	this.rotateGap=parseInt(this.sunset-parentDeg);
	for(let i=0; i<this.niddles.length; i++){
			
			let currentPos=this.getDegree(this.niddles[i].style.transform);
			parseInt(currentPos);
			let newPos=parseInt(currentPos)+parseInt(this.rotateGap);
			console.log("New Pos"+newPos);
			if(newPos<270){
				this.niddles[i].style.transform="rotate("+newPos+"deg)";
				this.niddles[i].style.transition=" transform 2s";
			}else{
				let bigRound=newPos+210;
				this.niddles[i].style.transform="rotate("+bigRound+"deg)";
				this.niddles[i].style.transition=" transform 2s";
			}
		
	}
	/*
	for(let i=0; i<this.niddles.length; i++){
		
		document.getElementById("red").parentElement.style.transform="rotate("+this.ball[e.target.id].red+"deg)";
		document.getElementById("green").parentElement.style.transform="rotate("+this.ball[e.target.id].green+"deg)";
		document.getElementById("pink").parentElement.style.transform="rotate("+this.ball[e.target.id].pink+"deg)";
		document.getElementById("blue").parentElement.style.transform="rotate("+this.ball[e.target.id].blue+"deg)";
		document.getElementById("black").parentElement.style.transform="rotate("+this.ball[e.target.id].black+"deg)";
		document.getElementById("red").parentElement.style.transition=" transform 2s";
		document.getElementById("green").parentElement.style.transition=" transform 2s";
		document.getElementById("pink").parentElement.style.transition=" transform 2s";
		document.getElementById("blue").parentElement.style.transition=" transform 2s";
		document.getElementById("black").parentElement.style.transition=" transform 2s";
		
	}
	*/
	
}