(function(){ 
    'use strict'
    var sec1= document.querySelector('#sec1');
    var sec2= document.querySelector('#sec2');
    var sec3= document.querySelector('#sec3');
    
    var box=document.querySelector('#box');
    
    var close=document.querySelector('#close');
    var close2=document.querySelector('#close2');
    var close3=document.querySelector('#close3');
    
    
    sec1.addEventListener('click',function(){
      box.style.display="block";
    });
    sec2.addEventListener('click',function(){
      console.log('sec2 clicked');
      box2.style.display="block";
    });
    sec3.addEventListener('click',function(){
      box3.style.display="block";
    });
    
    
    close.addEventListener('click',function(){
      box.style.display="none"
    }, false);
    
    close2.addEventListener('click',function(){
      box2.style.display="none"
    }, false);
    
    close3.addEventListener('click',function(){
      box3.style.display="none"
    }, false);
    }());
    