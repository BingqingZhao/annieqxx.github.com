//var colors=['#ccffaa','#0000aa','#aa0000','#ccff00','#00ffaa','#cc00aa'];

function setup() {
    var myCanvas = createCanvas();
    createCanvas(800, 250);
    strokeWeight(10);
    background('rgb(244,195,110)');
    myCanvas.parent(mySketch);
    
}
function draw() {
    //var number = random(0,colors.length);
    stroke('#1e2f42');
    line(mouseX,mouseY,pmouseX,pmouseY);
   
   if(mouseIsPressed){
        background('rgb(244,195,110)');
   }
}