
// laoder

const preloader = document.querySelector('.preloader');
const body = document.querySelector('body')


window.addEventListener('pageshow',()=>{
    preloader.classList.add("preloader-none")
    body.classList.remove("hiden")
})

//hamburger menu//

const hamburgerButton = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.navbar');

hamburgerButton.addEventListener('click',()=>{
    navLinks.classList.toggle('links-show');
})

// live time

const date = document.getElementById("date");

date.innerHTML = "@"+ " "+ new Date().getFullYear();

// scroll effects

AOS.init({
    duration: 1000
  });

// video play pouse

const video = document.querySelectorAll('.video')

video.forEach(item => {
    item.addEventListener('click', () => {
        if (video[0].paused){
            video[0].play();
            video[1].style.display = 'none'
        }else {
            video[0].pause(); 
            video[1].style.display = 'block'
        }
    })
  })

//   about data counter

function updateAboutCounter(){
    const counters = document.querySelectorAll('.counter');
    const speed = 400;
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
    
            const inc = target / speed;
    
            if (count < target) {
                counter.innerText = Math.ceil (count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
    
        updateCount();
    });
}

window.addEventListener("scroll",  ()=> {
    const scrollHeight = window.pageYOffset;   
    if(scrollHeight > 2230){
            updateAboutCounter()
    }
})

// smooth scroll

const header =  document.querySelector(".header");

const headerHeight = header.getBoundingClientRect().height;

const linksA = document.querySelectorAll(".links-a");

const scrollLinks =  document.querySelectorAll(".navbar");

scrollLinks.forEach(function (link) {

  link.addEventListener("click", function (e) {
    e.preventDefault();
    
    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id); 

    let position =  element.offsetTop - headerHeight;

    window.scrollTo({
        
        top: position,
        left:0,
        behavior: "smooth"

    });

    linksA.forEach((item)=>{
      item.classList.remove("active");
    })
    
    e.target.classList.add("active");

  })
})

//top link scroll

const upArrow = document.querySelector('.to-top-arrow');

window.addEventListener("scroll",()=>{

  const scrollHeight = window.pageYOffset;

  if(scrollHeight > 700){

    upArrow.classList.add("up-arrow-display-block");

  }else{

    upArrow.classList.remove("up-arrow-display-block");

  }

  upArrow.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
      });
  })

  const moreButton = document.querySelector('.button-more');

  moreButton.addEventListener('click',()=>{
    window.scrollTo({
        top:860,
        left:0,
        behavior: "smooth"
      });
  })
  

})

///swiper.js

var swiper = new Swiper('.swiper-container', {

    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      }
    }
  });

  function getDirection() {
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
  }
