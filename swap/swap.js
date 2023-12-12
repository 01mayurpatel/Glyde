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

// var flagpopp = false;
function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
    
}
const tableRow = document.getElementsByClassName('table-row');

for (let i = 1; i <= tableRow.length; i++) {


    tableRow[i - 1].addEventListener('click', () => {

       
        
        document.getElementById("popup-1").classList.toggle("active");
       
        // top
       
    })
}
function togglePopup6() {
    document.getElementById("popup-6").classList.toggle("active");
    
}
const tableRow6 = document.getElementsByClassName('table-row');

for (let i = 1; i <= tableRow6.length; i++) {


    tableRow6[i - 1].addEventListener('click', () => {

       
        
        document.getElementById("popup-6").classList.toggle("active");
       
        // top
       
    })
}

function togglePopup2(){
    document.getElementById("popup-2").classList.toggle("active")
}
const tableRow2 = document.getElementsByClassName('table-row2');
for (let i = 1; i <= tableRow2.length; i++) {


    tableRow2[i - 1].addEventListener('click', () => {

       
        
        document.getElementById("popup-2").classList.toggle("active");
       
        // top
       
    })
}



function swappingBlock(){
    var randomIcon = document.getElementById('random-icon');
    
        var first = document.getElementById('blockname-1').innerHTML;
       

        document.getElementById('blockname-1').innerHTML = document.getElementById('blockname-2').innerHTML;
        document.getElementById('blockname-2').innerHTML = first;

        var rightFirst = document.getElementById("right-block1").innerHTML;
       

        document.getElementById('right-block1').innerHTML = document.getElementById('right-block2').innerHTML;
        document.getElementById('right-block2').innerHTML = rightFirst;

        var rightFirstt = document.getElementById("right-block1t1").innerHTML;
       

        document.getElementById('right-block1t1').innerHTML = document.getElementById('right-block1t2').innerHTML;
        document.getElementById('right-block1t2').innerHTML = rightFirstt;
}

function settingPopup(){
    console.log("Mayur")
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



function ethClick1(){
    document.getElementById('token-item-name1').innerText = 'ETH';
    document.getElementById('right-block1t1').innerText = '0 ETH ';
    document.getElementById('token-item-img1').setAttribute('src' , "../eth.png") ;
    document.getElementById('right-img-1').setAttribute('src' , "../eth.png") ;
    togglePopup()


}
function glydeClick1(){
    document.getElementById('token-item-name1').innerText = 'GDE';
    document.getElementById('right-block1t1').innerText = '0 GDE ';
    document.getElementById('token-item-img1').setAttribute('src' , "../logonew.png") ;
    document.getElementById('right-img-1').setAttribute('src' , "../logonew.png") ;
    togglePopup()


}
function usdcClick1(){
    document.getElementById('token-item-name1').innerText = 'USDC';
    document.getElementById('right-block1t1').innerText = '0 USDC ';
    document.getElementById('token-item-img1').setAttribute('src' , "../USDC.svg") ;
    document.getElementById('right-img-1').setAttribute('src' , "../USDC.svg") ;
    togglePopup()


}
function usdtClick1(){
    document.getElementById('token-item-name1').innerText = 'USDT';
    document.getElementById('right-block1t1').innerText = '0 USDT ';
    document.getElementById('token-item-img1').setAttribute('src' , "../USDT.svg") ;
    document.getElementById('right-img-1').setAttribute('src' , "../USDT.svg") ;
togglePopup()

}





// .gggggg


function ethClick2(){
    document.getElementById('token-item-name2').innerText = 'ETH';
    document.getElementById('right-block1t2').innerText = '0 ETH ';
    document.getElementById('token-item-img2').setAttribute('src' , "../eth.png") ;
    document.getElementById('right-img-2').setAttribute('src' , "../eth.png") ;
    togglePopup6();

}
function glydeClick2(){
    document.getElementById('token-item-name2').innerText = 'GDE';
    document.getElementById('right-block1t2').innerText = '0 GDE ';
    document.getElementById('token-item-img2').setAttribute('src' , "../logonew.png") ;
    document.getElementById('right-img-2').setAttribute('src' , "../logonew.png") ;
    togglePopup6();


}
function usdcClick2(){
    document.getElementById('token-item-name2').innerText = 'USDC';
    document.getElementById('right-block1t2').innerText = '0 USDC ';
    document.getElementById('token-item-img2').setAttribute('src' , "../USDC.svg") ;
    document.getElementById('right-img-2').setAttribute('src' , "../USDC.svg") ;
    togglePopup6();


}
function usdtClick2(){
    document.getElementById('token-item-name2').innerText = 'USDT';
    document.getElementById('right-block1t2').innerText = '0 USDT ';
    document.getElementById('token-item-img2').setAttribute('src' , "../USDT.svg") ;
    document.getElementById('right-img-2').setAttribute('src' , "../USDT.svg") ;
    togglePopup6();


}