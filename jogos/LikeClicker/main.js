//VARIABLES
var likes = 0;
var fans = 0;
var superfans = 0;
var megafans = 0;
var bots = 0;
var number = 1;

//BUG CORRECTION OF THE ENTER KEY
window.addEventListener("keydown", keyDown);

function keyDown(eevent) {
	if (window.event.keyCode == 13) 
	{
		event.returnValue=false; 
		event.cancel = true;
	}
}

//INITIAL COST OF ITEMS
var doubleFanCost = 500;
	document.getElementById('doubleFanCost').innerHTML = doubleFanCost;
var doubleSuperFanCost = 1000;
	document.getElementById('doubleSuperFanCost').innerHTML = doubleSuperFanCost;
var doubleMegaFanCost = 6000;
	document.getElementById('doubleMegaFanCost').innerHTML = doubleMegaFanCost;
var doubleBotsCost = 25000;
	document.getElementById('doubleBotsCost').innerHTML = doubleBotsCost;
var doubleClickCost = 45000;
	document.getElementById('doubleClickCost').innerHTML = doubleClickCost;
var addClickCost = Math.floor(20000 * Math.pow(1.1,number));
	document.getElementById('addClickCost').innerHTML = addClickCost;

//RESET THE GAME
function resetGame(){
	recreateDoubleFan();
	recreateDoubleSuperFan();
	recreateDoubleMegaFan();
	recreateDoubleBots();
	recreateDoubleClick();
    likes = 0;
	fans = 0;
	superfans = 0;
	megafans = 0;
	bots = 0;
	number = 1;
	fanCost = 10;
	doubleFanCost = 500;
	superFanCost = 100;
	doubleSuperFanCost = 1000;
	megaFanCost = 500;
	doubleMegaFanCost = 6000;
	botCost = 5000;
	doubleBotCost = 25000;
	addClickCost = 20000;
	doubleClickCost = 45000;
	updateLikes();
	document.getElementById('fans').innerHTML = fans;
	document.getElementById('fanCost').innerHTML = fanCost;
	document.getElementById('doubleFanCost').innerHTML = doubleFanCost;
	document.getElementById('superfans').innerHTML = superfans;
	document.getElementById('superFanCost').innerHTML = superFanCost;
	document.getElementById('doubleSuperFanCost').innerHTML = doubleSuperFanCost;
	document.getElementById('megafans').innerHTML = megafans;
	document.getElementById('megaFanCost').innerHTML = megaFanCost;
	document.getElementById('doubleMegaFanCost').innerHTML = doubleMegaFanCost;
	document.getElementById('bots').innerHTML = bots;
	document.getElementById('botCost').innerHTML = botCost;
	document.getElementById('doubleBotsCost').innerHTML = doubleBotCost;
	document.getElementById('number').innerHTML = number;
	document.getElementById('addClickCost').innerHTML = addClickCost;
	document.getElementById('doubleClickCost').innerHTML = doubleClickCost;
};

//CLICK FUNCTION
function likeClick(number){
    likes = likes + number;
	document.getElementById("likes").innerHTML = 'You have: ' + likes + ' likes!';
};

//SHOP

//+1 FAN
function addFan(){
    var fanCost = Math.floor(10 * Math.pow(1.1,fans));     //adds a cost amount to each unit purchased
    if(likes >= fanCost){                                   //check if the player has enough likes
        fans = fans + 1;                                   //item number increases
    	likes = likes - fanCost;                          //spend the likes
        document.getElementById('fans').innerHTML = fans;  //updates the number of units purchased
        updateLikes();                                     //update likes
    }
	else {
		notEnoughLikes();                                  //if you do not have enough likes, show an alert
	};
	var nextCostFan = Math.floor(10 * Math.pow(1.1,fans));
    document.getElementById('fanCost').innerHTML = nextCostFan;  //update the number for the player
};

//x2 FANS
function doubleFan(){
    var doubleFanCost = 500;
    if(likes >= doubleFanCost){
		fans = fans * 2;                                   //doubles the number of units of the respective item
    	likes = likes - doubleFanCost;
		document.getElementById('fans').innerHTML = fans;  //updates the number of units purchased with x2
		var nextCostFan = Math.floor(10 * Math.pow(1.1,fans));
		document.getElementById('fanCost').innerHTML = nextCostFan; //updates the next cost
        updateLikes();
		removeDoubleFan();
    }
	else {
		notEnoughLikes();
	};
};

