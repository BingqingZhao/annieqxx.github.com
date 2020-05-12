(function(){
    "use strict";

        const Printing = document.getElementById("Printing");
        const print = document.getElementById("3D_Printing");
        const Cutting = document.getElementById("Cutting");
        const cut = document.getElementById("Laser_Cutting");
        const chart = document.getElementById("chart");

        // const manu = document.getElementById("manu");
        // const trans = document.getElementById("trans");
        // const use = document.getElementById("use");
        // const end = document.getElementById("end");

        // const Manu = document.getElementsById("Manufacturing");
        // const Trans = document.getElementsById("Transportation");
        // const Use = document.getElementsById("Use phase");
        // const End = document.getElementsById("End");

        Printing.addEventListener("click", function(){
            print.setAttribute('class', 'visible');
            cut.setAttribute('class', 'invisible');
            chart.setAttribute('class', 'visible');

            // Manu.setAttribute('class', 'visible');
            // Trans.setAttribute('class', 'invisible');
            // Use.setAttribute('class', 'invisible');
            // End.setAttribute('class', 'invisible');
        });

        Cutting.addEventListener("click", function(){
            print.setAttribute('class', 'invisible');
            cut.setAttribute('class', 'visible');
            chart.setAttribute('class', 'visible');
            
            // Manu.setAttribute('class', 'visible');
            // Trans.setAttribute('class', 'invisible');
            // Use.setAttribute('class', 'invisible');
            // End.setAttribute('class', 'invisible');
        });

        // manu.addEventListener("click", function(){
        //     Manu.setAttribute('class', 'visible');
        //     Trans.setAttribute('class', 'invisible');
        //     Use.setAttribute('class', 'invisible');
        //     End.setAttribute('class', 'invisible');
        // });

        // trans.addEventListener("click", function(){
        //     Manu.setAttribute('class', 'invisible');
        //     Trans.setAttribute('class', 'visible');
        //     Use.setAttribute('class', 'invisible');
        //     End.setAttribute('class', 'invisible');
        // });

        // use.addEventListener("click", function(){
        //     Manu.setAttribute('class', 'invisible');
        //     Trans.setAttribute('class', 'invisible');
        //     Use.setAttribute('class', 'visible');
        //     End.setAttribute('class', 'invisible');
        // });

        // end.addEventListener("click", function(){
        //     Manu.setAttribute('class', 'invisible');
        //     Trans.setAttribute('class', 'invisible');
        //     Use.setAttribute('class', 'invisible');
        //     End.setAttribute('class', 'visible');
        // });


    // function material_calculation(){
    //     const weight_3dprint = parseFloat(document.getElementById("weight_3dprint_input").value)/1000;
    //     const support_3dprint = parseFloat(document.getElementById("support_3dprint_input").value)/100 * weight_3dprint;
    //     support_3dprint = support_3dprint; 
    //     // .toFixed(4)
    //     const weight_support_3dprint = weight_3dprint+support_3dprint;
    //     const total_weight = [support_3dprint, weight_support_3dprint];
    
    //     return total_weight;
    //     // alert(support_3dprint);
    // };
    
    // function PLA_material(){
    //     let emb_energy_PLA = ((49+54)/2+(0.475+0.525)/2);
    //     const material_calculation = this.material_calculation();
    //     let support_3dprint = material_calculation[0];
    //     const weight_support_3dprint = material_calculation[1];
    //     alert(weight_support_3dprint.toFixed(4));
    // }; 

}());

