document.querySelector('.hamburger').addEventListener('click', function() {
    let menu = document.querySelector('.sticky-menu');
    let outer = document.querySelector('.outer');
    let sec1 = document.querySelector('.heading');
    let sec2 = document.querySelector('.middlerow');
    let sec3 = document.querySelector('.disappear');
    let sec4 = document.querySelector('.farmsduo');

    
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
       if(window.innerWidth > 500){
        outer.style.paddingLeft = '0rem';  // Reset padding to .outer
        sec1.style.left = '152px';  // Reset margin-left to its default value
        
        sec2.style.left = '127px';
        sec2.style.width = '90%';


        sec3.style.left = '150px';
        sec3.style.width = '86%';

        sec4.style.left = '150px';
        sec4.style.width = '50%';
        
       }
       else if(window.innerWidth<500){
        
        document.body.style.overflow = 'auto';
        }

    } else {
        menu.classList.add('active');
        if(window.innerWidth>500){
            outer.style.paddingLeft = '235px';  // Add padding to .outer
        sec1.style.left = '387px';  // Set margin-left to -450px
        
        sec2.style.left = '362px';
        sec2.style.width = '75%';


        sec3.style.left = '385px';
        sec3.style.width = '74%';

        sec4.style.left = '385px';
        sec4.style.width = '50%';
    }
    else if(window.innerWidth<500){
            document.body.style.overflow = 'hidden';
        
            // document.body.style.overflow = 'auto';
            }
    }
});
