// JavaScript to toggle between light and dark theme
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', function() {
    // Toggle the 'dark' class on the body element
    body.classList.toggle('dark');
    
    // Toggle button text based on the theme
    if (body.classList.contains('dark')) {
        themeToggle.textContent = 'Switch to Light Mode';
    } else {
        themeToggle.textContent = 'Switch to Dark Mode';
    }
});