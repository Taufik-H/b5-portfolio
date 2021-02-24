window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


const skew1 = document.querySelector('.skew1');
const skew2 = document.querySelector('.skew2');
window.addEventListener('scroll', function(){
    const value1 = -15 + window.scrollY/50;
    const value2 = 15 + window.scrollY/-50;
    skew1.style.transform = "skewY(" + value1 +"deg)";
    skew2.style.transform = "skewY(" + value2 +"deg)";
});

