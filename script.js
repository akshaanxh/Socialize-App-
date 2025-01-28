

// Select the settings menu container
var settingsmenu = document.querySelector(".settings-menu");

// Select the dark mode toggle button
var darkbtn = document.getElementById("dark-btn");

// Function to toggle the settings menu height when clicked
function settingsMenuToggle() {
    // Add or remove the class that controls the menu's height
    settingsmenu.classList.toggle("settings-menu-height");
}

// Add an onclick event to the dark mode toggle button
darkbtn.onclick = function() {
    // Toggle the class to visually show the button is active (dark mode on)
    darkbtn.classList.toggle("dark-btn-on");
    
    // Toggle the dark theme class on the body to switch between light and dark modes
    document.body.classList.toggle("dark-theme");

    // Check the current theme stored in localStorage
    if (localStorage.getItem("theme") == "light") {
        // If the theme is light, switch it to dark
        localStorage.setItem("theme", "dark");
    } else {
        // Otherwise, set the theme to light
        localStorage.setItem("theme", "light");
    }
}

// Check the saved theme in localStorage when the page loads
if (localStorage.getItem("theme") == "light") {
    // If the theme is light, ensure the dark mode button is off
    darkbtn.classList.remove("dark-btn-on");
    // Remove the dark theme from the body
    document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
    // If the theme is dark, activate the dark mode button
    darkbtn.classList.add("dark-btn-on");
    // Add the dark theme class to the body
    document.body.classList.add("dark-theme");
} else {
    // If no theme is set in localStorage, default to light mode
    localStorage.setItem("theme", "light");
}
