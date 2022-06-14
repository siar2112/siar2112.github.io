import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';



const style_img=document.querySelectorAll(".Photo_gallery img");
console.log(style_img.length)

style_img.forEach((image)=>{
    const animated_Gallery= new ScrollTimeline({
        scrollOffsets: [
            {target: image, edge: "end", threshold: "0"},
            {target: image, edge: "start", threshold: "1"}
        ],
    });
    image.animate({
        transform:[
            "perspective(1000px) rotateX(45deg)",
            "perspective(1000px rotate(0)"
        ],
        opacity:["0","1"],
        },
        {
            duration:1,
            easing:"linear",
            timeline:animated_Gallery,
        }
    );
});



/**style_img.animate({
        transform: [
            "perspective(1000px) rotateX(45deg)",
            "perspective(1000px) rotate(0)",],
        opacity:["0",1],
},
{
    duration:1,
    easing:"linear",
    timeline:style_img_timeline,
}
);**/


const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const text = entry.target.querySelector('.about_us_text');
    const image=entry.target.querySelector('.about_us_img');

    if (entry.isIntersecting) {
      text.classList.add('rotate');
      image.classList.add('fade');
      //console.log("yes");
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    // We're not intersecting, so remove the class!
    text.classList.remove('rotate');
    image.classList.remove('fade');
  });
});

observer1.observe(document.querySelector('.about_us'));


const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const style_img = entry.target.querySelector('.style_img ul');

    if (entry.isIntersecting) {
      style_img.classList.add('come_from_left');
      console.log("yes");
	  return; // if we added the class, exit the function
    }
    console.log("no more");
    // We're not intersecting, so remove the class!
    style_img.classList.remove('come_from_left');
  });
});

observer2.observe(document.querySelector('.style_img'));



const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const book = entry.target.querySelector('.Book_forms');

    if (entry.isIntersecting) {
      book.classList.add('fade');
      //console.log("yes");
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    // We're not intersecting, so remove the class!
    book.classList.remove('fade');
  });
});

observer3.observe(document.querySelector('.BOOK'));


const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const title = entry.target.querySelector('.Become_Barber_text h1');
    const text = entry.target.querySelector('.Become_Barber_text p');
    const img = entry.target.querySelector('.Become_Barber_img');

    if (entry.isIntersecting) {
      img.classList.add('fade');
     //text.classList.add('come_from_left');
      text.classList.add('growing-font');
      title.classList.add('change_color_RY');
      //console.log("yes");
	  return; // if we added the class, exit the function
    }
    //console.log("no more");
    // We're not intersecting, so remove the class!
    img.classList.remove('fade');
    //text.classList.remove('come_from_left');
    text.classList.remove('growing-font');
    title.classList.remove('change_color_RY');
  });
});

observer4.observe(document.querySelector('.Become_Barber'));