function removeDoubleFan()                                 //"remove" the x2 upgrade from the respective item
{ 
   var rmvDoubleFan = document.getElementById("DoubleFans"); 
   rmvDoubleFan.style.display="none"; 
   rmvDoubleFan.style.visibility="hidden"; 
}

function recreateDoubleFan()                                 //"recreates" the x2 upgrade of the respective item
{ 
   var rctDoubleFan = document.getElementById("DoubleFans"); 
   rctDoubleFan.style.display="block"; 
   rctDoubleFan.style.visibility="initial"; 
}

//+1 SUPER FAN
function addSuperFan(){
    var superFanCost = Math.floor(100 * Math.pow(1.1,superfans));
    if(likes >= superFanCost){
        superfans = superfans + 1;
    	likes = likes - superFanCost;
        document.getElementById('superfans').innerHTML = superfans;
        updateLikes();
    }
	else {
		notEnoughLikes();
	};
	var nextCostSuperFan = Math.floor(100 * Math.pow(1.1,superfans));
    document.getElementById('superFanCost').innerHTML = nextCostSuperFan;
};

//x2 SUPER FANS
function doubleSuperFan(){
    var doubleSuperFanCost = 1000;
    if(likes >= doubleSuperFanCost){
		superfans = superfans * 2;
    	likes = likes - doubleSuperFanCost;
		document.getElementById('superfans').innerHTML = superfans;
		var nextCostSuperFan = Math.floor(100 * Math.pow(1.1,superfans));
		document.getElementById('superFanCost').innerHTML = nextCostSuperFan;
        updateLikes();
		removeDoubleSuperFan();
    }
	else {
		notEnoughLikes();
	};
};

function removeDoubleSuperFan() 
{ 
   var rmvDoubleSuperFan = document.getElementById("DoubleSuperFans"); 
   rmvDoubleSuperFan.style.display="none"; 
   rmvDoubleSuperFan.style.visibility="hidden"; 
}

function recreateDoubleSuperFan() 
{ 
   var rctDoubleSuperFan = document.getElementById("DoubleSuperFans"); 
   rctDoubleSuperFan.style.display="block"; 
   rctDoubleSuperFan.style.visibility="initial"; 
}

//+1 MEGA FAN
function addMegaFan(){
    var megaFanCost = Math.floor(500 * Math.pow(1.1,megafans));
    if(likes >= megaFanCost){
        megafans = megafans + 1;
    	likes = likes - megaFanCost;
        document.getElementById('megafans').innerHTML = megafans;
        updateLikes();
    }
	else {
		notEnoughLikes();
	};
    var nextCostMegaFan = Math.floor(500 * Math.pow(1.1,megafans));
    document.getElementById('megaFanCost').innerHTML = nextCostMegaFan;
};

//x2 MEGA FANS
function doubleMegaFan(){
    var doubleSuperFanCost = 6000;
    if(likes >= doubleMegaFanCost){
		megafans = megafans * 2;
    	likes = likes - doubleMegaFanCost;
		document.getElementById('megafans').innerHTML = megafans;
		var nextCostMegaFan = Math.floor(500 * Math.pow(1.1,megafans));
		document.getElementById('megaFanCost').innerHTML = nextCostMegaFan;
        updateLikes();
		removeDoubleMegaFan();
    }
	else {
		notEnoughLikes();
	};
};

function removeDoubleMegaFan() 
{ 
   var rmvDoubleMegaFan = document.getElementById("DoubleMegaFans"); 
   rmvDoubleMegaFan.style.display="none"; 
   rmvDoubleMegaFan.style.visibility="hidden"; 
}

function recreateDoubleMegaFan() 
{ 
   var rctDoubleMegaFan = document.getElementById("DoubleMegaFans"); 
   rctDoubleMegaFan.style.display="block"; 
   rctDoubleMegaFan.style.visibility="initial"; 
}

