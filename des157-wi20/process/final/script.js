window.addEventListener('load',function(){
    //How many slides?
    const slideCount = document.querySelectorAll('#slider-wrapper ul li').length;
    //How wide is each slide?
    const slideWidth = document.querySelector('#slider-wrapper').offsetWidth;
    //Total width of the slider
    // const totalWidth = slideCount * slideWidth + 'px';
    //Slide DOM element
    const slider = document.querySelector('#slider-wrapper ul');
    //Next button
    const next = document.getElementById('next');
    //Previous button
    const previous = document.getElementById('prev');

    //Upper left corner of slider
    let leftPosition = 0;
    //to keep  track of each slider
    let counter = 0;
    //sets the width of the slider (which is also in the CSS)
    // slider.style.width = totalWidth;


    next.addEventListener('click',function(evt){
        evt.preventDefault();
        counter++;
        console.log(counter);
        if(counter == slideCount){
            counter = 0;
            leftPosition = 0;
            slider.style.left = leftPosition;
        } else {
            leftPosition = `-${counter * slideWidth}px`;
            slider.style.left = leftPosition;
        }
    });

    previous.addEventListener('click',function(evt){
        evt.preventDefault();
        counter--;
        if(counter < 0){
            counter = slideCount - 1;
            leftPosition = `-${counter * slideWidth}px`;
            slider.style.left = leftPosition;
        } else {
            leftPosition = `-${counter*slideWidth}px`;
            slider.style.left = leftPosition;
        }
    });

});