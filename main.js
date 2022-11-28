function preload()
{

}
function setup()
{
canvas = createCanvas(700,550);
canvas.position(100,350);
video = createCapture(VIDEO);
video.hide();
}
function draw()
{
    image(video,150,100,400,350);
   
    fill("green");
    stroke("green");
    rect(600, 30, 55, 450);
    rect(50, 450, 605, 55);
    rect(50, 30, 605, 55);
    rect(50, 30, 55, 450);
    fill("red");
    stroke("red");
    circle(50, 40, 90,);
    circle(50, 500, 90,);
    circle(620, 500, 90,);
    circle(620, 30, 90,);
}
function apply_filter()
{
tint_color = document.getElementById("color_name").value;
}
function take_snapshot()
{
    save("myImage.png");
}