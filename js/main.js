var header = document.getElementById("header");
var menuItems = document.getElementsByClassName('a');
var menuServices = document.getElementById("menu_services");
var menuPortfolio = document.getElementById("menu_portfolio");
var menuTeam = document.getElementById("menu_team");
var logo = document.getElementById("logo");
var serviceSection = document.getElementById("services");
var portfolioSection = document.getElementById("portfolio");
var teamSection = document.getElementById("team");
var arrowToServices = document.getElementById("arrowToServices");
var arrowToPortfolio = document.getElementById("arrowToPortfolio");
var arrowToTeam = document.getElementById("arrowToTeam");
var arrowToContact = document.getElementById("arrowToContact");

window.onload = function() {

    window.onscroll = function() {
        var startY = currentYPosition();
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        if ( startY > h - 50 ) {
            changeMenuToDark ();
            menuServices.classList.add('active');
        } else {
            changeMenuToStart ();
            menuServices.classList.remove('active');
        }
        if ( startY > h - 50 + serviceSection.offsetHeight) {
            menuPortfolio.classList.add('active');
            menuServices.classList.remove('active');
        } else if ( startY > h - 50) {
            menuPortfolio.classList.remove('active');
            menuServices.classList.add('active');
        }
        if ( startY > h - 50 + serviceSection.offsetHeight + portfolioSection.offsetHeight) {
            header.style.background = "#12171d";
            menuPortfolio.classList.remove('active');
            menuTeam.classList.add('active');
            changeMenuToLight();
        } else {
            header.style.background = "transparent";
            menuTeam.classList.remove('active');
        }
        if ( startY > h - 50 + serviceSection.offsetHeight + portfolioSection.offsetHeight + teamSection.offsetHeight) {
            menuTeam.classList.remove('active');
        }
    }
    logo.onclick = function() {smoothScroll('home');}
    menuServices.onclick = function () {smoothScroll('services');};
    menuPortfolio.onclick = function () {smoothScroll('portfolio');};
    menuTeam.onclick = function () {smoothScroll('team');};
    arrowToServices.onclick = function () {smoothScroll('services');};
    arrowToPortfolio.onclick = function () {smoothScroll('portfolio');};
    arrowToTeam.onclick = function () {smoothScroll('team');};
    arrowToContact.onclick = function () {smoothScroll('contact');};
}



function changeMenuToDark () {
    for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].style.color = "#12171d";
        }
    logo.src = "assets/img/logo_check_green.png";
    logo.style.width = "50px";
}

function changeMenuToLight () {
    for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].style.color = "white";
        }
}

function changeMenuToStart () {
    for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].style.color = "white";
        }
    logo.src = "assets/img/logo_white.png";
    logo.style.width = "100px";
}

function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}

function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}

function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}

