(function() {
  var gemPics = document.getElementsByClassName("gemImg");
  for (var i = 0; i < gemPics.length; i++) {
    gemPics[i].childNodes[3].innerHTML = "<span>" + currentGems[i].amount + "</span>";
    //console.log(gemPics[i], );
  }
  console.log(currentGems);
  //console.log(gemPics[0].gemImg);
})();
