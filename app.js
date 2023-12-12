document.querySelector('.hamburger').addEventListener('click', function() {
    let menu = document.querySelector('.sticky-menu');
    let outer = document.querySelector('.outer');
    let sec2 = document.querySelector('.sec2');
    let sec3 = document.querySelector('.circled1');
    let sec4 = document.querySelector('.circled2');
    let sec5 = document.querySelector('.lsec1');
    let sec6 = document.querySelector('.sec6');
    
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        if(window.innerWidth>500){
            outer.style.paddingLeft = '0rem';  // Reset padding to .outer
        // sec2.style.transform = 'scale(1)';
        // sec2.style.marginLeft = '6%';  // Reset margin-left to its default value
          
        // sec3.style.right = '0';
        // sec4.style.right = '150px';

        // sec5.style.width = '50%';
        // sec5.style.marginRight = '8.6rem';
        // sec2.style.right = '0px';
        // sec2.style.top = '0px';
        // sec6.style.top = '2500px'
      }
      else if(window.innerWidth<500){
        
        document.body.style.overflow = 'auto';
        }

    } else {
        menu.classList.add('active');
      if(window.innerWidth > 500){
        outer.style.paddingLeft = '235px';  // Add padding to .outer
        // sec2.style.transform = 'scale(1)';
        // sec2.style.marginLeft = '15%';  // Set margin-left to -450px

        
        // sec2.style.right = '250px';
        // sec3.style.right = '250px';
        // sec4.style.right = '30px';

        // sec5.style.width = '80%';
        // sec5.style.marginRight = '2rem';

     
      }
      else if(window.innerWidth<500){
        
        document.body.style.overflow = 'auto';
        }

    }
});
