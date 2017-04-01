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







  // get the request clicked from local storage and change the one that we want to show
  function dropSelect(){
    console.log("click!");
    var localResult = localStorage.getItem("clickedItem");
    console.log( localResult);
    // get from local storage
    if ((localResult) ===  ) {
      document.getElementById("bang").setAttribute("class","show");

    } else if ((localResult) === ) {
      document.getElementById("knock").setAttrubute("class","show");

    } else if ((localResult) ===) {
      document.getElementById("aviary").setAttrubute("class","show");

    } else if ((localResult) === ) {
      document.getElementById("interurban").setAttrubute("class","show");

    } else if ((localResult) === ) {
      document.getElementById("raes").setAttrubute("class","show");

    } else if ((localResult) === ) {
      document.getElementById("paleys").setAttrubute("class","show");

    } else if ((localResult) === ) {
      document.getElementById("bartini").setAttrubute("class","show");

    } else if ((localResult) ===  ) {
      document.getElementById("ringside").setAttrubute("class","show");

    } else if ((localResult) ===  ) {
      document.getElementById("teardrop").setAttrubute("class","show");

    } else if ((localResult) === ) {
      document.getElementById("clyde").setAttrubute("class","show");

    } else if ((localResult) === ) {
      document.getElementById("imperial").setAttrubute("class","show");

    } else if ((localResult) === ) {
      document.getElementById("sauce").setAttrubute("class","show");

    } else if ((localResult) === ) {
      document.getElementById("trifecta").setAttrubute("class","show");

    } else if ((localResult) ===) {
      document.getElementById("tapalaya").setAttrubute("class","show");

    } else if ((localResult) === ) {
      document.getElementById("aalto").setAttrubute("class","show");

    } else if ((localResult) === ) {
      document.getElementById("dots").setAttrubute("class","show");

    } else if ((localResult) === ) {
      document.getElementById("slingshot").setAttrubute("class","show");

  } else {
    document.getElementById("bang").setAttribute("class","show");
    document.getElementById("knock").setAttrubute("class","show");
    document.getElementById("aviary").setAttrubute("class","show");
    document.getElementById("interurban").setAttrubute("class","show");
    document.getElementById("raes").setAttrubute("class","show");
    document.getElementById("paleys").setAttrubute("class","show");
    document.getElementById("bartini").setAttrubute("class","show");
    document.getElementById("ringside").setAttrubute("class","show");
    document.getElementById("teardrop").setAttrubute("class","show");
    document.getElementById("clyde").setAttrubute("class","show");
    document.getElementById("imperial").setAttrubute("class","show");
    document.getElementById("sauce").setAttrubute("class","show");
    document.getElementById("trifecta").setAttrubute("class","show");
    document.getElementById("tapalaya").setAttrubute("class","show");
    document.getElementById("aalto").setAttrubute("class","show");
    document.getElementById("dots").setAttrubute("class","show");
    document.getElementById("slingshot").setAttrubute("class","show");

  };
    };






  // builds one row of a table, give the location in the html page and the array
  function tableBuilder(tableLocation, arrayDataBuilder) {
    var body = document.getElementsBysetAttrubute(tableLocation)[0];
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
