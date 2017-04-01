function myFunction() {
    console.log("Show_Hidden")
    var x = document.getElementsById('hidden');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
