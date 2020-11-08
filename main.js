var Family = ["Smith", "John Smith", "Jane Smith"];

var image = ["image.jpg","Father.jpg","Mother.png"];
var i=0;
function slide()
{document.getElementById("img").src=image[i];
document.getElementById("h2").innerHTML = Family[i];
 i++;
 if (i==3)
  {
    i=0
  }
}


