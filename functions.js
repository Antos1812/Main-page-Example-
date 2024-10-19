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