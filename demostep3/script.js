var image=[];
var time=3000;
var i=0;
image[0]="img/j1.png";
image[1]="img/j2.png";
image[2]="img/j3.png";

function changeImg(){
    document.getElementById("slide").src=image[i];
    if(i<image.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("changeImg()", time);
}
window.onload=changeImg;