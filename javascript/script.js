const buttonScroll = document.querySelector('.button__scroll');
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2') 

buttonScroll.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect();
    
    section1.scrollIntoView({behavior: 'smooth'});
});

        


const enable = (e) => {
document.getElementById('burger').classList.toggle('open');
document.getElementById('nav').classList.toggle('nav-open');

}