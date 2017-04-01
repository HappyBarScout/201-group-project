function showHidden() {
    console.log('it ran: ');
    if (document.getElementById('knock').getAttribute('class') === "item") {
        document.getElementById('knock').setAttribute('class', 'Hide');
    } else {
        document.getElementById('knock').setAttribute('class', 'item');
  };

};














































//     console.log("item_Hidden")
//     var test= document.getElementById("bang");
//         console.log(test);
//         test.className = "item";
//         test.classList.toggle("item");
//   document.getElementById("knock").className = "item";
//   document.getElementById("aviary").className = "item";
//   document.getElementById("Interurban").className = "item";
//   document.getElementById("raes").className = "item";
//   document.getElementById("paleys").className = "item";
//   document.getElementById("bartini").className = "item";
//   document.getElementById("ringside").className = "item";
//   document.getElementById("teardrop").className = "item";
//   document.getElementById("clyde").className = "item";
//   document.getElementById("imperial").className = "item";
//   document.getElementById("sauce").className = "item";
//   document.getElementById("trifecta").className = "item";
//   document.getElementById("aalto").className = "item";
//   document.getElementById("dots").className = "item";
//   document.getElementById("slingshot").className = "item";
// // }
// var acc = document.getElementsByClassName("item");
// var i;
//
// for (i = 0; i < acc.length; i++) {
//     acc[i].onclick = function(){
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//         } else {
//             panel.style.display = "block";
//         }
//     }
// }
