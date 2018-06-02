//VARIABLES
var likes = 0;
var fans = 0;
var superfans = 0;
var megafans = 0;
var ultrafans = 0;
var bots = 0;
var number = 1;
var LPS = 0;
var fanLPS = 1;
var superFanLPS = 2;
var megaFanLPS = 4;
var ultraFanLPS = 8;
var botLPS = 16;
var sounds = 1;
var darktheme = 0;

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

document.getElementById('fanLPS').innerHTML = nf.format(fanLPS);
document.getElementById('superFanLPS').innerHTML = nf.format(superFanLPS);
document.getElementById('megaFanLPS').innerHTML = nf.format(megaFanLPS);
document.getElementById('ultraFanLPS').innerHTML = nf.format(ultraFanLPS);
document.getElementById('botLPS').innerHTML = nf.format(botLPS);

//RESET THE GAME
function resetGame(){
	recreateDoubleFan();
	recreateDoubleSuperFan();
	recreateDoubleMegaFan();
	recreateDoubleBots();
	recreateDoubleClick();
    likes = 0;
	LPS = 0;
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
	updateLPS();
	fanLPS = 1;
	document.getElementById('fanLPS').innerHTML = nf.format(fanLPS);
	superFanLPS = 2;
	document.getElementById('superFanLPS').innerHTML = nf.format(superFanLPS);
	megaFanLPS = 4;
	document.getElementById('megaFanLPS').innerHTML = nf.format(megaFanLPS);
	ultraFanLPS = 8;
	document.getElementById('ultraFanLPS').innerHTML = nf.format(ultraFanLPS);
	botLPS = 16;
	document.getElementById('botLPS').innerHTML = nf.format(botLPS);
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
	LPS += fanLPS;                                    //increases the total lps according to item lps
	updateLPS();                                     //update lps
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
	doubleFanLPS();
	updateLPS();
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

function doubleFanLPS() {                                 //updates the fan lps
	var doubleFansLPS = document.getElementById("DoubleFans");
	if (doubleFansLPS.style.visibility == "hidden") {
			fanLPS = 2;
			updateLPS();
		} else {
			fanLPS = 1;
		}
}

//+1 SUPER FAN
function addSuperFan(){
    var superFanCost = Math.floor(100 * Math.pow(1.1,superfans));
    if(likes >= superFanCost){
        superfans = superfans + 1;
    	likes = likes - superFanCost;
        document.getElementById('superfans').innerHTML = nf.format(superfans);
        LPS += superFanLPS;
	updateLPS();
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
	doubleSuperFanLPS();
	updateLPS();
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

function doubleSuperFanLPS() {
	var doubleSuperFansLPS = document.getElementById("DoubleSuperFans");
	if (doubleSuperFansLPS.style.visibility == "hidden") {
			superFanLPS = 4;
			updateLPS();
		} else {
			superFanLPS = 2;
		}
}

//+1 MEGA FAN
function addMegaFan(){
    var megaFanCost = Math.floor(500 * Math.pow(1.1,megafans));
    if(likes >= megaFanCost){
        megafans = megafans + 1;
    	likes = likes - megaFanCost;
        document.getElementById('megafans').innerHTML = nf.format(megafans);
        LPS += megaFanLPS;
	updateLPS();
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
	doubleMegaFanLPS();
	updateLPS();
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

function doubleMegaFanLPS() {
	var doubleMegaFansLPS = document.getElementById("DoubleMegaFans");
	if (doubleMegaFansLPS.style.visibility == "hidden") {
			megaFanLPS = 8;
			updateLPS();
		} else {
			megaFanLPS = 4;
		}
}

//+1 ULTRA FAN
function addUltraFan(){
    var ultraFanCost = Math.floor(1000 * Math.pow(1.1,ultrafans));
    if(likes >= ultraFanCost){
        ultrafans = ultrafans + 1;
    	likes = likes - ultraFanCost;
        document.getElementById('ultrafans').innerHTML = nf.format(ultrafans);
        LPS += ultraFanLPS;
	updateLPS();
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
	doubleUltraFanLPS();
	updateLPS();
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

function doubleUltraFanLPS() {
	var doubleUltraFansLPS = document.getElementById("DoubleUltraFans");
	if (doubleUltraFansLPS.style.visibility == "hidden") {
			ultraFanLPS = 16;
			updateLPS();
		} else {
			ultraFanLPS = 8;
		}
}

//+1 BOT
function addBot(){
    var botCost = Math.floor(5000 * Math.pow(1.1,bots));
    if(likes >= botCost){
        bots = bots + 1;
    	likes = likes - botCost;
        document.getElementById('bots').innerHTML = nf.format(bots);
        LPS += botLPS;
	updateLPS();
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
	doubleBotsLPS();
	updateLPS();
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

function doubleBotsLPS() {
	var doubleBotsLPS = document.getElementById("DoubleBots");
	if (doubleBotsLPS.style.visibility == "hidden") {
			botLPS = 32;
			updateLPS();
		} else {
			botLPS = 16;
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
	updateLPC();
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
	updateLPC();
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

//FUNCTION OF UPDATING LPS
function updateLPS(){
	document.getElementById('lps').innerHTML = 'LPS: ' + LPS;
	document.getElementById('fanLPS').innerHTML = fanLPS;
	document.getElementById('superFanLPS').innerHTML = superFanLPS;
	document.getElementById('megaFanLPS').innerHTML = megaFanLPS;
	document.getElementById('ultraFanLPS').innerHTML = ultraFanLPS;
	document.getElementById('botLPS').innerHTML = botLPS;
}

//FUNCTION OF UPDATING LPC
function updateLPC(){
	document.getElementById('lpc').innerHTML = 'LPC: ' + number;
}

//TIME INTERVAL (LIKES PER SECOND)
window.setInterval(function(){
	likes = likes + LPS;
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

//DARK THEME
function enableDisableDarkTheme()                                 //enable or disable the dark theme
{ 
	if (document.getElementById("darkthemeenabled").style.visibility == "hidden") {
		document.getElementById("darkthemeenabled").style.display="block";
		document.getElementById("darkthemeenabled").style.visibility="visible";

		document.getElementById("darkthemedisabled").style.display="none";
		document.getElementById("darkthemedisabled").style.visibility="hidden";
		disableDarkTheme();
	} else {
		document.getElementById("darkthemedisabled").style.display="block";
		document.getElementById("darkthemedisabled").style.visibility="visible";

		document.getElementById("darkthemeenabled").style.display="none";
		document.getElementById("darkthemeenabled").style.visibility="hidden";
		enableDarkTheme();
	}
}

function enableDarkTheme() {
	darktheme = 1;
	document.querySelector("body").style.color = "white";
	document.querySelector("body").style.background = "url('files/bgdark.jpg')";
	document.querySelector("#ShopPage").style.background = "url('files/bgdark2.jpg')";
	document.querySelector("#SettingsPage").style.background = "url('files/bgdark2.jpg')";
	document.querySelector("#like-icon").style.color = "white";
	document.querySelector("#back-icon").style.color = "white";
	document.querySelector("#options-icon").style.color = "white";
	document.querySelector("#TopActionBar").style.color = "white";
	document.querySelector("#TopActionBar").style.background = "#232323";
	document.querySelector("#MoreFanIcon").style.color = "white";
	document.querySelector("#MoreSuperFanIcon").style.color = "white";
	document.querySelector("#MoreMegaFanIcon").style.color = "white";
	document.querySelector("#MoreUltraFanIcon").style.color = "white";
	document.querySelector("#MoreBotIcon").style.color = "white";
	document.querySelector("#MoreDoubleFanIcon").style.color = "white";
	document.querySelector("#MoreDoubleSuperFanIcon").style.color = "white";
	document.querySelector("#MoreDoubleMegaFanIcon").style.color = "white";
	document.querySelector("#MoreDoubleUltraFanIcon").style.color = "white";
	document.querySelector("#MoreDoubleBotIcon").style.color = "white";
	document.querySelector("#MoreClickIcon").style.color = "white";
	document.querySelector("#MoreDoubleClickIcon").style.color = "white";
	document.querySelector("#AddFan").style.backgroundColor = "#8e8e8e";
	document.querySelector("#AddSuperFan").style.backgroundColor = "#8e8e8e";
	document.querySelector("#AddMegaFan").style.backgroundColor = "#8e8e8e";
	document.querySelector("#AddUltraFan").style.backgroundColor = "#8e8e8e";
	document.querySelector("#AddBot").style.backgroundColor = "#8e8e8e";
	document.querySelector("#DoubleFans").style.backgroundColor = "#8e8e8e";
	document.querySelector("#DoubleSuperFans").style.backgroundColor = "#8e8e8e";
	document.querySelector("#DoubleMegaFans").style.backgroundColor = "#8e8e8e";
	document.querySelector("#DoubleUltraFans").style.backgroundColor = "#8e8e8e";
	document.querySelector("#DoubleBots").style.backgroundColor = "#8e8e8e";
	document.querySelector("#AddClick").style.backgroundColor = "#8e8e8e";
	document.querySelector("#DoubleClick").style.backgroundColor = "#8e8e8e";
}

function disableDarkTheme() {
	darktheme = 0;
	document.querySelector("body").style.color = "black";
	document.querySelector("body").style.background = "url(files/bg.jpg)";
	document.querySelector("#ShopPage").style.background = "url('files/bg2.jpg')";
	document.querySelector("#SettingsPage").style.background = "url('files/bg2.jpg')";
	document.querySelector("#like-icon").style.color = "black";
	document.querySelector("#back-icon").style.color = "black";
	document.querySelector("#options-icon").style.color = "black";
	document.querySelector("#TopActionBar").style.color = "black";
	document.querySelector("#TopActionBar").style.background = "white";
	document.querySelector("#MoreFanIcon").style.color = "black";
	document.querySelector("#MoreSuperFanIcon").style.color = "black";
	document.querySelector("#MoreMegaFanIcon").style.color = "black";
	document.querySelector("#MoreUltraFanIcon").style.color = "black";
	document.querySelector("#MoreBotIcon").style.color = "black";
	document.querySelector("#MoreDoubleFanIcon").style.color = "black";
	document.querySelector("#MoreDoubleSuperFanIcon").style.color = "black";
	document.querySelector("#MoreDoubleMegaFanIcon").style.color = "black";
	document.querySelector("#MoreDoubleUltraFanIcon").style.color = "black";
	document.querySelector("#MoreDoubleBotIcon").style.color = "black";
	document.querySelector("#MoreClickIcon").style.color = "black";
	document.querySelector("#MoreDoubleClickIcon").style.color = "black";
	document.querySelector("#AddFan").style.backgroundColor = "white";
	document.querySelector("#AddSuperFan").style.backgroundColor = "white";
	document.querySelector("#AddMegaFan").style.backgroundColor = "white";
	document.querySelector("#AddUltraFan").style.backgroundColor = "white";
	document.querySelector("#AddBot").style.backgroundColor = "white";
	document.querySelector("#DoubleFans").style.backgroundColor = "white";
	document.querySelector("#DoubleSuperFans").style.backgroundColor = "white";
	document.querySelector("#DoubleMegaFans").style.backgroundColor = "white";
	document.querySelector("#DoubleUltraFans").style.backgroundColor = "white";
	document.querySelector("#DoubleBots").style.backgroundColor = "white";
	document.querySelector("#AddClick").style.backgroundColor = "white";
	document.querySelector("#DoubleClick").style.backgroundColor = "white";
}

function showLikeOverlay() {
	if (darktheme == 0) {
		document.querySelector("#like-icon").style.color = "#3d3d3d";
	} else {
		document.querySelector("#like-icon").style.color = "#adadad";
	}
}

function hideLikeOverlay() {
	if (darktheme == 0) {
		document.querySelector("#like-icon").style.color = "black";
	} else {
		document.querySelector("#like-icon").style.color = "white";
	}	
}