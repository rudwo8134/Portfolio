const toggleBtn = document.querySelector('.navibar_tglebtn');
const menu = document.querySelector('.navibar_menu');
const icons = document.querySelector('.navibar_icons');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})

var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from('#blockquote', .5, {x:200, opacity: 0})

const scene = new ScrollMagic.Scene({
    triggerEliment: ".sticky",
    triggerHooks: "onLeave",
    duration: "100%"
})
    .setPin(".sticky")
    .setTween(tl)
    .addTo(controller);

function updatePercentage(){
    tl.progress();
    console.log(tl.progress());
}