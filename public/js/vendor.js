document.addEventListener('DOMContentLoaded', () => {
    // Main Navigation
    const toggleNavButton = document.getElementById('brand-logo');
    const navList = document.querySelectorAll('.nav-list');

    toggleNavButton.addEventListener('click', () => {
        // Loop through each navList element
        navList.forEach((listItem) => {
            // Check the current display style of the navigation menu
            const currentDisplayStyle = window.getComputedStyle(listItem).getPropertyValue('display');
            
            // Toggle the display style
            if (currentDisplayStyle === 'none' || currentDisplayStyle === '') {
                listItem.style.display = 'block';
            } else {
                listItem.style.display = 'none';
            }
        });
    });

     toggleNavButton.addEventListener('click', () => {
         // Redirect to the /home page
         window.location.href = '/';
     });
});
