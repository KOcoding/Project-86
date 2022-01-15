var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
player_x=200;
player_y=100;
 var player_object="";
function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg",function(Img)
    {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left:player_x
        });
       canvas.add(player_object); 
    });	
	
}

function Play_Sound(){
	x.play();
}
