# My Portfolio
My official portfolio website

## Lessons Learned
My first project built with Sass, I thoroughly enjoyed using partials to organise my code into files aswell as implementing nesting to keep different elements and selectors in one place.

It was my first in-depth dive into using Gsap animation and I learnt a lot about scrolltrigger properties and using the `matchMedia()` method to only apply animations at certain screen widths which was a challenging problem to overcome.

Lastly, I learnt how to use the navigator objects clipboard property to copy content to the users clipboard.

## challenges I faced
My biggest challenge was getting animation to stop working on mobile screen sizes as it was breaking my mobile menu, eventually I managed to overcome this with both the `matchMedia()` and `saveStyles()` methods.

Another issue I had was that my mobile menu wouldn't close when navigating from menu to a section of the portfolio, I managed to fix this pretty quick using a simple event listener to remove the mobile menu class when clicking links.

## Features Included
* loading page with animation using the JS load event
* name has a typing effect animation on inital load using setInterval and the slice method
* square design element floats to position on initial load via Gsap animation
* all other content fades in on scroll via the Gsap scrollTrigger plugin
* social/contact icons fix to side when user starts scrolling via the Gsap scrollTrigger plugin
* button to go back to the top of page displays when user starts scrolling via the Gsap scrollTrigger plugin
* arrow on hero page moves up and down infinitely via the CSS keyframes animation. There was no need for Gsap for this as it was just a simple animation
* form spree API used to send form submissions to my inbox via the HTTP POST method
* fully responsive

## To Do
* Make the on load animations load faster for mobile. Currently they are work according to the way it is set out for desktop - my name loads first and then the squares and then the rest of the content. For mobile I have used display: none; for the squares but the animation is still running in the background it seems even though you can't see it hence the rest of the content loads a couple seconds after the name. To fix this I would need to use the JavaScript `matchMedia()` method to create a separate animation for the inital load on mobile.

## Get started
If you wish to contribute to my portfolio...

from your command line, first clone this repo:

`$ git clone https://github.com/Ambareen15/ambareens-portfolio`

