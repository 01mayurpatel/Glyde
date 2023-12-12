let divs = document.querySelectorAll('.pinput');

// Add click event to each div
divs.forEach(div => {
    div.addEventListener('click', function(event) {
        // Prevent this click from being propagated to document
        event.stopPropagation();

        // Remove border from all divs
        divs.forEach(d => d.classList.remove('active-border'));

        // Add border to the clicked div
        this.classList.add('active-border');
    });
});

// Add click event to the document
document.addEventListener('click', function() {
    // Remove border from all divs
    divs.forEach(div => div.classList.remove('active-border'));
});
