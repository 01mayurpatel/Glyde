document.addEventListener('DOMContentLoaded', function() {
    // Get references to the switches and the div
    var toggleSwitch = document.getElementById('color_mode');
    var toggleSwitch2 = document.getElementById('switch2');
    var myDiv = document.getElementById('disappear');

    // Function to toggle the visibility of myDiv based on the state of the switches
    function toggleVisibility() {
        if (toggleSwitch.checked || toggleSwitch2.checked) {
            myDiv.classList.add('hidden');
        } else {
            myDiv.classList.remove('hidden');
        }
    }

    // Add listeners to both switches
    toggleSwitch.addEventListener('change', toggleVisibility);
    toggleSwitch2.addEventListener('change', toggleVisibility);

    // Set the initial state (optional)
    toggleVisibility();
});
