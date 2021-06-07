window.addEventListener('scroll', checkInView);
window.addEventListener('resize', checkInView);

function checkInView(){
   // current pageview position
   let windowHeight = window.innerHeight;
   let windowTop = window.pageYOffset;
   let windowBottom = windowTop + windowHeight;

   // Select all elements to be animated
   let elements = document.querySelectorAll('.animate');
   for(element of elements) {   
      // element offsets relative to viewport
      let elementRect = element.getBoundingClientRect();
      // check is item is in view
      if(elementRect.top < windowHeight && elementRect.bottom > 0 ){
         element.classList.add('fadeIn');
         console.log("check");
      }

   }


}
