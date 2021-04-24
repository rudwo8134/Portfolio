let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to('.rock', 6, {y:-300})
    .to('.girl', 6, {y:-200},"-=6")
    .fromTo('.bg1', 6, {y:-50},{y:0, duration:3},"-=6")
    .to('.content',6,{top:'0%'},"-=6")
    .fromTo('.content-image',{opacity:0}, {opacity:1,duration:6});


    let scene = new ScrollMagic.Scene({
        triggerElement: "section",
        duration:"200%",
        triggerHook:0,
    })
        .setTween(timeline)
        .setPin('section')
        .addTo(controller);

let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn")
let navBar = document.querySelector(".navbar")

menuBtn.onclick = function(){
    menuBtn.style.opacity ="0";
    menuBtn.style.pointerEvents="none"
    navBar.classList.add("active")
}
cancelB.onclick = function(){
    menuBtn.style.opacity ="0";
    menuBtn.style.pointerEvents="auto"
    navBar.classList.remove("active")
}