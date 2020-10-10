function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menucuisine");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
     tablinks[i].className = tablinks[i].className;
  }
  document.getElementById(menuName).style.display = "block";
}
document.getElementById("myLink").click();

	function bookmytable() {
		var x = document.getElementById("booktable");
		if (x.style.display === "block") {
		  x.style.display = "none";
		} else {
		  x.style.display = "block";
		}
}

	var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

var slideInde = 0;
slideshowSlides();

function slideshowSlides() {
  var i;
  var slides = document.getElementsByClassName("slidemySlides");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideInde++;
  if (slideInde > slides.length) {slideInde = 1}    
  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }
  slides[slideInde-1].style.display = "block";  
  setTimeout(slideshowSlides, 3000); // Change image every 2 seconds
}

var indianIndex = 1;
showDivsindian(indianIndex);

function plusDivsindian(n) {
  showDivsindian(indianIndex += n);
}

function showDivsindian(n) {
  var i;
  var x = document.getElementsByClassName("indianSlides");
  if (n > x.length) {indianIndex = 1}
  if (n < 1) {ndianIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[indianIndex-1].style.display = "block";  
}

var chineseIndex = 1;
showDivschinese(chineseIndex);

function plusDivschinese(n) {
  showDivschinese(chineseIndex += n);
}

function showDivschinese(n) {
  var i;
  var x = document.getElementsByClassName("chineseSlides");
  if (n > x.length) {chineseIndex = 1}
  if (n < 1) {chineseIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[chineseIndex-1].style.display = "block";  
}

var japaneseIndex = 1;
showDivsjapanese(japaneseIndex);

function plusDivsjapanese(n) {
  showDivsjapanese(japaneseIndex += n);
}

function showDivsjapanese(n) {
  var i;
  var x = document.getElementsByClassName("japaneseSlides");
  if (n > x.length) {japaneseIndex = 1}
  if (n < 1) {japaneseIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[japaneseIndex-1].style.display = "block";  
}

var europeanIndex = 1;
showDivseuropean(europeanIndex);

function plusDivseuropean(n) {
  showDivseuropean(europeanIndex += n);
}

function showDivseuropean(n) {
  var i;
  var x = document.getElementsByClassName("europeanSlides");
  if (n > x.length) {europeanIndex = 1}
  if (n < 1) {europeanIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[europeanIndex-1].style.display = "block";  
}

var sealoungeIndex = 1;
showDivssealounge(sealoungeIndex);

function plusDivssealounge(n) {
  showDivssealounge(sealoungeIndex += n);
}

function showDivssealounge(n) {
  var i;
  var x = document.getElementsByClassName("sealoungeSlides");
  if (n > x.length) {sealoungeIndex = 1}
  if (n < 1) {sealoungeIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[sealoungeIndex-1].style.display = "block";  
}

var bakeryIndex = 1;
showDivsbakery(bakeryIndex);

function plusDivsbakery(n) {
  showDivsbakery(bakeryIndex += n);
}

function showDivsbakery(n) {
  var i;
  var x = document.getElementsByClassName("bakerySlides");
  if (n > x.length) {bakeryIndex = 1}
  if (n < 1) {bakeryIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[bakeryIndex-1].style.display = "block";  
}

var dessertIndex = 1;
showDivsdessert(menuIndex);

function plusDivsdessert(n) {
  showDivsdessert(dessertIndex += n);
}

function showDivsdessert(n) {
  var i;
  var x = document.getElementsByClassName("dessertSlides");
  if (n > x.length) {dessertIndex = 1}
  if (n < 1) {dessertIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[dessertIndex-1].style.display = "block";  
}

var beveragesIndex = 1;
showDivsbeverages(beveragesIndex);

function plusDivsbeverages(n) {
  showDivsbeverages(beveragesIndex += n);
}

function showDivsbeverages(n) {
  var i;
  var x = document.getElementsByClassName("beveragesSlides");
  if (n > x.length) {beveragesIndex = 1}
  if (n < 1) {beveragesIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[beveragesIndex-1].style.display = "block";  
}

