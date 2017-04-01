// js for the popout nav
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var bangArray = ["dropdown1" , "dropdown18", "dropdown27" ,"dropdown38" , "dropdown42", "dropdown43", "dropdown44" , "dropdown47" , "dropdown48", "dropdown49" ,"dropdown50" , "dropdown51", "dropdown52", "dropdown53"];
var knockArray = ["dropdown2" , "dropdown19", "dropdown37" ,"dropdown38" , "dropdown39" , "dropdown47" , "dropdown48", "dropdown49" ,"dropdown50" , "dropdown51", "dropdown52", "dropdown53"];
var aviaryArray = [ "dropdown3" , "dropdown20" , "dropdown38" , "dropdown39" , "dropdown47" , "dropdown48", "dropdown49" ,"dropdown50" , "dropdown51"];
var interurbanArray = ["dropdown4" , "dropdown21" , "dropdown46", "dropdown36" ,"dropdown37" , "dropdown38", "dropdown43", "dropdown44" , "dropdown45" , "dropdown47" , "dropdown48", "dropdown49" ,"dropdown50" , "dropdown51", "dropdown52" , "dropdown53"];
var raesArray = ["dropdown5" , "dropdown19" , "dropdown35", "dropdown36" ,"dropdown37" , "dropdown38" , "dropdown47" , "dropdown48", "dropdown49" ,"dropdown50" , "dropdown51", "dropdown52", "dropdown53"];
var paleysArray = ["dropdown6" , "dropdown22","dropdown38" , "dropdown39" , "dropdown47" , "dropdown48", "dropdown49" ,"dropdown50" , "dropdown51", "dropdown52", "dropdown53"];
var bartiniArray = ["dropdown7" , "dropdown23" , "dropdown34" ,"dropdown38" , "dropdown37", "dropdown39", "dropdown42" , "dropdown43" , "dropdown44", "dropdown45" ,"dropdown46" , "dropdown47" , "dropdown48", "dropdown49" , "dropdown50" , "dropdown51", "dropdown52", "dropdown53" ];
var ringsideArray = ["dropdown8" , "dropdown24" , "dropdown46" ,"dropdown42" , "dropdown43", "dropdown44", "dropdown45" , "dropdown37" , "dropdown38" , "dropdown47" , "dropdown48", "dropdown49" ,"dropdown50" , "dropdown51" , "dropdown52" , "dropdown53"];
var teardropArray = ["dropdown9" , "dropdown23" , "dropdown39" , "dropdown37" , "dropdown38" , "dropdown47" , "dropdown48", "dropdown49" ,"dropdown50" , "dropdown51"];
var clydeArray = ["dropdown10" , "dropdown25" , "dropdown36" , "dropdown37" , "dropdown38" , "dropdown47" , "dropdown48", "dropdown49" ,"dropdown50" , "dropdown51", "dropdown52", "dropdown53"];
var imperialArray = ["dropdown11" , "dropdown26" , "dropdown35" , "dropdown36" , "dropdown37" , "dropdown38" , "dropdown47" , "dropdown48", "dropdown49" ,"dropdown50" , "dropdown51", "dropdown52", "dropdown53"];
var sauceArray = ["dropdown12" , "dropdown27" , "dropdown37" , "dropdown39" , "dropdown38" , "dropdown48", "dropdown49" ,"dropdown50" , "dropdown51", "dropdown52"];
var trifectaArray = ["dropdown13" , "dropdown19" , "dropdown28" , "dropdown38" , "dropdown37" , "dropdown47" , "dropdown48", "dropdown49" ,"dropdown50" , "dropdown51", "dropdown52", "dropdown53"];
var tapalayaArray = [ "dropdown14" , "dropdown29" , "dropdown37" , "dropdown38" , "dropdown47" , "dropdown48", "dropdown49" ,"dropdown50" , "dropdown51", "dropdown52", "dropdown53"];
var aaltoArray = ["dropdown15" , "dropdown30" , "dropdown31" , "dropdown38" , "dropdown39" , "dropdown47" , "dropdown48", "dropdown49" ,"dropdown50" , "dropdown51", "dropdown52", "dropdown53"];
var dotsArray = ["dropdown16" , "dropdown32" , "dropdown35" ,"dropdown36" , "dropdown37", "dropdown38", "dropdown39" , "dropdown44" , "dropdown45" , "dropdown47" , "dropdown48", "dropdown49" ,"dropdown50" , "dropdown51"];
var slingshotArray = ["dropdown17" , "dropdown31" , "dropdown33", "dropdown36", "dropdown37" , "dropdown38" , "dropdown39" , "dropdown47" , "dropdown48", "dropdown49" ,"dropdown50" , "dropdown51"];



