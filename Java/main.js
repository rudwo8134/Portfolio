const toggleBtn = document.querySelector('.navibar_tglebtn');
const menu = document.querySelector('.navibar_menu');
const icons = document.querySelector('.navibar_icons');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})

// var tl = new TimelineMax({onUpdate:updatePercentage});
// const controller = new ScrollMagic.Controller();

// tl.from('#blockquote', .5, {x:200, opacity: 0})

// const scene = new ScrollMagic.Scene({
//     triggerEliment: ".sticky",
//     triggerHooks: "onLeave",
//     duration: "100%"
// })   
//     .setPin(".sticky")
//     .setTween(tl)
//     .addTo(controller);

// function updatePercentage(){
//     tl.progress();
//     console.log(tl.progress());
// }

var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('blockquote', .5, {x:200, opacity: 0});
tl.from('span', 1, { width: 0}, "=-.5");
tl.from('#main', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
tl.from('#sub2', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");
tl.from('#introeric', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");

tl2.from("#box", 1, {opacity: 0, scale: 0});
tl2.to("#box", .5, {left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)'})

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky",
            triggerHook: "onLeave",
            duration: "100%"
})
  .setPin(".sticky")
  .setTween(tl)
		.addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "blockquote"
})
  .setTween(tl2)
		.addTo(controller);


function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  console.log(tl.progress());
}




jQuery(document).ready(function($) {
    $(".scroll").click(function(event){            
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
    });
    });


    