var song="";
var leftWristX=0;
var leftWristY=0;
var rightWristX=0;
var rightWristY=0;
function preload(){
    song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,600,500)
}
function play(){
    song.play();
    song.setVolume(0.5);
    song.rate(1);
}
function modelLoaded(){
    console.log("poseNet is inistilled");
}
function gotPoses(results){
    console.log("i am inside got pose");
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log(leftWristX);
    }
}