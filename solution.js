var intervalDate = new Date("April 29, 2023 24:00:00").getTime();

var theTime = setInterval(function() {
  var todaysDate = new Date().getTime();
  var timeRemaining = intervalDate - todaysDate;
    
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
  document.getElementById("clockDiv").innerHTML = " " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
  if (timeRemaining < 0) {
    clearInterval(theTime);
    document.getElementById("clockDiv").innerHTML = "NO MORE";
  }
}, 1000);

const image1 = document.getElementById("image1");

image1.addEventListener('click', function(e){

  document.getElementById("modal-title").innerHTML = "Rasberry Chocolate Mousse Hearts"

  document.getElementById("text-page").innerHTML += "Thin crunchy outer casing of dark chocolate.";
  document.getElementById("text-page").innerHTML += " Filled with Chocolate Mousse and Fresh Rasberries and Sprinkles.";
  var gluten = " Not Gluten Free";
  document.getElementById("text-page").innerHTML += gluten.bold();

  var buttonModule = document.getElementById("closeButton"); 
    buttonModule.addEventListener('click', function(e){
        window.location.reload();
    })
})

const image2 = document.getElementById("image2");

image2.addEventListener('click', function(e){

  document.getElementById("modal-title").innerHTML = "Mint Oreo Cookie Chip Cookie"

  document.getElementById("text-page").innerHTML += "Moist chocolate filled layer of cookie.";
  document.getElementById("text-page").innerHTML += " With mint and oreo crumbles sprinkled in.";
  var gluten = " Not Gluten Free";
  document.getElementById("text-page").innerHTML += gluten.bold();

  var buttonModule = document.getElementById("closeButton"); 
    buttonModule.addEventListener('click', function(e){
        window.location.reload();
    })
})