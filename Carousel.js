 var indicators=document.getElementsByClassName('carousel_lines');
 var items=document.getElementsByClassName('carousel-item');
 var num=document.getElementById("carousel_sup");

 let myCarousel = document.querySelector('#Bosscut_Carousel');
 myCarousel.addEventListener('slide.bs.carousel', (event) => {
    indicators.item(event.from).classList.remove("active");
    indicators.item(event.to).classList.add("active");
    changeNumberAndLines();
 });



 /**function changeNumberAndLines() {
    for(i=0;i<5;i++){
        if(items[i].classList.contains("active")){
            //change corresponding indicator
            indicators[i].style.width="40px";
            indicators[i].style.border="2.5px solid red";
            indicators[i].style.boxShadow="rgba(238, 31, 39, 0.59) 0px 0px 22px 4px";

            //Remove change
            for(j=0;j<5;j++){
                if(j!=i){
                    indicators[j].style.width="35px";
                    indicators[j].style.border="1.5px solid white";
                    indicators[j].style.boxShadow="none";
                }
            }

            console.log(i);

            //change number
            num.innerHTML="0"+(i+1).toString();
        }
    }
 }**/

 function changeNumberAndLines() {
     for (i = 0; i < 5; i++) {
         if (indicators[i].classList.contains("active")) {
             //change corresponding indicator
             indicators[i].style.width = "45px";
             indicators[i].style.border = "3px solid rgba(255,0,0,255)";
             indicators[i].style.boxShadow = "rgba(238, 31, 39, 0.59) 0px 0px 22px 4px";
             num.innerHTML="0"+(i+1).toString();
         }
         else{
             indicators[i].style.width = "35px";
             indicators[i].style.border = "1.5px solid white";
             indicators[i].style.boxShadow = "none";
         }

             //console.log(i);
     }
 }

 changeNumberAndLines();