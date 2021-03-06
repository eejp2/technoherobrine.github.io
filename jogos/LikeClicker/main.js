//VARIABLES
var likes = 0;
var fans = 0;
var superfans = 0;
var megafans = 0;
var ultrafans = 0;
var bots = 0;
var number = 1;
var DPS = 0;
var fanDPS = 1;
var superFanDPS = 2;
var megaFanDPS = 4;
var ultraFanDPS = 8;
var botDPS = 16;

//BUG CORRECTION OF THE ENTER KEY
window.addEventListener("keydown", keyDown);

function keyDown(event) {
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
var doubleUltraFanCost = 12000;
	document.getElementById('doubleUltraFanCost').innerHTML = doubleUltraFanCost;
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
	DPS = 0;
	fans = 0;
	superfans = 0;
	megafans = 0;
	ultrafans = 0;
	bots = 0;
	number = 1;
	fanCost = 10;
	doubleFanCost = 500;
	superFanCost = 100;
	doubleSuperFanCost = 1000;
	megaFanCost = 500;
	doubleMegaFanCost = 6000;
	ultraFanCost = 1000;
	doubleUltraFanCost = 12000;
	botCost = 5000;
	doubleBotCost = 25000;
	addClickCost = 20000;
	doubleClickCost = 45000;
	updateLikes();
	updateDPS();
	fanDPS = 1;
	document.getElementById('fanDPS').innerHTML = fanDPS;
	superFanDPS = 2;
	document.getElementById('superFanDPS').innerHTML = superFanDPS;
	megaFanDPS = 4;
	document.getElementById('megaFanDPS').innerHTML = megaFanDPS;
	ultraFanDPS = 8;
	document.getElementById('ultraFanDPS').innerHTML = ultraFanDPS;
	botDPS = 16;
	document.getElementById('botDPS').innerHTML = botDPS;
	document.getElementById('fans').innerHTML = fans;
	document.getElementById('fanCost').innerHTML = fanCost;
	document.getElementById('doubleFanCost').innerHTML = doubleFanCost;
	document.getElementById('superfans').innerHTML = superfans;
	document.getElementById('superFanCost').innerHTML = superFanCost;
	document.getElementById('doubleSuperFanCost').innerHTML = doubleSuperFanCost;
	document.getElementById('megafans').innerHTML = megafans;
	document.getElementById('megaFanCost').innerHTML = megaFanCost;
	document.getElementById('doubleMegaFanCost').innerHTML = doubleMegaFanCost;
	document.getElementById('ultrafans').innerHTML = ultrafans;
	document.getElementById('ultraFanCost').innerHTML = ultraFanCost;
	document.getElementById('doubleUltraFanCost').innerHTML = doubleUltraFanCost;
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
	updateLikes();
};

//SHOP

//+1 FAN
function addFan(){
    var fanCost = Math.floor(10 * Math.pow(1.1,fans));     //adds a cost amount to each unit purchased
    if(likes >= fanCost){                                   //check if the player has enough likes
        fans = fans + 1;                                   //item number increases
    	likes = likes - fanCost;                          //spend the likes
        document.getElementById('fans').innerHTML = fans;  //updates the number of units purchased
        updateLikes();                                    //update likes
		DPS += fanDPS;                                    //increases the total dps according to item dps
		updateDPS();                                     //update dps
    }
	else {
		notEnoughLikes();                                //if you do not have enough likes, show an alert
	};
	var nextCostFan = Math.floor(10 * Math.pow(1.1,fans));
    document.getElementById('fanCost').innerHTML = nextCostFan;  //update the number for the player
};

