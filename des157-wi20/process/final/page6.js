(function(){ 
    "use strict";

      document.getElementById("myform").addEventListener("submit", function(event){
        event.preventDefault();
        const formData = document.querySelectorAll("input[type=text]");
        const words = [];
        for( let i=0; i<formData.length; i++){
            words.push(formData[i].value);    
        }
        console.log(words);
        makeMadLib(words);

    });

    //This function takes an array input, then constructs the madlib, peppering
        //in the user's words where necessary.
        function makeMadLib(theWords){
            let newNum = theWords[0] - 2;
            let madlib;
        
           // const madlib = `Can you try to reduce to ${newNum} days per week?`; 

            if(newNum <= 0){
                madlib = `You are getting a good job in reducing emissions!`; 
            }else if (newNum > 0){
                madlib = `Can you try to reduce to ${newNum} days per week?`;
            }else{
                madlib = `Please type a number!`;
            }

            //Get the madlib container
            const mlContainer = document.getElementById('madlib');

            //Change the guts of the container to your madlib
            mlContainer.innerHTML = `<p>${madlib}</p>`;

            //change the class on the madlib container so you can see it.
            mlContainer.setAttribute("class", "visible");
        }



}());