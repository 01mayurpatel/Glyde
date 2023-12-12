document.querySelector('.hamburger').addEventListener('click', function() {
    let menu = document.querySelector('.sticky-menu');
    let outer = document.querySelector('.outer');
    let sec1 = document.querySelector('.heading');
    let sec2 = document.querySelector('.stakecards');
    let sec3 = document.querySelector('.botcard');
    let sec4 = document.querySelector('.farmsduo');

    
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        if(window.innerWidth > 500){
            outer.style.paddingLeft = '0rem';  // Reset padding to .outer
        sec1.style.left = '0px';  // Reset margin-left to its default value
        
        sec2.style.left = '213px';
        sec2.style.width = '71.8%';


        sec3.style.left = '215px';
        sec3.style.width = '71.8%';

        sec4.style.left = '150px';
        sec4.style.width = '50%';
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
