document.querySelector('.hamburger').addEventListener('click', function() {
    let menu = document.querySelector('.sticky-menu');
    let outer = document.querySelector('.outer');
    let sec1 = document.querySelector('.referraltop');
    let sec2 = document.querySelector('.referaalbottom');
    let sec3 = document.querySelector('.circle1');
    let sec4 = document.querySelector('.circle2');
    let sec5 = document.querySelector('.circle3');

    
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        outer.style.paddingLeft = '0rem';  // Reset padding to .outer
        sec1.style.left = '153px';  // Reset margin-left to its default value
        sec1.style.width = '85%';
        
        sec2.style.left = '153px';
        sec2.style.width = '85%';


        sec3.style.right = '1230px';
        sec4.style.right = '810px';
        sec5.style.right = '390px';




    } else {
        menu.classList.add('active');
        outer.style.paddingLeft = '235px';  // Add padding to .outer
        sec1.style.left = '350px';  // Set margin-left to -450px
        sec1.style.width = '75%';
        
        sec2.style.left = '350px';
        sec2.style.width = '75%';


        sec3.style.right = '1080px';
        sec4.style.right = '700px';
        sec5.style.right = '340px';

    }
});
