document.querySelector('.hamburger').addEventListener('click', function() {
    let menu = document.querySelector('.sticky-menu');
    let outer = document.querySelector('.outer');
    let sec1 = document.querySelector('.heading');
    let sec2 = document.querySelector('.balsumcon');
    let sec3 = document.querySelector('.graph');
    let sec4 = document.querySelector('.farmsduo');

    
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        if(window.innerWidth > 500){
            outer.style.paddingLeft = '0rem';  // Reset padding to .outer
        sec1.style.left = '0px';  // Reset margin-left to its default value
        
        sec2.style.left = '0px';
        sec2.style.width = '100%';


        sec3.style.left = '0px';
        sec3.style.width = '100%';

        sec4.style.left = '0px';
        sec4.style.width = '100%';
        document.body.style.overflow = 'auto';
        }


    } else {
        menu.classList.add('active');
       if(window.innerWidth > 500){
        outer.style.paddingLeft = '235px';  // Add padding to .outer
        sec1.style.left = '132px';  // Set margin-left to -450px
        
        sec2.style.left = '345px';
        sec2.style.width = '70%';


        sec3.style.left = '347px';
        sec3.style.width = '70%';

        sec4.style.left = '385px';
        sec4.style.width = '50%';
        document.body.style.overflow = 'hidden';
       }
    }
});
