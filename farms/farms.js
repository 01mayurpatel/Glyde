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

var flag1 = false;
var flag2 = false;
var flag3 = false;
var flag4 = false;
var flag5 = false;

var diappear1 = document.getElementById('disappear-1');
var diappear2 = document.getElementById('disappear-2');
var diappear3 = document.getElementById('disappear-3');
var diappear4 = document.getElementById('disappear-4');
var diappear5 = document.getElementById('disappear-5');
var dis21 = document.getElementById('dis21');
var dis22 = document.getElementById('dis22');
var dis23 = document.getElementById('dis23');
var dis24 = document.getElementById('dis24');
var dis25 = document.getElementById('dis25');
function toggleDetail1(){
    if(!flag1){
        diappear1.style.display = 'flex';
        diappear2.style.display = 'none';
        diappear3.style.display = 'none';
        diappear4.style.display = 'none';
        diappear5.style.display = 'none';
        dis21.style.height = 'fit-content';
        // dis24.style.height = 'fit-content';
        dis23.style.height = '90px';
        dis22.style.height = '90px';
        dis24.style.height = '90px';
        dis25.style.height = '90px';
        flag1 = true;
        flag2 = false;
        flag3 = false;
        flag4 = false;
        flag5= false;
        
    } else{
        diappear1.style.display = 'none';
        diappear2.style.display = 'none';
        diappear3.style.display = 'none';
        diappear4.style.display = 'none';
        diappear5.style.display = 'none';
        flag1 = false;
        dis21.style.height = '90px';


        
    }
}
function toggleDetail2(){
    if(!flag2){
        diappear1.style.display = 'none';
        diappear2.style.display = 'flex';
        diappear3.style.display = 'none';
        diappear4.style.display = 'none';
        diappear5.style.display = 'none';
        dis22.style.height = 'fit-content';
        // dis24.style.height = 'fit-content';
        dis23.style.height = '90px';
        dis24.style.height = '90px';
        dis21.style.height = '90px';
        dis25.style.height = '90px';

        flag2 = true;
        flag1 = false;
        flag3 = false;
        flag4 = false;
        flag5 = false;
    } else{
        diappear1.style.display = 'none';
        diappear2.style.display = 'none';
        diappear3.style.display = 'none';
        diappear4.style.display = 'none';
        diappear5.style.display = 'none';
        flag2 = false;
        dis22.style.height = '90px';


        
    }
}


function toggleDetail3(){
    if(!flag3){
        diappear1.style.display = 'none';
        diappear2.style.display = 'none';
        diappear3.style.display = 'flex';
        diappear4.style.display = 'none';
        diappear5.style.display = 'none';
        dis23.style.height = 'fit-content';
        // dis24.style.height = 'fit-content';
        dis24.style.height = '90px';
        dis22.style.height = '90px';
        dis21.style.height = '90px';
        dis25.style.height = '90px';
        flag1 = false;
        flag2 = false;
        flag3 = true;
        flag4 = false;
        flag5 = false;
        
    } else{
        diappear1.style.display = 'none';
        diappear2.style.display = 'none';
        diappear3.style.display = 'none';
        diappear4.style.display = 'none';
        diappear5.style.display = 'none';
        flag3 = false;

        dis23.style.height = '90px';

        
    }
}
function toggleDetail4(){
    if(!flag4){
        diappear1.style.display = 'none';
        diappear2.style.display = 'none';
        diappear3.style.display = 'none';
        diappear4.style.display = 'flex';
        diappear5.style.display = 'none';
        dis24.style.height = 'fit-content';
        dis23.style.height = '90px';
        dis22.style.height = '90px';
        dis21.style.height = '90px';
        dis25.style.height = '90px';
        
        flag1 = false;
        flag2 = false;
        flag3 = false;
        flag4 = true;
        flag5 = false;
        
    } else{
        diappear1.style.display = 'none';
        diappear2.style.display = 'none';
        diappear3.style.display = 'none';
        diappear4.style.display = 'none';
        diappear5.style.display = 'none';
        flag4 = false;
        dis24.style.height = '90px';
        

        
    }
}


function toggleDetail5(){
    if(!flag5){
        diappear1.style.display = 'none';
        diappear2.style.display = 'none';
        diappear3.style.display = 'none';
        diappear5.style.display = 'flex';
        diappear4.style.display = 'none';
        dis25.style.height = 'fit-content';
        dis23.style.height = '90px';
        dis24.style.height = '90px';
        dis22.style.height = '90px';
        dis21.style.height = '90px';
        
        flag1 = false;
        flag2 = false;
        flag3 = false;
        flag4 = false;
        flag5 = true;
        
    } else{
        diappear1.style.display = 'none';
        diappear2.style.display = 'none';
        diappear3.style.display = 'none';
        diappear4.style.display = 'none';
        diappear5.style.display = 'none';
        flag5 = false;
        dis25.style.height = '90px';
        

        
    }
}