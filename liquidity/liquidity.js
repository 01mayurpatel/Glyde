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




function togglePopup2(){
    document.getElementById("popup-2").classList.toggle("active")
}







var p11 = document.getElementById('p11');
var p12 = document.getElementById('p12');
var p13 = document.getElementById('p13');
var p21 = document.getElementById('p21');
var p22 = document.getElementById('p22');
var p23 = document.getElementById('p23');
var failWarning = document.getElementById('fail-warning');

var slippageTolerance = document.getElementById('slippage-tolerance');
var settingPopupInput = document.getElementById('setting-popup-input');

function fp11(){
    p11.style.backgroundColor = 'rgb(255,172,0)';
    p12.style.backgroundColor = 'rgb(255,247,229)';
    p13.style.backgroundColor = 'rgb(255,247,229)';
    
}
function fp12(){
    p12.style.backgroundColor = 'rgb(255,172,0)';
    p11.style.backgroundColor = 'rgb(255,247,229)';
    p13.style.backgroundColor = 'rgb(255,247,229)';
    
}
function fp13(){
    p13.style.backgroundColor = 'rgb(255,172,0)';
    p12.style.backgroundColor = 'rgb(255,247,229)';
    p11.style.backgroundColor = 'rgb(255,247,229)';
}

function fp21(){
    p21.style.backgroundColor = 'rgb(255,172,0)';
    p22.style.backgroundColor = 'rgb(255,247,229)';
    p23.style.backgroundColor = 'rgb(255,247,229)';
    slippageTolerance.innerText = p21.innerText;
    failWarning.style.display='block'

}
function fp22(){
    p22.style.backgroundColor = 'rgb(255,172,0)';
    p21.style.backgroundColor = 'rgb(255,247,229)';
    p23.style.backgroundColor = 'rgb(255,247,229)';
    slippageTolerance.innerText = p22.innerText;
    failWarning.style.display='none'

}
function fp23(){
    p23.style.backgroundColor = 'rgb(255,172,0)';
    p21.style.backgroundColor = 'rgb(255,247,229)';
    p22.style.backgroundColor = 'rgb(255,247,229)';
    slippageTolerance.innerText = p23.innerText;
    failWarning.style.display='none'

}




function togglePopup3() {
    document.getElementById("popup-3").classList.toggle("active")
}
const tableRow3 = document.getElementsByClassName('table-row');