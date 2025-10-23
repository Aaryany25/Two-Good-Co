const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function ProductAnimation(){
     var boxes= document.querySelectorAll(".box")
boxes.forEach(function(box){
var circle = box.querySelector(".whitecircle")

 box.addEventListener("mouseenter",function(){
    // alert("hey")
gsap.to(circle,{
    opacity:1,
    scale:1
})
 })
   box.addEventListener("mouseleave", function() {
   gsap.to(circle,{
    opacity:0,
    scale:0
})
  });
 box.addEventListener("mousemove", function(dets) {
    gsap.to(circle, {
      left: dets.offsetX,  // use offsetX/Y to position relative to the box
      top: dets.offsetY,
    //   duration: 0.3,
    //   ease: "power3.out"
    });
  });
})

}
function LoadingAnimation(){
    var tl = gsap.timeline()
tl.from("#navbar",{
    opacity:0,
    duration:0.8,
    delay:0.2,
    y:-150,
    stagger:2
})
tl.from("#page1 h1",{
y:100,
opacity:0,
duration:0.3,
stagger:0.2

})
t1.from("mainImg",{
    opacity:0,
    scale:0,
    delay:3,
duration:3
})
}
ProductAnimation()
LoadingAnimation()