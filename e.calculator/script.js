(function(){
    "use strict";
    const next = document.getElementById("next");

    // next.addEventListener('click',function(evt){
    //     evt.preventDefault();
    //     if()
    // });

}());

function material_calculation(){
    var weight_3dprint = parseFloat(document.getElementById("weight_3dprint_input").value)/1000;
    var support_3dprint = parseFloat(document.getElementById("support_3dprint_input").value)/100 * weight_3dprint;
    support_3dprint = support_3dprint; 
    // .toFixed(4)
    var weight_support_3dprint = weight_3dprint+support_3dprint;
    var total_weight = [support_3dprint, weight_support_3dprint];

    return total_weight;
// alert(support_3dprint);
};

function PLA_material(){
    var emb_energy_PLA = ((49+54)/2+(0.475+0.525)/2);
    var material_calculation = this.material_calculation();
    var support_3dprint = material_calculation[0];
    var weight_support_3dprint = material_calculation[1];
    alert(weight_support_3dprint.toFixed(4));


}; 