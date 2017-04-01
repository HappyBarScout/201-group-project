function showHidden() {
  console.log('it ran: ');

  if (document.getElementById('bang').getAttribute('class') === "hide") {
  document.getElementById('bang').setAttribute('class', 'item');

  };
  if (document.getElementById('knock').getAttribute('class') === "hide") {
document.getElementById('knock').setAttribute('class', 'item');

};
if (document.getElementById('aviary').getAttribute('class') === "hide") {
document.getElementById('aviary').setAttribute('class', 'item');

};
if (document.getElementById('interurban').getAttribute('class') === "hide") {
document.getElementById('interurban').setAttribute('class', 'item');

};
if (document.getElementById('raes').getAttribute('class') === "hide") {
document.getElementById('raes').setAttribute('class', 'item');

};
if (document.getElementById('paleys').getAttribute('class') === "hide") {
document.getElementById('paleys').setAttribute('class', 'item');

};
if (document.getElementById('bartini').getAttribute('class') === "hide") {
document.getElementById('bartini').setAttribute('class', 'item');

};
if (document.getElementById('teardrop').getAttribute('class') === "hide") {
document.getElementById('teardrop').setAttribute('class', 'item');

};
if (document.getElementById('clyde').getAttribute('class') === "hide") {
document.getElementById('clyde').setAttribute('class', 'item');

};
if (document.getElementById('ringside').getAttribute('class') === "hide") {
document.getElementById('ringside').setAttribute('class', 'item');

};
if (document.getElementById('imperial').getAttribute('class') === "hide") {
document.getElementById('imperial').setAttribute('class', 'item');

};
if (document.getElementById('sauce').getAttribute('class') === "hide") {
document.getElementById('sauce').setAttribute('class', 'item');

};
if (document.getElementById('trifecta').getAttribute('class') === "hide") {
document.getElementById('trifecta').setAttribute('class', 'item');

};
if (document.getElementById('tapalaya').getAttribute('class') === "hide") {
document.getElementById('tapalaya').setAttribute('class', 'item');

};
if (document.getElementById('aalto').getAttribute('class') === "hide") {
document.getElementById('aalto').setAttribute('class', 'item');

};
if (document.getElementById('dots').getAttribute('class') === "hide") {
document.getElementById('dots').setAttribute('class', 'item');

};
if (document.getElementById('slingshot').getAttribute('class') === "hide") {
document.getElementById('slingshot').setAttribute('class', 'item');

};

};


function setHide(){

document.getElementById('bang').setAttribute('class', 'hide');
document.getElementById('knock').setAttribute('class', 'hide');
document.getElementById('aviary').setAttribute('class', 'hide');
document.getElementById('interurban').setAttribute('class', 'hide');
document.getElementById('raes').setAttribute('class', 'hide');
document.getElementById('paleys').setAttribute('class', 'hide');
document.getElementById('bartini').setAttribute('class', 'hide');
document.getElementById('ringside').setAttribute('class', 'hide');
document.getElementById('teardrop').setAttribute('class', 'hide');
document.getElementById('clyde').setAttribute('class', 'hide');
document.getElementById('imperial').setAttribute('class', 'hide');
document.getElementById('sauce').setAttribute('class', 'hide');
document.getElementById('trifecta').setAttribute('class', 'hide');
document.getElementById('tapalaya').setAttribute('class', 'hide');
document.getElementById('aalto').setAttribute('class', 'hide');
document.getElementById('dots').setAttribute('class', 'hide');
document.getElementById('slingshot').setAttribute('class', 'hide');
}


window.addEventListener("load", setHide);

window.addEventListener("load", addBarTable);

var newBarArray =[];

var barHeaderArray =["Bar Name", "Location", "Days", "Hours"];

function addBarTable(){

var localNewBar = JSON.parse(localStorage.getItem("newBar"));
console.log("add bar");
// newBarArray.push(localNewBar);
console.log("add new bar to array");
console.log(newBarArray);
tableBuilder("addBar", barHeaderArray);
tableBuilder("addBar", localNewBar);
};

function tableBuilder(tableLocation, arrayDataBuilder) {
  var body = document.getElementsByClassName(tableLocation)[0];
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
