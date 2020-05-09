(function(){
    "use strict";

        const Printing = document.getElementById("Printing");
        const print = document.getElementById("3D_Printing");
        const Cutting = document.getElementById("Cutting");
        const cut = document.getElementById("Laser_Cutting");

        Printing.addEventListener("click", function(){
            print.setAttribute('class', 'visible');
            cut.setAttribute('class', 'invisible');
        });

        Cutting.addEventListener("click", function(){
            print.setAttribute('class', 'invisible');
            cut.setAttribute('class', 'visible');
        });



        // function hola(x) {
        //     if(x == 0) {
        //         document.getElementById("3D_Printing").style.visibility="hidden";
        //         document.getElementById("Laser_Cutting").style.visibility="hidden";
        //         }

        //     if(x == 1) {
        //         alert(support_3dprint);
        //         document.getElementById("3D_Printing").setAttribute('class', 'visible');
        //         document.getElementById("Laser_Cutting").setAttribute('class', 'invisible');
        //         // document.getElementById("3D_Printing").style.visibility="visible";
        //         // document.getElementById("Laser_Cutting").style.visibility="hidden"; 
        //         }

        //     if(x == 2)  {
        //         document.getElementById("3D_Printing").style.visibility="hidden";
        //         document.getElementById("Laser_Cutting").style.visibility="visible"; 
        //     }
        // }
        // hola();

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