// (bangArray.indexOf(localResult) >= -1)


// get the request clicked from local storage and change the one that we want to show
function dropSelect(){
  console.log("click!");
  var localResult = localStorage.getItem("clickedItem");
  console.log( localResult);
  // get from local storage
  if (bangArray.indexOf(localResult) > -1) {
    document.getElementById("bang").setAttribute("class","show");
  };
   if (knockArray.indexOf(localResult) > -1) {
    document.getElementById('knock').setAttribute('class', 'item');

  };  if (aviaryArray.indexOf(localResult) > -1) {
    document.getElementById('aviary').setAttribute('class', 'item');

  };  if (interurbanArray.indexOf(localResult) > -1) {
    document.getElementById('interurban').setAttribute('class', 'item');

  };  if (raesArray.indexOf(localResult) > -1) {
    document.getElementById('raes').setAttribute('class', 'item');

  };  if (paleysArray.indexOf(localResult) > -1) {
    document.getElementById('paleys').setAttribute('class', 'item');

  };  if (bartiniArray.indexOf(localResult) > -1) {
    document.getElementById('bartini').setAttribute('class', 'item');

  };  if (ringsideArray.indexOf(localResult) > -1) {
    document.getElementById('ringside').setAttribute('class', 'item');

  };  if (teardropArray.indexOf(localResult) > -1) {
    document.getElementById('teardrop').setAttribute('class', 'item');

  };  if (clydeArray.indexOf(localResult) > -1) {
    document.getElementById('clyde').setAttribute('class', 'item');

  };  if (imperialArray.indexOf(localResult) > -1) {
    document.getElementById('imperial').setAttribute('class', 'item');

  };  if (sauceArray.indexOf(localResult) > -1) {
    document.getElementById("sauce").setAttribute("class","show");

  };  if (trifectaArray.indexOf(localResult) > -1) {
    document.getElementById("trifecta").setAttribute("class","show");

  };  if (tapalayaArray.indexOf(localResult) > -1) {
    document.getElementById("tapalaya").setAttribute("class","show");

  };  if (aaltoArray.indexOf(localResult) > -1) {
    document.getElementById("aalto").setAttribute("class","show");

  };  if (dotsArray.indexOf(localResult) > -1) {
    document.getElementById("dots").setAttribute("class","show");

  };  if (slingshotArray.indexOf(localResult) > -1) {
    document.getElementById("slingshot").setAttribute("class","show");
  // } else {
  //   document.getElementById("bang").setAttribute("class","show");
  //   document.getElementById("knock").setAttribute("class","show");
  //   document.getElementById("aviary").setAttribute("class","show");
  //   document.getElementById("interurban").setAttribute("class","show");
  //   document.getElementById("raes").setAttribute("class","show");
  //   document.getElementById("paleys").setAttribute("class","show");
  //   document.getElementById("bartini").setAttribute("class","show");
  //   document.getElementById("ringside").setAttribute("class","show");
  //   document.getElementById("teardrop").setAttribute("class","show");
  //   document.getElementById("clyde").setAttribute("class","show");
  //   document.getElementById("imperial").setAttribute("class","show");
  //   document.getElementById("sauce").setAttribute("class","show");
  //   document.getElementById("trifecta").setAttribute("class","show");
  //   document.getElementById("tapalaya").setAttribute("class","show");
  //   document.getElementById("aalto").setAttribute("class","show");
  //   document.getElementById("dots").setAttribute("class","show");
  //   document.getElementById("slingshot").setAttribute("class","show");

  };
};






// builds one row of a table, give the location in the html page and the array
function tableBuilder(tableLocation, arrayDataBuilder) {
  var body = document.getElementsBysetAttribute(tableLocation)[0];
  var row = document.createElement("tr");
  for (var index = 0; index < arrayDataBuilder.length; index++) {
    var cell = document.createElement("td");
    var cellText = document.createTextNode(arrayDataBuilder[index]);
    cell.appendChild(cellText);
    row.appendChild(cell);
  };
  //row added to end of table body
  body.appendChild(row);
};

// event listeners

// window.addEventListener("click", recordClick);
window.addEventListener("load", dropSelect);
// window.addEventListener("click", formSubmit);