//x2 FANS
function doubleFan(){
    var doubleFanCost = 500;                              //set the value of the item
    if(likes >= doubleFanCost){
    	likes = likes - doubleFanCost;
        updateLikes();
		removeDoubleFan();
		doubleFanDPS();
		updateDPS();                                     //update dps
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

function doubleFanDPS() {                                 //updates the fan dps
	var doubleFansDPS = document.getElementById("DoubleFans");
	if (doubleFansDPS.style.visibility == "hidden") {
			fanDPS = 2;
			updateDPS();
		} else {
			fanDPS = 1;
		}
}

//+1 SUPER FAN
function addSuperFan(){
    var superFanCost = Math.floor(100 * Math.pow(1.1,superfans));
    if(likes >= superFanCost){
        superfans = superfans + 1;
    	likes = likes - superFanCost;
        document.getElementById('superfans').innerHTML = superfans;
        DPS += superFanDPS;
		updateDPS();
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
    	likes = likes - doubleSuperFanCost;
        updateLikes();
		removeDoubleSuperFan();
		doubleSuperFanDPS();
		updateDPS();
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

function doubleSuperFanDPS() {
	var doubleSuperFansDPS = document.getElementById("DoubleSuperFans");
	if (doubleSuperFansDPS.style.visibility == "hidden") {
			superFanDPS = 4;
			updateDPS();
		} else {
			superFanDPS = 2;
		}
}

//+1 MEGA FAN
function addMegaFan(){
    var megaFanCost = Math.floor(500 * Math.pow(1.1,megafans));
    if(likes >= megaFanCost){
        megafans = megafans + 1;
    	likes = likes - megaFanCost;
        document.getElementById('megafans').innerHTML = megafans;
        DPS += megaFanDPS;
		updateDPS();
    }
	else {
		notEnoughLikes();
	};
    var nextCostMegaFan = Math.floor(500 * Math.pow(1.1,megafans));
    document.getElementById('megaFanCost').innerHTML = nextCostMegaFan;
};

//x2 MEGA FANS
function doubleMegaFan(){
    var doubleUltraFanCost = 6000;
    if(likes >= doubleMegaFanCost){
    	likes = likes - doubleMegaFanCost;
        updateLikes();
		removeDoubleMegaFan();
		doubleMegaFanDPS();
		updateDPS();
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

function doubleMegaFanDPS() {
	var doubleMegaFansDPS = document.getElementById("DoubleMegaFans");
	if (doubleMegaFansDPS.style.visibility == "hidden") {
			megaFanDPS = 8;
			updateDPS();
		} else {
			megaFanDPS = 4;
		}
}

//+1 ULTRA FAN
function addUltraFan(){
    var ultraFanCost = Math.floor(1000 * Math.pow(1.1,ultrafans));
    if(likes >= ultraFanCost){
        ultrafans = ultrafans + 1;
    	likes = likes - ultraFanCost;
        document.getElementById('ultrafans').innerHTML = ultrafans;
        DPS += ultraFanDPS;
		updateDPS();
    }
	else {
		notEnoughLikes();
	};
    var nextCostUltraFan = Math.floor(1000 * Math.pow(1.1,ultrafans));
    document.getElementById('ultraFanCost').innerHTML = nextCostUltraFan;
};

//x2 ULTRA FANS
function doubleUltraFan(){
    var doubleUltraFanCost = 12000;
    if(likes >= doubleUltraFanCost){
    	likes = likes - doubleUltraFanCost;
        updateLikes();
		removeDoubleUltraFan();
		doubleUltraFanDPS();
		updateDPS();
    }
	else {
		notEnoughLikes();
	};
};

function removeDoubleUltraFan() 
{ 
   var rmvDoubleUltraFan = document.getElementById("DoubleUltraFans"); 
   rmvDoubleUltraFan.style.display="none"; 
   rmvDoubleUltraFan.style.visibility="hidden"; 
}

function recreateDoubleUltraFan() 
{ 
   var rctDoubleUltraFan = document.getElementById("DoubleUltraFans"); 
   rctDoubleUltraFan.style.display="block"; 
   rctDoubleUltraFan.style.visibility="initial"; 
}

function doubleUltraFanDPS() {
	var doubleUltraFansDPS = document.getElementById("DoubleUltraFans");
	if (doubleUltraFansDPS.style.visibility == "hidden") {
			ultraFanDPS = 16;
			updateDPS();
		} else {
			ultraFanDPS = 8;
		}
}

//+1 BOT
function addBot(){
    var botCost = Math.floor(5000 * Math.pow(1.1,bots));
    if(likes >= botCost){
        bots = bots + 1;
    	likes = likes - botCost;
        document.getElementById('bots').innerHTML = bots;
        DPS += botDPS;
		updateDPS();
    }
	else {
		notEnoughLikes();
	};
    var nextCostBot = Math.floor(5000 * Math.pow(1.1,bots));
    document.getElementById('botCost').innerHTML = nextCostBot;
};

//x2 BOTS
function doubleBots(){
    var doubleBotsCost = 25000;
    if(likes >= doubleBotsCost){
    	likes = likes - doubleBotsCost;
        updateLikes();
		removeDoubleBots();
		doubleBotsDPS();
		updateDPS();
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

function doubleBotsDPS() {
	var doubleBotsDPS = document.getElementById("DoubleBots");
	if (doubleBotsDPS.style.visibility == "hidden") {
			botDPS = 32;
			updateDPS();
		} else {
			botDPS = 16;
		}
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
		updateDPC();
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
		var nextCostAddClick = Math.floor(20000 * Math.pow(1.1,number));
		document.getElementById('addClickCost').innerHTML = nextCostAddClick;
        updateLikes();
		removeDoubleClick();
		updateDPC();
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

//FUNCTION OF UPDATING DPS
function updateDPS(){
	document.getElementById('dps').innerHTML = 'DPS: ' + DPS;
	document.getElementById('fanDPS').innerHTML = fanDPS;
	document.getElementById('superFanDPS').innerHTML = superFanDPS;
	document.getElementById('megaFanDPS').innerHTML = megaFanDPS;
	document.getElementById('ultraFanDPS').innerHTML = ultraFanDPS;
	document.getElementById('botDPS').innerHTML = botDPS;
}

//FUNCTION OF UPDATING DPC
function updateDPC(){
	document.getElementById('dpc').innerHTML = 'DPC: ' + number;
}

//TIME INTERVAL (LIKES PER SECOND)
window.setInterval(function(){
	likes = likes + DPS;
	updateLikes();
}, 1000);

//TABS
function showHome() {
	var ShopPage = document.getElementById("ShopPage"); 
	ShopPage.style.display="none";
	ShopPage.style.visibility="hidden";
	
	var SettingsPage = document.getElementById("SettingsPage"); 
	SettingsPage.style.display="none";
	SettingsPage.style.visibility="hidden";
	
	var LikePage = document.getElementById("LikePage"); 
	LikePage.style.display="block"; 
	LikePage.style.visibility="visible";
}

function showShop() {
	var LikePage = document.getElementById("LikePage"); 
	LikePage.style.display="none"; 
	LikePage.style.visibility="hidden";
	
	var SettingsPage = document.getElementById("SettingsPage"); 
	SettingsPage.style.display="none";
	SettingsPage.style.visibility="hidden";
	
	var ShopPage = document.getElementById("ShopPage"); 
	ShopPage.style.display="block";
	ShopPage.style.visibility="visible";
}

function showSettings() {
	var LikePage = document.getElementById("LikePage"); 
	LikePage.style.display="none"; 
	LikePage.style.visibility="hidden";
	
	var ShopPage = document.getElementById("ShopPage"); 
	ShopPage.style.display="none";
	ShopPage.style.visibility="hidden";
	
	var SettingsPage = document.getElementById("SettingsPage"); 
	SettingsPage.style.display="block";
	SettingsPage.style.visibility="visible";
}

//DIALOGS
var dialog = document.querySelector('dialog');
    var showDialogButton = document.querySelector('.showchangelog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });
	
	var dialogReset = document.querySelector('#resetDialog');
    var showDialogResetButton = document.querySelector('.reset');
    if (! dialogReset.showModal) {
      dialogPolyfill.registerDialog(dialogReset);
    }
    showDialogResetButton.addEventListener('click', function() {
      dialogReset.showModal();
    });
    dialogReset.querySelector('.closedialog').addEventListener('click', function() {
      dialogReset.close();
    });
	dialogReset.querySelector('.resetgame').addEventListener('click', function() {
      dialogReset.close();
    });