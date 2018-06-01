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
var sounds = 1;

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
var nf = new Intl.NumberFormat(undefined, {style:'decimal'});
var doubleFanCost = 500;
	document.getElementById('doubleFanCost').innerHTML = nf.format(doubleFanCost);
var doubleSuperFanCost = 1000;
	document.getElementById('doubleSuperFanCost').innerHTML = nf.format(doubleSuperFanCost);
var doubleMegaFanCost = 6000;
	document.getElementById('doubleMegaFanCost').innerHTML = nf.format(doubleMegaFanCost);
var doubleUltraFanCost = 12000;
	document.getElementById('doubleUltraFanCost').innerHTML = nf.format(doubleUltraFanCost);
var doubleBotsCost = 25000;
	document.getElementById('doubleBotsCost').innerHTML = nf.format(doubleBotsCost);
var doubleClickCost = 45000;
	document.getElementById('doubleClickCost').innerHTML = nf.format(doubleClickCost);
var addClickCost = Math.floor(20000 * Math.pow(1.1,number));
	document.getElementById('addClickCost').innerHTML = nf.format(addClickCost);

//SET NUMBER FORMATTING
document.getElementById('fans').innerHTML = nf.format(fans);
document.getElementById('superfans').innerHTML = nf.format(superfans);
document.getElementById('megafans').innerHTML = nf.format(megafans);
document.getElementById('ultrafans').innerHTML = nf.format(ultrafans);
document.getElementById('bots').innerHTML = nf.format(bots);
document.getElementById('number').innerHTML = nf.format(number);

document.getElementById('fanDPS').innerHTML = nf.format(fanDPS);
document.getElementById('superFanDPS').innerHTML = nf.format(superFanDPS);
document.getElementById('megaFanDPS').innerHTML = nf.format(megaFanDPS);
document.getElementById('ultraFanDPS').innerHTML = nf.format(ultraFanDPS);
document.getElementById('botDPS').innerHTML = nf.format(botDPS);

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
	document.getElementById('fanDPS').innerHTML = nf.format(fanDPS);
	superFanDPS = 2;
	document.getElementById('superFanDPS').innerHTML = nf.format(superFanDPS);
	megaFanDPS = 4;
	document.getElementById('megaFanDPS').innerHTML = nf.format(megaFanDPS);
	ultraFanDPS = 8;
	document.getElementById('ultraFanDPS').innerHTML = nf.format(ultraFanDPS);
	botDPS = 16;
	document.getElementById('botDPS').innerHTML = nf.format(botDPS);
	document.getElementById('fans').innerHTML = nf.format(fans);
	document.getElementById('fanCost').innerHTML = nf.format(fanCost);
	document.getElementById('doubleFanCost').innerHTML = nf.format(doubleFanCost);
	document.getElementById('superfans').innerHTML = nf.format(superfans);
	document.getElementById('superFanCost').innerHTML = nf.format(superFanCost);
	document.getElementById('doubleSuperFanCost').innerHTML = nf.format(doubleSuperFanCost);
	document.getElementById('megafans').innerHTML = nf.format(megafans);
	document.getElementById('megaFanCost').innerHTML = nf.format(megaFanCost);
	document.getElementById('doubleMegaFanCost').innerHTML = nf.format(doubleMegaFanCost);
	document.getElementById('ultrafans').innerHTML = nf.format(ultrafans);
	document.getElementById('ultraFanCost').innerHTML = nf.format(ultraFanCost);
	document.getElementById('doubleUltraFanCost').innerHTML = nf.format(doubleUltraFanCost);
	document.getElementById('bots').innerHTML = nf.format(bots);
	document.getElementById('botCost').innerHTML = nf.format(botCost);
	document.getElementById('doubleBotsCost').innerHTML = nf.format(doubleBotsCost);
	document.getElementById('number').innerHTML = nf.format(number);
	document.getElementById('addClickCost').innerHTML = nf.format(addClickCost);
	document.getElementById('doubleClickCost').innerHTML = nf.format(doubleClickCost);
};

