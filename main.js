status = "";
objects = [];
object_name = "";

function setup(){
    video = createCapture(VIDEO);
    video.hide();
    canvas = createCanvas(380, 340)
    canvas.center();
}
function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    object_name = document.getElementById("object_name").value;
}
function modelLoaded(){
    console.log("Model Is Loaded")
    status = true;
}
function draw(){
    image(video, 0, 0, 380, 340);
}