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

var timer = document.getElementById('eightTimer');
var epochValue  = document.getElementById('epoch_value');
setInterval(function () {

    const currentUTC = new Date().toUTCString();

    // Extract hours, minutes, and seconds
    const utcTime = new Date(currentUTC);
    const hour = utcTime.getUTCHours();
    const minute = utcTime.getUTCMinutes();
    const second = utcTime.getUTCSeconds();
    var epoch = parseInt(hour/8);
    var hr = hour - (epoch*8);
    timer.innerText = `0${hr}--${minute}--${second}`;
    epochValue.innerText = epoch;
}, 1000);

var count = 0;
var stake11 = document.getElementById('stake11');
var stake21 = document.getElementById('stake12');
var stake21 = document.getElementById('stake21');
var stake22 = document.getElementById('stake22');
var stake23 = document.getElementById('stake23');

function toggleStake(){
    if(count%2 == 0){
        stake11.style.display='none';
        stake12.style.display='none';
        stake21.style.display='flex';
        stake22.style.display='flex';
        stake23.style.display='flex';
    }else{
        stake11.style.display='flex';
        stake12.style.display='flex';
        stake21.style.display='none';
        stake22.style.display='none';
        stake23.style.display='none';
    }
    count =count+1;
}