//CLICK FUNCTION
function likeClick(number){
	if (sounds == 1) {
		document.querySelector('#LikeSound').play();
	}
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
        document.getElementById('fans').innerHTML = nf.format(fans);  //updates the number of units purchased
        updateLikes();                                    //update likes
	DPS += fanDPS;                                    //increases the total dps according to item dps
	updateDPS();                                     //update dps
	if (sounds == 1) {
		document.querySelector('#PurchaseSound').play();
	}
    }
	else {
		notEnoughLikes();                                //if you do not have enough likes, show an alert
	};
	var nextCostFan = Math.floor(10 * Math.pow(1.1,fans));
    document.getElementById('fanCost').innerHTML = nf.format(nextCostFan);  //update the number for the player
};

//x2 FANS
function doubleFan(){
    var doubleFanCost = 500;                              //set the value of the item
    if(likes >= doubleFanCost){
    	likes = likes - doubleFanCost;
        updateLikes();
	removeDoubleFan();
	doubleFanDPS();
	updateDPS();
	if (sounds == 1) {
		document.querySelector('#PurchaseSound').play();
	}
	document.getElementById("DoubleFanBR").style.display = "none";
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
        document.getElementById('superfans').innerHTML = nf.format(superfans);
        DPS += superFanDPS;
	updateDPS();
	if (sounds == 1) {
		document.querySelector('#PurchaseSound').play();
	}
    }
	else {
		notEnoughLikes();
	};
	var nextCostSuperFan = Math.floor(100 * Math.pow(1.1,superfans));
    document.getElementById('superFanCost').innerHTML = nf.format(nextCostSuperFan);
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
	if (sounds == 1) {
		document.querySelector('#PurchaseSound').play();
	}
	document.getElementById("DoubleSuperFanBR").style.display = "none";
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
        document.getElementById('megafans').innerHTML = nf.format(megafans);
        DPS += megaFanDPS;
	updateDPS();
	if (sounds == 1) {
		document.querySelector('#PurchaseSound').play();
	}
    }
	else {
		notEnoughLikes();
	};
    var nextCostMegaFan = Math.floor(500 * Math.pow(1.1,megafans));
    document.getElementById('megaFanCost').innerHTML = nf.format(nextCostMegaFan);
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
	if (sounds == 1) {
		document.querySelector('#PurchaseSound').play();
	}
	document.getElementById("DoubleMegaFanBR").style.display = "none";
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
        document.getElementById('ultrafans').innerHTML = nf.format(ultrafans);
        DPS += ultraFanDPS;
	updateDPS();
	if (sounds == 1) {
		document.querySelector('#PurchaseSound').play();
	}
    }
	else {
		notEnoughLikes();
	};
    var nextCostUltraFan = Math.floor(1000 * Math.pow(1.1,ultrafans));
    document.getElementById('ultraFanCost').innerHTML = nf.format(nextCostUltraFan);
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
	if (sounds == 1) {
		document.querySelector('#PurchaseSound').play();
	}
	document.getElementById("DoubleUltraFanBR").style.display = "none";
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
        document.getElementById('bots').innerHTML = nf.format(bots);
        DPS += botDPS;
	updateDPS();
	if (sounds == 1) {
		document.querySelector('#PurchaseSound').play();
	}
    }
	else {
		notEnoughLikes();
	};
    var nextCostBot = Math.floor(5000 * Math.pow(1.1,bots));
    document.getElementById('botCost').innerHTML = nf.format(nextCostBot);
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
	if (sounds == 1) {
		document.querySelector('#PurchaseSound').play();
	}
	document.getElementById("DoubleBotBR").style.display = "none";
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
        document.getElementById('number').innerHTML = nf.format(number);
		document.getElementById('addClickCost').innerHTML = nf.format(nextCostAddClick);
        updateLikes();
	updateDPC();
	if (sounds == 1) {
		document.querySelector('#PurchaseSound').play();
	}
    }
	else {
		notEnoughLikes();
	};
    var nextCostAddClick = Math.floor(20000 * Math.pow(1.1,number));
    document.getElementById('addClickCost').innerHTML = nf.format(nextCostAddClick);
};

