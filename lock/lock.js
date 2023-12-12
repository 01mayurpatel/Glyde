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

var W42 = document.getElementById('42-w');
var W20 = document.getElementById('20-w');
var W10 = document.getElementById('10-w');
var W2 = document.getElementById('2-w');

var durationInput = document.getElementById('duration-input')
var lockTime = document.getElementById('lock-time')
var lockAfter = document.getElementById('unlock-after')


function weekfunc42(){
lockTime.innerText = '294 Days';

// Get the current UTC time
const currentUTC = new Date();

// Calculate the date and time exactly after 292 days
const futureUTC = new Date(currentUTC);
futureUTC.setDate(currentUTC.getDate() + 292);

// Extract individual components
const futureYear = futureUTC.getUTCFullYear();
const futureMonth = futureUTC.getUTCMonth() + 1; // Months are zero-based, so add 1
const futureDay = futureUTC.getUTCDate();
var futureHour = futureUTC.getUTCHours();
const futureMinute = futureUTC.getUTCMinutes();


var editt = `${futureDay}/${futureMonth}/${futureYear} `
if(futureHour >= 12){
    futureHour = futureHour-12;
    
    editt = editt + `${futureHour} : ${futureMinute} PM`;
}else{
   
   
    editt = editt + `${futureHour} : ${futureMinute} AM`;
}

lockAfter.innerText = editt;
durationInput.value= '294';

}

function weekfunc20(){
    lockTime.innerText = '140 Days';
    
    // Get the current UTC time
    const currentUTC = new Date();
    
    // Calculate the date and time exactly after 292 days
    const futureUTC = new Date(currentUTC);
    futureUTC.setDate(currentUTC.getDate() + 140);
    
    // Extract individual components
    const futureYear = futureUTC.getUTCFullYear();
    const futureMonth = futureUTC.getUTCMonth() + 1; // Months are zero-based, so add 1
    const futureDay = futureUTC.getUTCDate();
    var futureHour = futureUTC.getUTCHours();
    const futureMinute = futureUTC.getUTCMinutes();
    
    
    var editt = `${futureDay}/${futureMonth}/${futureYear} `
    if(futureHour >= 12){
        futureHour = futureHour-12;
        
        editt = editt + `${futureHour} : ${futureMinute} PM`;
    }else{
       
       
        editt = editt + `${futureHour} : ${futureMinute} AM`;
    }
    
    lockAfter.innerText = editt;
    durationInput.value= '140';
    
    }

    function weekfunc10(){
        lockTime.innerText = '70 Days';
        
        // Get the current UTC time
        const currentUTC = new Date();
        
        // Calculate the date and time exactly after 292 days
        const futureUTC = new Date(currentUTC);
        futureUTC.setDate(currentUTC.getDate() + 70);
        
        // Extract individual components
        const futureYear = futureUTC.getUTCFullYear();
        const futureMonth = futureUTC.getUTCMonth() + 1; // Months are zero-based, so add 1
        const futureDay = futureUTC.getUTCDate();
        var futureHour = futureUTC.getUTCHours();
        const futureMinute = futureUTC.getUTCMinutes();
        
        
        var editt = `${futureDay}/${futureMonth}/${futureYear} `
        if(futureHour >= 12){
            futureHour = futureHour-12;
            
            editt = editt + `${futureHour} : ${futureMinute} PM`;
        }else{
           
           
            editt = editt + `${futureHour} : ${futureMinute} AM`;
        }
        
        lockAfter.innerText = editt;
        durationInput.value= '70';
        
        }

        function weekfunc2(){
            lockTime.innerText = '14 Days';
            
            // Get the current UTC time
            const currentUTC = new Date();
            
            // Calculate the date and time exactly after 292 days
            const futureUTC = new Date(currentUTC);
            futureUTC.setDate(currentUTC.getDate() + 14);
            
            // Extract individual components
            const futureYear = futureUTC.getUTCFullYear();
            const futureMonth = futureUTC.getUTCMonth() + 1; // Months are zero-based, so add 1
            const futureDay = futureUTC.getUTCDate();
            var futureHour = futureUTC.getUTCHours();
            const futureMinute = futureUTC.getUTCMinutes();
            
            
            var editt = `${futureDay}/${futureMonth}/${futureYear} `
            if(futureHour >= 12){
                futureHour = futureHour-12;
                
                editt = editt + `${futureHour} : ${futureMinute} PM`;
            }else{
               
               
                editt = editt + `${futureHour} : ${futureMinute} AM`;
            }
            
            lockAfter.innerText = editt;
            durationInput.value= '14';
            
            }