//+1 BOT
function addBot(){
    var botCost = Math.floor(5000 * Math.pow(1.1,bots));
    if(likes >= botCost){
        bots = bots + 1;
    	likes = likes - botCost;
        document.getElementById('bots').innerHTML = bots;
        updateLikes();
    }
	else {
		notEnoughLikes();
	};
    var nextCostBot = Math.floor(5000 * Math.pow(1.1,bots));
    document.getElementById('botCost').innerHTML = nextCostBot;
};

//x2 BOTS
function doubleBots(){
    var doubleBotsCost = 10000;
    if(likes >= doubleBotsCost){
		bots = bots * 2;
    	likes = likes - doubleBotsCost;
		document.getElementById('bots').innerHTML = bots;
		var nextCostBot = Math.floor(5000 * Math.pow(1.1,bots));
		document.getElementById('botCost').innerHTML = nextCostBot;
        updateLikes();
		removeDoubleBots();
    }
	else {
		notEnoughLikes();
	};
};

function removeDoubleBots()
{ 
   var rmvDoubleBots = document.getElementById("DoubleBots"); 
   rmvDoubleBots.style.display="none"; 
   rmvDoubleBots.style.visibility="hidden"; 
}

function recreateDoubleBots()
{ 
   var rctDoubleBots = document.getElementById("DoubleBots"); 
   rctDoubleBots.style.display="block"; 
   rctDoubleBots.style.visibility="initial"; 
}

//+1 CLICK
function addClick(){
    var addClickCost = Math.floor(20000 * Math.pow(1.1,number));
    if(likes >= addClickCost){
        number = number + 1;
    	likes = likes - addClickCost;
        document.getElementById('number').innerHTML = number;
		document.getElementById('addClickCost').innerHTML = nextCostAddClick;
        updateLikes();
    }
	else {
		notEnoughLikes();
	};
    var nextCostAddClick = Math.floor(20000 * Math.pow(1.1,number));
    document.getElementById('addClickCost').innerHTML = nextCostAddClick;
};

//x2 CLICK
function doubleClick(){
    var doubleClickCost = 45000;
    if(likes >= doubleClickCost){
        number = number * 2;
    	likes = likes - doubleClickCost;
        document.getElementById('number').innerHTML = number;
		var nextCostBot = Math.floor(5000 * Math.pow(1.1,bots));
		document.getElementById('addClickCost').innerHTML = nextCostAddClick;
        updateLikes();
		removeDoubleClick();
    }
	else {
		notEnoughLikes();
	};
};

function removeDoubleClick()
{ 
   var rmvDoubleClick = document.getElementById("DoubleClick"); 
   rmvDoubleClick.style.display="none"; 
   rmvDoubleClick.style.visibility="hidden"; 
}

function recreateDoubleClick()
{ 
   var rctDoubleClick = document.getElementById("DoubleClick"); 
   rctDoubleClick.style.display="block"; 
   rctDoubleClick.style.visibility="initial"; 
}

//INSUFFICIENT LIKES
function notEnoughLikes() {
	createNotEnoughLikes();
	window.setTimeout(function(){
		removeNotEnoughLikes();
	}, 3000);
}

function createNotEnoughLikes()                                 //"creates" the text "You have not got enough likes."
{ 
   var crtNotEnoughLikes = document.getElementById("NotEnoughLikes"); 
   crtNotEnoughLikes.style.display="block"; 
   crtNotEnoughLikes.style.visibility="visible"; 
}

function removeNotEnoughLikes()                                 //"remove" the text "You have not got enough likes."
{ 
   var rmvNotEnoughLikes = document.getElementById("NotEnoughLikes");
   rmvNotEnoughLikes.style.display="none";
   rmvNotEnoughLikes.style.visibility="hidden";
}

//FUNCTION OF UPDATING LIKES
function updateLikes(){
	document.getElementById('likes').innerHTML = 'You have: ' + likes + ' likes!';
}

//TIME INTERVAL (LIKES PER SECOND)
window.setInterval(function(){
	likeClick(fans);
}, 10000);
window.setInterval(function(){
	likeClick(superfans);
}, 1000);
window.setInterval(function(){
likeClick(megafans);
}, 100);
window.setInterval(function(){
	likeClick(bots);
}, 10);