//x2 CLICK
function doubleClick(){
    var doubleClickCost = 45000;
    if(likes >= doubleClickCost){
        number = number * 2;
    	likes = likes - doubleClickCost;
        document.getElementById('number').innerHTML = number;
	var nextCostAddClick = Math.floor(20000 * Math.pow(1.1,number));
	document.getElementById('addClickCost').innerHTML = nf.format(nextCostAddClick);
        updateLikes();
	removeDoubleClick();
	updateDPC();
	if (sounds == 1) {
		document.querySelector('#PurchaseSound').play();
	}
	document.getElementById("DoubleClickBR").style.display = "none";
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
	if (sounds == 1) {
		document.querySelector('#WithoutLikesSound').play();
	}
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
	document.getElementById('likes').textContent = 'You have: ' + nf.format(likes) + ' likes!';
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

//SHOW AND HIDE OPTIONS

function showSettings() {	
	var SettingsPage = document.getElementById("SettingsPage"); 
	SettingsPage.style.display="block";
	SettingsPage.style.visibility="visible";
	
	var LikePage = document.getElementById("LikePage"); 
	LikePage.style.display="none";
	LikePage.style.visibility="hidden";
	
	var ShopPage = document.getElementById("ShopPage"); 
	ShopPage.style.display="none";
	ShopPage.style.visibility="hidden";

	var ShopContent = document.getElementById("ShopContent"); 
	ShopContent.style.display="none";
	ShopContent.style.visibility="hidden";

	var ShowOptions = document.getElementById("ShowOptions"); 
	ShowOptions.style.display="none";
	ShowOptions.style.visibility="hidden";

	var HideOptions = document.getElementById("HideOptions"); 
	HideOptions.style.display="block";
	HideOptions.style.visibility="visible";
}

function hideSettings() {	
	var SettingsPage = document.getElementById("SettingsPage"); 
	SettingsPage.style.display="none";
	SettingsPage.style.visibility="hidden";
	
	var LikePage = document.getElementById("LikePage"); 
	LikePage.style.display="block";
	LikePage.style.visibility="visible";
	
	var ShopPage = document.getElementById("ShopPage"); 
	ShopPage.style.display="block";
	ShopPage.style.visibility="visible";

	var ShopContent = document.getElementById("ShopContent"); 
	ShopContent.style.display="block";
	ShopContent.style.visibility="visible";

	var ShowOptions = document.getElementById("ShowOptions"); 
	ShowOptions.style.display="block";
	ShowOptions.style.visibility="visible";

	var HideOptions = document.getElementById("HideOptions"); 
	HideOptions.style.display="none";
	HideOptions.style.visibility="hidden";
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

//AUTO SAVE
/*function enableDisableAutoSave()                                 //enable or disable the auto save
{ 
	if (document.getElementById("saveenabled").style.visibility == "hidden") {
		document.getElementById("saveenabled").style.display="block";
		document.getElementById("saveenabled").style.visibility="visible";

		document.getElementById("savedisabled").style.display="none";
		document.getElementById("savedisabled").style.visibility="hidden";
		//enable
	} else {
		document.getElementById("savedisabled").style.display="block";
		document.getElementById("savedisabled").style.visibility="visible";

		document.getElementById("saveenabled").style.display="none";
		document.getElementById("saveenabled").style.visibility="hidden";
		//disable
	}
}*/

//SOUNDS
function enableDisableSounds()                                 //enable or disable the sound effects
{ 
	if (document.getElementById("soundenabled").style.visibility == "hidden") {
		document.getElementById("soundenabled").style.display="block";
		document.getElementById("soundenabled").style.visibility="visible";

		document.getElementById("sounddisabled").style.display="none";
		document.getElementById("sounddisabled").style.visibility="hidden";
		sounds = 0;
	} else {
		document.getElementById("sounddisabled").style.display="block";
		document.getElementById("sounddisabled").style.visibility="visible";

		document.getElementById("soundenabled").style.display="none";
		document.getElementById("soundenabled").style.visibility="hidden";
		sounds = 1;
	}
}