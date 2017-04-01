// function showHidden() {
//     console.log("Show_Hidden")
//     var test= document.getElementById("bang");
//         console.log(test);
//         test.className = "show";
//         test.classList.toggle("show");
//   document.getElementById("knock").className = "show";
//   document.getElementById("aviary").className = "show";
//   document.getElementById("Interurban").className = "show";
//   document.getElementById("raes").className = "show";
//   document.getElementById("paleys").className = "show";
//   document.getElementById("bartini").className = "show";
//   document.getElementById("ringside").className = "show";
//   document.getElementById("teardrop").className = "show";
//   document.getElementById("clyde").className = "show";
//   document.getElementById("imperial").className = "show";
//   document.getElementById("sauce").className = "show";
//   document.getElementById("trifecta").className = "show";
//   document.getElementById("aalto").className = "show";
//   document.getElementById("dots").className = "show";
//   document.getElementById("slingshot").className = "show";
// }
var acc = document.getElementsByClassName("item");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}
