// Navigates to a new page or external URL when a button is clicked
function navigateTo(url) {
    window.open(url, '_blank');
}

// Toggles between dark and light gradient themes
function changeTheme() {
    const body = document.body;
    const currentBackground = body.style.backgroundImage;

    // Switch between two gradient backgrounds
    if (currentBackground === 'linear-gradient(#292843,#555a5e)') {
        body.style.backgroundImage = 'linear-gradient(#3d3c67, #292843)';
    } else {
        body.style.backgroundImage = 'linear-gradient(#292843,#555a5e)';
    }
}

// Applies a lighter theme for a more neutral look
function changeTheme1() {
    const body = document.body;
    const currentBackground = body.style.backgroundImage;

    // Check if the background matches the specific gradient
    if (currentBackground === 'linear-gradient(#292843,#dedde7)') {
        body.style.backgroundImage = 'linear-gradient(#3d3c67, #292843)';
    } else {
        body.style.backgroundImage = 'linear-gradient(#292843,#dedde7)';
    }
}

// Resets the theme to the default gradient
function changeThemeDefault() {
    const body = document.body;
    body.style.backgroundImage = 'linear-gradient(#3d3c67, #292843)';
}

function toggleText0() {
var textToShow = document.getElementById("DescriptionText");
var buttonToggleText0 = document.getElementById("buttonToggleText0");
var rotation = 0;

/* Toggle button function */
if (buttonToggleText0) {
buttonToggleText0.onclick = function() {
    if (textToShow.style.display === "none" || textToShow.style.display === "") {
        textToShow.style.display = "block";
        setTimeout(function() {
            textToShow.style.opacity = "1";
        }, 10);
    } else {
        textToShow.style.opacity = "0";
        setTimeout(function() {
            textToShow.style.display = "none";
        }, 430);
    }

    rotation += 180;
    buttonToggleText0.style.transform = "rotate(" + rotation + "deg)";
};

}
}

function odliczanie() 
{
  var dzisiaj = new Date();
  
  var dzien = dzisiaj.getDate();
  if(dzien<10) dzien = "0" + dzien;
  var miesiac = dzisiaj.getMonth() +1;
  if(miesiac<10) miesiac = "0" + miesiac;
  var rok = dzisiaj.getFullYear();
  
  var sekunda = dzisiaj.getSeconds();
  if(sekunda<10) sekunda = "0" + sekunda;
  var minuta = dzisiaj.getMinutes();
  if(minuta<10) minuta = "0" + minuta;
  var godzina = dzisiaj.getHours();
  if(godzina<10) godzina = "0" + godzina;

  document.getElementById("timer").innerHTML = 
		dzien + "/" + miesiac + "/" + rok + "   |   " + godzina + ":" + minuta + ":" + sekunda;

  document.getElementById("timer").style.fontSize = "35px";
  setTimeout("odliczanie()",1000);
  
  
}