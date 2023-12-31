let gsapScrollTrigger = function gsapScrollTrigger(){gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
gsapScrollTrigger()


let clutter = ""

document.querySelector("#page2>h1").textContent.split(" ").forEach(function(element){
  clutter += `<span> ${element} </span>`

  document.querySelector("#page2>h1").innerHTML = clutter
});

gsap.to("#page2>h1>span",{
  scrollTrigger:{
    trigger:"#page2>h1>span",
    scroller:"#main",
    start:"top 70%",
    end:"bottom 40%",
    scrub:.5,
  },
  stagger:.2,
  color:"#fff"
})


function canvas() {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    ./assets/images/frames00007.png   //Remove the part ("/assets/images") from each image address to follow the address in the repository.
    ./assets/images/frames00010.png
    ./assets/images/frames00013.png
    ./assets/images/frames00016.png
    ./assets/images/frames00019.png
    ./assets/images/frames00022.png
    ./assets/images/frames00025.png
    ./assets/images/frames00028.png
    ./assets/images/frames00031.png
    ./assets/images/frames00034.png
    ./assets/images/frames00037.png
    ./assets/images/frames00040.png
    ./assets/images/frames00043.png
    ./assets/images/frames00046.png
    ./assets/images/frames00049.png
    ./assets/images/frames00052.png
    ./assets/images/frames00055.png
    ./assets/images/frames00058.png
    ./assets/images/frames00061.png
    ./assets/images/frames00064.png
    ./assets/images/frames00067.png
    ./assets/images/frames00070.png
    ./assets/images/frames00073.png
    ./assets/images/frames00076.png
    ./assets/images/frames00079.png
    ./assets/images/frames00082.png
    ./assets/images/frames00085.png
    ./assets/images/frames00088.png
    ./assets/images/frames00091.png
    ./assets/images/frames00094.png
    ./assets/images/frames00097.png
    ./assets/images/frames00100.png
    ./assets/images/frames00103.png
    ./assets/images/frames00106.png
    ./assets/images/frames00109.png
    ./assets/images/frames00112.png
    ./assets/images/frames00115.png
    ./assets/images/frames00118.png
    ./assets/images/frames00121.png
    ./assets/images/frames00124.png
    ./assets/images/frames00127.png
    ./assets/images/frames00130.png
    ./assets/images/frames00133.png
    ./assets/images/frames00136.png
    ./assets/images/frames00139.png
    ./assets/images/frames00142.png
    ./assets/images/frames00145.png
    ./assets/images/frames00148.png
    ./assets/images/frames00151.png
    ./assets/images/frames00154.png
    ./assets/images/frames00157.png
    ./assets/images/frames00160.png
    ./assets/images/frames00163.png
    ./assets/images/frames00166.png
    ./assets/images/frames00169.png
    ./assets/images/frames00172.png
    ./assets/images/frames00175.png
    ./assets/images/frames00178.png
    ./assets/images/frames00181.png
    ./assets/images/frames00184.png
    ./assets/images/frames00187.png
    ./assets/images/frames00190.png
    ./assets/images/frames00193.png
    ./assets/images/frames00196.png
    ./assets/images/frames00199.png
    ./assets/images/frames00202.png
 `;
  return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.5,
    trigger: `#page3`,
    //   set start end according to preference
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  // markers:true,
  scroller: `#main`,
  //   set start end according to preference
  start: `top top`,
  end: `600% top`,
});


}
canvas()
