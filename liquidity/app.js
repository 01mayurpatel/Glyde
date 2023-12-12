document.querySelector('.hamburger').addEventListener('click', function() {
    let menu = document.querySelector('.sticky-menu');
    let outer = document.querySelector('.outer');
    let sec1 = document.querySelector('.heading');
    let sec2 = document.querySelector('.swapcard');
    let dash = document.querySelector('.dash');
    
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
       if(window.innerWidth > 500){
        outer.style.paddingLeft = '0rem';  // Reset padding to .outer
        sec1.style.left = '152px';  // Reset margin-left to its default value
        
        sec2.style.left = '90px';
        sec2.style.width = '90%';

        dash.style.fontSize = '16px';

        
       }
       else if(window.innerWidth<500){
        
        document.body.style.overflow = 'auto';
        }
    } else {
        menu.classList.add('active');
        if(window.innerWidth > 500){
            outer.style.paddingLeft = '235px';  // Add padding to .outer
        sec1.style.left = '387px';  // Set margin-left to -450px
        
        sec2.style.left = '325px';
        sec2.style.width = '75%';

        dash.style.fontSize = '12px';
    }
    else if(window.innerWidth<500){
        
        document.body.style.overflow = 'hidden';
            // document.body.style.overflow = 'auto';
            }
    }
});
