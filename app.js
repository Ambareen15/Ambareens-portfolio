//loading screen
const loading = document.querySelector('.load');
window.addEventListener('load', () => {
    loading.classList.add('hide-load');

    setInterval(() => {
        typeText();
    }, 100)
});


// safari mobile menu colour optimisation
const bgCover = document.getElementById('bg-cover');

if(window.navigator.userAgent.includes("Safari")) {
    bgCover.setAttribute ('style', 'background-color: #3c3c4c !important;');
};


// name typing out in hero section
let typeee = document.getElementById('name');
let typeName = typeee.textContent;

let index = 0;

function typeText() {
     typeee.innerText = typeName.slice(0,index);
    index++;
};

// fade in animation
let tl = gsap.timeline({ defaults: {duration: 2 } });
let tl2 = gsap.timeline({ scrollTrigger: { trigger: "#about", start: "center bottom" } });
let tl3 = gsap.timeline({ scrollTrigger: { trigger: ".scroll-element-one", start: "center bottom" } });
let tl4 = gsap.timeline({scrollTrigger: { trigger: "#skills", start: "center bottom" } });
let tl5 = gsap.timeline({ scrollTrigger: { trigger: ".scroll-element-two", start: "center bottom" } });
let tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: `.single-project-one`,
        start: "center bottom"
    }
});

let tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: `.single-project-two`,
        start: "center bottom"
    }
});

let tl8 = gsap.timeline({
    scrollTrigger: {
        trigger: `.single-project-three`,
        start: "center bottom"
    }
});

let tl9 = gsap.timeline({
    scrollTrigger: {
        trigger: `.single-project-four`,
        start: "center bottom"
    }
});

let tl10 = gsap.timeline({ scrollTrigger: { trigger: "#form-section", start: "center bottom" } });


tl.from('.stagger', { opacity: 0, y: -20, stagger: .3, delay: 4.55 });
tl2.from(".fade", { opacity: 0, y: -20, stagger: .3, delay: .2, duration: 1 });
tl3.from(".scroll-element-one", { opacity: 0, y: -30, delay: .4, duration: 1 });
tl4.from(".fade-in", { opacity: 0, y: -20, stagger: .3, duration: 1.2 });
tl5.from(".scroll-element-two", { opacity: 0, y: -30, delay: .4, duration: 1 });

tl6.from('.project-info-one', { opacity: 0, y: 50, delay: .4 });
tl6.from('.project-img-one', { opacity: 0, y: 50, duration: 1 });

tl7.from('.project-info-two', { opacity: 0, y: 50, delay: .4 });
tl7.from('.project-img-two', { opacity: 0, y: 50, duration: 1 });

tl8.from('.project-info-three', { opacity: 0, y: 50, delay: .4 });
tl8.from('.project-img-three', { opacity: 0, y: 50, duration: 1 });

tl9.from('.project-info-four', { opacity: 0, y: 50, delay: .4 });
tl9.from('.project-img-four', { opacity: 0, y: 50, duration: 1 });

tl10.from('.fade-contact', { opacity: 0, y: -10, stagger: .3 });


// animate squares on hero section
let tlsq1 = gsap.timeline({ defaults: {duration: 1.75, opacity: 0,delay: 2.8 } });

tlsq1
.from('#Rectangle_29', { y: -20, x: 10 }, 'start')
.from('#Rectangle_24', { yPercent: -100 }, 'start' )
.from('#Rectangle_27', { yPercent: 0, xPercent: -50 }, 'start')
.from('#Rectangle_25', { yPercent: 20, xPercent: 50 }, 'start')
.from('#Rectangle_28', { yPercent: -100, xPercent: 0 }, 'start')
.from('#Rectangle_30', { yPercent: 200, xPercent: 0 }, 'start')
.from('#Rectangle_31', { yPercent: -20, xPercent: -10 }, 'start')
.from('#Rectangle_32', { yPercent: 20, xPercent: 30 }, 'start')
.from('#Path_86', { yPercent: 0, xPercent: 120 }, 'start')

// animate icons to fixed position on scroll after 500px screen-size

let hero = document.querySelector('.hero-section');

ScrollTrigger.saveStyles(".icons-section");

ScrollTrigger.matchMedia({"(min-width: 500px)": function() {
    let scrollIcons = gsap.timeline({
          scrollTrigger: {
          trigger: hero,
          start: "center center",
          end: "bottom center",
          scrub: true,
          onEnter() {
            hero.classList.add('fix-side');
        },
        onLeaveBack() {
            hero.classList.remove('fix-side');
        }
        }
      });
    scrollIcons.to(".icons-section", {x: -100});
  }
});

let scrollButton = gsap.timeline({
    scrollTrigger: {
    trigger: hero,
    start: "center center",
    end: "bottom center",
    scrub: true,
    onEnter() {
      hero.classList.add('show-btn');
  },
  onLeaveBack() {
      hero.classList.remove('show-btn');
  }
  }
});

// mobile menu
const mobileMenu = document.getElementById('toggle');
const navbar = document.querySelector('.icons-section');

mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('open-menu');
})

// make mobile menu close when nav link has been clicked on to go to that section of the page
const navButtons = document.querySelectorAll('#mobile-header nav ul li a');
const backToTopBtn = document.querySelector('.back-to-top');
navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        navbar.classList.remove('open-menu');
    })
})

backToTopBtn.addEventListener('click', () => {
    navbar.classList.remove('open-menu');
})


// copy to clipboard
const phoneContent = document.body.querySelector('.phone-btn');
const emailContent = document.body.querySelector('.email-btn');
const phonedata = phoneContent.getAttribute('data-id');
const emaildata = emailContent.getAttribute('data-id');
let copyEmail = document.querySelector('.email-copy');
let copyPhone = document.querySelector('.phone-copy');

phoneContent.addEventListener('click', () => {
  
    navigator.clipboard.writeText(phonedata);

    copyPhone.style.display = "block";

    setTimeout(() => {
        copyPhone.style.display = "none";
    }, 1250);
});

emailContent.addEventListener('click', () => {
  
    navigator.clipboard.writeText(emaildata);

    copyEmail.style.display = "block";

    setTimeout(() => {
        copyEmail.style.display = "none";
    }, 1250);
});

// clear form after submitting
// const form = document.getElementById('form');
// const formInput = document.querySelectorAll('.form-input');
// form.addEventListener('submit', () => {
//     formInput.forEach(input => {
//         input.value = "";
//     })
// });