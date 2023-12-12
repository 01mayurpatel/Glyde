document.querySelectorAll('.x-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        var dropdownMenu = this.nextElementSibling;
        
        // Check if this dropdown is already open
        var isCurrentlyOpen = dropdownMenu.style.display === 'block';
        
        // Close all dropdowns
        document.querySelectorAll('.x-menu').forEach(function(menu) {
            menu.style.display = 'none';
        });

        // If this dropdown was not open, show it
        if (!isCurrentlyOpen) {
            dropdownMenu.style.display = 'block';
        }
    });
});
