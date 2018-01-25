//VARIÁVEIS
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
var botDPS = 8;

//CORREÇÃO DO BUG DA TECLA ENTER
window.addEventListener("keydown", keyDown);

function keyDown(event) {
	if (window.event.keyCode == 13) 
	{
		event.returnValue=false; 
		event.cancel = true;
	}
}

//CUSTO INICIAL DOS ITENS
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

//RESETAR O JOGO
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

//FUNÇÃO DE CLICAR
function likeClick(number){
    likes = likes + number;
	updateLikes();
};

//COMPRAS

//+1 FAN
function addFan(){
    var fanCost = Math.floor(10 * Math.pow(1.1,fans));     //adiciona uma quantidade ao custo a cada unidade comprada
    if(likes >= fanCost){                                   //checa se o jogador tem likes suficientes
        fans = fans + 1;                                   //aumenta o número do item
    	likes = likes - fanCost;                          //gasta os likes
        document.getElementById('fans').innerHTML = fans;  //atualiza o número de unidades adquiridas
        updateLikes();  //atualiza os likes
		DPS += fanDPS;
		updateDPS();
    }
	else {
		notEnoughLikes();      //se você não tem likes suficientes, exibe um alerta
	};
	var nextCostFan = Math.floor(10 * Math.pow(1.1,fans));
    document.getElementById('fanCost').innerHTML = nextCostFan;  //atualiza o número para o jogador
};

//x2 FANS
function doubleFan(){
    var doubleFanCost = 500;
    if(likes >= doubleFanCost){
    	likes = likes - doubleFanCost;
        updateLikes();
		removeDoubleFan();
		doubleFanDPS();
		updateDPS();
    }
	else {
		notEnoughLikes();
	};
};

function removeDoubleFan()                                 //"remove" o upgrade x2 do item respectivo
{ 
   var rmvDoubleFan = document.getElementById("DoubleFans"); 
   rmvDoubleFan.style.display="none"; 
   rmvDoubleFan.style.visibility="hidden"; 
}

function recreateDoubleFan()                                 //"recria" o upgrade x2 do item respectivo
{ 
   var rctDoubleFan = document.getElementById("DoubleFans"); 
   rctDoubleFan.style.display="block"; 
   rctDoubleFan.style.visibility="initial"; 
}

function doubleFanDPS() {
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

//LIKES INSUFICIENTES
function notEnoughLikes() {
	createNotEnoughLikes();
	window.setTimeout(function(){
		removeNotEnoughLikes();
	}, 3000);
}

function createNotEnoughLikes()                                 //"cria" o texto "Você não tem curtidas suficientes."
{ 
   var crtNotEnoughLikes = document.getElementById("NotEnoughLikes"); 
   crtNotEnoughLikes.style.display="block"; 
   crtNotEnoughLikes.style.visibility="visible"; 
}

function removeNotEnoughLikes()                                 //"remove" o texto "Você não tem curtidas suficientes."
{ 
   var rmvNotEnoughLikes = document.getElementById("NotEnoughLikes");
   rmvNotEnoughLikes.style.display="none";
   rmvNotEnoughLikes.style.visibility="hidden";
}

//FUNÇÃO DE ATUALIZAR LIKES
function updateLikes(){
	document.getElementById('likes').innerHTML = 'You have: ' + likes + ' likes!';
}

//FUNÇÃO DE ATUALIZAR O DPS
function updateDPS(){
	document.getElementById('dps').innerHTML = 'DPS: ' + DPS;
	document.getElementById('fanDPS').innerHTML = fanDPS;
	document.getElementById('superFanDPS').innerHTML = superFanDPS;
	document.getElementById('megaFanDPS').innerHTML = megaFanDPS;
	document.getElementById('ultraFanDPS').innerHTML = ultraFanDPS;
	document.getElementById('botDPS').innerHTML = botDPS;
}

//FUNÇÃO DE ATUALIZAR O DPC
function updateDPC(){
	document.getElementById('dpc').innerHTML = 'DPC: ' + number;
}

//INTERVALO DE TEMPO (LIKES POR SEGUNDO)
window.setInterval(function(){
	likes = likes + DPS;
	updateLikes();
}, 1000);