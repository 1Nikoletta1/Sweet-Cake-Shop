function initiate(){
    var images=document.querySelectorAll('#picturesbox');

    for(var i=0; i<images.length; i++){
      images[i].addEventListener('dragstart', dragged, false);
    }

    drop=document.getElementById('dropbox');
    drop.addEventListener('dragenter', function(e){
      e.preventDefault(); 
    }, false);

    drop.addEventListener('dragover', function(e){
      e.preventDefault(); 
    }, false);

    drop.addEventListener('drop', dropped, false);
  }

function dragged(e){
    elem=e.target;
    e.dataTransfer.setData('Text', elem.getAttribute('id'));
  }

  function boom() {
    drop.innerHTML='<img src="images/hover.png" width="425" height="292">';
  }

function dropped(e){
  e.preventDefault();
  var id=e.dataTransfer.getData('Text');

  if(id=="image1"){
    var src=document.getElementById(id).src; 
    boom();
    drop.innerHTML='<img src="images/berries.png" width="450" height="350">';

  }

  if(id=="image2"){
    var src=document.getElementById(id).src; 
    drop.innerHTML='<img src="images/chocolate.png" width="425" height="292">';
  }

  if(id=="image3"){
    var src=document.getElementById(id).src; 
    drop.innerHTML='<img src="images/coffee.png" width="425" height="400">';
  }

  if(id=="image4"){
    var src=document.getElementById(id).src; 
    drop.innerHTML='<img src="images/strawberry.png" width="415" height="350">';
  }

  if(id=="image5"){
    var src=document.getElementById(id).src; 
    drop.innerHTML='<img src="images/whitechocolate.png" width="400" height="350">';
  }

  if(id=="image6"){
    var src=document.getElementById(id).src; 
    drop.innerHTML='<img src="images/mango.png" width="550" height="350">';
  }

  if(id=="image7"){
    var src=document.getElementById(id).src; 
    drop.innerHTML='<img src="images/cherry.png" width="450" height="350">';
  }

  if(id=="image8"){
    var src=document.getElementById(id).src; 
    drop.innerHTML='<img src="images/lemon.png" width="500" height="330">';
  }

  if(id=="image9"){
    var src=document.getElementById(id).src; 
    drop.innerHTML='<img src="images/caramel.png" width="425" height="280">';
  }
  
  }
  
  window.addEventListener('load', initiate, false);