let fifthPage = document.getElementById("fifthpage");
let context = fifthPage.getContext("2d");

let image = new Image();
image.src = "decoration.png";
image.onload = function () {
  context.drawImage(image,0,0)
}

context.font = "50px Arial"
context.fillText("Här kommer lite text",50,200);
context.fillRect(0,0,100,100);
